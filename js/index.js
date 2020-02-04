var l1 = document.getElementById("pp1")
var l2 = document.getElementById("pp2")
var l3 = document.getElementById("pp3")
var l4 = document.getElementById("pp4")
var l5 = document.getElementById("pp5")
var str1 = l1.innerHTML;
var str2 = l2.innerHTML;
var str3 = l3.innerHTML;
var str4 = l4.innerHTML;
var str5 = l5.innerHTML;
var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;
var i5 = 0;

function typing1() {
	var divTyping = document.getElementById("p1");
	if (i1 <= str1.length) {
		divTyping.innerHTML = str1.slice(0, i1++) + "_";
		setTimeout("typing1()", 50);
	} else {
		divTyping.innerHTML = str1;
	}
}

function typing2() {
	var divTyping = document.getElementById("p2");
	if (i2 <= str2.length) {
		divTyping.innerHTML = str2.slice(0, i2++) + "_";
		setTimeout("typing2()", 50);
	} else {
		divTyping.innerHTML = str2;
	}
}

function typing3() {
	var divTyping = document.getElementById("p3");
	if (i3 <= str3.length) {
		divTyping.innerHTML = str3.slice(0, i3++) + "_";
		setTimeout("typing3()", 50);
	} else {
		divTyping.innerHTML = str3;
	}
}

function typing4() {
	var divTyping = document.getElementById("p4");
	if (i4 <= str4.length) {
		divTyping.innerHTML = str4.slice(0, i4++) + "_";
		setTimeout("typing4()", 50);
	} else {
		divTyping.innerHTML = str4;
	}
}

function typing5() {
	var divTyping = document.getElementById("p5");
	if (i5 <= str5.length) {
		divTyping.innerHTML = str5.slice(0, i5++) + "_";
		setTimeout("typing5()", 50);
	} else {
		divTyping.innerHTML = str5;
	}
}

typing1();
typing2();
typing3();
typing4();
typing5();
