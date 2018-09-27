$(function () {
    var form = $('#form');
    form.submit(function (event) {
        event.preventDefault();
        $.ajax({
            url: 'ajax',
            type: 'POST',
            data: form.serializeArray(),
            success: function (data) {
                $('#message').addClass('alert alert-success mt-2').html('Домен <b>' + data + '</b> добавлен в db');
                console.log(data);
                form.trigger('reset');
            }
        });
    })
});
