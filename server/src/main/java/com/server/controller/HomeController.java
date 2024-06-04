package com.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.service.ApiService;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/")
public class HomeController {
    
    @Autowired
    private ApiService apiService;
    @GetMapping()
    public ResponseEntity<String> hello(){
        return ResponseEntity.ok("Hello World..");
    }
    
    // @GetMapping("/get-data")
    // public Mono<String> getData() {
    //     return apiService.getDataFromExternalApi();
    // }
}
