Highcharts.chart('container', {
  chart: {
    type: 'variablepie'
  },
 
  tooltip: {
    headerFormat: '',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
      'Area (square km): <b>{point.y}</b><br/>' +
      'Population density (people per square km): <b>{point.z}</b><br/>'
  },
  series: [{
    minPointSize: 10,
    innerSize: '20%',
    zMin: 0,
    name: 'countries',
    borderRadius: 5,
    data: [{
      name: 'Spain',
      y: 160,
      z: 100
    }, {
      name: 'France',
      y: 100,
      z:  100
    }, {
      name: 'Poland',
      y: 10,
      z:  100
    }, {
      name: 'Czech Republic',
      y:120,
      z:  100
    }, {
      name: 'Italy',
      y: 100,
      z:  100
    }, {
      name: 'Switzerland',
      y:20,
      z:  100
    }, {
      name: 'Germany',
      y: 50,
      z:  100
    }],
    colors: [
      '#4caefe',
      '#3dc3e8',
      '#2dd9db',
      '#0f274a44',
      '#0770BA',
      '#0f274a44',
      '#0f274a'
    ]
  }]
});