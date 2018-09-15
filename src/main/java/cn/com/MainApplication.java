package cn.com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

/**
 * ${DESCRIPTION}
 *
 * @author 刘鑫
 * @create 2018-08-21 21:44
 **/
@SpringBootApplication
public class MainApplication {

 @Bean
  public RestTemplate restTemplate(){
         return new RestTemplate();
 }
    public static void main(String [] args){
        SpringApplication.run(MainApplication.class,args);
    }

}
