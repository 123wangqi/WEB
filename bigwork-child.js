window.onload = function(){
	//float
	var cover = document.getElementById('cover');
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>170){
			cover.style.position = 'fixed';
			cover.style.zIndex = 10000;
		}else{
			cover.style.position = 'static';
		}
	}


	//规格切换
        var elect=document.getElementById('elect');
        var une=document.getElementById('une');
        var change = document.getElementById('change');
        elect.onclick = function(){
        	elect.setAttribute("class","hbl");
            une.setAttribute("class","nbr");
            change.innerHTML='<span>"150ml"</span>'
        }
        une.onclick = function(){
        	elect.setAttribute("class","nbl");
            une.setAttribute("class","hbr");
            change.innerHTML='<span>"200ml"</span>'
        }
 

        //图片切换
        var la1=document.getElementById('la1');
        var la2=document.getElementById('la2');
        var display=document.getElementById('display');
        var hid=document.getElementById('hid');
        la1.onmouseover = function(){
        	la1.setAttribute("class","x7600");
        	display.setAttribute("src",'img/pp0.jpeg');
            hid.setAttribute("src",'img/pp0.jpeg');
        }
        la2.onmouseover = function(){
        	la2.setAttribute("class","x7600");
        	display.setAttribute("src",'img/pp1.jpeg');
        	hid.setAttribute("src",'img/pp1.jpeg');
        }
        la1.onmouseout = function(){
        	la1.setAttribute("class","x76");
        	display.setAttribute("src",'img/pp0.jpeg');
        }
        la2.onmouseout = function(){
        	la2.setAttribute("class","x77");
        	display.setAttribute("src",'img/pp1.jpeg');
        }      

    //1-5
        var i1=document.getElementById('i1');
        var i2=document.getElementById('i2');
        var i3=document.getElementById('i3');
        i1.onclick = function(){
        	var ooo=parseInt(document.getElementById("i2").value);
            if(ooo==1){               
                i1.style.cursor='not-allowed';
            }
            else if(ooo>1){
                i2.value=ooo-1;  
            }
        }
        i1.onmouseover = function(){
        	var ooo=parseInt(document.getElementById("i2").value);
            if(ooo<1 || ooo==1){
                i1.style.cursor='not-allowed';
            }
            else{
                i1.style.cursor='pointer';
            }
        }
        i1.onmouseout = function(){
        	i1.style.cursor='pointer';
        }
        i3.onclick = function(){
        	var ooo=parseInt(document.getElementById("i2").value);
            if(ooo>=5){
                i3.style.cursor='not-allowed';
            }
            else{
                i2.value=ooo+1;
            }
        }
        i3.onmouseover = function(){
        	var ooo=parseInt(document.getElementById("i2").value);
            if(ooo==5 || ooo>5){
                i3.style.cursor='not-allowed';
            }
            else{
                i3.style.cursor='pointer';
            }
        }
        i3.onmouseout = function(){
        	i1.style.cursor='pointer';
        }
        
        //蒙罩购物车
        
        var btn = document.getElementById('btn');
        var mz = document.getElementById('mz');
        var clear = document.getElementById('clear');
        var clear1 = document.getElementById('clear1');
        var clear2 = document.getElementById('clear2');
        var x1=document.getElementById("mz");
		var x2=document.getElementById("buy");
        btn.onclick = function(){
        	mz.setAttribute('class','mz1');
			x1.style.display="block";
			x2.style.display="block";
        }
    	clear.onclick= function(){
			x1.style.display="none";
			x2.style.display="none";
    	}
        clear1.onclick= function(){
            x1.style.display="none";
            x2.style.display="none";
        }
        clear2.onclick= function(){
            x1.style.display="none";
            x2.style.display="none";
        }


	//放大镜
		var a = document.getElementById('one');
        var b = document.getElementById("one-1");
        var c = document.getElementById("hidden");
        var sliderrr = document.getElementById("sliderrr");
        b.onmouseover = function () {
            sliderrr.style.display = 'block';
            c.style.display = 'block';
        }
        b.onmouseout = function () {
            sliderrr.style.display = 'none';
            c.style.display = 'none';
        }

        b.onmousemove = function (ev) {
            var ev = ev || window.event;
            var TOP=document.body.scrollTop||document.documentElement.scrollTop;
            var oL = ev.clientX - a.offsetLeft - sliderrr.offsetWidth / 2;
            var oT = ev.clientY +  TOP  - a.offsetTop - sliderrr.offsetHeight / 2;
            var oMaxw = b.offsetWidth - sliderrr.offsetWidth;
            var oMaxh = b.offsetHeight - sliderrr.offsetHeight;
            var scale = c.offsetWidth / sliderrr.offsetWidth;

            oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
            oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;
            sliderrr.style.left = oL + 'px';
            sliderrr.style.top = oT + 'px';
            hid.style.left = -scale * oL + 'px'
            hid.style.top = -scale * oT + 'px'
        }

}	