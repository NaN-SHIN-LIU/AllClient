package cn.com.buyController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * ${DESCRIPTION}
 *
 * @author 刘鑫
 * @create 2018-08-21 23:29
 **/
@Controller
public class test {
    @RequestMapping("indexPage")
    public String indexPage(){
        System.out.println("aaaaaaaaaaa");return "A";
    }
    @RequestMapping("B")
    public String viewBpage(){
        return "B";
    }

    @RequestMapping("goodsList")
    public String viewGoodsList(){
        return "goodsPackage";
    }

    @RequestMapping("webSocket")
    public String viewWebSocket(){
        return "webSocket";
    }
}
