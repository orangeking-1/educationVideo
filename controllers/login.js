/*
* @Author: guanghang.Wang
* @Date:   2016-12-01 13:42:42
* @Last Modified by:   guanghang.Wang
* @Last Modified time: 2016-12-01 13:44:52
*/

'use strict';

var express =require('express');
var router = express.Router();

module.exports=router;

router.get('/login', (req, res) =>{
	res.render('login/index', {});
})

