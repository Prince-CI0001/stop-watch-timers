
let startBtn = document.getElementById('play');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');

let startBtn1 = document.getElementById('play1');
let pauseBtn1 = document.getElementById('pause1');
let resetBtn1 = document.getElementById('reset1');

let currentTime;
let currentTime1;

let obj = {
	hour : 00,
	minute : 00,
	second : 00,
	count : 00,
}

let obj1 = {
	hour1 : 00,
	minute1 : 00,
	second1 : 00,
	count1 : 00,
}

//PLAY BUTTONS
startBtn.addEventListener('click', function () {
	showButton("pause",startBtn,pauseBtn);
	currentTime =stopWatch(obj.hour , obj.minute , obj.second, obj.count ,'watch',currentTime);
});

startBtn1.addEventListener('click', function () {
    
	showButton("pause",startBtn1,pauseBtn1);
	currentTime1 = stopWatch(obj1.hour1 , obj1.minute1 , obj1.second1, obj1.count1 ,'watch1' , currentTime1);
});

//pauseBtn
 pauseBtn.addEventListener('click', function () {
	let time = document.getElementById("watch").innerText.split(":");
	obj = {	
	hour : parseInt(time[0]),
	minute : parseInt(time[1]),
	second : parseInt(time[2]),
	count : parseInt(time[3]),
	}
	clearInterval(currentTime);
    showButton("play",startBtn,pauseBtn);
});

pauseBtn1.addEventListener('click', function () {
	let time1 = document.getElementById("watch1").innerText.split(":");
	obj1 = {	
	hour1 : parseInt(time1[0]),
	minute1 : parseInt(time1[1]),
	second1 : parseInt(time1[2]),
	count1 : parseInt(time1[3])
	}
	clearInterval(currentTime1);
    showButton("play",startBtn1,pauseBtn1);
});
//Reset Buttons
resetBtn.addEventListener('click', function () {
	clearInterval(currentTime);
	obj.hour = 0;
	obj.minute = 0;
	obj.second = 0;
	obj.count = 0;
    document.getElementById("watch").innerHTML = "00:00:00:00";    
});

resetBtn1.addEventListener('click', function () {
	clearInterval(currentTime1);
	obj1.hour1 = 0;
	obj1.minute1 = 0;
	obj1.second1 = 0;
	obj1.count1 = 0;
    document.getElementById("watch1").innerHTML = "00:00:00:00";    
});


//Start function//
function stopWatch(hour,minute,second,count,id, liveTime) {
	
	 	liveTime = setInterval(()=>{
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
			document.getElementById(id).innerText=`${hrString}:${minString}:${secString}:${countString}`;	
		},10);
		console.log(liveTime, currentTime)
		return liveTime;
}

//
function showButton(buttonKey,startBtn,pauseBtn) {
    const buttonToShow = buttonKey === "play" ? startBtn : pauseBtn;
    const buttonToHide = buttonKey === "play" ? pauseBtn : startBtn;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}
