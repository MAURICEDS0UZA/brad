function generateRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            checkgender(user.gender)
            document.getElementById('userImage').src = user.picture.large;
            document.getElementById('userName').textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById('userGender').textContent = `Gender: ${user.gender}`.toUpperCase();
            document.getElementById('userEmail').textContent = `Email: ${user.email}`;
            document.getElementById('userCity').textContent = `City: ${user.location.city}`;
            document.getElementById('userPhone').textContent = `Phone: ${user.phone}`;

        })
        .catch(error => console.error('Error fetching user details:', error));
}


// cheching gender & change bgcolor
function checkgender(gender) {
    if (gender == "male") {
        document.body.style.backgroundColor = "#03d3fc";
        document.querySelector(".btn").style.backgroundColor = "#091214"
    } else {
        document.body.style.backgroundColor = "Pink";
        document.querySelector(".btn").style.backgroundColor = "#03d3fc"
    }
}
// Initial load
generateRandomUser();
