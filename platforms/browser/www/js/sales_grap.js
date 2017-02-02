var respond,
    counter = 0,
    list_items = [],
    top_products = [];

$.ajax({
    url: "http://demo.w-bo.com/api/pos/sample_data",
    type: "GET",
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    success: function(resultData) {

      console.log("success");

      respond = resultData;
      
      for (var i = 0; i < respond.length; i++) {
        process_json(respond, respond[i].product_code);
      }

    },
    error : function(jqXHR, textStatus, errorThrown) {
      console.log("error");

    },

    timeout: 120000,
});

function process_json( json, product_code ) {
  // find the 5 more common item
  var data = json, // complete json
      count = 1,
      product = product_code, // single element
      total,
      products_names = [],
      exits = list_items.indexOf(product); // check if the single elemente is present 


  if (exits < 0) {
    // count each item
    for (var i = 0; i < data.length; i++) {
      var index = (i+1);

      if( product == data[i]['product_code']){
        total = count++;
      }
    }

    if (total >= 56) {
      // save the code and repetition of the current item 
      list_items.push(product, total);
    }
    
  }

  if (list_items.length >= 5) {

    // find the name of the most popular items

    for (var i = 0; i < data.length; i++) {
      if (list_items[0] == data[i].product_code) {
        products_names.push(data[i].product_name, list_items[1]);
        break;
      }
    }

    for (var i = 0; i < data.length; i++) {
      if (list_items[2] == data[i].product_code) {
        products_names.push(data[i].product_name, list_items[3]);
        break;
      }
    }


    for (var i = 0; i < data.length; i++) {
      if (list_items[4] == data[i].product_code) {
        products_names.push(data[i].product_name, list_items[5]);
        break;
      }
    }


    for (var i = 0; i < data.length; i++) {
      if (list_items[6] == data[i].product_code) {
        products_names.push(data[i].product_name, list_items[7]);
        break;
      }
    }

    for (var i = 0; i < data.length; i++) {
      if (list_items[8] == data[i].product_code) {
        products_names.push(data[i].product_name, list_items[9]);
        break;
      }
    }

    for (var i = 0; i < data.length; i++) {
      if (list_items[10] == data[i].product_code) {
        products_names.push(data[i].product_name, list_items[11]);
        break;
      }
    }

    if (products_names.length == 12 && counter == 0) {
      procces_data(products_names);
      return counter = 1;
    }
  }
}

function procces_data(list){
  top_products = list;

  // Pie Chart 
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
                text: 'Top 5 most sellable products'
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
                name: 'products',
                colorByPoint: true,
                data: [{
                    name: top_products[0],
                    y: top_products[1]
                }, {
                    name: top_products[2],
                    y: top_products[3]
                }, {
                    name: top_products[4],
                    y: top_products[5],
                    sliced: true,
                    selected: true
                }, {
                    name: top_products[6],
                    y: top_products[7]
                }, {
                    name: top_products[8],
                    y: top_products[9]
                }]
            }]
        });
    });

  });

}