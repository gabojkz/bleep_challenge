

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

      var respond = resultData;
      
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
      
      /*table_row += '<tr><td>'+ data[i]['product_name'] +'</td>'+
        '<td>£'+ data[i]['totalwotax'] +'</td>'+
        '<td>£'+ data[i]['totalwitax'] +'</td>'+
        '<td>'+ data[i]['date'] +'</td>'+
        '</tr>'; */  

        var x = data.sort(function(a,b) { 
            return new Date(a.date).getTime() - new Date(b.date).getTime() 
        });

        console.log(x);

    }
 
  }

  $( ".table_content" ).html( table_row );

}
  








$(document).ready(function() {

  $(function () {
      Highcharts.chart('container', {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: 'Browser market shares January, 2015 to May, 2015'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true,
                      format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                      style: {
                          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                      }
                  }
              }
          },
          series: [{
              name: 'Brands',
              colorByPoint: true,
              data: [{
                  name: 'Microsoft Internet Explorer',
                  y: 56.33
              }, {
                  name: 'Chrome',
                  y: 24.03,
                  sliced: true,
                  selected: true
              }, {
                  name: 'Firefox',
                  y: 10.38
              }, {
                  name: 'Safari',
                  y: 4.77
              }, {
                  name: 'Opera',
                  y: 0.91
              }, {
                  name: 'Proprietary or Undetectable',
                  y: 0.2
              }]
          }]
      });
  });

});