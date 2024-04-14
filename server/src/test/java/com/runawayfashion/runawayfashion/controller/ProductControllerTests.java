package com.runawayfashion.runawayfashion.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(ProductController.class)
public class ProductControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void getProduct() throws Exception {
        mockMvc.perform(get("/product/01").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                                                {"name":"self-esteem",
                                                "productId": "01",
                                                "price":4500,
                                                "imageUrl": "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024",
                                                "productDescription": "Tired of feeling like you're not good for anything? With our newly created Self-Esteem® you can just forget about your insecurities and get through what you need to without the constant self-pounding!"}
                        """));
    }
}