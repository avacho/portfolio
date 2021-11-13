//alert('測試引用');

window.onload=function()
{
	//獲取按鈕事件
	var bt1=document.getElementById("pre");
	var bt2=document.getElementById("next");
	//獲取img標籤中的第一個元素結點
	var img=document.getElementsByTagName("img")[0];
	//建立一個數組用來儲存圖片的路徑（即src屬性）
	var imgarr=["../assets/image/img-1616749588479ccfffabf4cceee702407eb40c8a7c92e.jpg",
	"../assets/image/img-1623303220980f058dd95086c6112b3a67a37f788eba9.jpg",
	"../assets/image/portfolio-one.jpg"
	];
	//建立圖片描述陣列
	var photext=["這是林凡",
	"這是陸柯燃",
	"測試"
	];
	//設定陣列的索引下標
	 var index=0;
	 //獲取p標籤
	//var pbq=document.getElementById("pid");
	var describe=document.getElementById("ptext");
	//設定提醒文字
	//pbq.innerHTML="共有"+imgarr.length+"張圖片,當前第"+(index+1)+"張";
	describe.innerHTML="這是林凡";
	//繫結事件
	bt1.onclick=function()
	{
		//書寫事件驅動程式
		index--;//切換到上一張索引自減
		//判斷索引是否小於0
		if(index<0)
		{
			index=imgarr.length-1;//目的是可以實現迴圈切換
		}
		//修改img的src屬性
		img.src=imgarr[index];
		//當點選按鈕以後，重新設定p標籤中的顯示內容
		//pbq.innerHTML="共有"+imgarr.length+"張圖片,當前第"+(index+1)+"張";
		describe.innerHTML=photext[index];
	};
	//繫結事件
	bt2.onclick=function()
	{
		//書寫事件驅動程式
		index++;//切換到下一張索引自加
		//判斷索引是否大於4
		if(index>imgarr.length-1)
		{
			index=0;//目的是可以實現迴圈切換
		}
		//修改img的src屬性
		img.src=imgarr[index];
		//當點選按鈕以後，重新設定p標籤中的顯示內容
		//pbq.innerHTML="共有"+imgarr.length+"張圖片,當前第"+(index+1)+"張";
		describe.innerHTML=photext[index];
	};
};