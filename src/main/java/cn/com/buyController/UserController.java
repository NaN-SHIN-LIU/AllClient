package cn.com.buyController;
import cn.com.entity.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

/**
 * ${DESCRIPTION}
 *
 * @author 刘鑫
 * @create 2018-08-21 22:20
 **/
@RestController
@RequestMapping(value="/user")
public class UserController {
    @Autowired
    private RestTemplate restTemplate;
    @GetMapping("/{id}")
    public UserInfo findUserById(@PathVariable String id){
        return this.restTemplate.getForObject("http://localhost:9999/user/"+id,UserInfo.class);
    }
    @RequestMapping("/index")
    public ModelAndView goToIndex(){
        return  new  ModelAndView("A");
    }

}
