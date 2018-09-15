/**
 * Created by Administrator on 2018/9/4 0004.
 */
var echo_websocket;
function init (){
    output = document.getElementById("output");
}
function send_echo(){
    var wsUrl = "ws://localhost:9998/echo";
    writeToScreen("Connecting to "+wsUrl);
    echo_websocket = new WebSocket(wsUrl);
    echo_websocket.onopen = function(evt){
        writeToScreen("Connected !");
       doSend(textID.value);
    }
    echo_websocket.onmessage = function(evt){
        writeToScreen("Received message :"+evt.data);
        echo_websocket.close();
    }
    echo_websocket.onerror = function(evt){
        writeToScreen('<span style="color :red;">ERROR:</span>'+evt.data);
        echo_websocket.close();
    }
}

function doSend(message){
    echo_websocket.send(message);
    writeToScreen("Send Message"+message);
}

function writeToScreen(message){
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre)
}

window.addEventListener('load',init,false);