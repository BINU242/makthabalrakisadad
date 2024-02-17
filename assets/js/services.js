/** Api call  */

function callAjax(url, type, data, successCallback, ErrorCallback) {
    $.ajax({
        url: url,
        type: type,
        data: JSON.stringify(data),
        error: function(error) {
            ErrorCallback(JSON.parse(error.responseText));
        },
        success: function(data) {
            successCallback(data);
        }
    });
}

function onGetAppLinkButtonClick(phone) {
    //var phone = document.getElementById('phonenumber').value || document.getElementById('head-phonenumber').value;

    callAjax('#', 'POST', {
        phone_no: phone,
        template_id: 4
    }, function(data) {
        $(".slide-msg-notification").text('Message sent successfully !');
        $(".slide-msg-notification").animate({
            top: "5px"
        });
        setTimeout(function() {
            $(".slide-msg-notification").animate({
                top: "-40px"
            });
        }, 1500);
    }, function(error) {
        $(".slide-msg-notification").text(error.message);
        $(".slide-msg-notification").animate({
            top: "5px"
        });
        setTimeout(function() {
            $(".slide-msg-notification").animate({
                top: "-40px"
            });
        }, 1500);
    })
    $("#phonenumber").val('');
    $("#header-phonenumber").val('');
    $("#head-phonenumber").val('');
}