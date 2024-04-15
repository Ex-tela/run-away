package com.runawayfashion.runawayfashion.controller;

import com.runawayfashion.runawayfashion.dto.Product;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/browse")
public class ProductController {

    public ProductController() {
    }

    Product product = new Product("self-esteem", "01", 4500,
            "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024",
            "Tired of feeling like you're not good for anything? With our newly created Self-Esteem® you can just forget about your insecurities and get through what you need to without the constant self-pounding!");


    @GetMapping("/product/{productId}")
    public Product getProduct(@PathVariable String productId) {
        return product;
    }

    @GetMapping("/")
    public List<Product> getProductList() {
        return List.of(product, product);
    }
}
