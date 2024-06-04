package com.server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ClientHttpConnector;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.netty.http.client.HttpClient;
import io.netty.handler.ssl.SslContextBuilder;

import javax.net.ssl.TrustManagerFactory;
import java.io.FileInputStream;
import java.security.KeyStore;

@Configuration
public class WebConfig {

    @Bean
    public WebClient.Builder webClientBuilder() throws Exception {
        // Load the custom truststore
        KeyStore trustStore = KeyStore.getInstance(KeyStore.getDefaultType());
        try (FileInputStream trustStoreStream = new FileInputStream("C:\\Users\\ajin.an\\Documents\\FSD\\custom-truststore.jks")) {
            trustStore.load(trustStoreStream, "changeit".toCharArray());
        }

        // Initialize the TrustManagerFactory
        TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
        trustManagerFactory.init(trustStore);

        // Initialize the SslContext using Netty's SslContextBuilder
        SslContextBuilder sslContextBuilder = SslContextBuilder.forClient();
        sslContextBuilder.trustManager(trustManagerFactory);

        HttpClient httpClient = HttpClient.create().secure(sslContextSpec -> {
            try {
                sslContextSpec.sslContext(sslContextBuilder.build());
            } catch (Exception e) {
                throw new RuntimeException("Failed to build SSL context", e);
            }
        });

        ClientHttpConnector httpConnector = new ReactorClientHttpConnector(httpClient);

        return WebClient.builder().clientConnector(httpConnector);
    }
}
