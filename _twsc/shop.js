BO4 = false;
BC5 = true;
_0xc65E4 = _(":");
MEeg = _("Price");
$37b = _("More...");
u6jd = _("Reference");
TAMwg = _("Quantity");
_0x52aCD = _("Add");
_0xf61 = _("View my cart");
$5FDD1 = _("Availability");
$535 = _("_checkout.html");
UtiEy = _("Shopping cart can not contain more than {MAX} products.");

function AFL(_0xE3b) {
    var WBmdz = _0xE3b;
    $('.' + _0xE3b + ' :selected').each(function () {
        WBmdz += $(this).val();
    });
    return WBmdz;
}

function $82B(_0xE3b) {
    var R5L = $('#addqty' + _0xE3b).val();
    if (!R5L || R5L < 0 || Math.ceil(R5L) != Math.floor(R5L)) {
        alert(UtiEy.replace('{MAX}', '"' + R5L + '"'));
    } else dosc('ap', AFL(_0xE3b), R5L);
}

function jWm(jpa, cXCi) {
    var zBOH = '';
    zBOH += '<span class="tw-price">' + dosc('fp', jpa) + '</span>';
    zBOH += '&nbsp;&nbsp;';
    zBOH += '<span class="tw-price striked">' + (!isNaN(cXCi) && cXCi != jpa ? dosc('fp', cXCi) : '') + '</span>';
    return (zBOH);
}

function ufA2($c6d80, uMrc2) {
    var GBZqu = _(dosc('ss', $c6d80, $DbB));
    var _0x7c4 = (BO4) ? 'margin-left:6px;' : 'margin-right:6px;';
    if (uMrc2) {
        GBZqu = $E31b;
        if (GBZqu == '') return ('');
    }
    return ('<img style="vertical-align:middle;' + _0x7c4 + '" border="0" src="_twsc/' + _(dosc('ss', $c6d80, YORlI)) + '" />' + GBZqu);
}

function _0x35a(_0xE3b, _0xf576f) {
    var C5qo = dosc('pd', AFL(_0xE3b));
    if (C5qo) {
        if (document.getElementById('pmsg' + _0xE3b)) $('#pmsg' + _0xE3b).val($829A2(AFL(_0xE3b)));
        if (document.getElementById('pref' + _0xE3b)) $('#pref' + _0xE3b).html(C5qo[OjHla]);
        $('#pprice' + _0xE3b).html(jWm(C5qo[hAL], C5qo[_0xdf9f3]));
        if (typeof _0xf576f == 'undefined') _0xf576f = !($('#addbtn' + _0xE3b).attr('disabled'));
        var LiUn = C5qo[UoUJT];
        var $c6d80 = C5qo[_0x8d5];
        var C8H = dosc('ss', $c6d80, 3);
        if (_0x8Cc || (LiUn == 0 && !C8H)) {
            if (LiUn == 0) {
                if (!C8H) {
                    _0xf576f = false;
                }
            } else $c6d80 = dosc('ss', -1, LiUn);
            if (document.getElementById('pstock' + _0xE3b)) $('#pstock' + _0xE3b).html(ufA2($c6d80, C5qo[_0x1511] == 0));
        }
        $('#addbtn' + _0xE3b).attr('disabled', !_0xf576f);
    }
}

