<template>
	<div name="show">
		<ul class="goodList">
			<li v-for="goods in list">
				<img v-bind:src="goods.img" />
				<p>{{ goods.goodName }}</p>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	//获取list数据
	export default {
		name:"show",
		data(){
			var _this = this;
			var url = "";
			if(_this.goodId == 1){
				url = "json/europe.json";
			} else if(_this.goodId == 2){
				url = "json/others.json";
			} else {
					url = "json/europe.json";
				}
			this.$http.get(url).then(function(res){
				_this.list = res.data;
			}) //$http是之前在main.js起的名字axios.$http
			return{
				list:[]
			}
		},
		props:{
			goodId:Number	//goodId是前面使用组件的名字
		},
		//必须通过监听的方式来判断导航栏传值的变化
		watch:{
			goodId(){
				//如果goodId值发生改变，会执行到这里
				var _this = this;
				var url = "";
				if(_this.goodId == 1){
					url = "json/europe.json";
				} else if(_this.goodId == 2){
					url = "json/others.json";
				} else {
					url = "json/europe.json";
				}
				this.$http.get(url).then(function(res){
					_this.list = res.data;
				}) //$http是之前在main.js起的名字axios.$http
				return{
					list:[]
				}
			}
		}
	}
</script>
<style>
	.goodList li {
		width:200px;
		height: 200px;
		list-style: none;
		float: left;
		font-size: 9px;
		color: red;
		margin-bottom: 30px;
	}
	.goodList img {
		width: 180px;
		height: 180px;
	}
</style>
