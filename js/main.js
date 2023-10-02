
getLocation();

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

let btnsearch = document.getElementById('btn-search');
let loc = document.getElementById('loc');

function search() {
    let location = document.getElementById('search-txt').value;
    loc.textContent = location;
    searchLocation(location);
}

function searchLocation(location) {
    // let icon = document.getElementById("icon");
    let temp = document.getElementById("temp-txt");
    // let locationName = document.getElementById("locationName");
    let country = document.getElementById("country");
    let cond = document.getElementById("condition");
    let precipitation = document.getElementById("precipitation");
    let humidity = document.getElementById("Humidity");
    let wind = document.getElementById("Wind");
    // let city = document.getElementById("city");

    $.ajax({
        method: "GET",
        url: `http://api.weatherapi.com/v1/current.json?key=509a323f637a41bba2e45615230110&q=${location}`,
        success: (data) => {
            console.log('====================================');
            console.log(data);
            console.log('====================================');
            // icon.src = data.current.condition.icon;
            temp.innerHTML = data.current.temp_c + "°C";
            cond.innerHTML = data.current.condition.text;
            precipitation.innerHTML = "precipitation - " + data.current.precip_mm + " mm";
            humidity.innerHTML = "Humidity - " + data.current.humidity + "%";
            wind.innerHTML = "Wind - " + data.current.wind_kph + " Km/h ";


            // locationName.innerHTML = data.location.tz_id;
            country.innerHTML = data.location.country;
            // city.innerHTML = data.location.name;
        }
    })
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        // x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    searchLocation(lat + "," + lon);
}


let btnmode = document.getElementById("Mode");

btnmode.addEventListener("click", () => {
    if (btnmode.value == "Light Mode") {
        btnmode.value = "Dark Mode"
    } else {
        btnmode.value == "Light Mode"
    }
})

let mode = 0;
let btnDarkImage = document.getElementById("Mode");


btnDarkImage.addEventListener("click", () => {
    if (mode % 2 == 0) {
        document.body.style.backgroundColor = "#FFFFFF"
        console.log(mode);

        mode++;
    } else {
        document.body.style.background = "#000"
        console.log(mode);

        mode++;
    }
})