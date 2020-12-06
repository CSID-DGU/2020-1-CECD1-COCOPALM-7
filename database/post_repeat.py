# 신규 게시물 DB 저장 및 형태소 분석해서 DB에 저장
# ++ 만료된 게시물 is_new = 0 으로 업데이트 코드 추가할 것 
# 1시간마다 실행할 것

from bs4 import BeautifulSoup
from selenium import webdriver  #chrome webdriver 다운로드 필요
from konlpy.tag import Komoran
import time
from datetime import datetime, timedelta
import re
from selenium.webdriver.common.alert import Alert
from gensim.summarization.summarizer import summarize 
import pymysql

hangul = re.compile('[^ a-zA-Zㄱ-ㅣ가-힣]+')
category = {'정치개혁': 0, '외교/통일/국방': 1, '일자리': 2, '미래': 3, '성장동력': 4, '농산어촌': 5, '보건복지': 6, '육아/교육': 7, '안전/환경': 8, '저출산/고령화대책': 9, '행정': 10, '반려동물': 11, '교통/건축/국토': 12, '경제민주화': 13, '인권/성평등': 14, '문화/예술/체육/언론': 15, '기타': 16}

komoran = Komoran(userdic='./user_dictionary.txt', max_heap_size= 1024 * 6) # 사용자 사전 사용

# DB에서 제일 최근꺼 post_id 찾기
db = pymysql.connect(host='localhost', port=3306, user='root', passwd='998', db='sys', charset='utf8', autocommit=True)
cursor = db.cursor()
sql2 = "SELECT MAX(post_id) FROM post;"
cursor.execute(sql2)
db_newest_post_id = cursor.fetchone()[0]
db.close()

# 서버에서 크롬드라이버를 사용하기 위한 옵션
options = webdriver.ChromeOptions()
options.add_argument("--headless")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")

driver = webdriver.Chrome(executable_path='./chromedriver', options=options)
driver.implicitly_wait(10)
#################################################################
#제일 최신의 만료된 게시물 번호 찾기!
first_old_url = 'https://www1.president.go.kr/petitions/?c=0&only=2&page=1&order=1'
first_old_postid = "0"
while(True):
    try:
        driver.get(first_old_url)
        html = driver.page_source
        soup = BeautifulSoup(html, 'html.parser')
        href = soup.select('.petition_list > li > div > div > a')[0]
        first_old_postid = re.sub('/petitions/','',href.get('href'))
        break
    except IndexError:
        print("에러입니다.")
        time.sleep(1)

newest_exired_postid = int(first_old_postid)
db = pymysql.connect(host='localhost', port=3306, user='root', passwd='998', db='sys', charset='utf8', autocommit=True)
cursor = db.cursor()
sql1 = "UPDATE post SET is_new = 0 WHERE post_id <= %s and is_new = 1"
cursor.execute(sql1, (newest_exired_postid))
post_rows = cursor.fetchall()
#################################################################
driver.quit()

driver = webdriver.Chrome(executable_path='./chromedriver', options=options)
driver.implicitly_wait(10)
# 제일 최신의 진행중인 게시물 번호 찾기!
first_new_url = 'https://www1.president.go.kr/petitions/?c=0&only=1&page=1&order=1'
most_recent_number = "0"
while(True):
    try:
        driver.get(first_new_url)
        html = driver.page_source
        soup = BeautifulSoup(html, 'html.parser')
        href = soup.select('.petition_list > li > div > div > a')[0]
        most_recent_number = re.sub('/petitions/','',href.get('href'))
        break
    except IndexError:
        print("zzz")
        time.sleep(1)
        
count = int(most_recent_number)
driver.quit()

# post 테이블 업데이트
driver = webdriver.Chrome(executable_path='./chromedriver', options=options)
driver.implicitly_wait(10)
url = 'https://www1.president.go.kr/petitions/{}'

