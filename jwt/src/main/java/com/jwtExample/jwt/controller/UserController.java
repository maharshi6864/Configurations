package com.jwtExample.jwt.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jwtExample.jwt.model.UserVo;
import com.jwtExample.jwt.services.UserServices;

@RestController
public class UserController {

    @Autowired
    private UserServices userServices;

    @GetMapping(value = "/")
    public String helloWorld() {
        return "Hello World";
    }

    @GetMapping(value = "/users")
    public List<UserVo> getAllUsers() {
        return this.userServices.getAllUsers();
    }

    @GetMapping(value="/currentUser")
    public String getCurrentUser(Principal principal) {
        return principal.getName();
    }

    @PostMapping(value = "/addUser")
    public String addUser(@RequestBody UserVo user)
    {
        this.userServices.addUsers(user);
        return "User Added Successfully";
    }

}
