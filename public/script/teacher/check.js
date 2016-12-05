/*
* @Author: guanghang.Wang
* @Date:   2016-12-02 10:12:07
* @Last Modified by:   guanghang.Wang
* @Last Modified time: 2016-12-05 15:49:42
*/

'use strict';

define(function (require, exports, module){

	var $= require('jquery');
	//加载bootstrap
	require('bootstrap');
	//加载arttemplate模块
	var template=require('template');

	var teacherModal= $('#teacherModal');

	$('#teacherLists').on('click', 'a.preview', function (){

		//获取点击的id值
		var id=$(this).parent().siblings('#index').attr('data-indexs');

		//先清空上次点击的内容
		$('#onePersonOne').html('');

		$.ajax({
			url:'teacher/checkout',
			type: 'post',
			data: {tc_id: id},
			success:function(data){
				// console.log(data)
				//前端模板渲染
				var html =template('teacherTpl', data);
				// console.log(html)
				$('#onePersonOne').append(html);

				teacherModal.modal();

			}
		})


		
		//阻止a链接点击的默认行为
		return false;
	})

})