package com.futurix.payment;

import java.math.BigInteger;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

import java.util.UUID;

@Service
public class FuturixBankPaymentService {
	
	public Order createRazorPayOrder(BigInteger amount,RazorpayClient client) throws RazorpayException {

		JSONObject options = new JSONObject();
		options.put("amount", amount.multiply(new BigInteger("100")));
		options.put("currency", "INR");
		UUID uuid = UUID.randomUUID();
		options.put("receipt", uuid.toString());
		options.put("payment_capture", 1);
		return client.orders.create(options);
	}
}
