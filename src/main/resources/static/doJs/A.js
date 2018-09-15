//1111111111111111111111111111111111111111111111111111111
var app = new Vue({
    el:"#app",
    created:function(){
        //alert("挂载前调用");
    },
    mounted:function(){
        //alert("挂载后调用");
    },
    data:{
        name:''
    }
});
//2222222222222222222222222222222222222222222222222222222222222
var app = new Vue({
    el:"#app1",
    filters:{
        formateDate:function(date,arg1,arg2){
            var date = new Date(date);
            var year = date.getFullYear();
            var month = padDate(date.getMonth()+1);
            var day = padDate(date.getDay());
            var hours = padDate(date.getHours());
            var min = padDate(date.getMinutes());
            var seconds = padDate(date.getSeconds());
            return year+"-"+month+"-"+day+"-"+hours+"-"+min+"-"+seconds+"======"+arg1+"======="+arg2;
        }
    },
    mounted:function(){
        var _this=this;
        _this.timer = setInterval(function(){
            _this.date = new Date();
        },1000)
    },
    beforeDestory:function(){
        //alert('sb');
    },
    data:{
        date:new Date()
    }
});
var padDate=function(value){
    if(value<10){
        value =  '0'+value;
    }
    return value;
};
//333333333333333333333333333333333333333333333333
var app = new Vue({
    el:"#app2",
    data:{
        link:'<a href="www.baidu.com">百度链接</a>'
    }
});
//444444444444444444444444444444444444444444444444444
var app = new Vue({
    el:'#app3',
    data:{
        number:10000,
        flag:true,
        text:'123,456'
    }
});
//5555555555555555555555555555555555555555555555555555555
var app = new Vue({
    el:"#app4",
    data:{
        isShow:false
    }
});
//66666666666666666666666666666666666666666666666666666666666
var app = new Vue({
    el:'#app5',
    data:{
        url:'www.baidu.com',
        imgUrl:"../img/1.jpg"
    }
})

//7777777777777777777777777777777777777777777777777777777777777777
var app = new Vue({
    el:'#app6',
    methods:{
         clickButton:function(){
             if(this.isShow){
                 this.isShow = false;
             }else{
                 this.isShow = true;
             }
         }
    },
    data:{
        showText:'显示',
        isShow :true,

    }
});