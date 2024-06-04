package com.server.dto;

import java.util.List;
import java.util.Map;


public class RequestDTO {
    private String url;
    private String httpMethod;
    private String response;
    private Object body;
    private List<Object> headers;
    
    public RequestDTO(String url, String httpMethod, String response,Object body,List<Object> headers) {
        this.url = url;
        this.httpMethod = httpMethod;
        this.response = response;
        this.body = body;
        this.headers = headers;
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
    public List<Object> getHeaders() {
        return headers;
    }
    public void setHeaders(List<Object> headers) {
        this.headers = headers;
    }
    
}
