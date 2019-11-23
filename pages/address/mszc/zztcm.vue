<template>
	<view class="content grayBackground" style='padding:28upx 0upx 188upx'>
		
		<view style='background: white;'>
			<view class='mine_l' ><view class="title">车牌号</view>
		<input placeholder="请点此输入" disabled="true" @tap="plateShow=true" v-model.trim="car.carNo"></input>
		<plate-input v-if="plateShow" :plate="car.carNo" @export="setPlate" @close="plateShow=false"></plate-input></view>
			<view class='mine_l' ><view>汽车品牌</view><view><input type="text" v-model="car.carBrand" placeholder="选填"></view></view>
			<view class='mine_l' ><view>车型</view><view><input type="text" v-model="car.carType" placeholder="选填"></view></view>
			<view class='mine_l' ><view>绑定蓝牙设备</view><view><switch :checked="lan" @change="openLan()" /></switch>{{ !lan ? '关闭' : connectedDeviceId == '' ? '开启未绑定':'开启已绑定'}}</view></view>
		</view>
		<!-- <button @tap="lanya1" style="margin-top:60upx">蓝牙</button>
		<button type="primary" class="button" @tap="lanya0">断开蓝牙连接</button> -->
		<view class="venues_list">
			<block v-for="(item, index) in devices" :key="index">
				<view class="venues_item">
					<text class="status">设备名称:{{ item.name }}</text>
					<text class="status">设备ID:{{ item.deviceId }}</text>
					<text class="status">连接状态:{{ connectedDeviceId == item.deviceId ? '已连接' : '未连接' }}</text>
					<view class="section"></view>
					<view class="section"><button type="warn" class="button" @click="connectTO(item.deviceId)">连接</button></view>
				</view>
			</block>
			<view style='width:750upx;text-align:center;margin-top:28upx;font-size: 46upx;' v-if='lan'>
				<text @click='lanya1()' class='iconfont icontablerefresh blue'>刷新</text>
			</view>
			
		</view>
		
		<view style='padding:28upx;font-size:26upx;color:#5C92FD'>
			提示：使用蓝牙自动记录定位，需要绑定蓝牙。强烈建议绑定汽车上音响蓝牙，或者另外购买防丢蓝牙产品绑定后放置车上。商城也有防丢蓝牙出售
		</view>
		<view class='blue' style='margin-top:168upx;font-size:28upx;display: flex;justify-content: center;align-items: center;'>
			<checkbox-group>
					<label>
						<checkbox @click='read = !read' value="" :checked="read" />
					</label>
			                   
			</checkbox-group>
			<view @click='xy()' style='margin-left:5upx;text-decoration: underline;'>已阅读并同意服务协议</view>
		</view>
		<view class='bottomControlView' style=''>
			<!-- <view @click="toUrl('/pages/address/msnc/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;">取消</button></view> -->
			<button @click="pay()" class="normalButton" style=''>绑定停车码</button>
		</view>
		<banner></banner>
		<contact></contact>
	</view>
</template>

