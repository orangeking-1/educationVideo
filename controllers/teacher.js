/*
* @Author: guanghang.Wang
* @Date:   2016-12-01 09:57:21
* @Last Modified by:   guanghang.Wang
* @Last Modified time: 2016-12-01 10:28:20
*/

'use strict';
var express= require('express');
var router = express.Router();

module.exports=router;


router.get('/teacher', (req, res) =>{
	res.render('teachers/teacherList', {});
})

router.get ('/teacher/add', (req, res) =>{
	res.render('teachers/teacherAdd', {});
})





