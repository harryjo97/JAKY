var divClear = document.getElementById("clear");

var T=60000;
var t=0;

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(timer);
function timer(){
  var data = google.visualization.arrayToDataTable([
          ['Time', 'Percentage'],
          ['Spent',      t],
          ['Remaining',T-t],
        ]);

        var options = {
          title: 'Timer',
          colors: ['white','red'],
          legend: 'none',
          pieSliceText: 'none',
          pieSliceBorderColor: 'black',

        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
        if(t<=T){t+=100;}
}
var clock = setInterval("timer()",100);

function clearTimer(){
  clearInterval(clock);
}
