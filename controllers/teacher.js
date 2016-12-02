/*
* @Author: guanghang.Wang
* @Date:   2016-12-01 09:57:21
* @Last Modified by:   guanghang.Wang
* @Last Modified time: 2016-12-01 22:37:07
*/

'use strict';
var express= require('express');
//加载teacherModel模块
var tcModel=require('../models/teacherModels');


var router = express.Router();

module.exports=router;


router.get('/teacher', (req, res) =>{
	res.render('teachers/teacherList', {});
})

router.get ('/teacher/add', (req, res) =>{
	res.render('teachers/teacherAdd', {});
})

router.post('/teacher/add', (req, res) =>{
	//处理teacher控制器,  得到前端传递过来的数据，并以一种格式
	// console.log(req.body)
	//获取传递的数据
	var body = req.body;
	tcModel.add(body, function(err, result){

		
		if(err) return ;
	
		res.json({
			code: '1000',
			msg: '恭喜你，创建成功！',
			result: {}
		})



	})

})





