d3.csv("json/averages.csv", function(data) {
  var processedData = data.map(function(d) {
    return {
      站点: d.站点,
      SO2: Math.round(parseFloat(d.SO2) * 100) / 100,
      NO2: Math.round(parseFloat(d.NO2) * 100) / 100,
      CO: Math.round(parseFloat(d.CO) * 100) / 100,
      O3: Math.round(parseFloat(d.O3) * 100) / 100,
      PM10: Math.round(parseFloat(d.PM10) * 100) / 100,
      'PM2.5': Math.round(parseFloat(d['PM2.5']) * 100) / 100
    };
  });
  console.log(data)
  var chartDom = document.getElementById('radarChart');
  var myChart = echarts.init(chartDom);
  var option;
  var indicator = Object.keys(processedData[0]).slice(1).map(function(key) {
    return { text: key };
  });
  option = {
    color: ['#4287f5', '#f54242', '#42f565', '#f5d442', '#7542f5', '#f542b9', '#42f5e3', '#f57f42'],
    legend: {},
    tooltip: {
      trigger: 'item',
    },
    radar: [
      {
        indicator: indicator,
        center: ['50%', '50%'],
        radius: 200,
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        axisName: {
          formatter: '【{value}】',
          color: '#000000',
        },
        splitArea: {
          areaStyle: {
            color: ['rgb(100,148,170)'],
            // shadowColor: 'rgba(0, 0, 0, 0.2)',
            // shadowBlur: 10,
          },
        },
        axisLine: {

          lineStyle: {
            color: '#000000',
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)',
          },
        },
      },
    ],
    series: [
      {
        type: 'radar',
        emphasis: {
          lineStyle: {
            width: 4,
          },
        },
        data: processedData.map(function(item) {
          return {
            value: Object.values(item).slice(1),
            name: item['站点'],
            areaStyle: {
              opacity: 0.05
            }
          };
        }),
      },
    ],
  };
  option && myChart.setOption(option);
});