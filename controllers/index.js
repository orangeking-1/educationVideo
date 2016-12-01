/*
* @Author: guanghang.Wang
* @Date:   2016-11-29 15:06:53
* @Last Modified by:   guanghang.Wang
* @Last Modified time: 2016-11-29 22:14:24
*/

'use strict';

var express =require('express');
//设置子路由模块
var router =express.Router();

//挂载路由
router.get('/' , (req,res) =>{
	// res.send('aaaa')
	res.render('dashboard/index', {})
})

//个人中心的路由
router.get('/settings', (req,res) =>{
	res.render('dashboard/settings',{})

})

//暴露模块
module.exports=router;




