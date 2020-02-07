<template>
	<div class="main">
		<div class="left">
			<Left></Left>
		</div>
		<div class="right">
			<div class="top">
				<img src="../../public/img/title.jpg" />
			</div>
			<div class="bottom">
				<Right></Right>
			</div>
		</div>
	</div>
</template>

<script>
	import Left from '../components/Left.vue'
	import Right from '../components/Right.vue'
	export default {
		components: {
			Left, //这个Left就是import Left的名字
			Right
		}
	}
</script>

<style>
	/* 设置默认间距为0,后面分别按自己要求给组件单独设置 */
	* {
		padding: 0;
		margin: 0;
	}
	.left {
		width: 100px;
		float: left;
		margin-right: 10px;
	}
	.right {
		width: 1000px;
		float: left;
		margin-left: 10px;
	}
	.main {
		width: 1200px;
		margin: 20px auto; /* auto代表水平居中 */
		
	}
	.top img {
		height: 400px;
		width: 1000px;
	}
		
	.left,.right {
		background-color: #f5f5f5;
		height: 500px;
	}
</style>
