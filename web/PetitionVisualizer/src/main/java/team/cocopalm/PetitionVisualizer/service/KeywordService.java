package team.cocopalm.PetitionVisualizer.service;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import team.cocopalm.PetitionVisualizer.mapper.KeywordMapper;
import team.cocopalm.PetitionVisualizer.model.Keyword;

@Service
public class KeywordService {
	@Autowired KeywordMapper mapper;
	
	public boolean isExist(String keyword) throws Exception {
		boolean isKeyword = false;
		if(mapper.isExist(keyword) > 0) isKeyword = true;
		
		return isKeyword;
	}
	
	public Map<String, Object> selectMetaData(String keyword) throws Exception {
		Map<String, Object> wrapper;
		wrapper = mapper.getCountAllNotExpiredPost();
		wrapper.putAll(mapper.getAggrKeywordNotExpiredPost(keyword));
		wrapper.putAll(mapper.keywordMostPostDay(keyword));
		return wrapper;
	}
	
	public List<Keyword> selectKeywordTop3(String period) throws Exception {
		List<Keyword> keywordsWithScore;
		
		if(period.equals("DAY")) {
			keywordsWithScore = mapper.selectKeywordTop3ByDay();
		} else if(period.equals("WEEK")) {
			keywordsWithScore = mapper.selectKeywordTop3ByWeek();
		} else {
			keywordsWithScore = mapper.selectKeywordTop3ByMonth();			
		}
		
		double max = (keywordsWithScore.get(0).getScore() * 10) / 9.0;
		for(int i=0; i<keywordsWithScore.size(); i++) {
			Keyword word = keywordsWithScore.get(i);
			int adjusted = (int)Math.floor((word.getScore() / max) * 100) + (10 - i);
			word.setScore(adjusted);
		}
		
		return keywordsWithScore;
	}
	
	public Keyword selectCategoryMostPostKeyword(int categoryId) throws Exception {
		return mapper.selectCategoryMostPostKeyword(categoryId);
	}
	
	public Keyword selectCategoryMostAgreeKeyword(int categoryId) throws Exception {
		return mapper.selectCategoryMostAgreeKeyword(categoryId);
	}
	
	public ArrayList<HashMap<String, String>> naverNews(String keyword) throws IOException {
		String targetUrl = "https://search.naver.com/search.naver?where=news&sm=tab_opt&sort=0&photo=1&query=";
		targetUrl += URLEncoder.encode(keyword, "UTF-8");
		
		Document doc = Jsoup.connect(targetUrl).get();
		Elements newsDiv = doc.select("#main_pack > section.sc_new.sp_nnews._prs_nws > div > div.group_news > ul > li");

		ArrayList<HashMap<String, String>> newsList = new ArrayList<>();
		for(Element item : newsDiv) {
			HashMap<String, String> news = new HashMap<>();
			String img = item.select("img").attr("src");
			String title = item.select("div > div > a").attr("title");
			String url = item.select("div > div > a").attr("href");
			String time = item.select("div.news_wrap.api_ani_send > div > div.news_info > div > span").first().ownText();
			System.out.println(img + title + url + time);
			news.put("src", img);
			news.put("title", title);
			news.put("url", url);
			news.put("time", time);
			
			newsList.add(news);
		}
		
		newsList.remove(newsList.size()-1);
		
		return newsList;
	}
	
	public List<Keyword> selectRanking() throws Exception {
		List<Keyword> keywordsWithScore = mapper.selectRanking();
		double max = (keywordsWithScore.get(0).getScore() * 10) / 9.0;
		for(int i=0; i<keywordsWithScore.size(); i++) {
			Keyword word = keywordsWithScore.get(i);
			int adjusted = (int)Math.floor((word.getScore() / max) * 100) + (10 - i);
			word.setScore(adjusted);
		}
		
		return keywordsWithScore;
	}
	
	public List<Keyword> selectRankingByCategory(int categoryId) throws Exception {
		List<Keyword> keywordsWithScore = mapper.selectRankingByCategoryDay(categoryId);
		double max = (keywordsWithScore.get(0).getScore() * 10) / 9.0;
		for(int i=0; i<keywordsWithScore.size(); i++) {
			Keyword word = keywordsWithScore.get(i);
			int adjusted = (int)Math.floor((word.getScore() / max) * 100) + (10 - i);
			word.setScore(adjusted);
		}
		
		return keywordsWithScore;
	}
}
