package com.server.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.bean.User;
import com.server.dto.LoginDTO;
import com.server.exception.ResourceNotFoundException;

@Service
public class AuthService {
    @Autowired 
    private UserService userService;

    public User login(LoginDTO login){
        Optional<User> savedUser = userService.getUserbyEmail(login.getEmail());
        if(!savedUser.isPresent()){
            throw new ResourceNotFoundException("User with email not found");
        }
        else{
            User user = savedUser.get();
            if (user.getPassword().equals(login.getPassword())) {
                return user;
            }
            else{
                throw new ResourceNotFoundException("Incorrect Password");
            }
        }
    }
}