<script>
	import banner from '@/components/banner/banner.vue'
	import contact from '@/components/contact/contact.vue'
	import plateInput from '@/components/uni-plate-input/uni-plate-input.vue'
	export default {
		components:{
			plateInput,banner,contact
		},
		data() {
			return {
				status: '',
				sousuo: '',
				msg: '',
				msg1: '',
				connectedDeviceId: '', //已连接设备uuid
				services: '', // 连接设备的服务
				characteristics: '', // 连接设备的状态值
				writeServicweId: '', // 可写服务uuid
				writeCharacteristicsId: '', //可写特征值uuid
				readServicweId: '', // 可读服务uuid
				readCharacteristicsId: '', //可读特征值uuid
				notifyServicweId: '', //通知服务UUid
				notifyCharacteristicsId: '', //通知特征值UUID
				inputValue: '',
				characteristics1: '', // 连接设备的状态值
				devices: [],
				title: 'Hello',
				car:{
					locationName:'',
					address:'',
					carBrand:'',
					carNo:'',
					carType:'',
					floor:'',
					latitude:'',
					longitude:'',
					record:''
				},
				plateNo:'',
				plateShow:false,
				lan:false,
				read:false
			}
		},
		onLoad() {
			this.one();
		},
		methods: {
			
			//连接设备
			connectTO: function(e) {
				wx.showLoading({
					title: '连接中..'
				});
				var that = this;
				wx.createBLEConnection({
					deviceId: e,
					success: function(res) {
						console.log(res.errMsg);
						that.connectedDeviceId = e;
						that.msg = '已连接' + e;
						that.msg1 = '';
					},
					
					fail: function() {
						console.log('调用失败');
					},
					complete: function() {
						 wx.hideLoading()
						console.log('调用结束');
					}
				});
				console.log(that.connectedDeviceId);
			},
			btns() {
				var that = this;
				console.log(wx.openBluetoothAdapter);
				if (wx.openBluetoothAdapter) {
					wx.openBluetoothAdapter({
						success: function(res) {
							console.log(res);
							/* 获取本机的蓝牙状态 */
							setTimeout(() => {
								that.getBluetoothAdapterState();
							}, 1000);
						},
						fail: function(err) {
							console.log(err);
							// 初始化失败
						}
					});
				} else {
				}
			},
			
			getBluetoothAdapterState() {
				var that = this;
				// that.toastTitle = '检查蓝牙状态';
				wx.getBluetoothAdapterState({
					success: function(res) {
						console.log(res);
						that.startBluetoothDevicesDiscovery();
					},
					fail(res) {
						console.log(res);
					}
				});
			},
			//断开设备连接
			lanya0: function() {
				var that = this;
				that.devices = [];
				wx.closeBLEConnection({
					deviceId: that.connectedDeviceId,
					success: function(res) {
						wx.showToast({
							title: '断开成功',
							icon: 'success',
							duration: 2000 //持续的时间
						});
						that.connectedDeviceId = '';
						
					}
				});
			},
			
			// 初始化蓝牙适配器
			lanya1: function() {
				var that = this;
				wx.openBluetoothAdapter({
					success: function(res) {
						that.msg = '初始化蓝牙适配器成功！' + JSON.stringify(res);
						
						// wx.showLoading({
						// 	title: '搜索中..'
						// });
						that.lanya2();
						//监听蓝牙适配器状态
						wx.onBluetoothAdapterStateChange(function(res) {
							that.sousuo = res.discovering ? '在搜索。' : '未搜索。';
							that.status = res.available ? '可用。' : '不可用。';
						});
					},
					fail:function(error){
						uni.showToast({
							"title":"你还未打开蓝牙功能，请先打开蓝牙后再搜索",
							"icon":"none"
						})
						that.lan = false;
					}
				});
			},
			// 本机蓝牙适配器状态
			lanya2: function() {
				var that = this;
				wx.getBluetoothAdapterState({
					success: function(res) {
						that.lanya3();
						that.msg = '本机蓝牙适配器状态' + '/' + JSON.stringify(res.errMsg);
						that.sousuo = res.discovering ? '在搜索。' : '未搜索。';
						that.status = res.available ? '可用。' : '不可用。';
			
						//监听蓝牙适配器状态
						wx.onBluetoothAdapterStateChange(function(res) {
							that.sousuo = res.discovering ? '在搜索。' : '未搜索。';
							that.status = res.available ? '可用。' : '不可用。';
						});
					}
				});
			},
			//搜索设备
			lanya3: function() {
				var that = this;
				wx.startBluetoothDevicesDiscovery({
					success: function(res) {
						that.msg = '搜索设备' + JSON.stringify(res);
			
						that.lanya4();
						//监听蓝牙适配器状态
						wx.onBluetoothAdapterStateChange(function(res) {
							that.sousuo = res.discovering ? '在搜索。' : '未搜索。';
							that.status = res.available ? '可用。' : '不可用。';
						});
					}
				});
			},
			// 获取所有已发现的设备
			lanya4: function() {
				var that = this;
				wx.getBluetoothDevices({
					success: function(res) {
						//是否有已连接设备
						wx.getConnectedBluetoothDevices({
							success: function(res) {
								console.log(res.deviceId);
								console.log(JSON.stringify(res.devices));
								that.connectedDeviceId = res.deviceId || '';
							}
						});
			
						that.msg = '搜索设备' + JSON.stringify(res.devices);
						that.devices = res.devices;
						// wx.hideLoading();
			
						//监听蓝牙适配器状态
						wx.onBluetoothAdapterStateChange(function(res) {
							that.sousuo = res.discovering ? '在搜索。' : '未搜索。';
							that.status = res.available ? '可用。' : '不可用。';
						});
					}
				});
			},
			
			startBluetoothDevicesDiscovery() {
				var that = this;
				setTimeout(() => {
					wx.startBluetoothDevicesDiscovery({
						success: function(res) {
							console.log(res);
							/* 获取蓝牙设备列表 */
							that.getBluetoothDevices();
						},
						fail(res) {
							console.log(res);
						}
					});
				}, 1000);
			},
			
			getBluetoothDevices() {
				var that = this;
				setTimeout(() => {
					wx.getBluetoothDevices({
						services: [],
						allowDuplicatesKey: false,
						interval: 0,
						success: function(res) {
							that.devices = res.devices;
			
							console.log(res);
							if (res.devices.length > 0) {
								// if (JSON.stringify(res.devices).indexOf(that.deviceName) !== -1) {
								// 	for (let i = 0; i < res.devices.length; i++) {
								// 		if (that.deviceName === res.devices[i].name) {
								// 			/* 根据指定的蓝牙设备名称匹配到deviceId */
								// 			that.deviceId = that.devices[i].deviceId;
								// 			setTimeout(() => {
								// 				that.connectTO();
								// 			}, 2000);
								// 		}
								// 	}
								// } else {
								// 	console.log(res)
								// }
							} else {
								console.log(res);
							}
						},
						fail(res) {
							console.log(res, '获取蓝牙设备列表失败=====');
						}
					});
				}, 2000);
			},
			
			getBLEDeviceServices() {
				setTimeout(() => {
					wx.getBLEDeviceServices({
						deviceId: that.connectedDeviceId,
						success: function(res) {
							that.services = res.services;
							/* 获取连接设备的所有特征值 */
							that.getBLEDeviceCharacteristics();
						},
						fail: res => {}
					});
				}, 2000);
			},
			getBLEDeviceCharacteristics() {
				setTimeout(() => {
					wx.getBLEDeviceCharacteristics({
						deviceId: connectedDeviceId,
						serviceId: services[2].uuid,
						success: function(res) {
							for (var i = 0; i < res.characteristics.length; i++) {
								if (
									(res.characteristics[i].properties.notify || res.characteristics[i].properties.indicate) &&
									(res.characteristics[i].properties.read && res.characteristics[i].properties.write)
								) {
									console.log(res.characteristics[i].uuid, '蓝牙特征值 ==========');
									/* 获取蓝牙特征值 */
									that.notifyCharacteristicsId = res.characteristics[i].uuid;
									// 启用低功耗蓝牙设备特征值变化时的 notify 功能
									that.notifyBLECharacteristicValueChange();
								}
							}
						},
						fail: function(res) {}
					});
				}, 1000);
			},
			notifyBLECharacteristicValueChange() {
				// 启用低功耗蓝牙设备特征值变化时的 notify 功能
				var that = this;
				console.log('6.启用低功耗蓝牙设备特征值变化时的 notify 功能');
				wx.notifyBLECharacteristicValueChange({
					state: true,
					deviceId: that.connectedDeviceId,
					serviceId: that.notifyServicweId,
					characteristicId: that.notifyCharacteristicsId,
					complete(res) {
						/*用来监听手机蓝牙设备的数据变化*/
						wx.onBLECharacteristicValueChange(function(res) {
							/**/
							that.balanceData += that.buf2string(res.value);
							that.hexstr += that.receiveData(res.value);
						});
					},
					fail(res) {
						console.log(res, '启用低功耗蓝牙设备监听失败');
						that.measuringTip(res);
						
					}
				});
			},
			// 断开设备连接
			closeConnect() {
				if (that.connectedDeviceId) {
					wx.closeBLEConnection({
						deviceId: that.connectedDeviceId,
						success: function(res) {
							that.closeBluetoothAdapter();
						},
						fail(res) {}
					});
				} else {
					that.closeBluetoothAdapter();
				}
			},
			// 关闭蓝牙模块
			closeBluetoothAdapter() {
				wx.closeBluetoothAdapter({
					success: function(res) {},
					fail: function(err) {}
				});
			},
			
			
			openLan(){
				let _this = this;
				if(this.lan){
					this.lan = false;
					this.lanya0();
					
				}else{
					this.lan = true;
				uni.showLoading({
					"title":"搜索中"
				})
				let timeCounter = setInterval(function(){
						if(_this.devices.length == 0){
							_this.lanya1();
						}else{
							uni.hideLoading();
							clearInterval(timeCounter);
						}		
					},999)
				}
				
				
			},
			pay(){
				if(this.car.carNo == null || this.car.carNo == ""){
					uni.showToast({
						"title":"车牌号不能为空",
						"icon":"none"
					})
					return false;
				}
				// var arr = [];
				// this.car = this.car.map(res)
				// for(var key in this.car){
					
				// 	if(key != "createTime" && key!="lastModifyTime"){
				// 		let data = {
				// 			key:this.car.key
				// 		}
				// 		arr.push(data)
						
				// 	}
				// }
				let _this = this;
				// console.log(arr);
				let car = {
					
				}
				if(this.read){
					this.$ajax('/park/apply',"POST",_this.car).then((res)=>{
						uni.navigateTo({
							"url":"/pages/address/mszc/tcm1?qrcode="+res
						})
						
					})
				}
					
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			xy(){
				uni.navigateTo({
					"url":"/pages/xy/xy"
				})
			},
			one(){
				let _this = this;
				this.$ajax("/park/page","POST",{"pageNo":1,"pageSize":1}).then((res)=>{
					
					// _this.car = res.list[0];
					
					_this.car.locationName = res.list[0].locationName;
					_this.car.address = res.list[0].address;
					_this.car.floor = res.list[0].floor;
					_this.car.parkNo = res.list[0].parkNo;
					
					_this.car.latitude = res.list[0].latitude;
					_this.car.longitude = res.list[0].longitude;
					_this.car.record = res.list[0].record;
					// _this.car = res.list[0].locationName;
					console.log(_this.car);
				})	
			},
			setPlate(plate){
				if(plate.length >= 7) this.car.carNo = plate
				this.plateShow = false
			}
		},
		watch:{
			connectedDeviceId(newVal,oldVal){
				let _this = this;
				if(oldVal.length > newVal.length){
					// uni.showToast({
					// 	"title":"推送编码为"+_this.qrcodeNo
					// })
					uni.showToast({
						"title":"发送推送",
						"icon":"none"
					})
				}
			}
		}
	}
</script>

<style>
	/* .content {
		margin: 0 10px;
	} */
	
	.status,
	.sousuo,
	.msg,
	.msg1 {
		display: block;
		line-height: 35px;
		margin: 0 10px;
	}
	
	.button {
		margin: 10px;
	}
	
	.sendto {
		line-height: 30px;
		display: block;
		margin: 10px;
	}
</style>
