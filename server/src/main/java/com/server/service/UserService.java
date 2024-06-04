package com.server.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.bean.User;
import com.server.exception.ResourceNotFoundException;
import com.server.repo.UserRepo;

@Service
public class UserService {
 @Autowired
 private UserRepo userRepo;
 
 public User saveUser(User user){
    Optional<User> savedUser = userRepo.findById(user.getId());
    if(savedUser.isPresent()){
      throw new ResourceNotFoundException("Employee already exist with given email:" + user.getEmail());
  }
  return userRepo.save(user);
 }

 public Optional<User> getUserbyEmail(String email){
  Optional<User> savedUser = userRepo.findByEmail(email);
  return savedUser;
 }
}
