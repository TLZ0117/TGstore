
//注册验证
// function checkUser() {
//     var user = $("user");
//     var userId = divId("user_prompt");
//     userId.innerHTML = "";
//     var reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
//     if (reg.test(user) == false) {
//         userId.innerHTML = "用户名不正确";
//         return false;
//     }
//     return true;
// }
//用户名是否存在
var usernameExists = true;
$(function () {
    //用户名存在性验证
    $("#txtusername").blur(function () {
        $.ajax({
            url: "classes/usercheck.php",
            method: "get",
            data: { "username": $("#txtusername").val() },
            success: function (data) {
                if (data == "0") {
                    usernameExists = false;
                    $("#usernameMsg").html("该用户名可用");
                } else {
                    usernameExists = true;
                    $("#usernameMsg").html("该用户名已存在");
                }
            }
        });
    });

    $("#f").submit(function () {
        if (usernameExists) {
            alert("亲，用户名已经存在");
            return false;//阻止浏览器的默认行为。
        }
    });
});
