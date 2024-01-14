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
      name: 'REGT/RSPD',
      y: 59,
      z: 100
    }, {
      name: 'Logipoint',
      y: 10,
      z:  100
    }, {
      name: 'S.A. Talke',
      y: 10,
      z:  100
    }, {
      name: 'Isnad',
      y:2,
      z:  100
    }, {
      name: 'Elite',
      y: 3,
      z:  100
    }, {
      name: 'Tawzea',
      y:10,
      z:  100
    }, {
      name: 'Kindasa',
      y: 6,
      z:  100
    }],
    colors: [
      '#4caefe',
      '#0f274a',
      '#2B2824',
      '#4caefe',
      '#0770BA',
      '#0f274a',
      '#2B2824'
    ]
  }]
});