if ($('#form').length) {
    $('.required-field').each(function () {
        var input = $(this);
        input.on('input', function () {
            if (input.val().length > 0) {
                input.addClass('populated');
            } else {
                input.removeClass('populated');
            };
            if ($('.required-field').length === $('.required-field.populated').length) {
                $('#connect-btn').removeClass('disabled');
            } else {
                $('#connect-btn').addClass('disabled');
            }
        });
    });
    $('#connect-btn').click(function () {
        if (!($('#connect-btn').hasClass('disabled'))) {
            $(location).attr('href', 'https://m.me/114032010428817?ref=pro');
        }
    })
};

if ($('#my-card').length) {
    $('#enter').click(function () {
        $('.my-card-enter').css('display', 'none');
        $('.my-card-image-open').css('display', 'block');
        $('.my-card').css('background', '#f6f6f7');
    });

    $('.my-card-button').click(function () {
        if ($(this).hasClass('my-card-button-secondary')) {
            return
        } else {
            var newVal = $('#password').val() + $(this).val();
            $('#password').val(newVal);
        }
    })
};

if ($('#advantages').length) {
    $('#post').click(function () {
        var url = "https://cc8ab49f3567.ngrok.io/max";
        $.ajax({
           type: "POST",
           url: url,
           data: 'ref=max',
           success: function(data)
           {
               console.log(data);
           }
         });
        $(location).attr('href', 'https://alfabank.ru/everyday/debit-cards/alfacard/#ApplyCardForm');
    })
};

if ($('#card-conditions').length) {
    $('#plus').click(function() {
        if ($('.card-conditions-agreement-extended').css('display') === 'block') {
            $('.card-conditions-agreement-extended').slideUp();
            $('#plus').css('transform', 'rotate(-45deg)');
        } else {
            $('.card-conditions-agreement-extended').slideDown();
            $('#plus').css('transform', 'rotate(45deg)');
        }
    })
};

if ($('#profile-new').length) {
    $('.profile-carousel').slick({
        infinite: true,
        centerMode: true,
        arrows: false,
        slidesToShow: 2,
        centerPadding: '20px',
    });

    var name = $(location).attr('search');
    if (name.indexOf('&') !== -1) {
        name = name.split("").splice(0, name.indexOf('&')).join('');
    }
    var newName = decodeURIComponent(name.replace('?', '').replace('_', ' '));
    $('#username').text(newName);
    if(newName.indexOf(' ') === -1) {
        var ava = newName[0];
    } else {
        var index = newName.indexOf(' ') + 1;
        var ava = newName[0] + newName[index];
    }
    $('#ava').text(ava);
    console.log({name, newName, index, ava})
};

if (('#messenger-btn').length) {
    $('.messenger-btn').click(function () {
        var data = $(location).attr('search');
        if (data.indexOf('&') !== -1) {
            data = data.split("").splice(0, data.indexOf('&')).join('');
        }
        var customerId = data.replace('?customerId=', '');
        var url;
        if ($(this).attr('id') === 'messenger-fb') {
            url = 'https://m.me/114032010428817?ref=' + customerId;
        } else if ($(this).attr('id') === 'messenger-tg') {
            url = 'https://t.me/afriend_nodered_bot?ref=' + customerId;
        }
        $(location).attr('href', url);
    })
}
