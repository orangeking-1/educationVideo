/*
* @Author: guanghang.Wang
* @Date:   2016-12-01 11:19:35
* @Last Modified by:   guanghang.Wang
* @Last Modified time: 2016-12-01 22:35:53
*/

'use strict';

// var mysql = require('mysql');

// var connection= mysql.createConnection({
// 	host     : 'localhost',
// 	port     : '3306',
// 	user     : 'root',
// 	password : 'root',
// 	database : 'xiangmu'
// });

// module.exports =connection;


var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'studyit'
});

module.exports = connection;
