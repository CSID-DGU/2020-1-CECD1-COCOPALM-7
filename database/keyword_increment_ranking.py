import pymysql
import datetime
from collections import defaultdict

now = datetime.datetime.now() + datetime.timedelta(hours=9) # 우리나라 시간으로 맞춤

db = pymysql.connect(host='localhost', port=3306, user='root', passwd='998', db='sys', charset='utf8', autocommit=True) # 디비 연결
cursor = db.cursor()
# 키워드 겹치지 않게 진행중인 청원 조회
sql1 = '''
        select k.keyword, k.agree_sum, k.post_sum
        from keyword k
        inner join 
           (SELECT distinct a.keyword, b.start_date      -- is_new : 1인 모든 키워드, (겹치지 않게)
            FROM post_keyword a
            inner join post b
            on a.post_id = b.post_id
            where b.is_new = 1) pkp   
        on (k.keyword = pkp.keyword and k.start_date = pkp.start_date)
        order by k.keyword;
                '''

cursor.execute(sql1)
keyword_rows = cursor.fetchall()
db.close()


# 키워드 합쳐서 빈도 카운팅...
dict_agree = defaultdict(int)
dict_post = defaultdict(int)

# print(dict_agree)
for keyword_row in keyword_rows :
    dict_agree[keyword_row[0]]+=keyword_row[1]
    dict_post[keyword_row[0]]+=keyword_row[2]
    
# print(dict_agree)
# print(dict_post)

# 기존 keyword 테이블에서 is_new = 1에 해당하는 것들 삭제

db = pymysql.connect(host='localhost', port=3306, user='root', passwd='998', db='sys', charset='utf8', autocommit=True)
cursor = db.cursor()

sql2 = '''
        delete k
        from keyword k 
        inner join 
           (SELECT distinct a.keyword, b.start_date 
            FROM post_keyword a
            inner join post b
            on a.post_id = b.post_id
            where b.is_new = 1) pkp   
        on (k.keyword = pkp.keyword and k.start_date = pkp.start_date);
                '''

cursor.execute(sql2)
keyword_rows = cursor.fetchall()
db.close()

db = pymysql.connect(host='localhost', port=3306, user='root', passwd='998', db='sys', charset='utf8', autocommit=True)
cursor = db.cursor()

# 새로 계산..

sql = "SELECT * FROM post WHERE is_new = 1"
cursor.execute(sql)
post_rows = cursor.fetchall()

for post_row in post_rows:
    sql2 = "SELECT * FROM post_keyword WHERE post_id=%s"
    cursor.execute(sql2,(post_row[0]))
    post_keyword_rows = cursor.fetchall()
    
    
    for post_keyword_row in post_keyword_rows:
        sql2 = '''
        INSERT INTO keyword VALUES(%s, %s, %s, 1)
        ON DUPLICATE KEY UPDATE agree_sum=agree_sum + %s, post_sum=post_sum+1;
        '''
        agreecount = post_row[6]
        cursor.execute(sql2, (post_keyword_row[1],post_row[4], agreecount, agreecount)) 



# 새로 계산된 DB 불러오기
cursor = db.cursor()
sql3 = '''
        select k.keyword, k.agree_sum, k.post_sum
        from keyword k
        inner join 
           (SELECT distinct a.keyword, b.start_date      -- is_new : 1인 모든 키워드, (겹치지 않게)
            FROM post_keyword a
            inner join post b
            on a.post_id = b.post_id
            where b.is_new = 1) pkp   
        on (k.keyword = pkp.keyword and k.start_date = pkp.start_date)
        order by k.keyword;
                '''
cursor.execute(sql3)
new_keyword_rows = cursor.fetchall()

# print(new_keyword_rows)    

# 새로운 keyword 테이블 키워드 합쳐서 빈도 카운팅...

dict_new_agree = defaultdict(int)
dict_new_post = defaultdict(int)
dict_score = defaultdict(int)

for new_keyword_row in new_keyword_rows :
    dict_new_agree[new_keyword_row[0]]+=new_keyword_row[1]
    dict_new_post[new_keyword_row[0]]+=new_keyword_row[2]
    
# print(dict_new_agree)
# print(dict_new_post)

db.close()


# increment_of_keyword 테이블에 저장....

db = pymysql.connect(host='localhost', port=3306, user='root', passwd='998', db='sys', charset='utf8', autocommit=True)
 

for key, value in dict_new_agree.items():
    agree_increment = dict_new_agree[key] - dict_agree[key]
    post_increment = dict_new_post[key] - dict_post[key]
    dict_score[key] = agree_increment + post_increment # 일단 그냥 더했어욥..
    
#     print(agree_increment)
#     print(post_increment)
#     print(key, dict_score[key])
       
    cursor = db.cursor()
    sql4 = "INSERT INTO increment_of_keyword VALUES (%s, %s, %s, %s);"
    cursor.execute(sql4, (key, now, agree_increment, post_increment))

    cursor = db.cursor()
    sql5 = "INSERT INTO keyword_ranking_in_hour VALUES (%s, %s, %s);"
    cursor.execute(sql5, (key, now, dict_score[key]))
    
db.close()
