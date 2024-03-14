package com.futurix;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class FuturixBankBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FuturixBankBackendApplication.class, args);
		System.out.println("Hello World");
	}
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			public void addCorsMappings(CorsRegistry corsRegistry) {
				corsRegistry.addMapping("/**")
					.allowedMethods("*")
					.allowedOrigins("http://localhost:5173");
			}
		};
	}

}
