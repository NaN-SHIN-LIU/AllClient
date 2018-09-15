var app = new Vue({
    el:'#app',
    data:{
        checkedCount:0,
        allcheckBoxStatus:false,
        list:[
            {
                id:1,
                name:'iPhone7',
                price:6188,
                count:1,
                checked:false
            },
            {
                id:2,
                name:'iPad Pro',
                price:5888,
                count:1,
                checked:false
            },
            {
                id:3,
                name:'MacBook Pro',
                price:21488,
                count:1,
                checked:false
            }
        ]
    },

    computed:{
        totalPrice:function () {
                var _this = this;
                var totalPrice = 0;
                for (var i = 0; i < _this.list.length; i++) {
                    var item = _this.list[i];
                   // totalPrice += item.price * item.count;
                    if(_this.checkedCount ==0){
                           totalPrice += item.price * item.count;
                    }else{
                        if(item.checked){
                            totalPrice += item.price * item.count;
                        }
                    }
                }
                return totalPrice.toString().replace(/\B(?=(\d{3})+$)/g, ',');
            }
    },
    filters:{
        sumLineAmount:function(value){
            return value.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    methods:{

        handleReduce:function(index){
           if(this.list[index].count===1) return;
           this.list[index].count--;
        },
        handleAdd:function(index){
          this.list[index].count++;
        },
        handleRemove:function(index){
             this.list.splice(index,1);
        },
        allCheck:function(){
          var _this = this;
         if(event.target.checked){
              for(var i = 0 ;i<_this.list.length;i++){
                 var tempObj = _this.list[i];
                 if(!tempObj.checked){
                     tempObj.checked = true;
                     _this.checkedCount += 1;
                 };
              }
         }else{
             for(var i = 0 ;i<_this.list.length;i++){
                 var tempObj = _this.list[i];
                 if(tempObj.checked){
                     _this.checkedCount -= 1;
                     tempObj.checked = false;
                 }else{
                     tempObj.checked = true;
                     _this.checkedCount += 1;
                 }
             }
         }
        },
        clickCheckBox:function(index){
            var _this = this;
          if(event.target.checked){
              _this.allcheckBoxStatus = true;
              _this.checkedCount += 1;
          }else{
              _this.checkedCount -= 1;
              if( _this.checkedCount==0){
                   _this.allcheckBoxStatus = false;
              }
          }
        }
    }
});