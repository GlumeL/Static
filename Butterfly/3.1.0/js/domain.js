/*感谢云猫Cloud的api接口*/
    function baidu_check(){
        $.getJSON("https://blog.2w2.top/api/baidu.php?domain="+window.location.href,function(result){ 
            if (result.code == 200) {
                $('#baidu_icon').removeClass('fa fa-spinner');
                $('#baidu_icon').addClass('fas fa-check-circle');
                $('#baidu_result').text('百度已收录');
            }else if(result.code == 403){
                $('#baidu_icon').removeClass('fa fa-spinner');
                $('#baidu_icon').addClass('fas fa-times-circle');
                $('#baidu_result').text('百度未收录');
                baidu_push();
            }else{
                 $('#baidu_icon').removeClass('fa fa-spinner');
                $('#baidu_icon').addClass('fas fa-exclamation-circle');
                $('#baidu_result').text('查询收录失败');
            }
        });
    }
    function baidu_push(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
        } else {
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    }
    baidu_check();