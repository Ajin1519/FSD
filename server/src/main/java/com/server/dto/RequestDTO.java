package com.server.dto;

import java.util.Map;

public class RequestDTO {
    private String url;
    private String httpMethod;
    private String response;
    private Object body;
    private Map<String, String> headers;
    
    public RequestDTO(String url, String httpMethod, String response,Object body) {
        this.url = url;
        this.httpMethod = httpMethod;
        this.response = response;
        this.body = body;
    }
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
    public String getHttpMethod() {
        return httpMethod;
    }
    public void setHttpMethod(String httpMethod) {
        this.httpMethod = httpMethod;
    }
    public String getResponse() {
        return response;
    }
    public void setResponse(String response) {
        this.response = response;
    }
    public Object getBody() {
        return body;
    }
    public void setBody(Object body) {
        this.body = body;
    }
    public Map<String, String> getHeaders() {
        return headers;
    }
    public void setHeaders(Map<String, String> headers) {
        this.headers = headers;
    }
}
