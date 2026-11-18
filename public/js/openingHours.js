function tempClose(reason) {
    // This removes the opening hours and adds a message that the cafeteria is closed
    const openingHoursSlide = document.getElementById("cafeteria");
    let header = document.getElementById("openHoursHead");
    const openingHours = document.getElementById("openHours");
    openingHours.remove();
    header.style.fontSize = 85 + "px";
    header.style.right = 0 + "%";
    header.innerText = "Cafeterian har tillfälligt stängt";
    header.style.top = 3 + "%";
    // This adds a message with the reason for the closing 
    const reasoning = document.createElement("p");
    reasoning.className = "openHours";
    let reasoningText = document.createTextNode("");
    // If there are a reason write it out
    if (reason) {
        reasoningText = document.createTextNode('På grund av ' + reason);
        reasoning.style.top = 30 + "%";
        reasoning.style.right = 3 + "%";
    };
    reasoning.appendChild(reasoningText);
    openingHoursSlide.appendChild(reasoning);
    isClosed = true;
}

function getOpeningHoursHelper(data) {
    const openingHoursList = parseCsvString(data);
    // Checks if the cafeteria is temporarily closed
    const isTempClose = openingHoursList[6][1];
    console.log(isTempClose);
    // Adds the opening hours to the website
    const openingHoursMonToThu = document.getElementById("openingHoursMonToThu");
    const lunchbreakHours = document.getElementById("lunchbreakHours");
    const fridayHours = document.getElementById("fridayHours");
    openingHoursMonToThu.innerHTML = openingHoursList[0][1];
    fridayHours.innerHTML = openingHoursList[1][1];
    lunchbreakHours.innerHTML = openingHoursList[3][1];
    
    // If closed, run tempClose()
    if (isTempClose === "TRUE") {
        tempClose(openingHoursList[7][1]);
    };
}
