package com.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import com.server.dto.RequestDTO;

import org.springframework.http.HttpMethod;
import reactor.core.publisher.Mono;

@Service
public class ApiService {

  private final WebClient.Builder webClientBuilder;

  public ApiService(WebClient.Builder webClientBuilder) {
    this.webClientBuilder = webClientBuilder;
  }

  // public Mono<String> getDataFromExternalApi() {
  // String url = "http://www.boredapi.com/api/activity/";
  // return webClientBuilder.build()
  // .get()
  // .uri(url)
  // .retrieve()
  // .bodyToMono(String.class);
  // }
  public Mono<String> callApi(RequestDTO requestDTO) {
    HttpMethod httpMethod = HttpMethod.GET;
    if (requestDTO.getHttpMethod().equals("POST")) {
      httpMethod = HttpMethod.POST;
    }
    WebClient webClient = webClientBuilder.build();
    return webClient.method(httpMethod)
              .uri(requestDTO.getUrl())
              .body(Mono.just(requestDTO.getBody()), Object.class)
              .retrieve()
              .bodyToMono(String.class);
            
}
}
