let draggableElems = document.querySelectorAll("#draggable-elem");
let initialX = {},
	initialY = {};
let moveElement = {};
//events object
let events = {
	mouse: {
		down: "mousedown",
		move: "mousemove",
		up: "mouseup"
	},
	touch: {
		down: "touchstart",
		move: "touchmove",
		up: "touchend"
	}
};
let deviceType = "";
//Detect touch device
const isTouchDevice = () => {
	try {
		//We try to create TouchEvent (it would fail for desktops and throw error)
		document.createEvent("TouchEvent");
		deviceType = "touch";
		return true;
	} catch (e) {
		deviceType = "mouse";
		return false;
	}
};
isTouchDevice();
for (let i = 0; i < draggableElems.length; i++) {
	var draggableElem = draggableElems[i];
	// start(mouse down/touch start)
	draggableElem.addEventListener(events[deviceType].down, (e) => {
		e.preventDefault();
		//initial x and y points
		initialX[this] = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
		initialY[this] = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
		// start movement
		moveElement[this] = true;
	});
	// Move
	draggableElem.addEventListener(events[deviceType].move, (e) => {
		//if movement==true then set top and left to new X and y while removing any offset
		if (moveElement[this]) {
			var elem = e.target;
			e.preventDefault();
			let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
			let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
			elem.style.top = elem.offsetTop - (initialY[this] - newY) + "px";
			elem.style.left = elem.offsetLeft - (initialX[this] - newX) + "px";
			initialX[this] = newX;
			initialY[this] = newY;
		}
	});
	//mouse up/touch end
	draggableElem.addEventListener(
		events[deviceType].up,
		(stopMovement = (e) => {
			//stop movement
			moveElement[this] = false;
		})
	);
	draggableElem.addEventListener("mouseleave", stopMovement);
	document.addEventListener(events[deviceType].up, (e) => {
		moveElement[this] = false;
	});
}
