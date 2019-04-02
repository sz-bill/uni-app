<template>
	<view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<view>
            <text class="title">{{title}}111</text>
        </view>
	</view>
</template>

<script>
	import { mapState,mapMutations } from 'vuex'
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		computed: {
			...mapState('user', {
				forcedLogin: state => state.forcedLogin,  // 把 user 状态属性 forcedLogin 映射到当前的组件 data 属性中， 即 data.forcedLogin=state.user.forcedLogin
				hasLogin: state => state.hasLogin // 把 user 状态属性 hasLogin 映射到当前的组件 data 属性中， 即 data.hasLogin=state.user.hasLogin
			}),
		},
		onLoad() {
			//引用属性 this.hasLogin 相当于使用 state.user.forcedLogin
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
			// 把 user 状态方法 login 映射到当前的组件 methods 中， 即 methods.login=mutations.user.login
			...mapMutations('user', ['login']),
			// ...mapActions("wayline", ['getWayLineAction']), 映射其它方法
			fun1(){
				//定义当前组件方法
			},
			callUserFun(){
				//调用 mutations.user.login 方法更新 user.state 的一些属性， 即 commit 操作
				let resUser = {uid:11,username:'用户名',isbind_weixin:true}
				this.login(resUser) // 相当于 mutations.user.login(state, resUser)
			}
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
