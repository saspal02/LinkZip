package com.linkzip.urlshortener.security.jwt;

import lombok.Data;

@Data
public class JwtAuthenticationResponse {
    private String token;
}
