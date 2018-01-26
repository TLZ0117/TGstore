// 从数据库拿取商品信息并渲染到静态页面
    $(function () {
        $.ajax({
            type: "get",
            url: "classes/getGoodsList.php",
            success: function (data) {
                showgoodsList(data);
                // 点击单个商品li发送cookie保存商品的ID，以备详情页面调用ID获取数据库信息
                 // 增加cookie
                var oGoodsDiv = document.getElementsByClassName('cookies');
                // var oGoodsDiv = $('#cookies');
                console.log(oGoodsDiv);
                for (var i = 0; i < oGoodsDiv.length; i++) {
                    oGoodsDiv[i].onclick = function () {
                        console.log(1)
                        var iId = this.getAttribute('data-id');

                        var oGoods = {
                            id: iId
                        }

                        setCookie('goods', JSON.stringify(oGoods), 10, '/');
                    }
                }
            },
            dataType: "json"
        });
    });

    function showgoodsList(datas) {
        var $ulbox = $("#ulbox");
        for(var i=0;i<datas.length; i++){
        //1、创建li
            var str = "<li class='cookies' data-id='" + datas[i].goodsId +"'><a href='goods01.html' class='jq'><img src='"+datas[i].goodsImg+"' /></a>" +
            "<div class='small-img'><img src='" + datas[i].beiyong1+"' alt=''></div>" +
            "<div class='price'><em>￥"+datas[i].goodsPrice+"</em><em>购物车</em></div>"+
            "<h3><a href='javascript:;'>"+datas[i].goodsName+"</a></h3>" +
            "<div class='inform'><em>已有<b>n</b>评价</em><em>累计销量<b>n</b></em></div></li>";
            $ulbox.append(str);
        }
    }



 









