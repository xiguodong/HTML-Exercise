function setVisibility(id, visible) {
	var elem = document.getElementById(id);
	if(visible)
		elem.style.display = "block";
	else
		elem.style.display = "none";
}

function leftBtnClicked() {
	setVisibility("left-btn", false);
	setVisibility("right-btn", true);
	setVisibility("websites", true);
	setVisibility("apps", false);
}

function rightBtnClicked() {
	setVisibility("left-btn", true);
	setVisibility("right-btn", false);
	setVisibility("websites", false);
	setVisibility("apps", true);
}