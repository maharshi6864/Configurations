package com.jwtExample.jwt.model;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class JwtRequest {

    private String email;

    private String password;
}
