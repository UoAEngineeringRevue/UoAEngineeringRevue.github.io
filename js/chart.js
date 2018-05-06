function drawChart() {
    Papa.parse("https://danwong.nz/fantasypl/data/gameweek_cumulative_points.csv", {
      download: true,
      complete: function(results) {
        var data = new google.visualization.DataTable();
        results.data.splice(-1,1);
        data.addRows(results.data.length)
        for (var i = 0; i < results.data.length; i++) {
          if (i == 0) {
            for (var j = 0; j < 4; j++) {
              data.addColumn('number', results.data[i][j]);
            }
          } else {
            for (var j = 0; j < 4; j++) {
              data.setCell(i, j, results.data[i][j]);
            }
          }
        }

        var options = {
          title: 'Points Through the Season',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('cumulative-graph-div'));

        chart.draw(data, options);
      }
    });

    Papa.parse("https://danwong.nz/fantasypl/data/gameweek_points.csv", {
      download: true,
      complete: function(results) {
        var data = new google.visualization.DataTable();
        results.data.splice(-1,1);
        data.addRows(results.data.length)
        for (var i = 0; i < results.data.length; i++) {
          if (i == 0) {
            for (var j = 0; j < 4; j++) {
              data.addColumn('number', results.data[i][j]);
            }
          } else {
            for (var j = 0; j < 4; j++) {
              data.setCell(i, j, results.data[i][j]);
            }
          }
        }

        var options = {
          title: 'Points Per Gameweek',
          legend: { position: 'bottom' },
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('points-gameweek-div'));

        chart.draw(data, options);
      }
    });

    Papa.parse("https://danwong.nz/fantasypl/data/gameweek_bench_points.csv", {
      download: true,
      complete: function(results) {
        var data = new google.visualization.DataTable();
        results.data.splice(-1,1);
        data.addRows(results.data.length)

        var cumulative_sum = []
        for (var i = 0; i < 3; i++) {
          cumulative_sum[i] = 0;
        }
        for (var i = 0; i < results.data.length; i++) {
          if (i == 0) {
            for (var j = 0; j < 4; j++) {
              data.addColumn('number', results.data[i][j]);
            }
          } else {
            for (var j = 0; j < 4; j++) {
              if (j == 0) {
                data.setCell(i, j, results.data[i][j]);
              } else {
                cumulative_sum[j - 1] += parseInt(results.data[i][j]);
                data.setCell(i, j, cumulative_sum[j - 1]);
              } 
            }
          }
        }

        var options = {
          title: 'Bench Points Over the Season',
          legend: { position: 'bottom' },
        };

        var chart = new google.visualization.LineChart(document.getElementById('bench-points-gameweek-div'));

        chart.draw(data, options);
      }
    });

    Papa.parse("https://danwong.nz/fantasypl/data/gameweek_combined_points.csv", {
      download: true,
      complete: function(results) {
        var data = new google.visualization.DataTable();
        results.data.splice(-1,1);
        data.addRows(results.data.length)

        var cumulative_sum = []
        for (var i = 0; i < 3; i++) {
          cumulative_sum[i] = 0;
        }
        for (var i = 0; i < results.data.length; i++) {
          if (i == 0) {
            for (var j = 0; j < 4; j++) {
              data.addColumn('number', results.data[i][j]);
            }
          } else {
            for (var j = 0; j < 4; j++) {
              if (j == 0) {
                data.setCell(i, j, results.data[i][j]);
              } else {
                cumulative_sum[j - 1] += parseInt(results.data[i][j]);
                data.setCell(i, j, cumulative_sum[j - 1]);
              } 
            }
          }
        }

        var options = {
          title: 'Combined Points Over the Season',
          legend: { position: 'bottom' },
        };

        var chart = new google.visualization.LineChart(document.getElementById('combined-points-gameweek-div'));

        chart.draw(data, options);
      }
    });
  }