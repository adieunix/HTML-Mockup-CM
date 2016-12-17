/* Angular Ctrl */
var app = angular.module('coinApp', ['chart.js','angularMoment']);
app.controller('coinCtrl', function($scope,moment,$http,$interval) {
    /* GET Offering for Chart */
    function getChart() {
      var getOffers = {
        method: 'GET',
        url: 'http://api.coinmas.com/index.php/customer_transaction/get_daily_chart'
      };
      $http(getOffers)
      .then(function(res) {
        var time = [];
        var value = [];
        for(var i=0;i<res.data.result.length;i++) {
          time.push(moment(res.data.result[i].created_at).format('HH:mm'));
          value.push(res.data.result[i].price/1000)
        }
        //time.unshift(moment().format('HH:mm')); // add current time
        value.push(50); // add latest value
        //var resTime = moment(time)._i;
        console.log(time);
        console.log(value);
        $scope.labels = time;
        $scope.data = [value];
      }, function() {
        $scope.nodata = true;
        console.log('empty');
      });
    }
    getChart();

    /*Interval for 1 minute*/
    $interval(function() {
      getChart();
    }, 60000);
    
    $scope.options = {
      elements: {
        line: { tension: 0 }
      },
      scales: {
        xAxes: [{
          display: true,
          type: 'time',
          ticks: {
            fontSize: 8
          },
          time: {
            format: "HH:mm",
            unit: 'minute',
            unitStepSize: 1,
            displayFormats: {
              'minute': 'HH:mm'
            }
          }
        }],
        yAxes: [{
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            fontSize: 8,
            callback: function(value) {
              if(parseInt(value) > 1000){
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'K';
              } else {
                return value + 'K';
              }
            }
          }
        }]
      }
    };
});