while db_newest_post_id < count:
    link = url.format(count)
    driver.get(link)  

    html = driver.page_source 
    soup = BeautifulSoup( html, 'html.parser' )
    # 크롤링 시도
    try:
        post_id = count
        #html의 해당 부분으로 크롤링
        category_name = soup.select('#cont_view > div > div > div > div > div > div > ul.petitionsView_info_list > li')[0]
        category_id = category[category_name.text[4:]]
        start = soup.select('#cont_view > div > div > div > div > div > div > ul.petitionsView_info_list > li')[1]
        start_date = start.text[4:]
        end = soup.select('#cont_view > div > div > div > div > div > div > ul.petitionsView_info_list > li')[2]
        end_date = end.text[4:]
        title = soup.select_one('#cont_view > div > div > div > div > div > h3.petitionsView_title').get_text()
        title_hangul = hangul.sub('', title)
        agree = soup.select_one('#cont_view > div > div > div > div > div > h2 > span').get_text()
        agree_count = agree.replace(',', '')
        contents = soup.select_one('#cont_view > div > div > div > div > div > div > div.View_write').get_text()
        #요약 사용
        summary = ""
        try:
            summary = summarize(contents)
        except:
            None
        if len(summary)==0 :
            summary = ' '.join(contents[:200].split()) + "..."
            
        # 신규 게시물 post table에 저장    
        db = pymysql.connect(host='localhost', port=3306, user='root', passwd='998', db='sys', charset='utf8', autocommit=True)
        cursor = db.cursor()
       
        input_data = (post_id, category_id, title, agree_count, start_date, end_date, True)
        sql = '''
                INSERT INTO post
                (post_id, category_id, title, agree_count, start_date, end_date, is_new)
                VALUES(%s, %s, %s, %s, %s, %s, %s);
                '''
        
        cursor.execute(sql, input_data)
        
        # post_summary 테이블에 저장
        sql1 = "INSERT INTO post_summary(post_id, summary) VALUES(%s, %s);"   
        cursor.execute(sql1, (post_id, summary))
        
        db.close()        
        
        # 신규 게시물 형태소 분석
        db = pymysql.connect(host='localhost', port=3306, user='root', passwd='998', db='sys', charset='utf8', autocommit=True)
        cursor = db.cursor()
        
        for keyword in set(s for s in komoran.nouns(title_hangul) if len(s) > 1):
            sql2 = "INSERT INTO post_keyword(post_id, keyword) VALUES(%s, %s);"
            cursor.execute(sql2, (post_id, keyword))
        
        db.close()
        
    except IndexError:
        None
#         print(post_id, " : 비공개된 청원 or 게시물 없음")
   
    count-=1
    time.sleep(3)

driver.quit()

driver = webdriver.Chrome(executable_path='./chromedriver', options=options)
driver.implicitly_wait(10)

db = pymysql.connect(host='localhost', port=3306, user='root', passwd='998', db='sys', charset='utf8', autocommit=True)
cursor = db.cursor()
sql2 = "SELECT post_id, agree_count FROM post WHERE is_new=1 ORDER BY agree_count DESC LIMIT 200;" # 상위 200개 정렬해서 진행중인 청원 조회
cursor.execute(sql2)
new_post_id_agree_counts = cursor.fetchall()
db.close()

collect_time = datetime.now() + timedelta(hours=9) #수집 시간 체크
# 해당하는 항목 크롤링
for new_post_id_agree_count in new_post_id_agree_counts:
    post_id = new_post_id_agree_count[0]
    link = url.format(post_id)
    driver.get(link)
    html = driver.page_source 
    soup = BeautifulSoup( html, 'html.parser' )
    agree = soup.select_one('#cont_view > div > div > div > div > div > h2 > span').get_text()
    agree_count = agree.replace(',', '')
    
    db = pymysql.connect(host='localhost', port=3306, user='root', passwd='998', db='sys', charset='utf8', autocommit=True)
    cursor = db.cursor()
    sql2 = "UPDATE post SET agree_count = %s WHERE post_id = %s;" #agree_count Update 해줌
    cursor.execute(sql2, (agree_count, post_id))
    
    agree_diff = int(agree_count) - new_post_id_agree_count[1]
    # 겹치면 UPDATE, 아니면 INSERT해준다.
    sql2 = '''
    INSERT INTO post_agree_increment VALUES(%s, %s, %s)
    ON DUPLICATE KEY UPDATE collect_time = %s, agree_increment = %s;
    '''
    cursor.execute(sql2, (post_id, collect_time, agree_diff, collect_time, agree_diff))
    
    db.close()
    time.sleep(3)
    
driver.quit()
