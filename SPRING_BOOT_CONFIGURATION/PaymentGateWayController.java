package com.paymentGateWay.controller;

import org.apache.catalina.connector.Request;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import com.razorpay.*;

@org.springframework.stereotype.Controller
@RestController
public class Controller {


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView index() {
        return new ModelAndView("index");
    }

    @RequestMapping(value = "user/createOrder/{paymentAmount}", method = RequestMethod.GET)
    public String startPayment(@PathVariable("paymentAmount")  String paymentAmount) throws RazorpayException {
        int amount = Integer.parseInt(paymentAmount);
        //Firstly we have created an object of razorpay client to build a connection to transfer data between our
        //Spring Server to the Razorpay server and then an order is created.        
        RazorpayClient client=new RazorpayClient("rzp_test_lSxFEtSAXFYF8P","pLqKwbI4fzJvAsqHbLc0Slsf");

//        to create an order first we have to create a JSON Object.
        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount",amount*100);
        orderRequest.put("currency","INR");
        orderRequest.put("receipt", "firstReciept");
//        Using "create" method we have created an order in the razorpay and we can also see that order in the razorpay->transaction
//        ->orders here the function will return a "Order" Object and it will contain an order id which will be reqired to provide at the front end.
        
        Order createdOrder=client.Orders.create(orderRequest);
        System.out.println(createdOrder);
        return createdOrder.toString();
    }

}
