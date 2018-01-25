
// 通过商品ID名，从远程数据库表（goodsinfo）获取商品详情，并渲染到页面
// 获取cookie函数：

getCookie("GoodsId");

// // 通过商品ID名，从远程数据库表（goodsinfo）获取商品详情，并渲染到页面
$(function () {
    $.ajax({
        type: "get",
        url: "classes/getGoodsInfo.php",
        success: function (data) {
            showgoodsList(data);
        },
        dataType: "json"
    });
});

function showgoodsList(datas) {
    var $ulbox = $("#ulbox");
    for (var i = 0; i < datas.length; i++) {
        //1、创建li
        var str = "<li><a href='javascript:;' class='jq'><img src='" + datas[i].goodsImg + "' /></a>" +
            "<div class='small-img'><img src='" + datas[i].beiyong1 + "' alt=''></div>" +
            "<div class='price'><em>￥" + datas[i].goodsPrice + "</em><em>购物车</em></div>" +
            "<h3><a href='javascript:;'>" + datas[i].goodsName + "</a></h3>" +
            "<div class='inform'><em>已有<b>n</b>评价</em><em>累计销量<b>n</b></em></div></li>";

        $ulbox.append(str);
    }

}