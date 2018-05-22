function showComments(paraid, addFormOnly, closed) {
    var fieldclass = 'input-xlarge';
    try {
        var content = $('#blg_' + paraid).html();
        if ((content != '') && ((addFormOnly && content.search('<!--ADDCOMMENT-->') != -1) || (!addFormOnly && content.search('<!--COMMENTS-->') != -1))) {
            $('#blg_' + paraid).html('');
            return false;
        }
        fieldValues = getBlogCookie("9bad8f2c");
        fieldArray = fieldValues.split("\|");
        var postForm;
        if (closed) {
            postForm = '<hr><span>Comments are closed</span>';
        } else {
            postForm = '<form class="form-horizontal" action="" method="post" id="c_form' + paraid + '" name="c_form' + paraid + '"><legend>Post a comment</legend>';
            postForm += '<div class="control-group">' + '<label class="control-label required" for="c_name' + paraid + '"><span style="color: #ff0000">*</span>Your name</label>' + '<div class="controls">' + '<input class="' + fieldclass + '" name="author" id="c_name' + paraid + '" type="text" maxlength="50" value="' + ((fieldArray[0] != null) ? fieldArray[0] : '') + '">' + '</div>' + '</div>';
            postForm += '<div class="control-group">' + '<label class="control-label" for="c_mail' + paraid + '">Your email</label>' + '<div class="controls">' + '<input class="' + fieldclass + '" name="email" id="c_mail' + paraid + '" type="text" maxlength="255" value="' + ((fieldArray[1] != null) ? fieldArray[1].replace('.at.chez.', '@') : '') + '">' + '</div>' + '</div>';
            postForm += '<div class="control-group">' + '<label class="control-label" for="c_site' + paraid + '">Your website</label>' + '<div class="controls">' + '<input class="' + fieldclass + '" name="url" id="c_site' + paraid + '" type="text" maxlength="255" value="' + ((fieldArray[2] != null) ? fieldArray[2] : 'http://') + '">' + '</div>' + '</div>';
            postForm += '<div class="control-group">' + '<label class="control-label required" for="c_content' + paraid + '"><span style="color: #ff0000">*</span>Your message</label>' + '<div class="controls">' + '<textarea ' + 'class="' + fieldclass + '" name="text" id="c_content' + paraid + '" type="text" maxlength="' + 2000 + '" value="' + ((fieldArray[0] != null) ? fieldArray[0] : '') + 'rows="10" onkeypress="javascript:if(this.value.length > 2000) this.value = this.value.substring(0, 2000);">' + '</textarea>' + '</div>' + '</div>';
            postForm += '<div class="control-group">' + '<label class="control-label" for="' + paraid + '_raty">Your rating</label>' + '<div class="controls">' + '<div style="padding-top:5px" id="' + paraid + '_raty"></div>' + '</div>' + '</div>';
            postForm += '<div class="control-group">' + '<label class="control-label" for="addc_' + paraid + '">&nbsp;</label>' + '<div class="controls">' + '<a class="btn" name="op" id="addc_' + paraid + '" href="javascript:postComment(\'' + paraid + '\')">Send</a>' + '<span style="display:block;font-size:80%"><span style="color:#ff0000;">*</span>denotes required field. E-mail address will not be published.</span>' + '</div>' + '</div>';
            postForm += '<input type="hidden" name="FKuA1ZHm" value="FKuA1ZHmo9LdWJrRg0jVIkNvuxygjtss">';
            postForm += '<input type="hidden" id="' + paraid + '_hraty" name="rate" value="">';
            postForm += '</form>' + '<iframe id="AddCom_IFrame" name="AddCom_IFrame" style="width:0px; height:0px; border: 0px"></iframe>';
        }
        capHTML = '';
        if (addFormOnly) {
            $('#blg_' + paraid).html(postForm.replace('CAP_HTML', capHTML) + '<!--ADDCOMMENT-->');
        } else if (window.XSLTProcessor && window.XMLHttpRequest) {
            var xmlDoc;
            var xslStylesheet;
            var xsltProcessor = new XSLTProcessor();
            var myXMLHTTPRequest = new XMLHttpRequest();
            myXMLHTTPRequest.open("GET", '_iserv/blog/blog.xsl', false);
            myXMLHTTPRequest.send(null);
            xslStylesheet = myXMLHTTPRequest.responseXML;
            xsltProcessor.importStylesheet(xslStylesheet);
            myXMLHTTPRequest = new XMLHttpRequest();
            myXMLHTTPRequest.open("GET", '_iserv/blog/data/' + paraid + '.xml', false);
            myXMLHTTPRequest.send(null);
            xmlDoc = myXMLHTTPRequest.responseXML;
            var doc = xsltProcessor.transformToDocument(xmlDoc);
            var xmls = new XMLSerializer();
            $('#blg_' + paraid).html(xmls.serializeToString(doc) + postForm.replace('CAP_HTML', capHTML) + '<!--COMMENTS-->');
        } else if (window.ActiveXObject || "ActiveXObject" in window) {
            var xmlDoc;
            var xslDoc;
            try {
                xmlDoc = new ActiveXObject('Msxml2.XMLDOM');
            } catch (e) {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
            }
            try {
                xslDoc = new ActiveXObject('Msxml2.XMLDOM');
            } catch (e) {
                xslDoc = new ActiveXObject('Microsoft.XMLDOM');
            }
            xmlDoc.async = false;
            xmlDoc.load('_iserv/blog/data/' + paraid + '.xml');
            xslDoc.async = false;
            xslDoc.load('_iserv/blog/blog.xsl');
            $('#blg_' + paraid).html(xmlDoc.transformNode(xslDoc) + postForm.replace('CAP_HTML', capHTML) + '<!--COMMENTS-->');
        }
        $('#' + paraid + '_raty').raty({
            path: '_frame/raty/',
            hintList: ['1', '2', '3', '4', '5'],
            click: function (score) {
                $('#' + paraid + '_hraty').val(score);
            }
        });
    } catch (e) {
        return e;
    }
}

