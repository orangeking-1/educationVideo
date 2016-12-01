/*
* @Author: guanghang.Wang
* @Date:   2016-11-29 21:48:56
* @Last Modified by:   guanghang.Wang
* @Last Modified time: 2016-11-29 22:29:32
*/

'use strict';

//加载模块
var express =require('express');
//创建一个路由
var router = express.Router();

//挂载路由
router.get('/userList', (req, res) =>{
	res.render('users/userList', {});
})
//个人详情的路由
router.get('/profile', (req, res) =>{
	res.render('users/user_profile', {});
})

//暴露接口
module.exports=router;

