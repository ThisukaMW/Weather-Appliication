function updateLocalDateTime() {
    var currentDate = new Date();
    var localDateTime = currentDate.toLocaleString();

    // Get the element by its ID
    var localDateTimeElement = document.getElementById("localDateTime");

    // Update the content of the element
    localDateTimeElement.textContent = localDateTime;
}

window.onload = function () {
    updateLocalDateTime();
    // Set an interval to update the time every second (optional)
    setInterval(updateLocalDateTime, 1000);
};
