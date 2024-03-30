package com.futurix.payment;

import java.math.BigInteger;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {
	String customerName;
	String email;
	String phoneNumber;
	BigInteger amount;
}
