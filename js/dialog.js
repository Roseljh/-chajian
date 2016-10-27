;(function($){
	//类插件
	$.dialog=function(opt){
		return new Dialog(opt);
	}
	//函数声明式
	function Dialog(opt){
		//设置默认参数
		/*var _default={
			title:"",
			content:"您确定要删除吗？",
			but:["确定","取消"]
		},*/
		//扩展参数
		var settings=$.extend({
				
				content:"你确定删除吗",
				but:["确定","取消"],
				callBack:null
		},opt);
		//功能语句，创建html结构，书写css样式

		var html=$("<div class='mark'></div>"
					+"<div class='dialog'>"
						+"<h2>"+settings.content+"</h2>"
						+"<p></p>"
					+"</div>");
			var h=$(document).height();
			
			//console.log(num);
			html.prependTo($("body"));
			$(".mark").css("height",h+"px");
		//添加按钮
		$.each(opt.but,function(index,val){
			$("<span>"+val+"</span>").appendTo(".dialog p");
			console.log(val);
		})
		//为按钮绑定单击事件
		var btns=$(".dialog").find("span");
		//console.log(btns);
		//取消

			btns.eq(1).on("click",close);

		//确定
			btns.eq(0).on("click",function(){
				close();
				//判断callBack是否存在，不存在则不执行
				//if(opt.callBack) opt.callBack();
				opt.callBack && opt.callBack();
			})	
		//删除遮罩函数
		function close(){
			$(".mark").remove();
			$(".dialog").remove();
		}
	}

})(jQuery)