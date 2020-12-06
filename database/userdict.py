# 네이버 Datalab 실시간 검색어 기반으로 한 사용자 사전 구성
# crontab - 12시간 간격으로 실행할 것

import requests
from bs4 import BeautifulSoup

# 로봇방지
headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'}

url = 'https://datalab.naver.com/keyword/realtimeList.naver?age=all&where=main'
res = requests.get(url, headers = headers)
soup = BeautifulSoup(res.content, 'html.parser')
words = soup.findAll('span','item_title')

f = open('user_dictionary.txt', 'a')

for word in words :
    f.write(word.get_text()+'\t'+'NNP'+'\n')


f.close()