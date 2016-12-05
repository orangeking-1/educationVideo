/*
* @Author: guanghang.Wang
* @Date:   2016-12-01 09:57:21
* @Last Modified by:   guanghang.Wang
* @Last Modified time: 2016-12-02 22:33:15
*/

'use strict';
var express= require('express');
//加载teacherModel模块
var tcModel=require('../models/teacherModels');


var router = express.Router();

module.exports=router;

//初次加载这个页面上的时候就渲染页面
router.get('/teacher', (req, res) =>{
	tcModel.show(function(err, result){
		if(err) return ;
		// console.log(result)
		res.render('teachers/teacherList', {teacher:result})
	})
})


router.get ('/teacher/add', (req, res) =>{
	res.render('teachers/teacherAdd', {});
})



//编辑讲师的信息
router.get('/teacher/edit/:tc_id', function(req, res){
	// console.log(req.params.tc_id)
	var tc_id= req.params.tc_id;

	tcModel.find(tc_id, function(err, result){
			//console.log(result)  // 关于点击的这个的所有的信息
		res.render('teachers/teacherEdit',{person: result[0]})

	})
	
	
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

//修改信息
router.post('/teacher/reChange', (req, res) =>{

	//逻辑与上面添加的相同，models种update数据
	var body = req.body;
	// console.log(body)
	tcModel.change(body, function (err, result){
		// if (err)  console.log(err);
		//得到数据库的数据
	
		res.json({
			code: '1001',
			msg:'恭喜喜，修改成功了！！',
			result: {}
		})


	})
	
})

//查看个人信息
router.post('/teacher/checkout', (req, res) =>{
	var tc_id =req.body.tc_id;
	// console.log(tc_id);
	tcModel.find(tc_id, function(err, result){
			//console.log(result)  // 关于点击的这个的所有的信息
			res.json({
				code: '1002',
				onePerson: result[0]
			})

	})
})





