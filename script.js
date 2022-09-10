
let startBtn = document.getElementById('play');
let stopBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function () {
    console.log("start");
	showButton("pause");
    timer = true;
	stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
    showButton("play");
});

resetBtn.addEventListener('click', function () {
    timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
    document.getElementById("watch").innerHTML = "00:00:00:00";    
});

function stopWatch() {
    if (timer) {
        count++;
        
		if (count == 100) {
            second++;
			count = 0;
		}
        
		if (second == 60) {
            minute++;
			second = 0;
		}
        
		if (minute == 60) {
            hour++;
			minute = 0;
			second = 0;
		}
        
		let hrString = hour;
		let minString = minute;
		let secString = second;
		let countString = count;
        
		if (hour < 10) {
            hrString = "0" + hrString;
		}
        
		if (minute < 10) {
            minString = "0" + minString;
		}
        
		if (second < 10) {
            secString = "0" + secString;
		}
        
		if (count < 10) {
            countString = "0" + countString;
		}
        document.getElementById("watch").innerText= `${hrString}:${minString}:${secString}:${countString}`; 
		setTimeout(stopWatch, 10);
        
	}
}


function showButton(buttonKey) {
    console.log("change");
    const buttonToShow = buttonKey === "play" ? startBtn : stopBtn;
    const buttonToHide = buttonKey === "play" ? stopBtn : startBtn;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}



let startBtn1 = document.getElementById('play1');
let stopBtn1 = document.getElementById('pause1');
let resetBtn1 = document.getElementById('reset1');

let hour1 = 00;
let minute1 = 00;
let second1 = 00;
let count1 = 00;

startBtn1.addEventListener('click', function () {
    console.log("start");
	showButton1("pause");
    timer1 = true;
	stopWatch1();
});

stopBtn1.addEventListener('click', function () {
    timer1 = false;
    showButton1("play");
});

resetBtn1.addEventListener('click', function () {
    timer1 = false;
	hour1 = 0;
	minute1 = 0;
	second1 = 0;
	count1 = 0;
    document.getElementById("watch1").innerHTML = "00:00:00:00";    
});

function stopWatch1() {
    if (timer1) {
        count1++;
        
		if (count1 == 100) {
            second1++;
			count1 = 0;
		}
        
		if (second1 == 60) {
            minute1++;
			second1 = 0;
		}
        
		if (minute1 == 60) {
            hour1++;
			minute1 = 0;
			second1 = 0;
		}
        
		let hrString1 = hour1;
		let minString1 = minute1;
		let secString1 = second1;
		let countString1 = count1;
        
		if (hour1 < 10) {
            hrString1 = "0" + hrString1;
		}
        
		if (minute1 < 10) {
            minString1 = "0" + minString1;
		}
        
		if (second1 < 10) {
            secString1 = "0" + secString1;
		}
        
		if (count1 < 10) {
            countString1 = "0" + countString1;
		}
        document.getElementById("watch1").innerText= `${hrString1}:${minString1}:${secString1}:${countString1}`; 
		setTimeout(stopWatch1, 10);
        
	}
}


function showButton1(buttonKey) {
    console.log("change");
    const buttonToShow = buttonKey === "play" ? startBtn1 : stopBtn1;
    const buttonToHide = buttonKey === "play" ? stopBtn1 : startBtn1;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}