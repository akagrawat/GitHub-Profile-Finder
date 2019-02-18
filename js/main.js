const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");
const bioContainer = document.querySelector(".main__profile-bio");
const followContainer = document.querySelector(".main__profile-follow");
const followersContainer = document.querySelector(".main__profile-followers");
const viewContainer = document.querySelector(".main__profile-view");
const proContainer = document.querySelector(".profile");
const prosContainer = document.querySelector(".profiles");

const client_id = 'f6ee146c15bb5a43bd4c';
const client_secret = '478424df37fd9e41036166135f430ffa7e128a5b';


/* API calls Github */

const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?
    client_id=${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();
    return {data}

};

const showData = () =>{
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);
        console.log(res.data.login);
        console.log(res.data.bio);
        nameContainer.innerHTML = `${res.data.name}`;
        bioContainer.innerHTML = `<i class="fas fa-quote-left"></i> ${res.data.bio}`;
        reposContainer.innerHTML = `<button type="button" class="btn btn-warning btn-rounded">Repos:${res.data.public_repos}</button>`;
        followersContainer.innerHTML = `<button type="button" class="btn btn-primary btn-rounded">Followers:${res.data.followers}</button>`;
        followContainer.innerHTML = `<button type="button" class="btn btn-success btn-rounded">Following:${res.data.following}</button>`;
        viewContainer.innerHTML = `<a class="btn btn-pink" href="${res.data.url}" target="_blank"><i class="fas fa-clone left"></i> View Profile</a>`;
        urlContainer.innerHTML = `URL: <span style="color:black">${res.data.public_url}</span>`;
    })

};

searchButton.addEventListener("click", () => {
showData();
var x = document.getElementById('show');
x.style.visibility = "visible"
proContainer.innerHTML =`<i class="fas fa-chart-pie"></i>Profile`;
});

/* / Github */


/* Image Validator */
function validateImage(event) {
    var files = event.target.files;
    var height = 0;
    var width = 0;
    var _URL = window.URL || window.webkitURL;
    for (var i = 0; i < files.length; i++) {

        var img = new Image();
        img.onload = function () {
            height = img.height;
            width = img.width;
            alert( 'Image Width:' + width + " & " +'Height:' + height);
            if (width<600 || width>600) {
                alert('Please Enter Image equals to 600px');
                return false;
            } else {
                alert('Thankyou ! Image Submit Sucessfully');
            }
        };
        img.src = _URL.createObjectURL(files[i]);
        img.onerror = function() {  
            alert( "Not a valid file: " + files.type);  
        };  
    }
}
