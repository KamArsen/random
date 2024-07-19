const url = 'https://randomuser.me/api/'

// DOM
const userEl = document.getElementById('user')
const spinner = document.getElementById('loader')

function getRandomUser() {
    fetch(url)
        .then((response) => { return response.json() })
        .then(function (data) {
            console.log(data.results);
            for (const user of data.results) {
                userEl.innerHTML += `
                <img width="180" class="img" src="${user.picture.large}" />
                <div class="blick">
                
                <div class="list">
                <br/>
                     ${user.name.title}
                     ${user.name.first}
                     ${user.name.last}
                </div>
                <div class="list text">
                ${user.email}
                </div>
                <div class="list text">
                ${user.dob.date}
                ${user.dob.age}
                </div>
                <div class="list text">
                ${user.location.country}
                ${user.location.state}
                ${user.location.city}
                </div>
                <div class="list text">
                ${user.cell}
               
                </div>
                </div>
                `
                
            }
        })
        .finally(() => {
            spinner.style.display = 'none'
        })
}

getRandomUser()

const btnRandom = document.getElementById('random').addEventListener('click',function(){
    location.reload();
})