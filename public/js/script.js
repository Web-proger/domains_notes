$(function () {
    $('#form').submit(function (event) {
        event.preventDefault();
        console.log($('#form').serializeArray());
        $.ajax({
            url: 'ajax',
            success: function (data) {
                //alert('Данные успешно отправлены');
                var msg = ('ip - ' + data.ip + ' , ' + 'Хост - ' + data.host);
                $('#message').append(msg);
                console.log('ip - ' + data.ip, 'Хост - ' + data.host);
            }
        });
    })
});