function getCommentLink(paraid, closed, divalign) {
    try {
        var req, n = 0, r = 0;
        if (window.XSLTProcessor && window.XMLHttpRequest) {
            try {
                req = new XMLHttpRequest();
                // req.open("GET", '_iserv/blog/data/' + paraid + '.txt', false);
                // req.send(null);
            } catch (e) {
                n = 0;
            }
        } else if (window.ActiveXObject || "ActiveXObject" in window) {
            try {
                var req;
                try {
                    req = new ActiveXObject('Msxml2.XMLHTTP');
                } catch (e) {
                    req = new ActiveXObject('Microsoft.XMLHTTP');
                }
                req.open("GET", '_iserv/blog/data/' + paraid + '.txt?__' + encodeURIComponent((new Date()).getTime()), false);
                req.send(null);
            } catch (e) {
                n = 0;
            }
        }
        try {
            var spl = req.responseText.split('|');
            n = parseInt(spl[0]);
            if (spl.length > 1) r = parseFloat(spl[1]);
            if (isNaN(r)) r = 0;
            if (isNaN(n)) n = 0;
        } catch (e) {
            n = 0;
        }
        if (divalign == null) divalign = 'right';
        var raty = '';
        raty = '<span style="display:inline;padding-' + divalign + ':20px;" id="' + paraid + '_rate"></span>';
        divalign = (divalign == 'right') ? 'left' : 'right';
        var comAnchor;
        if (n > 1) comAnchor = '%n comments'; else comAnchor = '%n comment';
        var shtml = '';
        if (n > 0) shtml += raty + '<a style="background: url(_iserv/blog/blog-comments.gif) no-repeat; background-position:' + divalign + ' center; padding:0 20px 1px 20px;" ' + 'href="javascript:showComments(\'' + paraid + '\', false, ' + closed + ');">' + comAnchor.replace("%n", n) + '</a>';
        if (closed) ; else shtml += '<a style="background: url(_iserv/blog/blog-addcomment.gif) no-repeat; background-position:' + divalign + ' center; padding:0 20px 1px 20px;" ' + 'href="javascript:showComments(\'' + paraid + '\', true, ' + closed + ');">Post a comment</a>';
        $('#blg_' + paraid).html(shtml);
        if (n > 0 && raty != '') {
            r = Math.round(r * 10) / 10;
            $('#' + paraid + '_rate').raty({
                path: '_frame/raty/',
                hintList: [r, r, r, r, r],
                half: true,
                readOnly: true,
                noRatedMsg: 'Not rated yet',
                start: r
            });
        }
    } catch (e) {
        alert(e);
    }
}

var inPostComment = false;

function postComment(paraid) {
    if (inPostComment) return;
    var errors = '';
    var author = $('#c_name' + paraid).val();
    var email = $('#c_mail' + paraid).val();
    var url = $('#c_site' + paraid).val();
    var text = $('#c_content' + paraid).val();
    var blankRE = /^\s*$/;
    if (blankRE.test(author)) {
        errors = '- name can\'t be empty\n';
    } else {
        var illegalChars = /\W/;
        if (illegalChars.test(author.replace(/-/g, "").replace(/\x20/g, ""))) {
            errors = errors + '- use only letters, numbers and underscores in your name\n';
        }
    }
    var isAdmin = hex_md5(author) == '21232f297a57a5a743894a0e4a801fc3';
    if (isAdmin) {
        var re = /^(DEL|MOD)[1-9]([0-9])*$/;
        var isBlankUrl = blankRE.test(url) || url == 'http://';
        if (!isBlankUrl && !re.test(url)) {
            errors = errors + '- Invalid administrative command, the url field must be empty to post or contains a \"DELn\" or \"MODn\" command with \"n\" as the index of the message to moderate (' + url + ')\n';
        } else {
            if ((isBlankUrl || url.indexOf('MOD') != -1) && blankRE.test(text)) {
                errors = errors + '- the message field can\'t be empty\n';
            }
        }
    } else {
        var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (email.length != 0 && !re.test(email)) {
            errors = errors + '- the email address you entered is invalid\n';
        }
        re = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (url.length != 0 && url != 'http://' && !re.test(url)) {
            errors = errors + '- the URL you entered is invalid\n';
        }
        if (blankRE.test(text)) {
            errors = errors + '- the message field can\'t be empty\n';
        }
        if (text.length > 2000) {
            errors = errors + '- the message you entered is too long (2000 characters allowed)\n';
        }
    }
    if (errors.length > 0) {
        errors = 'Sorry, some values are incorrect:\n\n' + errors;
        alert(errors);
        return;
    }
    if (isAdmin) setBlogCookie("9bad8f2c", author + '\|' + email.replace('@', '.at.chez.') + '\|'); else setBlogCookie("9bad8f2c", author + '\|' + email.replace('@', '.at.chez.') + '\|' + url, 180);
    inPostComment = true;
    var form = document.getElementById('c_form' + paraid);
    form.action = '_iserv/blog/blog_addcom.php?paraid=' + paraid;
    form.target = 'AddCom_IFrame';
    form.submit();
}

function setBlogCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/";
}

function getBlogCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}