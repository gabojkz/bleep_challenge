var table_row,
    date,
    year,
    month,
    day;

$.ajax({
    url: "http://demo.w-bo.com/api/pos/sample_data",
    type: "GET",
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    success: function(resultData) {

      console.log("success");

      var respond = resultData.sort(function(a,b) { 
        return new Date(a.date).getTime() - new Date(b.date).getTime() 
      });
      
      process_json(respond)

    },
    error : function(jqXHR, textStatus, errorThrown) {
      console.log("error");

    },

    timeout: 120000,
});


function process_json(data) {

  for (var i = 0; i < data.length; i++) { 
    date = new Date(data[i]['date']);

    year = date.getUTCFullYear();
    month = date.getUTCMonth();
    day = date.getUTCDay();

    if( year == 2016 && month == 11 ) {
      
      table_row += '<tr><td>'+ data[i]['product_name'] +'</td>'+
        '<td>£'+ data[i]['totalwotax'] +'</td>'+
        '<td>£'+ data[i]['totalwitax'] +'</td>'+
        '<td>'+ data[i]['date'] +'</td>'+
        '</tr>';  

  
    }
 
  }

  $( ".table_content" ).html( table_row );

}