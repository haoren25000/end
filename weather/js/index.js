$(function () {

  let currentIndex = 0;

  //切换标签
  $('.title-item').on('click', function () {

    //获取下标
    let index = $(this).index();
    // console.log('index ==> ', index);

    //如果当前已经选中，则不做任何事情
    if (currentIndex == index) {
      console.log('当前已选中');
      return;
    }

    //获取html的font-size
    let fontSize = parseFloat($('html').css('font-size'));
    // console.log('fontSize ==> ', fontSize);

    //获取当前元素的宽度
    let currentWidth = $(this).width();
    // console.log('currentWidth ==> ', currentWidth);

    //如何将currentWidth转成rem值
    var distance = currentWidth / fontSize + 0.4;
    // console.log('distance ==> ', distance);

    //移动下划线
    $('.move-line').animate({
      left: index * distance + 'rem'
    }, 200);

    currentIndex = index;

  })

  //腾讯地图API定位, 获取城市天气
  function locationIP() {
    $.ajax({
      type: 'GET',
      url: 'https://apis.map.qq.com/ws/location/v1/ip',
      data: {
        key: 'RSMBZ-6LBCU-T2FVZ-BM7Z7-LKLEH-7TFFR',
        output: 'jsonp'
      },
      //响应数据类型
      dataType: 'jsonp',
      success: function (result) {
        console.log('result ==> ', result);
        $('.location-text').text(result.result.ad_info.city);
        //获取城市天气数据
        getWeatherByCity(result.result.ad_info.city);
      },
      error: function (err) {
        console.log('err ==> ', err);
      }
    })
  }

  //获取城市天气数据
  function getWeatherByCity(city) {

    if (city == '') {
      console.log('暂无天气数据');
      return;
    }

    //city: 城市
    $.ajax({
      type: 'GET',
      url: 'https://api.heweather.net/s6/weather',
      data: {
        location: city,
        key: '6e9ba463edd44e9f9e4020e87fad6c99'
      },
      success: function (result) {
        console.log('实况天气 result ==> ', result);
        let weather = result.HeWeather6[0];

        $('.w').each(function () {
          //获取当前元素的id
          let id = $(this).attr('id');
          $(this).text(weather.now[id]);
        })

        //设置最低温和最高温
        let minTmp = weather.daily_forecast[0].tmp_min;
        let maxTmp = weather.daily_forecast[0].tmp_max;
        let tmpRange = `${minTmp}℃~${maxTmp}℃`
        $('#tmp-range').text(tmpRange);

        //获取分钟级降水
        getWeatherByMinute(weather.basic.lon, weather.basic.lat);
      },
      error: function (err) {
        console.log('err ==> ', err);
      }
    })
  }

  //获取分钟级降水
  function getWeatherByMinute(lon, lat) {
    console.log('lon ==> ', lon);
    console.log('lat ==> ', lat);
    //lon: 经度
    //lat: 纬度
    $.ajax({
      type: 'GET',
      url: 'https://api.heweather.net/s6/weather/grid-minute',
      data: {
        location: lon + ',' + lat,
        key: '6e9ba463edd44e9f9e4020e87fad6c99'
      },
      success: res => {
        console.log('分钟级降水 res ==> ', res);
        $('.preview').text(res.HeWeather6[0].grid_minute_forecast.txt);
      },
      error: err => {
        console.log('err ==> ', err);
      }
    })
  }

  locationIP();

})