/*
* @Author: guanghang.Wang
* @Date:   2016-11-29 14:59:49
* @Last Modified by:   guanghang.Wang
* @Last Modified time: 2016-11-29 22:20:47
*/

'use strict';


var express= require('express');



//初始化一个对象
var app=express();

//设置视图模板的基础路径
app.set('views', __dirname+'/views');
//指定使用xtpl模板引擎
app.set('view engine', 'xtpl');

//设置静态目录(资源)
app.use('/', express.static('public'));
app.use('/', express.static('uploads'));


//加载indexjs模块控制器
var index=require('./controllers/index');
//加载navbar模块控制器
var navbar =require('./controllers/navbar');



//挂载
app.use('/', index);
//挂载：就是路径拼接
app.use('/', navbar);



app.listen(3000, function(){
	console.log('server is running at port 3000!');
})
