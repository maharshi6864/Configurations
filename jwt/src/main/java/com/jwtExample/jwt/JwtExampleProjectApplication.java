package com.jwtExample.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.jwtExample.jwt.services.UserServices;

@SpringBootApplication
public class JwtExampleProjectApplication {
	
	

	public static void main(String[] args) {
		SpringApplication.run(JwtExampleProjectApplication.class, args);
	}
	
	

}
