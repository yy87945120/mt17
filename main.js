import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// Vue.filter('price', function(val) {
//     return (val/100).toFixed(2);
//   });
function updateMethod(){
	uni.showToast({
		"title":"功能正在升级",
		"icon":"none"
	})
	return false;
}
Vue.prototype.$ImageUrl = "https://majieda.rng1021.top/mjd/";
Vue.prototype.$updateMethod = updateMethod;
function ajaxLogin(url,type,data){
    return new Promise((resolve,reject)=>{
		uni.showLoading({
			"title":"请求中",
			"mask":"true"
		})
		uni.request({
			url: "https://majieda.rng1021.top/mjd"+url,
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			data:data,
			dataType: 'json', //默认 json格式
			method: type, //请求方式
			success: (res) => {
				uni.hideLoading()
				resolve(res.data);			
			},
			fail: (error) => {
				uni.hideLoading()
				reject(error)
			}
		})
        
    })
}
function ajax(url,type,data){
    return new Promise((resolve,reject)=>{
				let token = uni.getStorageSync('token');
				uni.showLoading({
					"title":"请求中",
					"mask":"true"
				})
				uni.request({
					url: "https://majieda.rng1021.top/mjd"+url,
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'Authorization':token
					},
					data:data,
					dataType: 'json', //默认 json格式
					method: type, //请求方式
					success: (res) => {
						uni.hideLoading()
						resolve(res.data);
					},
					fail: (error) => {
						uni.hideLoading()
						reject(error)
					}
				})
			
		
		
        
    })
}

Vue.prototype.$ajaxLogin = ajaxLogin;
Vue.prototype.$ajax = ajax;
function login(){
	
}

function user(){
	// uni.get
}

App.mpType = 'app'
Vue.prototype.$login = login
Vue.prototype.$user = user
const app = new Vue({
    ...App
})
app.$mount()
