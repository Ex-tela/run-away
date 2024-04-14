package com.runawayfashion.runawayfashion.controller;

import com.runawayfashion.runawayfashion.dto.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {

    public ProductController() {
    }

    @GetMapping("/{productId}")
    public Product getProduct(@PathVariable long productId) {
        Product product = new Product("self-esteem", 01, 4500,
                "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024",
                "Tired of feeling like you're not good for anything? With our newly created Self-Esteem® you can just forget about your insecurities and get through what you need to without the constant self-pounding!");
        return product;
    }
}
