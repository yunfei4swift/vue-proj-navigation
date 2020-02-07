<template>
	<div>
		<!-- {{ kk }} --> <!-- 用kk接收 -->
		<div v-if="kk == 1">
			<GoodList :goodId="1"></GoodList> <!-- 父子组件传值 -->
		</div>
		<div v-else-if="kk == 2">
			<GoodList :goodId="2"></GoodList>
		</div>
		<!-- else实现默认菜单选项 -->
		<div v-else>
			<GoodList :goodId="0"></GoodList>
		</div>
	</div>
</template>

<script>
	// 引用事件总线
	import Msg from './Msg.js'
	import GoodList from './goodsList.vue'
	export default {
			
		data() {
			return {
				kk:0	//kk赋值初始值0
			}
		},
		mounted: function() {
			var _this = this	//右边的this是关键字，代表当前的意思，即当前vue本身；而带下划线的this代表副本
			Msg.$on('val', function(m) {	//将val的值交给m继续处理
				_this.kk = m;	//on事件里的this不是vue本身了，而是变成当前on事件的内容了，找不到kk的值了，这就是为什么之前要给this一个副本
			})
		},
		components:{
			GoodList
		}
	}
</script>

<style>
</style>
