d3.csv("json/堆叠图时变数据.csv", function(error, data) {
    if (error) throw error;
    // 解析CSV数据，存储在data数组中
    drawChart(data);
});
function drawChart(data) {
    // 提取日期作为横坐标
    var dates = data.map(function(d) {
        return d.日期;
    });
    // 提取其他几个表头作为纵坐标
    var pm25 = data.map(function(d) {
        return d["PM2.5"];
    });

    var pm10 = data.map(function(d) {
        return d.PM10
    });
    var co = data.map(function(d) {
        return d.CO;
    });

    var no2 = data.map(function(d) {
        return d.NO2;
    });

    var so2 = data.map(function(d) {
        return d.SO2;
    });

    var o3 = data.map(function(d) {
        return d.O3;
    });
    // 使用echarts的实例化对象
    var myChart = echarts.init(document.getElementById('timechange'));

    // 配置图表的选项
    var option = {
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                var content = '';
                for (var i = 0; i < params.length; i++) {
                    var color = params[i].color;
                    var legend = params[i].seriesName;
                    var value = params[i].value;
                    content += '<span style="background-color:' + color + '; color: white; padding: 4px; border-radius: 4px;">' + legend + '</span>: ' + value + '<br>';
                }
                return content;
            }
        },
        legend: {
            data: ['PM2.5', 'PM10', 'CO', 'NO2', 'SO2', 'O3']
        },
        xAxis: {
            type: 'category',
            data: dates
        },
        yAxis: {
            type: 'value'
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                start: 0,
                end: 20
            }
        ],
        series: [
            {
                name: 'PM2.5',
                type: 'line',
                stack: '总量',
                data: pm25,
                lineStyle:{
                    color: 'rgb(238,166,8)'
                },
            },
            {
                name: 'PM10',
                type: 'line',
                stack: '总量',
                data: pm10,
                lineStyle:{
                    color: 'rgb(255,127,50)'
                },
            },
            {
                name: 'CO',
                type: 'line',
                stack: '总量',
                lineStyle:{
                    color: 'rgb(36,40,42)'
                },
                data: co
            },
            {
                name: 'NO2',
                type: 'line',
                stack: '总量',
                data: no2,
                lineStyle:{
                    color: 'rgb(154,45,6)'
                },
            },
            {
                name: 'SO2',
                type: 'line',
                stack: '总量',
                data: so2,
                lineStyle:{
                    color: 'rgb(248,236,118)'
                },
            },
            {
                name: 'O3',
                type: 'line',
                stack: '总量',
                data: o3,
                lineStyle:{
                    color: 'rgb(8,84,122)'
                },
            }
        ]
    };
    // 使用配置项显示图表
    myChart.setOption(option);
    myChart.on('click',params=>{
        console.log(params.seriesName)
        jiangyu(params.seriesName,'data'+params.seriesName)
    })
}