$(function() {
    var main_nav_name = $("#main_nav_name");
    var subNavList = $('.subNavList ul');
    var sub_nav_name = $("#sub_nav_name");
    var subID = 0;

    function edit_subnav() {
        $('.subNavList .linecons-pencil').click(function(event) { //修改子栏目表单
            var that = this;
            var sub_nav_name = $("#edit-subnav #sub_nav_name");
            $('#edit-subnav').modal('show', {
                backdrop: 'fade'
            });
            sub_nav_name.val($(this).siblings('span').text());
            sub_nav_name.on('input', function(event) { //判断如果为空按钮不可用
                if (event.target.value === '') {
                    $('.btn-info').addClass('disabled');
                } else {
                    $('.btn-info').removeClass('disabled');
                }
            });
            $('#edit-subnav .btn-info').click(function(event) {
                $(that).parent('.m-label').children('span').text(sub_nav_name.val());
                that = null;
            });
        });
    }



    $('#add_btn').click(function(event) { //添加子栏目
        var itemText = sub_nav_name.val();
        var addItem = $('<li class="m-label"><span>' + itemText + '</span> <input type="checkbox" id="subnav-' + subID + '"/><label class="f-r" for="subnav-' + subID + '"></label><i class="linecons-trash f-r"></i><i class="linecons-pencil f-r"></i></li>');
        $("#sub_nav_name").val("");
        subID += 1;
        subNavList.append(addItem);
        $('.subNavList .linecons-trash').click(function(event) {
            $(this).parent().remove();
        });
        edit_subnav();

    });

    $('.panel').delegate('#subAjax', 'click', function(event) { //事件委托发送结果
        var mainNavName = main_nav_name.val();
        var subNavName = [];
        $.each(subNavList.children('.m-label'), function(index, el) {
            subNavName.push($(el).children('span').text());
        });
    });
});