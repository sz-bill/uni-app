<template>
	<view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<view>
            <text class="title">{{title}}</text>
        </view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		computed: {
			...mapState('user', {
				forcedLogin: state => state.forcedLogin, 
				hasLogin: state => state.hasLogin
			}),
		},
		onLoad() {
			if(!this.hasLogin){
				uni.showModal({
				    title: '未登录',
				    content: '您需要登录后才能继续',
				    //如果需要强制登录，不显示取消按钮
				    showCancel: !this.forcedLogin,
				    success: (res) => {
				      console.log(res)
				    }
				})
			}
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
