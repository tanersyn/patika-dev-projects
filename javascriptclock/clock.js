let userName = prompt("Adınız nedir?")

let myName = document.querySelector('#myName') 


myName.innerHTML = `${userName}`


function showTime() {


    let d = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    let time = document.querySelector('#myClock')

    time.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${days[d.getUTCDay()]}`
    setTimeout(showTime, 1000); 
}

showTime(); 