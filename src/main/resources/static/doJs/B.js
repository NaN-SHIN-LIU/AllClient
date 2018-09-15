//111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
var app = new Vue({
    el:'#app',
    data:{
        package1:[
            {
                name:'iphone7',
                price:7199,
                count:2,
            },
            {
                name:'ipad',
                price:2888,
                count:1
            }
        ],
        package2:[
            {
                name:'apple',
                price:3,
                count:5
            },
            {
                name:'banana',
                price:2,
                count:10
            }
        ]
    },
    computed:{
        prices:function(){
            var prices = 0;
            for(var i = 0 ;i<this.package1.length;i++){
               prices += this.package1[i].price*this.package1[i].count;
            }
            for(var i = 0 ;i<this.package2.length;i++){
                prices += this.package2[i].price*this.package2[i].count;
            }
            return prices;
        }
    }

});
//2222222222222222222222222222222222222222222222222222222222222222222222
var app2 = new Vue({
    el:'#app1',
    data:{
        firstName:'Robrt',
        lastName:'jacket'
    },
    computed:{
        fullName:{
            get:function(){
               return this.firstName+' '+this.lastName;
            },
            set:function(newValue){
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length-1];


            }
        }
    }
});
//333333333333333333333333333333333333333333333333333333333333333333
var app3A = new Vue({
    el:'#app3A',
    data:{
        text:'123,456'
    }
});
var app3B = new Vue({
    el:'#app3B',
    computed:{
        reversedText:{
            set:function(){

            },
            get:function(){
                return app3A.text.split(",").reverse().join(',');
            }

        }
    }
});
//444444444444444444444444444444444444444444444444444444444444444444444
var app4 = new Vue({
    el:'#app4',
    data:{
        status:6
    },
    methods:{
        changeStatus:function(){
            var _this = this;
            if(_this.status!=1&&_this.status!=2){
                _this.status = 1;
            }else
            if(_this.status==1){
                _this.status = 2;
            }else{
                _this.status = 6;
            }
        }
    }
});
//555555555555555555555555555555555555555555555555555555555555555555555555555
var app5 = new Vue({
    el:"#app5",
    data:{
        books:[{
            name:"《JAVA 面向对象》"
        },{
            name:"《JAVA 面向对象1》"
        },{
            name:"《JAVA 面向对象2》"
        },{
            name:"《JAVA 面向对象3》"
        }],
        bookName:''
    },
    filters:{
        changeName:function(value){
            return value+"sb";

        }
    },
    methods:{
        addBook:function(){
            var _this = this;
            var tempBookObject = {name:_this.bookName};
            _this.books.push(tempBookObject);
            _this.bookName = '';
        },
        delBook:function(){
            var _this = this;
            _this.books.pop();
        }

    }

});
app5.books = app5.books.filter(function(item){
    return item.name.match(/JAVA/);
});
//66666666666666666666666666666666666666666666666666666666666666666666666666
var app6 = new Vue({
    el:"#app6",
    data:{
        user:{
            name:'jack',
            job:'piaoke',
            age:'18'
        }
    }
});


