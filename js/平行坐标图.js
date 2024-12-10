d3.csv("json/averages.csv", function(data) {
  var processedData = data.map(function(d) {
    return [
      Math.round(parseFloat(d.SO2) * 100) / 100,
      Math.round(parseFloat(d.NO2) * 100) / 100,
      Math.round(parseFloat(d.CO) * 100) / 100,
      Math.round(parseFloat(d.O3) * 100) / 100,
      Math.round(parseFloat(d.PM10) * 100) / 100,
      Math.round(parseFloat(d['PM2.5']) * 100) / 100,
      d.站点 // 站点作为分类
    ];
  });

  var chartDom = document.getElementById('radarChart');
  var myChart = echarts.init(chartDom);

  // 获取唯一的站点名称
  var uniqueStations = [...new Set(data.map(d => d.站点))];

  // 颜色数组，给每个站点分配不同的颜色
  var colors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#8A2BE2', '#D2691E', '#A52A2A'];

  // 定义平行坐标系的轴
  var parallelAxis = [
    { dim: 0, name: 'SO2' },
    { dim: 1, name: 'NO2' },
    { dim: 2, name: 'CO' },
    { dim: 3, name: 'O3' },
    { dim: 4, name: 'PM10' },
    { dim: 5, name: 'PM2.5' },
    {
      dim: 6,
      name: '站点',
      type: 'category',
      data: uniqueStations, // 获取唯一站点名称
      axisLabel: {
        interval: 0, // 增大间隔，显示所有标签
      }
    }
  ];

  // 配置平行坐标系图表
  var option = {
    parallelAxis: parallelAxis,
    series: uniqueStations.map(function(station, index) {
      return {
        type: 'parallel',
        name: station,
        lineStyle: {
          width: 4,
          color: colors[index % colors.length] // 分配颜色
        },
        data: processedData.filter(function(d) { return d[6] === station; }) // 只选择当前站点的数据
      };
    })
  };

  option && myChart.setOption(option);
});
