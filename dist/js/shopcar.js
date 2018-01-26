

var oNumber = $('.zhi').val();
var iTotal0 = $(".total0").val();
var iTotal1 = $(".total1").val();
var iUnit = $(".unit").html();
var iJs = $(".jianshu").html();

//点击减去商品件数
$('.jian').on('click',function(){
    oNumber--;
    if(oNumber<0){
        oNumber = 0;
    }
    $('.zhi').val(oNumber);
    //总金额 = 商品单价×商品数量
    iTotal0 = oNumber*iUnit;
    //将新的值付给总小计
    $('.total0').html(Number(iTotal0));
})

//点击加上商品件数
$('.jia').on('click',function(){
    oNumber++;
    $('.zhi').val(oNumber);
    //总金额 = 商品单价×商品数量
    iTotal0 = oNumber*iUnit;
    //将新的值付给总小计
    $('.total0').html(Number(iTotal0));
})

//点击商品选中状态并改变总金额
$('.xuanzhong').on('click',function(){
    if($('.xuanzhong').attr("checked")){
        //点击增加商品数量时
        $('.jia').on('click',function(){
            oNumber++;
            $('.zhi').val(oNumber);
            $('.jianshu').html(oNumber);
            //总金额 = 商品单价×商品数量
            iTotal0 = oNumber*iUnit;
            //将新的值付给总金额
            $('.total1').html(Number(iTotal0)+ '.00');
        })
        //点击减少商品数量时
        $('.jian').on('click',function(){
            oNumber--;
            if(oNumber<0){
                oNumber = 0;
            }
            $('.zhi').val(oNumber);
            $('.jianshu').html(oNumber);

            //总金额 = 商品单价×商品数量
            iTotal0 = oNumber*iUnit;
            //将新的值付给总金额
            $('.total1').html(Number(iTotal0) + '.00');
        })

        //点击删除购物车里面的商品
        $('#w3s').on('click',function(){
            console.log(20);
            $(this).parent().parent().css('display','none');
            $('.total1').html(Number(0)+ '.00');
            $('.jianshu').html(0);
        })
        $('#chanchu').on('click',function(){
            $('#tr3').css('display','none');
            $('.total1').html(Number(0)+ '.00');
            $('.jianshu').html(0);
        })
    }else{
        //点击增加商品数量时
        $('.jia').on('click',function(){
            oNumber++;
            $('.zhi').val(oNumber);
        
            //总金额 = 商品单价×商品数量
            iTotal0 = oNumber*iUnit;
            //将新的值付给总金额
            $('.total0').html(Number(0));
            $('.total1').html(Number(0)+ '.00');

        })
        //点击减少商品数量时
        $('.jian').on('click',function(){
            oNumber--;
            if(oNumber<0){
                oNumber = 0;
            }
            $('.zhi').val(oNumber);
            //总金额 = 商品单价×商品数量
            iTotal0 = oNumber*iUnit;
            //将新的值付给总金额
            $('.total0').html(Number(0));
            $('.total1').html(Number(0)+ '.00');
        })
    }
})

//点击全选时全部选中
$('#all0').on('click',function(){
    if($(this).attr("checked")){
        $('.self').prop("checked","checked");
        $('.xuanzhong').prop("checked","checked");
        $('#all1').prop("checked","checked");
    }else{
        $('.self').removeProp("checked");
        $('.xuanzhong').removeProp("checked"); 
        $('#all1').removeProp("checked");
    }
})
$('#all1').on('click',function(){
    if($(this).attr("checked")){
        $('.self').prop("checked","checked");
        $('.xuanzhong').prop("checked","checked");
        $('#all0').prop("checked","checked");
    }else{
        $('.self').removeProp("checked");
        $('.xuanzhong').removeProp("checked"); 
        $('#all0').removeProp("checked");
    }
})

