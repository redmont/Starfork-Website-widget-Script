$(document).on('ready',function(){
    $('body').append('<style>.am-order-now-button {background: linear-gradient(#FFF, #F0F0F0);background-color: #A23600;background: -webkit-linear-gradient(#DB4900, #A23600);background: -o-linear-gradient(#DB4900, #A23600);background: -moz-linear-gradient(#DB4900, #A23600);background: linear-gradient(#DB4900, #A23600);color: #FFF;text-shadow: 0px 1px #000;border: 1px solid #A40000;cursor: pointer;font-weight: bold;font-size: 18px;padding: 6px 12px 7px;border-radius: 3px;outline: none;}.am-order-now-button:active {background: linear-gradient(#B53E03, #C24100);border-color: #A40000;box-shadow: 0px 5px 13px rgba(115, 36, 36, 0.57) inset;}</style><iframe id="am-rst-iframe" style=" display:none;z-index:999999;border:0px;margin:0px;padding:0px;width:100%; height:100%;position:fixed;left:0%;top:0%;background-color: rgba(62, 62, 62, 0.81);"></iframe>')
    $('.am-order-now-button').on('click',function(){
        ambtn=$(this).attr('data-rst-id');
        $('#am-rst-iframe').attr('src','http://starfork.com/api/?request_rst_id='+ambtn)
        $('#am-rst-iframe').show()
    })
    function receiveMessage(event){ $('#am-rst-iframe').fadeOut();}
    window.addEventListener("message", receiveMessage, false);
})