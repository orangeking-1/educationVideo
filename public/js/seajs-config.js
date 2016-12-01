
// 配置文件
seajs.config({
	base: './assets',
	alias: {
		jquery: 'jquery/jquery.js',
		bootstrap: 'bootstrap/js/bootstrap.js',
		nprogress: 'nprogress/nprogress.js',
		echarts: 'echarts/echarts.js'
	},
	preload: ['bootstrap', './js/common']
});