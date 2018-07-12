// document.write("<script language=javascript src='echarts.min.js'></script>");
var timer = null;
var app = {
    initChart_day1: function(datajson) {
        var $indexChart = $('#indexChart')[0];
        // $('#indexChart').css({
        //     'height': window.innerHeight,
        // })

        var indexChart = echarts.init($indexChart);
        var xAxisData = [];
        var seriesData = [];

        datajson.forEach((v) => {
            xAxisData.push(v[0]);
            seriesData.push(v[1]);
        })

        var option_day1 = {
            grid: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
             grid: {
        left: '3%',
        right: '4%',
        bottom: '9%',
        containLabel: true
    },
            tooltip: {
                trigger: 'axis',
                label: {
                    show: true,
                },
                backgroundColor: '#F6F8FA',
                textStyle: {
                    color: '#333',
                    fontSize: 16,
                },
                axisPointer: {
                    lineStyle: {
                        color: '#2869c9',
                        shadowColor: '#2869c9',
                        opacity: 0.5,
                    }
                },
                padding: [10, 20],
                confine: true,
                formatter: '<i>{b0}</i> <br />' + 
                    '<div class="mt10">' +
                        '<span class="tootip-dot"></span>' +
                        '<span class="ft18">Index: </span><span class="blue">{c0}</span>' +
                    '</div>',
            },
            //X轴设置
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data: xAxisData,
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        show: true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#343a40',
                            opacity: 0.5,
                        }
                    }
                }
            ],
            //Y轴设置
            yAxis : [
                {
                    type : 'value',
                    show: false,
                    name:'市值'
                    // min:'1000',
                    // max:'50000',
                    // splitNumber:1000
                }
            ],
            //线性设置
            series : [
                {
                    name: 'index',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 2,
                    itemStyle: {
                        normal: {
                            color:'#009e73',  //圈圈的颜色
                            lineStyle:{  
                                color:'#009e73'
                            },
                        }
                    },
                    areaStyle:{
                        // normal:{
                           //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
                
                                offset: 0,
                                color: 'rgba(80,141,255,0.39)'
                            }, {
                                offset: .34,
                                color: 'rgba(56,155,255,0.25)'
                            },{
                                offset: 1,
                                color: 'rgba(38,197,254,0.00)'
                            }])
                
                        },
                    lineStyle: {
                        width: 0,
                    },
                    data: seriesData
                }
            ]
        };

        //echarts设置生效
        indexChart.setOption(option_day1,true);
    },

        initChart_min5: function(datajson) {
        var $indexChart = $('#indexChart')[0];
        $('#indexChart').css({
            'height': window.innerHeight - 180,
        })

        var indexChart = echarts.init($indexChart);
        var xAxisData = [];
        var seriesData = [];

        datajson.forEach((v) => {
            xAxisData.push(v[0]);
            seriesData.push(v[1]);
        })

                var option_min5 = {
            grid: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
   
    grid: {
        left: '3%',
        right: '4%',
        bottom: '9%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}//将统计图保存为
        }
        ,right:100
        ,top:0
    },           
            tooltip: {
                trigger: 'axis',
                label: {
                    show: true,
                },
                backgroundColor: '#F6F8FA',
                textStyle: {
                    color: '#333',
                    fontSize: 16,
                },
                axisPointer: {
                    lineStyle: {
                        color: '#2869c9',
                        shadowColor: '#2869c9',
                        opacity: 0.5,
                    }
                },
                padding: [10, 20],
                confine: true,
                formatter: '<i>{b0}</i> <br />' + 
                    '<div class="mt10">' +
                        '<span class="tootip-dot"></span>' +
                        '<span class="ft18">Index: </span><span class="blue">{c0}</span>' +
                    '</div>',
            },
            //X轴设置
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data: xAxisData,
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        show: true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#343a40',
                            opacity: 0.5,
                        }
                    }
                }
            ],
            //Y轴设置
            yAxis : [
                {
                    type : 'value',
                    show: true,
                    name:'市值',
                    min:'14500',
                    max:'15300',
                    // splitNumber:500
                }
            ],
            //线性设置
            series : [
                {
                    name: 'index',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 2,
                    itemStyle: {
                        normal: {
                            color:'#009e73',  //圈圈的颜色
                            lineStyle:{  
                                color:'#009e73'
                            },
                        }
                    },
                    areaStyle:{
                        // normal:{
                           //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
                
                                offset: 0,
                                color: 'rgba(80,141,255,0.39)'
                            }, {
                                offset: .34,
                                color: 'rgba(56,155,255,0.25)'
                            },{
                                offset: 1,
                                color: 'rgba(38,197,254,0.00)'
                            }])
                
                        },
                    lineStyle: {
                        width: 0,
                    },
                    data: seriesData
                }
            ]
        };

        indexChart.setOption(option_min5,true);
    },


    ajaxUrlMap: {
        day1: 'http://47.75.103.110:5000/dv',
        min5: 'http://47.75.103.110:5000/dv_5min',
    },

    tabArr: [],

    fetchChartData_day1(url) {
        $.ajax({
            url: url,
            success: function(res) {
                app.initChart_day1(res);
            },
            error: function(err) {
            }
        });
    },

    fetchChartData_min5(url) {
        $.ajax({
            url: url,
            success: function(res) {
                app.initChart_min5(res);
            },
            error: function(err) {
            }
        });
    },

    setIntervalMin5() {
        timer = setInterval(function() {
            app.fetchChartData_min5(app.ajaxUrlMap.min5);
        }, 300000);
    },

    clearIntervalMin5() {
        clearInterval(timer);
    }
};


//入口页面首先day1
app.fetchChartData_day1(app.ajaxUrlMap.day1);


//tab功能设置
$('.tab-btn').click(function() {
    var urlArr = [];
    var tabIndex = $(this).index();
    $('.tab-btn').removeClass('btn-checked');
    $(this).addClass('btn-checked');

    // for (item in app.ajaxUrlMap) {
    //     urlArr.push(app.ajaxUrlMap[item]); 
    // }

    // app.fetchChartData(urlArr[tabIndex]);
 if (tabIndex === 0) {
    // alert(1);
        // location.reload();
        app.fetchChartData_day1(app.ajaxUrlMap.day1);
    }
    if (tabIndex === 1) {
    // alert(2);

        app.fetchChartData_min5(app.ajaxUrlMap.min5);
    }
})






