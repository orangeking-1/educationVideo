/*
* @Author: guanghang.Wang
* @Date:   2016-12-02 20:33:54
* @Last Modified by:   guanghang.Wang
* @Last Modified time: 2016-12-02 21:21:13
*/

'use strict';

define( function (require,exports, module){
	var $ = require('jquery');

	
	
	$('#changeFormTeacher').on('submit', function(){
		var changeFormTeacher =$(this).serialize();
		// console.log(changeFormTeacher)
		//发送ajax请求
		$.ajax({
			url: '/teacher/reChange',
			type: 'post',
			data: changeFormTeacher,
			success: function(data){
				if(data.code == '1001'){
					alert(data.msg);
					location.reload();
				}


			}


		})
		//阻止按钮的点击事件
		return false;

	});


})