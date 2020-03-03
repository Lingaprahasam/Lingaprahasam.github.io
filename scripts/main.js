let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}


myButton.onclick = function () {
    setUserName();
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}


let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/1200px-Firefox_logo,_2019.svg.png') {
        myImage.setAttribute('src', 'images/2019-09-10-02-36-34-1ec693.png');
    } else {
        myImage.setAttribute('src', 'images/1200px-Firefox_logo,_2019.svg.png');
    }
}