$(function () {
    /*刷新后回到上次点击位置*/
   if(window.location.hash){
       $('#iFrame').attr('src', './' + window.location.hash.replace('#', '') + '.htm');
       $('.menu-box').find('a').each(function () {
           if($(this).attr('href') == window.location.hash){
               $(this).parents('.menu-box').find('.selected').removeClass('selected');
               var parentO = $(this).parent();
               parentO.addClass("selected");
               var top = parentO.offset().top;
               $(this).parents("div.pull-left").scrollTop(top - 100);
           }
       })
   }

    /*点击菜单*/
    $('.menu-box ul li a').click(function () {
        if($(this).data('href') != undefined && !$(this).parent().hasClass('selected')){
            $('#iFrame').attr('src', $(this).data('href'));
        }
        $(this).parents('.menu-box').find('.selected').removeClass('selected');
        $(this).parent().addClass('selected');
    });

    /*点击收缩菜单*/
    $('.menu-box ul li span').click(function () {
        $(this).next().slideToggle().parent('li').toggleClass('submenu-hide');
        if($(this).next().find('.selected').length > 0){
            $(this).parent('li').removeClass('submenu-hide');
        }
    });

    /*选项卡初始化显示第一个*/
    $('.tabs').find('.tabs-box .tabs-item').eq(0).show();

    /*选项卡*/
    $('.tabs .tabs-nav').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $(this).parent().next().find('.tabs-item').eq($(this).index()).show().siblings().hide();
    });

    $('.content-box a').click(function (e) {
        var data_href = $(this).data('href');
        if(data_href != undefined){
            window.parent.goToLocation($(this).attr("href"),data_href);
        }else {
            window.open( $(this).attr("href"));
            e.preventDefault();
        }

    });

});

function goToLocation(href, path) {
    $('.menu-box').find('a').each(function () {
        if($(this).attr('href') == href){
            $('#iFrame').attr('src', path);
            $(this).parents('.menu-box').find('.selected').removeClass('selected');
            var parentO = $(this).parent();
            parentO.addClass("selected");
            var top = parentO.offset().top;
            $(this).parents("div.pull-left").scrollTop(-top);
            window.history.pushState('','',window.location.href.split("#")[0]+ href);//前两个参数可省略

            // window.location.href = window.location.href.split("#")[0]+ href;

            //v.animate({ "top": scrollTop + "px" }, 0);
        }
    })
}