window.onload=function(){
	var web=
	[
		{"webName":"菜鸟教程","webUrl":"http://www.runoob.com","other":""},
		{"webName":"boostrap","webUrl":"http://www.bootcss.com","other":""},
		{"webName":"coding","webUrl":"https://coding.net","other":"账号：xyw520 2012bxywssg"},
		{"webName":"JavaScript+jquery 教程之从入门到精通视频教程","webUrl":"http://www.xin3721.com/eschool/JSJQueryxin3721","other":""},
		{"webName":"25学堂","webUrl":"http://www.25xt.com","other":""},
		{"webName":"大讲台","webUrl":"http://www.dajiangtai.com/","other":""},
		{"webName":"千图网","webUrl":"http://www.58pic.com","other":""},
		{"webName":"慕课网","webUrl":"http://www.imooc.com/","other":""},
		{"webName":"W3school","webUrl":"http://www.w3school.com.cn/index.html","other":""}
		
	];

	
	//显示一行网页信息方法
	function showWeb(i){
		var i;
		//网页名栏
		var oTr=document.createElement("tr");
		var nameTd=document.createElement("td");
		oTr.appendChild(nameTd);
		var oTrtxt=document.createTextNode(web[i].webName);
		nameTd.appendChild(oTrtxt);
	
		var oTable=document.getElementById("tab1");
		oTable.appendChild(oTr);
		
		//链接地址栏
		var oTd=document.createElement("td");
		var oLink=document.createElement("a");
		oLink.setAttribute("href",web[i].webUrl);
		var oLinktxt=document.createTextNode(web[i].webUrl);
		oLink.appendChild(oLinktxt);
		oTd.appendChild(oLink);
		oTr.appendChild(oTd);
	
		//其他信息栏
		var otherTd=document.createElement("td");
		var otherTxt=document.createTextNode(web[i].other);
		otherTd.appendChild(otherTxt);
		oTr.appendChild(otherTd);
		if(i%2==0){
		oTd.className="tbg";
		otherTd.className="tbg";
		oTr.className="tbg";
		}
		
		//删除按钮
		var oBTd=document.createElement("td");
		var oBnt=document.createElement("input");
		oBnt.setAttribute("type","button");
		oBnt.setAttribute("value","删除");
		oBnt.setAttribute("onclick","deleteRow(this)");
		oBTd.appendChild(oBnt);
		oTr.appendChild(oBTd);
		
		
//		oBnt.innerHTML="<input type="button" value="删除"/>";
		
	}	
		
		
	
	//获取Input的值
	var pp=function(){
//		var nw=document.getElementById("wn").value;
		var wn=	myf.webName.value;
		var wu=myf.webUrl.value;
		var wo=myf.other.value;
//		alert(typeof(wn+wu+wo));
		var newweb={"webName":wn,"webUrl":wu,"other":wo};

		if(wu==''&&wo==""&&wn==""){
	
			alert("不能什么都不填");
			return false;
		}else{
		web.push(newweb);
	
		var a=web.length-1;
		showWeb(a);
		}	
	}
	var btn1=document.getElementById("btn1");
	btn1.onclick=pp;
	
//	function deleteRow(r){
//			var z=r.parentNode.parentNode.rowIndex;	
//			document.getElementById("tab1").deleteRow(z);
//		}
//		oBnt.onclick=deleteRow(this);
//为什么发在这里不行？给按钮绑定了事件也不行，但是把方法放在window.onlod外面就可以

	//默认显示的网页信息
	var x;
	for (x in web) {		
		showWeb(x);
	}
	

//	document.getElementsByTagName("table")[0].className="tbg";
//	document.getElementsByTagName("td")[1].className="tbg";
//	document.getElementsByTagName("td")[2].className="tbg";
//	document.getElementsByTagName("td")[3].className="tbg";
//	alert(document.getElementsByTagName("td")[0]);
	

	
//产生随机颜色背景
	function numtoHex(num){
		var hexStr="0123456789ABCDEF";
		var low=num%16;
		var high=(num-low)/16;
		hex=""+hexStr.charAt(high)+hexStr.charAt(low);
		return hex;
	}
	function bgcolor(){
	var rgbRed=parseInt(Math.random()*255);
	var rgbGreen=parseInt(Math.random()*255);
	var rgbBlue=parseInt(Math.random()*255);
	rgbRed=numtoHex(rgbRed);
	rgbGreen=numtoHex(rgbGreen);
	rgbBlue=numtoHex(rgbBlue);
	var bgcolor=rgbRed+rgbGreen+rgbBlue;
	document.getElementById("testimg").style.backgroundColor="#"+bgcolor;
	};
	//好看的颜色：rgb(223, 239, 215)；
	bgcolor();
	
	

}


	function deleteRow(r){
			var z=r.parentNode.parentNode.rowIndex;	
			alert(r);
				document.getElementById("tab1").deleteRow(z);
//			alert(z);			
		}	

	









