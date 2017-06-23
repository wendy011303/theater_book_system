$(window).load(function(){
    /*$(window).resize(function(){
        view_style();
    });*/
    view_style();
    $('.header .menu li').hover(function() {
        $(this).css('background-image', "url('image/menu_select.png')");
    }, function(){
        $(this).css('background-image', "url('')");
    });
});
function view_style(){
    header_style();
    $('.copyright').css('font-size', $('.header .tool img').height() / 20 + 'px');
    $('body').css('opacity', 100);
}
function header_style(){
    var client_width = document.documentElement.clientWidth;
        $header = $('.header'),
        $menu_ul = $('.header .menu ul'),
        $menu_li = $('.header .menu li'),
        $menu_a = $('.header .menu a'),
        $tool = $('.header .tool'),
        $tool_ul = $('.header .tool ul'),
        $tool_li = $('.header .tool li'),
        $tool_img = $('.header .tool img'),
        header_img = new Image;
        headwe_img_path = $header.css('background-image');
        header_img.src = headwe_img_path.substring(5, headwe_img_path.length - 2);
    var $logo = $('.header .top_area img'),
        header_width = $header.width(),
        header_height = $header.height(),
        header_img_width = header_img.width,
        header_img_height = header_img.height,
        logo_width = $logo.width(),
        logo_height = $logo.height();
    
    header_img_height = header_img_height * (client_width / header_img_width);
    header_height = header_img_height;
    $header.css('height', header_height + 'px');
    $header.css('background-size', client_width + 'px ' + header_img_height + 'px');
    logo_width = logo_width * ((header_height * 0.9) / logo_height);
    $('.header .logo_intent').css('margin', header_height * 0.03 + 'px ' +  
        logo_width / 1.2 + 'px '  + header_height * 0.03 + 'px ' + logo_width / 2 + 'px ');
    logo_height = header_height * 0.9;
    $logo.css('width', logo_width + 'px');
    $logo.css('height', logo_height + 'px');
    $menu_ul.css('font-size', logo_height / 3 + 'px');
    $menu_li.css('margin', logo_height / 2 + 'px ' + logo_width / 3 + 'px ' + 
        0 + 'px ' + 0 + 'px ');
    $menu_li.css('height',  logo_height / 2.5 + 'px');
    $menu_a.slice(0).css('color', '#FF301C');
    $menu_a.slice(1).css('color', '#FFCE4B');
    $menu_a.slice(2).css('color', '#00E8A1');
    $menu_a.slice(3).css('color', '#6F00F2');
    $tool.css('width',  header_width / 4.5 + 'px');
    $tool.css('height',  header_height / 2 + 'px');
    $tool.css('margin', header_height / 2 + 'px ' + 0 + 'px ' + 
        0 + 'px ' + 0 + 'px ');
    $tool.css('border-width', logo_height / 100 + 'px');
    $tool.css('border-top-left-radius', logo_height / 10 + 'px');
    $tool.css('border-top-right-radius', logo_height / 10 + 'px');
    $tool_ul.css('font-size', logo_height / 5 + 'px');
    $tool_li.slice(0, 2).css('margin', logo_height / 10 + 'px ' + logo_width / 15 + 'px ' + 
        0 + 'px ' + logo_width / 15 + 'px ');
    $tool_li.slice(2, 5).css('margin', logo_height / 10 + 'px ' + logo_width / 20 + 'px ' + 
        0 + 'px ' + logo_width / 20 + 'px ');
    $tool_img.css('width',  logo_height / 3 + 'px');
    $tool_img.css('height',  logo_height / 3 + 'px');
}