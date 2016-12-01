define(function (require, exports, module) {

	var $ = require('jquery');

	var NProgress = require('nprogress');

	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

});