/*
* @Author: guanghang.Wang
* @Date:   2016-12-01 11:23:10
* @Last Modified by:   guanghang.Wang
* @Last Modified time: 2016-12-02 22:04:05
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
//改变老师的信息
exports.change=function (body, callback){
	//得到要改的id值
	var tc_id = body.tc_id;
	// console.log(tc_id)
	delete body.tc_id;

	// tc_id = body.tc_id

	var query = 'UPDATE `teacher` SET ? WHERE `tc_id` = ' + tc_id;

	db.query(query, body, callback);

}

//查询所有的数距
exports.show=function (callback){
	db.query('SELECT * FROM `teacher`', callback);
}

//查看信息和获取数据
exports.find = function(tc_id,callback){
	var query = 'SELECT * FROM `teacher` WHERE tc_id = ' + tc_id;

	db.query(query, callback);
}

