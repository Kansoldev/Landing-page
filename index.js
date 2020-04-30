let time = document.querySelector("#time"),
Greeting = document.querySelector("#greeting"), 
focus = document.querySelector("#focus"),
focus2 = document.querySelector("#focus2");

const showTime = () => {
	let Today = new Date(),
	Hour = Today.getHours(),
	Minutes = Today.getMinutes(),
	Seconds = Today.getSeconds();

	// get AM or PM
	const ampm = Hour >= 12 ? "PM" : "AM";

	//Convert hour to 12 hour format
	Hour = Hour % 12 || 12;

	time.innerHTML = `${Hour} : ${addZero(Minutes)} : ${addZero(Seconds)} ${ampm} <p style='margin:30px 0px;'>${Greeting}</p>`;

	setTimeout(showTime, 1000);
}

// Show background images depending on time of the day //
const showBg = () => {
	let today = new Date();
	let hour = today.getHours();

	if(hour < 12) {
		Greeting = "Good Morning";
		focus.textContent = "What is your focus this morning";
		document.body.style.backgroundImage = "url('dist/img/morning.jpg')";
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center center";

	} else if(hour <= 15) {
		Greeting = "Good Afternoon";
		focus.textContent = "What is your focus this afternoon";
		document.body.style.backgroundImage = "url('dist/img/afternoon.jpg')";
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center center";
	} else {
		Greeting = "Good Evening";
		focus.textContent = "What is your focus this evening";
		document.body.style.backgroundImage = "url('dist/img/Evening.jpg')";
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center center";
	}

}

const addZero = (n) => {
	const num = n < 10 ? "0" : " ";
	return num + n;
}


const showInfo = () => {
	if (localStorage.getItem("focus")) {
		focus2.value = localStorage.getItem("focus");
	}
}

const showText = (e) => {
	if (e.which === 13 || e.keycode === 13) {
		localStorage.setItem("focus", e.target.value);
		focus2.blur();
	}
}

focus2.addEventListener("keypress", showText);

showBg();

showTime();

showInfo();