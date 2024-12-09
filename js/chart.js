drawchart('100卡口')
function drawchart(p){
    d3.csv('json/各卡口数据新/'+p+'.csv', function(data) {
        var chartDom = document.getElementById('chart');
        var myChart = echarts.init(chartDom);
        var option;
        var dateSet = new Set(data.map(item => `${item.年}.${item.月}.${item.日}`));
        var xAxisData = Array.from(dateSet);
        var filteredData1 = data.filter(item => item.车辆类型 === '中型栏板货车');
        var xAxisData1 = filteredData1.map(item => item.过车数量);
        var filteredData3 = data.filter(item => item.车辆类型 === '大型普通客车');
        var xAxisData3 = filteredData3.map(item => item.过车数量);
        var filteredData4 = data.filter(item => item.车辆类型 === '大型汽车');
        var xAxisData4 = filteredData4.map(item => item.过车数量);
        var filteredData5 = data.filter(item => item.车辆类型 === ' 小型普通客车');
        var xAxisData5 = filteredData5.map(item => (+item.过车数量));
        var filteredData6 = data.filter(item => item.车辆类型 === '小型汽车');
        var xAxisData6 = filteredData6.map(item => item.过车数量);
        var filteredData7 = data.filter(item => item.车辆类型 === '微型栏板货车');
        var xAxisData7 = filteredData7.map(item => item.过车数量);
        var filteredData8 = data.filter(item => item.车辆类型 === '普通二轮摩托车');
        var xAxisData8 = filteredData8.map(item => item.过车数量);
        var filteredData9 = data.filter(item => item.车辆类型 === '重型栏板货车');
        var xAxisData9 = filteredData9.map(item => item.过车数量);
        var filteredData10 = data.filter(item => item.车辆类型 === '中型轿车');
        var xAxisData10 = filteredData10.map(item => item.过车数量);
        var filteredData11 = data.filter(item => item.车辆类型 === '大型轿车');
        var xAxisData11 = filteredData11.map(item => item.过车数量);
        var filteredData12 = data.filter(item => item.车辆类型 === '轻型栏板货车');
        var xAxisData12 = filteredData12.map(item => item.过车数量);
        var filteredData13 = data.filter(item => item.车辆类型 === '重型栏板半挂车');
        var xAxisData13 = filteredData13.map(item => item.过车数量);
        var filteredData14 = data.filter(item => item.车辆类型 === '中型普通客车');
        var xAxisData14 = filteredData14.map(item => item.过车数量);
        option = {
            title: {
                textStyle: {
                    verticalAlign: 'middle',  // 设置文字垂直对齐方式
                    align: 'right',           // 设置文字水平对齐方式
                },
                rotate: 90,  // 设置文字旋转角度
                left: 'left'  // 指定标题位置在左边
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['中型栏板货车',
                    '其它',
                    '大型普通客车',
                    '大型汽车',
                    '小型普通客车',
                    '小型汽车',
                    '微型栏板货车',
                    '普通二轮摩托车',
                    '重型栏板货车',
                    '中型轿车',
                    '大型轿车',
                    '轻型栏板货车',
                    '重型栏板半挂车',
                    '中型普通客车',]
            },

            xAxis: {

                type: 'category',
                boundaryGap: false,
                data: xAxisData,
            },
            yAxis: {
                type: 'value'
            },
            visualMap: {
                top: 50,
                right: 10,
                pieces: [
                    {
                        gt: 0,
                        lte: 50,
                        color: '#93CE07'
                    },
                    {
                        gt:50,
                        lte: 100,
                        color: '#f8ec76'
                    },
                    {
                        gt:100,
                        lte: 150,
                        color: '#ff7f32'
                    },
                    {
                        gt:150,
                        lte: 200,
                        color: '#c72506'
                    },
                    {
                        gt:200,
                        lte: 500,
                        color: '#AA069F'
                    },
                    {
                        gt:500,
                        color: '#5e0483'
                    }
                ],
                outOfRange: {
                    color: '#999'
                }
            },
            series: [
                {
                    name: '中型栏板货车',
                    type: 'line',
                    stack: 'Total',
                    showSymbol: false,
                    data: xAxisData1
                },
                {
                    name: '大型普通客车',
                    type: 'line',
                    showSymbol: false,
                    stack: 'Total',
                    data: xAxisData3
                },
                {
                    name: '大型汽车',
                    type: 'line',
                    showSymbol: false,
                    stack: 'Total',
                    data: xAxisData4
                },
                {
                    name: '小型普通客车',
                    type: 'line',
                    showSymbol: false,
                    stack: 'Total',
                    data: xAxisData5
                },
                {
                    name: '小型汽车',
                    type: 'line',
                    showSymbol: false,
                    stack: 'Total',
                    data: xAxisData6
                },
                {
                    name: '微型栏板货车',
                    type: 'line',
                    showSymbol: false,
                    stack: 'Total',
                    data: xAxisData7
                },
                {
                    name: '重型栏板货车',
                    type: 'line',
                    showSymbol: false,
                    stack: 'Total',
                    data: xAxisData9
                },
                {
                    name: '中型轿车',
                    type: 'line',
                    showSymbol: false,
                    stack: 'Total',
                    data: xAxisData10
                },
                {
                    name: '大型轿车',
                    type: 'line',
                    showSymbol: false,
                    stack: 'Total',
                    data: xAxisData11
                },
                {
                    name: '轻型栏板货车',
                    type: 'line',
                    showSymbol: false,
                    stack: 'Total',
                    data: xAxisData12
                },
                {
                    name: '重型栏板半挂车',
                    type: 'line',
                    showSymbol: false,
                    stack: 'Total',
                    data: xAxisData13
                },
                {
                    name: '中型普通客车',
                    type: 'line',
                    showSymbol: false,
                    stack: 'Total',
                    data: xAxisData14
                },
            ],
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 200
                },
                {
                    start: 0,
                    end: 200
                }
            ],
        };
        option && myChart.setOption(option);
    });
}
