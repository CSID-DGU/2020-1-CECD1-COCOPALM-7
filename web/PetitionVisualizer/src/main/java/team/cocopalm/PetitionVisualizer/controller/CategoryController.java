package team.cocopalm.PetitionVisualizer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import team.cocopalm.PetitionVisualizer.service.CategoryService;

@Controller
public class CategoryController {
	@Autowired CategoryService categoryService;
	
	@RequestMapping("/category")
	public String Category(Model model) throws Exception {
        
        String category = categoryService.getCategory(0); // 0이 디폴트
        
        model.addAttribute("category", category);
        model.addAttribute("categoryNumber", 0);
        
		return "category/index";
	}
	
    @RequestMapping("/category/{categoryNumberStr}")
    public String Category(@PathVariable("categoryNumberStr") String categoryNumberStr, Model model) throws Exception {
        
        int categoryNumber = Integer.parseInt(categoryNumberStr);
        String category = categoryService.getCategory(categoryNumber);
        
        model.addAttribute("category", category);
        model.addAttribute("categoryNumber", categoryNumber);
        
        return "category/index";
    }
}
