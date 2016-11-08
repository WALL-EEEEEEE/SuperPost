/*
 * login quickly
 *
 * */



/**
 * Load the dependencies of css files
 *
 */

$.getScript('../resources/js/jquery.getStylesheet.js', function() {
    console.log('Loaded the jquery.getStylesheet.js file successfully');
    $.getStylesheet('../resources/css/fileinput.min.css', function() {
        console.log('Loaded the fileinput.min.css file successfully');
    });

    $.getStylesheet('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', function() {
        console.log('Loaded the bootstrap.min.css file successfully');
    });
});

/*Load the dependencies js */


$.getScript('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js', function() {
    console.log("loaded the bootstrap.min.js successfully!");
});

$.getScript('../resources/js/lib/bootstrap-fileinput/js/locales/fa.js',function(){
    console.log("loaded the fa.js successfully");
});

$.getScript('../resources/js/lib/bootstrap-fileinput/js/fileinput.min.js', function() {

    $.getScript('../resources/js/lib/bootstrap-fileinput/js/fileinput_locale_zh.js', function() {
        console.log("loaded the fileinput_locale_zh.js successfully");
    });

    var redefinedTemplate = {
        //disable file-actions button under the thumb photo
        "actions":'<div class="file-actions">\n' +
            '    <div class="file-footer-buttons">\n' +
            '        {zoom} {other}' +
            '    </div>\n' +
            '    {drag}\n' +
            '    <div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>\n' +
            '    <div class="clearfix"></div>\n' +
            '</div>'
    };
    
    var dropZoneClickTitle = "拖拽或选择你的简历文件";
    var dropZoneTitle ="";
    var previewClass = "resize-dropbox-height";

    console.log("loaded the fileinput.min.js successfully");

    /*initial the upload file plugins*/
    $("#login-authentic-file").fileinput({
        uploadUrl: false,
        theme: 'fa',
        initialPreview: false,
        showBrowse: false,
        showCaption: false,
        showUpload: false,
        showRemove: false,
        browseOnZoneClick: true,
        initialPreviewShowDelete:false,
        dropZoneClickTitle: dropZoneClickTitle,
        dropZoneTitle: dropZoneTitle,
        allowedFileExtensions: ['pdf', 'doc', 'xsl','docx'],
        overwriteInitial: false,
        maxFileSize: 1000,
        maxFilesNum: 1,
        previewClass: previewClass,
        layoutTemplates: redefinedTemplate,
        slugCallback: function(filename) {
            return filename.replace('(', '_').replace(']', '_');
        }


    });
});