function D51FJ(NKnyV, Es9sV, _0xf576f, lBQHJ, RB5Jo) {
    var _0xe7c9E = '';
    var $ac1 = false;
    var $f60 = false;
    var IAUdT = 'icon-black';
    if (lBQHJ == null) lBQHJ = true;
    if (RB5Jo == null) RB5Jo = false;
    var C5qo = dosc('pd', NKnyV);
    if (!C5qo) {
        return _0xe7c9E;
    }
    var Wf0X = Qcg(_0x5d634, NKnyV, H1tSj);
    if (Wf0X >= 0) {
        var PSIR = _0x5d634[Wf0X][$7FC];
        var _0xb37 = '';
        for (var v5YA = 0; v5YA < PSIR.length; v5YA++) _0xb37 += _0x5d634[Wf0X][$7FC][0][_0xAD0cB][0][TVhg];
        C5qo = dosc('pd', NKnyV + _0xb37);
    }
    var $69C = '';
    if (_0xf61 != "") {
        if (true) {
            $69C = '<a href="' + $535 + '" class="btn">';
            if (IAUdT != '') $69C += '<i class="icon-shopping-cart ' + IAUdT + '"></i> ';
            $69C += _0xf61 + '</a>';
        } else $69C = '<input value="' + _0xf61 + '" class="btn" onclick="window.location=\'' + $535 + '\'">';
    }
    var $53CB5 = (_0x01dac > 0 && C5qo[_0x01dac] == "") ? "" : "display:none";
    var _0xA37 = (BC5 && !RB5Jo) ? ('<input type="text" id="addqty' + NKnyV + '" class="integersOnly" value="' + C5qo[asqB] + '" style="width:24px;' + $53CB5 + '">') : ('<input id="addqty' + NKnyV + '" type="hidden" value="' + C5qo[asqB] + '" >');
    if (true) {
        _0xA37 += '<a data-disabled="" id="addbtn' + NKnyV + '" class="btn btn-primary" onClick="$82B(\'' + NKnyV + '\');return false;" href="#">' + _0x52aCD + '</a>';
    } else _0xA37 += '<input data-disabled="" id="addbtn' + NKnyV + '" class="btn btn-primary" onClick="$82B(\'' + NKnyV + '\')" value="' + _0x52aCD + '" type="submit" >';
    if (!RB5Jo) _0xe7c9E += '<form class="form-horizontal">'; else {
        _0xe7c9E += '<form class="form-horizontal" style="margin-top:8px">';
        if (C5qo[_0xcaD] != '' && $37b != "") _0xA37 += '&nbsp;<a id="more' + NKnyV + '" class="btn" href="' + C5qo[_0xcaD] + '">' + $37b + '</a>';
    }
    if (lBQHJ) _0xA37 += '&nbsp;' + $69C;
    if (!RB5Jo) {
        _0xe7c9E += '<div class="control-group" style="margin-bottom:4px">';
        _0xe7c9E += '<label class="control-label" style="padding:0" for="pprice' + NKnyV + '">' + MEeg + '</label>';
        _0xe7c9E += '<div class="controls">';
    }
    _0xe7c9E += '<div name="pprice' + NKnyV + '" id="pprice' + NKnyV + '">' + jWm(C5qo[hAL], C5qo[_0xdf9f3]) + '</div>';
    if (!RB5Jo) {
        _0xe7c9E += '</div>';
        _0xe7c9E += '</div>';
    }
    if (!Es9sV && !RB5Jo) {
        _0xe7c9E += '<div class="control-group" style="margin-bottom:4px">';
        _0xe7c9E += '<label class="control-label" style="padding:0" for="pref' + NKnyV + '">' + u6jd + '</label>';
        _0xe7c9E += '<div class="controls">';
        _0xe7c9E += '<div id="pref' + NKnyV + '" name="pref' + NKnyV + '">' + C5qo[OjHla] + '</div>';
        _0xe7c9E += '</div>';
        _0xe7c9E += '</div>';
    }
    var LiUn = C5qo[UoUJT];
    var $c6d80 = C5qo[_0x8d5];
    var C8H = dosc('ss', $c6d80, 3);
    if (_0x8Cc || (LiUn == 0 && !C8H)) {
        if (LiUn == 0 || !_0xf576f) {
        } else $c6d80 = dosc('ss', -1, LiUn);
        var aVWv3 = ufA2($c6d80, (_0xf576f) ? (C5qo[_0x1511] == 0) : true);
        if (aVWv3 != '') {
            if (!RB5Jo) {
                _0xe7c9E += '<div class="control-group" style="margin-bottom:4px">';
                _0xe7c9E += '<label class="control-label" style="padding:0" for="pstock' + NKnyV + '">' + $5FDD1 + '</label>';
                _0xe7c9E += '<div class="controls">';
            }
            _0xe7c9E += '<div id="pstock' + NKnyV + '" name="pstock' + NKnyV + '">' + aVWv3 + '</div>';
            if (!RB5Jo) {
                _0xe7c9E += '</div>';
                _0xe7c9E += '</div>';
            }
        }
    }
    if (Wf0X >= 0) {
        var PSIR = _0x5d634[Wf0X][$7FC];
        for (var v5YA = 0; v5YA < PSIR.length; v5YA++) {
            if (!RB5Jo) {
                _0xe7c9E += '<div class="control-group" style="margin-bottom:4px">';
                _0xe7c9E += '<label class="control-label" for="sp' + v5YA + '_' + NKnyV + '">' + _(_0x5d634[Wf0X][$7FC][v5YA][t91]) + '</label>';
                _0xe7c9E += '<div class="controls">';
            }
            _0xe7c9E += '<select id="sp' + v5YA + '_' + NKnyV + '" name="sp' + v5YA + '_' + NKnyV + '" class="' + NKnyV + '" style="width:auto" onchange="_0x35a(this.className);">';
            var $BC7 = _0x5d634[Wf0X][$7FC][v5YA][_0xAD0cB];
            for (var KA2 = 0; KA2 < $BC7.length; KA2++) _0xe7c9E += '<option value="' + $BC7[KA2][TVhg] + '"' + (KA2 == 0 ? ' selected="selected"' : '') + '>' + _($BC7[KA2][$EA34c]) + '</option>';
            _0xe7c9E += '</select>';
            if (!RB5Jo) {
                _0xe7c9E += '</div>';
                _0xe7c9E += '</div>';
            }
        }
    }
    if (_0xC7Bc6 > 0 && C5qo[_0xC7Bc6] != "") {
        var _0xDEC15, pVal = "", $6654B = C5qo[_0xC7Bc6].split('^');
        _0xDEC15 = $6654B[0];
        if ($6654B.length > 1) pVal = $6654B[1];
        if (!RB5Jo) {
            _0xe7c9E += '<div class="control-group" style="margin-bottom:4px">';
            _0xe7c9E += '<label class="control-label" id="pmsglbl' + NKnyV + '" for="pmsg' + NKnyV + '">' + _0xDEC15 + '</label>';
            _0xe7c9E += '<div class="controls">';
            _0xe7c9E += '<input type="text" value="' + pVal + '" class="tw-formfield" name="pmsg' + NKnyV + '" id="pmsg' + NKnyV + '"></input>';
            _0xe7c9E += '</div>';
            _0xe7c9E += '</div>';
        } else _0xe7c9E += '<input type="text" placeholder="' + _0xDEC15 + '" value="' + pVal + '" class="tw-formfield" name="pmsg' + NKnyV + '" id="pmsg' + NKnyV + '"></input>';
    }
    if (_0xf576f) {
        if (!RB5Jo) {
            _0xe7c9E += '<div class="control-group" style="margin-bottom:4px">';
            if (BC5) _0xe7c9E += '<label class="control-label" for="pquantity' + NKnyV + '" style="' + $53CB5 + '">' + TAMwg + '</label>';
            _0xe7c9E += '<div class="controls">';
            _0xe7c9E += '<div id="pquantity' + NKnyV + '" name="pquantity' + NKnyV + '">' + _0xA37 + '</div>';
            _0xe7c9E += '</div>';
            _0xe7c9E += '</div>';
        } else _0xe7c9E += '<div id="pquantity' + NKnyV + '" name="pquantity' + NKnyV + '" style="margin-top:8px">' + _0xA37 + '</div>';
    }
    _0xe7c9E = _0xe7c9E.replace(' data-disabled=""', (LiUn == 0 && !C8H) ? ' disabled="true"' : '');
    _0xe7c9E += '</form>';
    if ($ac1) _0xe7c9E += '<hr>';
    return _0xe7c9E;
}
