window.onload = function(){
   
    
    // oInto.focus = function(){
    //     this.style.border ='none';
    // }
    new Carousel({
        el: document.getElementsByClassName('carousel')[0]
    });

    //吸顶效果
//	var oFixedTop = document.getElementById('back-bottom-z');
	var oFixedTop =$('#back-bottom-z');
	window.onscroll = function () {
        console.log(1);
		var iScrollT = document.body.scrollTop || document.documentElement.scrollTop;
		if(iScrollT > 200) {
			// oFixedTop.className = 'bottom-show';
			oFixedTop.addClass("bottom-show");
			// console.log($oFixedTop);
		} else {
			oFixedTop.removeClass("bottom-show");
		}
	}
    
}      


//点击回到顶部
$('#back-bottom-z').on('click', function () {
	// $('html,body').scrollTop(0);
	$('html,body').animate({
		scrollTop: 0
	}, 1000);;

	//下面注释的办法同样有效
	// document.body.scrollTop = 0;
	// document.documentElement.scrollTop = 0;
})

//点击取消楼层
$('#state-btn').on('click', function () {
	$(this).css('display', 'none');
	$('#float-right').css('display', 'none');
})


//点击滚动条向上去
$('#prevs').on('click', function () {
	console.log("上");
	var iScrollT = document.body.scrollTop || document.documentElement.scrollTop;
	if (iScrollT <= 0) {
		return false;
	} else {
		document.body.scrollTop -= 300;
		document.documentElement.scrollTop -= 300;
	}
})
//点击滚动条向下去
$('#nexts').on('click', function () {
	console.log("下");
	var iScrollT = document.body.scrollTop || document.documentElement.scrollTop;
	document.body.scrollTop += 300;
	document.documentElement.scrollTop += 300;
})




