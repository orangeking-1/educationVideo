/*
* @Author: guanghang.Wang
* @Date:   2016-12-01 11:23:10
* @Last Modified by:   guanghang.Wang
* @Last Modified time: 2016-12-01 22:35:35
*/

'use strict';
//处理teacher数据
var db =require('../config/db');

//处理db数据
exports.add=function (body, callback){
	// console.log(body)
	//body就是表单数据
	
	//插入操作
	db.query('INSERT INTO `teacher` SET ?',body, callback);
}





