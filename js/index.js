


$.ajax({
	type:"GET", //使用get方式
	url: "data.json", //json文件相对于这个HTML的路径
	dataType:"json",
	success:function(data) {
		//这个data就是json数据
    console.log(data)
		let arr = data.data;
		$('#new-quote').click(function () {
			// 生成随机颜色
			let randomVal1 = Math.floor(Math.random() * 255) + 1;
			let randomVal2 = Math.floor(Math.random() * 255) + 1;
			let randomVal3 = Math.floor(Math.random() * 255) + 1;
			let randomColor = `rgb(${randomVal1},${randomVal2},${randomVal3})`
			// 生成随机索引，随机分配数据
			let randoms = Math.floor(Math.random() * arr.length) + 1;
			let quote = arr[randoms].quote;
			let arr1 = quote.split('。');
					// let str2 = quote.substring(strIndex + 1);
			$('#quote-text').text(arr1[0] + '。');
			$('#queto-author').text(arr1[1]);
			$('body').css('background-color',randomColor).addClass('transition');
			$('#figure').css('opacity',0)
			$('#figure').css('color',randomColor).css('opacity',1).addClass('transition');
			
			$('.changeColor').css('background-color',randomColor).addClass('transition');
		})
		// 进来自己动点击一次
		$('#new-quote').click()
	},
	error:function() {
		alert("请求失败");
	}
});


	
