/*-----------------------------------------------------------------------------
 * @Description: 验证码
 * @author: 	xuyihong(xuyihong@163.com)
 * @date		2015.09.24
 * ---------------------------------------------------------------------------*/



function showCheck(a) { /* 显示验证码图片 */
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.font = "80px Arial";
    ctx.fillText(a, 0, 100);
}

function createCode(code) {
    var codeLength = 4; //验证码的长度
    var selectChar = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

    if (code.length != codeLength) {
        createCode(code);
    }
    showCheck(code);
}

function getCode() {
    $.ajax({
        type: "GET",
        url: "/getCode",
        success: function(ret) {
            createCode(ret);
        },
        error: function() {
            //            toastr.error("连接失败");
        }
    });
}