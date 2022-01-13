// selector
function selectFilteredDataFromW(w) {
  return w['series'][0]['data'].map((el) => {
    return {
      name: el.name,
      y: el.y,
    }
  })
}

const data = selectFilteredDataFromW(w)

// Build the chart
Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
  },
  title: {
    text: 'Распределение рынка браузеров, 2021',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  accessibility: {
    point: {
      valueSuffix: '%',
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: 'Brands',
      colorByPoint: true,
      data,
    },
  ],
})
