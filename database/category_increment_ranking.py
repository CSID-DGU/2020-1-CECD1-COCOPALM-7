import pymysql
import datetime
from collections import defaultdict

now = datetime.datetime.now() + datetime.timedelta(hours=9) # 우리나라 시간으로 바꿈

db = pymysql.connect(host='localhost', port=3306, user='root', passwd='998', db='sys', charset='utf8', autocommit=True) # 디비 연결
cursor = db.cursor()
for i in range(0, 17): # 카테고리 17개
    dict_agree_sum = defaultdict(int)
    dict_post_sum = defaultdict(int)
    
    dict_new_agree_sum = defaultdict(int)
    dict_new_post_sum = defaultdict(int)
    
    sql = "SELECT start_date, agree_sum, post_sum FROM category_post_count WHERE category_id = %s;" # 카테고리 ID로 조회
    cursor.execute(sql, (i))
    category_rows = cursor.fetchall()
    
    for category_row in category_rows :
        dict_agree_sum[category_row[0]]+=category_row[1]
        dict_post_sum[category_row[0]]+=category_row[2]
        
    sql = "SELECT start_date, agree_count FROM post WHERE is_new = 1 and category_id = %s;" # 해당 카테고리 내 진행중인 청원조회
    cursor.execute(sql, (i))
    post_rows = cursor.fetchall()
        
    for post_row in post_rows :
        dict_new_agree_sum[post_row[0]]+=post_row[1]
        dict_new_post_sum[post_row[0]]+=1
    
    sql = "SELECT start_date, agree_count FROM post WHERE is_new = 1 and category_id = %s;" # ??
    cursor.execute(sql, (i))

    agree_increment = 0
    post_increment = 0
    
    for key, value in dict_new_agree_sum.items():
        sql = "REPLACE INTO category_post_count VALUES(%s, %s, %s, %s);"
        cursor.execute(sql, (i, key, value, dict_new_post_sum[key]))
        
        agree_increment = value - dict_agree_sum[key]
        post_increment = dict_new_post_sum[key] - dict_post_sum[key]
        
    sql = "INSERT INTO increment_of_category VALUES (%s, %s, %s, %s);" # 테이블에 삽입
    cursor.execute(sql, (i, now, agree_increment, post_increment))
    
    sql = "INSERT INTO keyword_ranking_of_category VALUES (%s, %s, %s);"
    cursor.execute(sql, (i, now, agree_increment + post_increment))
            
db.close()
