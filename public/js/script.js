$(function () {
    var form = $('#form');
    form.submit(function (event) {
        event.preventDefault();
        //console.log($('#form').serializeArray());
        $.ajax({
            url: 'ajax',
            type: 'POST',
            data: form.serializeArray(),
            success: function (data) {
                //var msg = ('ip - ' + data.ip + ' , ' + 'Хост - ' + data.host);
                $('#message').append(data);
                //console.log('ip - ' + data.ip, 'Хост - ' + data.host);
                console.log(data);
                form.trigger('reset');
            }
        });
    })
});
