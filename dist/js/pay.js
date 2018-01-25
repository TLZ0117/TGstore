

// 添加个人收货信息
$(".add1").on("click", function(){
    $('#box').css('display','block');
    $('#back').css('display','block');
});

//点击让添加地址栏消失
$(".hid").on("click", function(){
    $(this).parent().parent().css('display','none');
    $('#back').css('display','none');
});

//点击保存新地址
$("#save").on("click",function(){
    $(".zg").css('display','none');
    $(".hid").parent().parent().css('display','none');
    $('#back').css('display','none');
})

//点击使用新地址
$("#newadress").on("click", function(){
    $('#box').css('display','block');
    $('#back').css('display','block');
});

//拖拽地址框和添加详细信息到地址栏中
window.onload = function(){
     //拖拽盒子
    var oBox = document.getElementById('box');
    var oAdress = document.getElementsByClassName('adress-s')[0];

	var iMaxL = document.documentElement.clientWidth  - oBox.offsetWidth;
	var iMaxT = document.documentElement.clientHeight - oBox.offsetHeight;
	// 添加拖拽效果 
    // 2.1
    console.log(oAdress);
    oAdress.onclick =function(){
        console.log(1);
    }
	oAdress.onmousedown = function (ev) {
		var e = ev || window.event;
		var iX = e.clientX - oBox.offsetLeft;
		var iY = e.clientY - oBox.offsetTop;

        // 新建一个透明层  2.6
		if(oBox.setCapture) {
			oBox.setCapture();
		}
		
   //2.2
		document.onmousemove = function (ev) {
			var e = ev || window.event;

			var iL = e.clientX - iX;
			var iT = e.clientY - iY;

			// 限定物体的拖拽范围 2.3
			iL = Math.max(iL, 0);
			iT = Math.max(iT, 0);
			iL = Math.min(iL, iMaxL);
			iT = Math.min(iT, iMaxT);


			oBox.style.left = iL + 'px';
			oBox.style.top  = iT + 'px';
		};
		// 鼠标离开2.4
		document.onmouseup = function () {
			// 注销move和up事件
			document.onmousemove = null;
			document.onmouseup = null;

            // 取消透明层2.7
            if(oBox.releaseCapture) {
                oBox.releaseCapture();
            }
     
		// 阻止默认行为 2.5
		return false;
	};
   }

   //添加具体信息
   var oP   = document.getElementsByClassName('p');
   var oSava= document.getElementById('save');

   // 点击提交添加新的地址
   oSava.onclick = function () {
        var  oNames   = document.getElementsByClassName('names')[0];
        var  sNames   = oNames.value;
        var  oSelects = document.getElementsByClassName('selects')[0];
        var  sSelects = oSelects.value;
        var  oDetailed= document.getElementsByClassName('detailed-address')[0];
        var  sDetailed= oDetailed.value;
        var  oPostal  = document.getElementsByClassName('postal-code')[0];
        var  sPostal  = oPostal.value;
        var  oTel     = document.getElementsByClassName('tel')[0];
        var  sTel     = oTel.value;
                    
                //如果内容为空则拒绝添加内容
                    if( sSelects.value == ''){
        
                        alert('请添加点内容再发布吧~');
                        return false;
                     }
                    if( sNames.value == ''){
        
                        alert('请添加点内容再发布吧~');
                        return false;
                     }
                    if( sDetailed.value == ''){
        
                        alert('请添加点内容再发布吧~');
                        return false;
                     }
        
                //创建新的内容盒子(section)
                    var oNewSection = document.createElement('div');
                    oNewSection.className = 'shouhuole';

                //新盒子的主体内容
                oNewSection.innerHTML = '<div class="shuohuole"><span class="sh-s">' + sSelects + '(' + sNames + '收)' + '</span><br><b class="sh-x">' + sDetailed + sPostal + sTel + '</b></div>';
    
                //向大盒子中追加新的内容
                console.log(oNewSection);
                oP.appendChild(oNewSection);	
        
            }; 
}