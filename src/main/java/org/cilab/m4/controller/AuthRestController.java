package org.cilab.m4.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.cilab.m4.security.User;
import org.cilab.m4.security.UserCredential;
import org.cilab.m4.service.impl.UserServiceImpl;
import org.cilab.m4.util.AuthUtil;
import org.cilab.m4.util.ErrorResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.Lists;

@RestController
public class AuthRestController {
	
	/**
	 * Class Name: AuthRestController.java 
	 * Description: CRUD, Service
	 * 
	 * @author Meilan Jiang
	 * @since 2016.06.29
	 * @version 1.2
	 * 
	 * Copyright(c) 2016 by CILAB All right reserved.
	 */

	@Autowired
	UserServiceImpl accountService;

	private static final Logger logger = LoggerFactory
			.getLogger(AuthRestController.class);

	@RequestMapping(value = "/users", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody User addUser(@RequestBody User user) {
		try {
			return accountService.createUser(user);
		} catch (Exception e) {
			// e.printStackTrace();
			return new User();
		}
	}

	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public ResponseEntity<? extends Object> listUsers(@RequestHeader Map<String,String> headers) {
		if (!headers.containsKey("authorization")) {
			return new ResponseEntity<ErrorResponse>(new ErrorResponse(1,"must be authenticated..", "",""), HttpStatus.NON_AUTHORITATIVE_INFORMATION);
		}
		
		UserCredential cred = AuthUtil.toUserCredential(headers.get("authorization"));
		logger.debug("UserCredential: {}", cred.toString());

		List<User> list = Lists.newArrayList();
		
		try {
			logger.debug("UserCredential ID: {} and PW: {}", cred.getUserId(), cred.getPassword());
			list = accountService.listUser(cred.getUserId(), cred.getPassword());
			
			if (list.isEmpty()) new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<ErrorResponse>(new ErrorResponse(1, e.getLocalizedMessage(), Arrays.toString(e.getStackTrace()), ""), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<List<User>>(list,HttpStatus.OK);
	}
	
	@RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
	public ResponseEntity<? extends Object> getUserInfo(@RequestHeader Map<String,String> headers, @PathVariable String id) {
		if (!headers.containsKey("authorization")) {
			return new ResponseEntity<ErrorResponse>(new ErrorResponse(1,"must be authenticated..", "",""), HttpStatus.NON_AUTHORITATIVE_INFORMATION);
		}
		UserCredential cred = AuthUtil.toUserCredential(headers.get("authorization"));
		User user = new User();
		user.setEmail(cred.getUserId());
		user.setPassword(cred.getPassword());
		try {
			user = accountService.readUser(user);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<ErrorResponse>(new ErrorResponse(1, e.getLocalizedMessage(), Arrays.toString(e.getStackTrace()), ""), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/users/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<? extends Object> updateUser(@RequestHeader Map<String,String> headers, @PathVariable String id, @RequestBody User user) {
		if (!headers.containsKey("authorization")) {
			return new ResponseEntity<ErrorResponse>(new ErrorResponse(1,"must be authenticated..", "",""), HttpStatus.NON_AUTHORITATIVE_INFORMATION);
		}
		UserCredential cred = AuthUtil.toUserCredential(headers.get("authorization"));
		user.setEmail(cred.getUserId());
		user.setPassword(cred.getPassword());
		try {
			user = accountService.updateUser(user);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<ErrorResponse>(new ErrorResponse(1, e.getLocalizedMessage(), Arrays.toString(e.getStackTrace()), ""), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	@RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<? extends Object> deleteUser(@RequestHeader Map<String,String> headers, @PathVariable String id) {
		if (!headers.containsKey("authorization")) {
			return new ResponseEntity<ErrorResponse>(new ErrorResponse(1,"must be authenticated..", "",""), HttpStatus.NON_AUTHORITATIVE_INFORMATION);
		}
		UserCredential cred = AuthUtil.toUserCredential(headers.get("authorization"));
		User user = new User();
		user.setEmail(cred.getUserId());
		user.setPassword(cred.getPassword());
		try {
			user = accountService.deleteUser(user);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<ErrorResponse>(new ErrorResponse(1, e.getLocalizedMessage(), Arrays.toString(e.getStackTrace()), ""), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}


}
