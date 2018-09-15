package cn.com.webSocketServer;

import javax.websocket.OnMessage;
import javax.websocket.server.ServerEndpoint;

/**
 * ${DESCRIPTION}
 *
 * @author 刘鑫
 * @create 2018-09-04 16:34
 **/
@ServerEndpoint("/echo")
public class EchoServer {

    @OnMessage
    public String echo(String incomingMessage){
        return "I got this ("+incomingMessage+")"+"so I am sending it back !";
    }
}
