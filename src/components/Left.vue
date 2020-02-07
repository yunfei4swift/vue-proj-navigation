<template>
	<div>
		<div class="title">热门推荐</div>
		<ul class="menu">
			<li @click="menu1">欧洲</li>
			<li @click="menu2">英超</li>
			<li>德甲</li>
			<li>意甲</li>
			<li>其他</li>
		</ul>
	</div>
</template>

<script>
	import Msg from './Msg.js'
	export default {
		methods: {
			menu1: function() {
				//事件总线传值,emit是用来触发on事件的,将1的值赋给val参数，然后传到on事件
				Msg.$emit("val","1");
			},
			menu2: function() {
				//事件总线传值,emit是用来触发on事件的,将2的值赋给val参数，然后传到on事件
				Msg.$emit("val","2");
			}
		}
	}
</script>

<style>
	.title {
		color: red;
		width: 100px;
	}
	.menu li {
		list-style: none; /* 去掉li前面的点 */
		height: 50px;
		margin-bottom: 2px; /* 每一个li中间的间隔 */
		background-color: white;
		line-height: 50px; /* 行内文字居中显示 */
		cursor: pointer;
	}
</style>
