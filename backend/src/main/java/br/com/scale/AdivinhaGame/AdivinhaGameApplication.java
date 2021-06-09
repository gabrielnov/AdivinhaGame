package br.com.scale.AdivinhaGame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class AdivinhaGameApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdivinhaGameApplication.class, args);
	}

}
