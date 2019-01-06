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
	//money
	var moneyone = document.getElementById('moneyone');
    var moneytwo = document.getElementById("moneytwo");
    moneyone.onchange=function(){
        for(var i = 0;i < moneyone.length;i++){
            if(moneyone[i].selected){
                moneytwo.innerHTML = "<span class='div-2-3-2-three1'>¥</span>"+"<span class='div-2-3-2-three2'>"+moneyone[i].value+"</span>";
            }
         }
     }

//公告滚动
        var ul = document.getElementById("ul");
        function show() {
            var top = ul.offsetTop - 1;      
            ul.style.top = top + "px";       
            if (-1 * ul.offsetTop >= ul.offsetHeight / 2) {              
                ul.style.top = 0;                     
            }                                     
        }
        var t = setInterval(show, 50);

        var li = document.getElementById("ul").getElementsByTagName("li");
        for (var i = 0; i < li.length; i++) {
    
            li[i].onmouseout = function () {
                t = setInterval(show, 50);

            };
            li[i].onmouseover = function () {
                clearInterval(t);
            };
        }

     //图片滚动
        function getStyle(obj, attr) { //返回值带有单位px
            if (obj.currentStyle) {
                return obj.currentStyle[attr];
            } else {
                return getComputedStyle(obj, null)[attr];
            }
        }

        function animate(obj, json, callback) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
            var flag = true;
            for (var attr in json) {
                (function (attr) {
                    if (attr == "opacity") {
                        var now = parseInt(getStyle(obj, attr) * 100);
                        var dest = json[attr] * 100;
                    } else {
                        var now = parseInt(getStyle(obj, attr));
                        var dest = json[attr];
                    }
                    var speed = (dest - now) / 6;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if (now != dest) {
                        flag = false;
                    if (attr == "opacity") {
                        obj.style[attr] = (now + speed) / 100;
                    } else {
                        obj.style[attr] = now + speed + "px";
                    }
                }
            })(attr);
        }
            if (flag) {
                clearInterval(obj.timer);
                callback && callback(); //如果回调函数存在，就调用回调函数
            }
        }, 30);
    }

        var box = document.getElementById('box');
        var slider = document.getElementById('slider');
        var left = document.getElementById('left');
        var right = document.getElementById('right');
        var oNavlist = document.getElementById('nav').children;
        var index = 1; //打开页面生效的图片的下标为1
        var timer;
        var isMoving = false;
        box.onmouseover = function () {
            animate(left, {
                opacity: 0.6
            })
            animate(right, {
                opacity: 0.6
            })
            clearInterval(timer); //图片停止滚动
        }
        box.onmouseout = function () {
            animate(left, {
                opacity: 0
            })
            animate(right, {
                opacity: 0
            })
            timer = setInterval(next, 3000); //图片开始接着滚动
        }
        right.onclick = next;
        left.onclick = prev;

        function next() {
            if (isMoving) {
                return;
            }
            isMoving = true;
            index++;
            navmove();
            animate(slider, {
                left: -800 * index
            }, function () {
                if (index == 7) {       //index从0开始   0-7  共8
                    slider.style.left = '-800px';
                    index = 1;
                }
                isMoving = false;
            });
        }

        function prev() {
            if (isMoving) {
                return;
            }
            isMoving = true;
            index--;
            navmove();
            animate(slider, {
                left: -800 * index
            }, function () {
                if (index == 0) {
                    slider.style.left = '-4800px';
                    index = 6;
                }
                isMoving = false;
            });
        }
        //按钮点击切换事件
        for (var i = 0; i < oNavlist.length; i++) {
            oNavlist[i].index = i;
            oNavlist[i].onclick = function () {
                index = this.index + 1;
                navmove();
                animate(slider, {
                    left: -800 * index
                });
            }

        }
        //图片切换时按钮样式跟着切换
        function navmove() {
            for (var i = 0; i < oNavlist.length; i++) {
                oNavlist[i].id = "";
            }
            if (index > 6) {
                 oNavlist[0].id = "buttom";
            } else if (index <= 0) {
                  oNavlist[5].id = "bottom";
            } else {
                  oNavlist[index - 1].id = "buttom";
            }
        }
        //页面打开时自动滚动切换
        timer = setInterval(next, 200);

        var r1 = document.getElementById('rightone');
        var r2 = document.getElementById('righttwo');
        var r3 = document.getElementById('rightthree');
        var r4 = document.getElementById('rightfour');
        r1.onmouseover = function(){
            r1.style.right="-20px"
        }
        r1.onmouseout = function(){
            r1.style.right="-100px"
        }
        r2.onmouseover = function(){
            r2.style.right="-10px"
        }
        r2.onmouseout = function(){
            r2.style.right="-100px"
        }
        r3.onmouseover = function(){
            r3.style.right="-10px"
        }
        r3.onmouseout = function(){
            r3.style.right="-100px"
        }
        r4.onmouseover = function(){
            r4.style.right="-10px"
        }
        r4.onmouseout = function(){
            r4.style.right="-100px"
        }
}