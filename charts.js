google.charts.load('current', {'packages':['corechart','bar', 'calendar', 'table']});
  google.charts.setOnLoadCallback(drawChart1);
  google.charts.setOnLoadCallback(drawChart2);
  google.charts.setOnLoadCallback(drawChart3);
  google.charts.setOnLoadCallback(drawChart4);
  google.charts.setOnLoadCallback(drawChart5);
  google.charts.setOnLoadCallback(drawTable1);
  function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2013',  1000,      400],
    ['2014',  1170,      460],
    ['2015',  660,       1120],
    ['2016',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0},
    backgroundColor : 'none',
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart.draw(data, options);
  }
  function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
  ]);

  var options = {
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
    bars: 'horizontal',
  };

  var chart = new google.charts.Bar(document.getElementById('barchart_material'));

  chart.draw(data, options);
  }

  function drawChart3() {
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'date', id: 'Date' });
  dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
  dataTable.addRows([
  [ new Date(2016, 3, 13), 20 ],
  [ new Date(2016, 3, 14), 1 ],
  [ new Date(2016, 3, 15), 5 ],
  [ new Date(2016, 3, 16), 0 ],
  [ new Date(2016, 3, 17), 35 ],
  // Many rows omitted for brevity.
  [ new Date(2017, 9, 4), 10],
  [ new Date(2017, 9, 5), 10 ],
  [ new Date(2017, 9, 12), 10 ],
  [ new Date(2017, 9, 13), 10 ],
  [ new Date(2017, 9, 19), 10 ],
  [ new Date(2017, 9, 23), 10 ],
  [ new Date(2017, 9, 24), 10 ],
  [ new Date(2017, 9, 30), 10 ]
  ]);

  var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

  var options = {
  title: "Aplomb Cosultants Placed",
  height: 350,
  calendar: { cellSize: 12.5 }
  };

  chart.draw(dataTable, options);
  }

   function drawChart4() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2017', 1030, 540, 350]
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart'));

        chart.draw(data, options);
      }
      function drawChart5() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
      function drawTable1() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('number', 'Salary');
        data.addColumn('boolean', 'Full Time Employee');
        data.addRows([
          ['Mike',  {v: 10000, f: '$10,000'}, true],
          ['Jim',   {v:8000,   f: '$8,000'},  false],
          ['Alice', {v: 12500, f: '$12,500'}, true],
          ['Bob',   {v: 7000,  f: '$7,000'},  true]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }