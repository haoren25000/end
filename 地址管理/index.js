window.onload = function () {

  var address = {

    //根据css选择器获取元素
    query(selector) {
      return document.querySelectorAll(selector);
    },

    //绑定事件
    addEvent(selector, type, fn) {
      let elements = this.query(selector);
      for (let i = 0; i < elements.length; i++) {
        elements[i]['on' + type] = fn;
      }
    },

    //创建元素
    create(tagName) {
      return document.createElement(tagName);
    },

    //创建option
    createOption(data, selector) {
      //获取省份数据
      //data: 省份数据, 类型：object
      let select = this.query(selector)[0];
      for (let key in data) {
        //创建option
        let option = this.create('option');
        option.className = 'opt';
        option.value = key;
        option.textContent = data[key];
        select.appendChild(option);
      }
    },

    //移除option
    removeOption(selector) {
      let options = this.query(selector);
      for (let i = 0; i < options.length; i++) {
        options[i].remove();
      }
    },

    //初始化方法
    init() {

      let self = this;

      //创建省份列表
      this.createOption(area.province_list, '#province');

      //省份
      this.addEvent('#province', 'change', function () {

        //清除市的option、区的option
        self.removeOption('#city>.opt');
        self.removeOption('#area>.opt');
        

        console.log('this ==> ', this);
        //获取当前选择的option的value
        let currentValue = this.value.slice(0, 2);
        console.log('currentValue ==> ', currentValue);

        //获取市的数据
        let cityData = area.city_list;

        //筛选市数据
        let cities = {};
        for (let key in cityData) {
          if (key.startsWith(currentValue)) {
            cities[key] = cityData[key];
          }
        }

        console.log('cities ==> ', cities);

        //创建市
        self.createOption(cities, '#city');

      })

      //市
      this.addEvent('#city', 'change', function () {
        //清除区的option
        self.removeOption('#area>.opt');

        //获取当前选择的option的value
        let currentValue = this.value.slice(0, 4);
        console.log('currentValue ==> ', currentValue);
        
        //获取区的数据
        let areaData = area.county_list;

        //筛选市数据
        let areaDatas = {};
        for (let key in areaData) {
          if (key.startsWith(currentValue)) {
            areaDatas[key] = areaData[key];
          }
        }

        console.log('areaDatas ==> ', areaDatas);
        //创建区
        self.createOption(areaDatas, '#area');
      })

    }

  };

  address.init();

}