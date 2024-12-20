drawmap()
function drawmap() {
    d3.csv("./json/卡口数据3.csv", data => {
        let values = []
        data.forEach(d => {
            let jd = parseFloat(d['jd']);
            let wd = parseFloat(d['wd']);
            let name = d['卡口名称']; // 假设卡口名称字段为'卡口名称'
            let cars = parseFloat(d['车辆类型']);
            let number = parseFloat(d['过车数量']);
            values.push([jd, wd, name, cars, number]);
        });

        let Ebmap = echarts.init(document.getElementById('echarts_bmap'));

        option = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    return '经度： ' + params.value[0] +
                        '<br>纬度: ' + params.value[1] +
                        '<br>总过车数量：' + params.value[4];
                }
            },
            bmap: {
                center: [116.08, 36.41],
                zoom: 14,
                roam: true,
            },
            series: [{
                type: 'scatter',
                coordinateSystem: 'bmap',
                symbol: 'triangle', // 设置为三角形
                symbolSize: 20, // 调整三角形大小
                data: values,
                itemStyle: {
                    color: 'red',
                }
            }],
            events: {
                click: function(params) {
                    // 在这里编写点击事件的处理逻辑
                    console.log('点击了地图上的点', params);
                }
            }
        };

        Ebmap.setOption(option);

        Ebmap.on("click", params => {
            var title2 = document.getElementById("title2");
            title2.innerHTML = params.value[2] + "车流量数据统计" + "<br><br><br>";
            console.log(params.value[4]);
            drawchart(params.value[2]);
        });
    });
}
