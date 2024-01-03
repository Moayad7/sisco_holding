// home charts

var options = {
	chart: {
	  type: 'donut'
	},
	series: [44, 55, 13, 33],
    labels: ['sisco', 'sisco', 'sisco', 'sisco'],
	fill: {
		colors: ['#2B2824', '#0770BA', '#0f274a','#2B2824' ]
	  }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();


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
  
//   var chart = new ApexCharts(document.querySelector("#chart-2"), options);
  
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

  var options = {
	series: [9, 10, 6, 10, 10, 3, 2],
	chart: {
	type: 'polarArea'
  },
  labels: ['RSGT/RSPD 59%', 'Logipoint 10%', 'SA Talke 6%', 'Tawzea 10%', 'Kindasa 10%', 'Isnad 3%', 'Elite 2%'],
  colors: ['#2B2824', '#0770BA', '#0f274a','#2B2824', '#0770BA', '#0f274a' ],
	fill: {
		colors: ['#2B2824', '#0770BA', '#0f274a','#2B2824', '#0770BA', '#0f274a' ]
	  },
  fill: {
	opacity: 1
  },
    stroke: {
	colors: ['#fff']
  },
  yaxis: {
	show: false
  },
  legend: {
	position: 'bottom'
  },
  plotOptions: {
	polarArea: {
	  rings: {
		strokeWidth: 0
	  },
	  spokes: {
		strokeWidth: 0
	  },
	}
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart-2"), options);
  chart.render();