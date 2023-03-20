package finalproject.finalproject.controller;

import finalproject.finalproject.entity.Blog;
import finalproject.finalproject.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/articles")
public class BlogController {
    @Autowired
    private BlogRepository blogRepository;

    @GetMapping
    public List<Blog> getAllArticles(){
        return blogRepository.findAll();
    }

    @GetMapping("/{id}")
    public Blog getArticleById(@PathVariable Integer id){
        Optional<Blog> result = blogRepository.findById(id);
        if(result.isPresent()){
            return result.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
