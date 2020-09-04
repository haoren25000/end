import axios from 'axios'
import config from './config'

class API {
  get(url, param, callback) {
    config.headers.token = localStorage.getItem("prmManage_token") || "";
    axios.get(config.baseURL + url, param, config)
      .then((res) => {
        if (res.data.code === 500) {
         
        } else if (res.data.code > 400 && res.data.code < 500) {
         
        } else {
          if (typeof callback === "function") {
            callback(res.data);
          }
        }
      })
      .catch((err) => {
        callback(err.response.data);
      });
  }

  post(url, param, callback) {
    axios.post(config.baseURL + url, param, config).then((res) => {
      if (res.data.code == 500) {
      
      } else if (res.data.code == 523) {
        this.$cookie.delete('username');
        window.location.href = '#/login'
       
      } else if (res.data.code > 400 && res.data.code < 500) {
       
      } else {
        if (typeof callback === "function") {
          callback(res.data);
        }
      }
    }).catch((err) => {
    
    });
  }
}
export default API;

