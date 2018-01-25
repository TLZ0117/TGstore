
// 通过商品ID名，从远程数据库表（goodsinfo）获取商品详情，并渲染到页面
// 获取cookie函数：

 

// // 通过商品ID名，从远程数据库表（goodsinfo）获取商品详情，并渲染到页面
// getCookie("goods")
$(function () {
    $.ajax({
        type: "get",
        url: "classes/getGoodsInfo.php",
        data: { 'goodsId': JSON.parse(getCookie("goods")).id},
        success: function (data) {
            showgoodsList(data);
            // console.log(JSON.parse(getCookie("goods")).id);
        },
        dataType: "json"
    });
});

function showgoodsList(datas) {
    var $dynmic = $("#section-dynmic");
    // for (var i = 0; i < datas.length; i++) {
        //1、创建li
        var str = `<!-- section-one -->
        <div class="section-one">
            <a href="file:///E:/course/aaa/index.html" target="_blank">首页</a>
            <b>>></b>
            <a href="file:///E:/course/aaa/list.html">商城商品</a>
            <b>>></b>
            <a href="file:///E:/course/aaa/list.html">限量抢鲜</a>
            <b>>></b>
            <a href="##">${datas.goodsName}</a>
        </div>

        <!-- section-head -->
        <div class="section-head">
            <a href="#">详细说明</a>
        </div>

        <!-- body-one -->
        <div class="body-one">
            <div class="content-img">
                <div class="s">
                    <img src="${datas.goodsImg}" alt="">
                </div>
                <div class="x">
                    <img src="${datas.beiyong1}" alt="">
                </div>
                <div class="share"></div>
            </div>
            <div class="content-text">
                <h2>${datas.goodsName}</h2>
                <div class="purches">
                    <div class="price-a">
                        <span>价格</span>
                    </div>
                    <div class="price-b">
                        <ul>
                            <li>
                                <span>￥${datas.goodsPrice}</span>元</li>
                            <li>
                                <i></i>
                                <b>去手机购买</b>
                                <i></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="accumulation">
                    <span>累计销量 202</span>
                    <em></em>
                    <span>累计评价 0</span>
                </div>
                <div class="buy">
                    <span>购买数量</span>
                    <form action="">
                        <input type="text" value="1">
                        <a href="javascript:;">+</a>
                        <a href="javascript:;">-</a>
                    </form>
                    <ul>
                        <li>总计</li>
                        <li>￥19.90</li>
                    </ul>
                </div>
                <div class="inmidia">
                    <a href="javascript:;">立即购买</a>
                    <a href="javascript:;">
                        <i></i>
                        <i>加入购物车</i>
                    </a>
                </div>

            </div>
        </div>`;
        console.log(datas);
        $dynmic.prepend(str);
    }

// }

