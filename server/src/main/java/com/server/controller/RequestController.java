package com.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.dto.RequestDTO;
import com.server.service.ApiService;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/request")
public class RequestController {

    @Autowired
    private ApiService apiService;
    @PostMapping
    public Mono<String> handleRequest(@RequestBody RequestDTO requestDTO){
        return apiService.callApi(requestDTO);
    }
}
