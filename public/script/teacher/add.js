/*
* @Author: guanghang.Wang
* @Date:   2016-12-01 16:16:49
* @Last Modified by:   guanghang.Wang
* @Last Modified time: 2016-12-02 22:31:56
*/

'use strict';


define(function (require, exports, module){
	var $=require('jquery');

	$('.formTeacher').on('submit', function(){
		//接受表单数据
		var formData = $(this).serialize();
		//发送ajax请求
		$.ajax({
			url: '/teacher/add',
			type: 'post',
			data: formData,
			success: function (data){
				alert(data.msg)

				if(data.code == '1000'){
					//页面刷新
					location.reload();
				}
			}

		})


		


		return false;
	})
	
})