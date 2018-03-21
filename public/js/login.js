$(document).ready(function() {

});

//获取导航栏
function login() {
    RSAUtils.setMaxDigits(200);
    var key = new RSAUtils.getKeyPair("${publicKeyExponent}", "", "${publicKeyModulus}");
    alert("key:"+key);
    var orgPwd = $("#passwd").val();
    alert("orgPwd"+orgPwd);
    var encrypedPwd = RSAUtils.encryptedString(key,orgPwd.split("").reverse().join(""));
    alert("encrypedPwd"+encrypedPwd);
    $.ajax({
        type: "POST",
        url: "/login",
        data:{
            username:$("#username").val(),
            passwd:encrypedPwd
        },
        success: function(ret) {
        },
        error: function() {
//            toastr.error("连接失败");
        }
    });
}
