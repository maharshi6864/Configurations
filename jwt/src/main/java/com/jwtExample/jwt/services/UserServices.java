package com.jwtExample.jwt.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.jwtExample.jwt.model.UserVo;

@Service
public class UserServices {
	
	 static ArrayList<UserVo> users=new ArrayList<>();
	
	static{
	
		
		users.add(new UserVo("user1","maharshi","maharshi123"));

		users.add(new UserVo("user2","rahul@gmauil.com","rahul1w2121"));

		users.add(new UserVo("user3","ankit@gmauil.com","ankit1w2121"));

		users.add(new UserVo("user4","mishra@gmauil.com","mishra1w2121"));
		
	}
	
	public ArrayList<UserVo> getAllUsers()
	{
		return users;
	}

}
