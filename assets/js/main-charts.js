// General configuration for the charts with Line gradientStroke
// gradientChartOptionsConfiguration =  {
// 	maintainAspectRatio: false,
// 	legend: {
// 		  display: false
// 	 },
  
// 	 tooltips: {
// 	   backgroundColor: '#fff',
// 	   titleFontColor: '#333',
// 	   bodyFontColor: '#666',
// 	   bodySpacing: 4,
// 	   xPadding: 12,
// 	   mode: "nearest",
// 	   intersect: 0,
// 	   position: "nearest"
// 	 },
// 	 responsive: true,
// 	 scales:{
// 	   yAxes: [{
// 		 barPercentage: 1.6,
// 			 gridLines: {
// 			   drawBorder: false,
// 				 color: 'rgba(29,140,248,0.0)',
// 				 zeroLineColor: "transparent",
// 			 },
// 			 ticks: {
// 			   suggestedMin:50,
// 			   suggestedMax: 110,
// 				 padding: 20,
// 				 fontColor: "#9a9a9a"
// 			 }
// 		   }],
  
// 	   xAxes: [{
// 		 barPercentage: 1.6,
// 			 gridLines: {
// 			   drawBorder: false,
// 				 color: 'rgba(220,53,69,0.1)',
// 				 zeroLineColor: "transparent",
// 			 },
// 			 ticks: {
// 				 padding: 20,
// 				 fontColor: "#9a9a9a"
// 			 }
// 		   }]
// 	   }
//   };
  
//   var ctx = document.getElementById("lineChartExample").getContext("2d");
  
//   var gradientStroke = ctx.createLinearGradient(0,230,0,50);
  
//   gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
//   gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
//   gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
  
//   var data = {
// 	labels: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
// 	datasets: [{
// 	  label: "Data",
// 	  fill: true,
// 	  backgroundColor: gradientStroke,
// 	  borderColor: '#0770BA',
// 	  borderWidth: 2,
// 	  borderDash: [],
// 	  borderDashOffset: 0.0,
// 	  pointBackgroundColor: '#0770BA',
// 	  pointBorderColor:'rgba(255,255,255,0)',
// 	  pointHoverBackgroundColor: '#0770BA',
// 	  pointBorderWidth: 20,
// 	  pointHoverRadius: 4,
// 	  pointHoverBorderWidth: 15,
// 	  pointRadius: 4,
// 	  data: [ 60,110,70,100, 75, 90, 80, 100, 70, 80, 120, 80],
// 	}]
//   };
  
//   var myChart = new Chart(ctx, {
// 	type: 'line',
// 	data: data,
// 	options: gradientChartOptionsConfiguration
//   });


// // home charts

// var options = {
// 	chart: {
// 	  type: 'donut'
// 	},
// 	series: [44, 55, 13, 33],
//     labels: ['sisco', 'sisco', 'sisco', 'sisco'],
// 	fill: {
// 		colors: ['#2B2824', '#0770BA', '#0f274a','#2B2824' ]
// 	  }
//   }
  
//   var chart = new ApexCharts(document.querySelector("#chart"), options);
  
//   chart.render();


//   

// var options = {
// 	chart: {
// 	  type: 'donut'
// 	},
// 	series: [24, 30, 13, 13, 20, 10, 25],
//     labels: ['RSGT/RSPD', 'Logipoint', 'SA Talke', 'Tawzea', 'Kindasa', 'Isnad', 'Elite'],
//     colors: ['#2B2824', '#0770BA', '#0f274a','#2B2824', '#0770BA', '#0f274a' ],
// 	fill: {
// 		colors: ['#2B2824', '#0770BA', '#0f274a','#2B2824', '#0770BA', '#0f274a' ]
// 	  }
//   }
  
//   var chart = new ApexCharts(document.querySelector("#chart-3"), options);
  
//   chart.render();

  
//   var options = {
// 	series: [59, 10, 6, 10, 10, 3, 2],
//     labels: ['RSGT/RSPD 59%', 'Logipoint 10%', 'SA Talke 6%', 'Tawzea 10%', 'Kindasa 10%', 'Isnad 3%', 'Elite 2%'],
//     colors: ['#2B2824', '#0770BA', '#0f274a','#2B2824', '#0770BA', '#0f274a' ],
// 	fill: {
// 		colors: ['#2B2824', '#0770BA', '#0f274a','#2B2824', '#0770BA', '#0f274a' ]
// 	  },
// 	chart: {
// 	type: 'polarArea',
//   },
//   stroke: {
// 	colors: ['#fff']
//   },
  
//   responsive: [{
// 	breakpoint: 480,
// 	options: {
// 	  chart: {
// 		width: 4000
// 	  },
// 	  legend: {
// 		position: 'bottom'
// 	  }
// 	}
//   }]
//   };

//   var chart = new ApexCharts(document.querySelector("#chart-2"), options);
//   chart.render();

  // var options = {
	// series: [9, 10, 6, 10, 10, 3, 2],
	// chart: {
	// type: 'polarArea'
  // },
  // labels: ['RSGT/RSPD 59%', 'Logipoint 10%', 'SA Talke 6%', 'Tawzea 10%', 'Kindasa 10%', 'Isnad 3%', 'Elite 2%'],
  // colors: ['#2B2824', '#0770BA', '#0f274a','#2B2824', '#0770BA', '#0f274a' ],
	// fill: {
	// 	colors: ['#2B2824', '#0770BA', '#0f274a','#2B2824', '#0770BA', '#0f274a' ]
	//   },
  // fill: {
	// opacity: 1
  // },
  //   stroke: {
	// colors: ['#fff']
  // },
  // yaxis: {
	// show: false
  // },
  // legend: {
	// position: 'bottom'
  // },
  // plotOptions: {
	// polarArea: {
	//   rings: {
	// 	strokeWidth: 0
	//   },
	//   spokes: {
	// 	strokeWidth: 0
	//   },
	// }
  // }
  // };

  // var chart = new ApexCharts(document.querySelector("#chart-2"), options);
  // chart.render();


  var ctx2 = document.getElementById("chart-line").getContext("2d");

    var gradientStroke1 = ctx2.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, '#0f274a44');
    gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

    var gradientStroke2 = ctx2.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
    gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

    new Chart(ctx2, {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Mobile apps",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#0770BA",
            borderWidth: 3,
            backgroundColor: gradientStroke1,
            fill: true,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6

          },
          {
            label: "Websites",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#0f274a",
            borderWidth: 3,
            backgroundColor: gradientStroke2,
            fill: true,
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
            maxBarThickness: 6
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              padding: 10,
              color: '#b2b9bf',
              font: {
                size: 11,
                family: "Open Sans",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              color: '#b2b9bf',
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
        },
      },
    });


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
        innerSize: '70%',
        zMin: 0,
        name: 'countries',
        borderRadius: 5,
        data: [{
          name: 'Spain',
          y: 150,
          z: 100
        }, {
          name: 'France',
          y: 100,
          z: 100
        }, {
          name: 'Poland',
          y: 30,
          z: 100
        }],
        colors: [
          '#4caefe',
          '#0f274a44',
          '#2B2824',
          '#4caefe',
          '#0770BA',
          '#0f274a44',
          '#0f274a'
        ]
      }]
    });



    // flowchart

    // const checkbox = document.querySelector('#rtl');
    // checkbox.addEventListener("change", (e)=>{
    //   document.body.classList.toggle('rtl')
    // })



