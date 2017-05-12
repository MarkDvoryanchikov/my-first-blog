

$(document).ready(function () {


    if ($(".post h1").html() == "Глоссарий") {
        var id = $(location).attr('href').substring($(location).attr('href').lastIndexOf('/') + 1);
        $(id).css({ background: '#effcad'});
    }

    if ($(".post h1").html() == "1.4 Тест") {
        $('input[type=checkbox]').prop( "checked", function() {
          return false;
        });

        $('label input[type="checkbox"]').click(function(){
            $(this).parent('label').toggleClass('label-checked');
        });

        $('input[type=submit]').click(function(){
            var nTrue = 0, nAll = 0;
            $('label input[type="checkbox"]').each(function(){
                if ($(this).val() == "true")
                    $(this).parent('label').addClass( 'true-answer');
                else
                    $(this).parent('label').addClass( 'false-answer');
            });
            alert("Вы ответили правильно на "+ prov() +" из "+ 4 +" вопросов. Для повторного прохождения обновите страницу");
        })

    }



    tinyMCE.init({

    // General options
    mode : "textareas",
    theme : "advanced",
    plugins : "pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,wordcount,advlist,autosave",

    // Theme options
    theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,fontselect,fontsizeselect,fullscreen,code",
    theme_advanced_buttons2 : "bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,|,forecolor,backcolor",
    theme_advanced_buttons3 : "tablecontrols,|,hr,sub,sup,|,charmap",

    theme_advanced_toolbar_location : "top",
    theme_advanced_toolbar_align : "left",
    theme_advanced_statusbar_location : "bottom",
    theme_advanced_resizing : true,

    // Example content CSS (should be your site CSS)
    //content_css : "/css/style.css",

    template_external_list_url : "lists/template_list.js",
    external_link_list_url : "lists/link_list.js",
    external_image_list_url : "lists/image_list.js",
    media_external_list_url : "lists/media_list.js",

    // Style formats
    style_formats : [
        {title : 'Bold text', inline : 'strong'},
        {title : 'Red text', inline : 'span', styles : {color : '#ff0000'}},
        {title : 'Help', inline : 'strong', classes : 'help'},
        {title : 'Table styles'},
        {title : 'Table row 1', selector : 'tr', classes : 'tablerow'}
    ],
    "file_browser_callback": "mce_filebrowser",
    width: '900',
    height: '700'
    });

});

function prov() {
    var n = 1,
        answ = 0;
    $('label input[class="check-1"]').each(function () {
        if (($(this).val() != "true") && ($(this).prop("checked"))
            || ($(this).val() == "true") && (!$(this).prop("checked"))
        )
            n = 0;
    })
    answ+=n;
    n=1;
    $('label input[class="check-2"]').each(function () {
        if (($(this).val() != "true") && ($(this).prop("checked"))
            || ($(this).val() == "true") && (!$(this).prop("checked"))
        )
            n = 0;
    });
    answ+=n;
    n=1;
    $('label input[class="check-3"]').each(function () {
        if (($(this).val() != "true") && ($(this).prop("checked"))
            || ($(this).val() == "true") && (!$(this).prop("checked"))
        )
            n = 0;
    });
    answ+=n;
    n=1;
    $('label input[class="check-4"]').each(function () {
        if (($(this).val() != "true") && ($(this).prop("checked"))
            || ($(this).val() == "true") && (!$(this).prop("checked"))
        )
            n = 0;
    });
        answ+=n; n=1;

    return answ;
}