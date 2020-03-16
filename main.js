$(document).ready(function(){
    $.getJSON('data.json', function(data){
        let sdData = '';
        $.each(data, function(key, value){
            sdData += '<tr>';
            sdData += '<td>' + value.name + '</td>';
            sdData += '<td>' + value.description + '</td>';
            sdData += '<td>' + "<button class='btn btn-primary'>" + value.location + 'Open in Google Maps' + '</button>' + '</td>';
            sdData += '</tr>';
        });
      $('#table').append(sdData);
    })
})
