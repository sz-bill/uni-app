const DEFAULT_STATE = {
	// 是否需要强制登录，true是， false否
	forcedLogin: false,
	// 登录状态， true已登录， false未登录
	hasLogin: false,
	//已登录用户的ID
	uid: 0,
	//用户的类型
	utype: '',
	//已登录用户的TOKEY
	token: '',
	//已登录用户账号内容
	user:{}, //包括有uid,utype,token，这三个状态属性之所以在上面单独拿出来，是为了其它地方快捷调用
}

export default {
	namespaced: true,
	state: {
	    ...DEFAULT_STATE,
		//用户账号
		username:'',
		//绑定微信状态， true绑定， false未绑定
		isbind_weixin:false,
	},
	//在 mutations 定义一些静态调用的函数，当一页面或者组件中调用的时候会比较有用
	mutations: {
		login(state, resUser) {
			console.log('更新用户信息#mutations.login')
		    state.username = resUser.username || '新用户'
		    state.hasLogin = true
		    state.uid = resUser.uid
		    state.user = resUser
			if(resUser.utype){
				state.utype = resUser.utype
			}
			
			if(resUser.token){
				state.token = resUser.token
			}
			
			if(resUser.isbind_weixin){
				state.isbind_weixin = resUser.isbind_weixin
			}
		},
		logout(state) {
			state.hasLogin = false
			state.uid = ""
		    state.utype = ""
		    state.token = ""
		    state.user = {}
			state.username = ""
			state.isbind_weixin = false
		}
	},
	actions: {
		getUser({commit}){
			console.log("获取已登录用户数据")
			let user = uni.getStorageSync('user')
			commit('userinfo', user)
		}
	}
}