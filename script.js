var server = "https://hk68t1mgna.execute-api.us-east-1.amazonaws.com/kotiki";

function serverRequest(data) {
  $.ajax({
    type: 'POST',
    url: server,
    crossDomain: true,
    data: data,
    dataType: 'json',
    success: function(data) {
		document.write(data['data'])
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log('error')
      console.log(jqXHR)
      console.log(textStatus)
      console.log(errorThrown)
    }
  })
}
