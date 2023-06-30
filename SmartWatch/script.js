var pageHeader = document.getElementById('header');
pageHeader.style.backgroundColor = "#160444";

var headerImage = document.createElement("Img")
headerImage.className = 'headerImage';
headerImage.src = 'https://clipartcraft.com/images/amazon-smile-logo-transparent-background-7.png'
pageHeader.appendChild(headerImage);

// FOR WATCH IMAGE CONTAINER
var watchImageContainer = document.getElementsByClassName('smartWatch')[0];
var watchImage = document.createElement("img");
watchImage.src = 'assets/blackImage.png'
watchImageContainer.appendChild(watchImage);

// CREATING IMAGE ELEMENT AND BY DEFAULT SET IT TO DISPLAY NONE
var blueImage = document.createElement("img");
blueImage.src = 'assets/blueImage.png'
blueImage.style.display = 'none';
watchImageContainer.appendChild(blueImage)
var pinkImage = document.createElement("img");
pinkImage.src = 'assets/pinkImage.png'
pinkImage.style.display = 'none';
watchImageContainer.appendChild(pinkImage)
var purpleImage = document.createElement("img");
purpleImage.src = 'assets/purpleImage.png'
purpleImage.style.display = 'none';
watchImageContainer.appendChild(purpleImage)
var redImage = document.createElement("img");
redImage.src = 'assets/redImage.png'
redImage.style.display = 'none';
watchImageContainer.appendChild(redImage)

//  FOR HEART RATE
var heartBeatContainer = document.createElement('div');
heartBeatContainer.className = 'heartBeatContainer';
var heartBeatImage = document.createElement('img');
heartBeatImage.src = 'assets/heartBeat.jpg'
heartBeatContainer.appendChild(heartBeatImage);

var heartRate = document.createElement('p');
heartRate.innerHTML = '78';
heartBeatContainer.appendChild(heartRate);
watchImageContainer.appendChild(heartBeatContainer);

// FOR WATCH TIMER
var date = new Date();
var currentHour = date.getHours();
var currentMinute = date.getMinutes();
var currentSecond = date.getSeconds();

var watchTime = document.createElement('div');
watchTime.className = 'watchTime';
setInterval(function() {

    if(currentSecond<10){
        currentSecond = ('0'+currentSecond).slice(-2);
    }
    if(currentMinute<10){
        currentMinute = ('0'+currentMinute).slice(-2);
    }
    if(currentHour<10){
        currentHour = ('0'+currentHour).slice(-2);
    }
    watchTime.innerHTML = currentHour +' : '+ currentMinute +' : '+ currentSecond;

    currentSecond++;
    if(currentSecond == 60){
        currentMinute++;
        currentSecond = 0
    } 
    if(currentMinute == 60){
        currentHour++;
        currentMinute=0;
    }
    if(currentHour == 24){
        currentHour=0;
        currentMinute=0;
        currentSecond=0;
    }
},1000);

watchImageContainer.appendChild(watchTime)

// FOR ABOUT WATCH CONTAINER
var aboutWatchContainer = document.getElementsByClassName('aboutWatch')[0];
var watchHeading = document.createElement('p');
watchHeading.innerHTML = 'FitBit 19 - The Smartest Watch';
watchHeading.className = 'watchHeading'
aboutWatchContainer.appendChild(watchHeading);
// FOR WATCH DESCRIPTION
var watchDescription = document.createElement('p');
watchDescription.innerHTML = 'This is the smartest watch in the world with all the modern features'
watchDescription.className = 'watchDescription';
aboutWatchContainer.appendChild(watchDescription)

var colorPalatte = document.createElement('p');
colorPalatte.innerHTML = 'Select Color';
colorPalatte.className = 'colorPalatte'
aboutWatchContainer.appendChild(colorPalatte);

var colorList = ['#23211f','#ca3d22','#8a5362','#e9c7be','#565681']
var allColorBox = document.createElement('div');
allColorBox.className = 'allColorBox'
for(let i=0; i<colorList.length; i++){
    var colorBox = document.createElement('div');
    colorBox.className = 'colorBox'+i;
    colorBox.style.height = '45px'
    colorBox.style.width = '60px'
    colorBox.style.borderRadius = '5px'
    colorBox.style.backgroundColor = colorList[i];
    colorBox.addEventListener('click',function(index){
        if(index.target.className == 'colorBox0'){
            watchImage.style.display = 'block'
            redImage.style.display = 'none'
            blueImage.style.display = 'none'
            purpleImage.style.display = 'none'
            pinkImage.style.display = 'none'
        }
        if(index.target.className == 'colorBox1'){
            watchImage.style.display = 'none'
            redImage.style.display = 'block'
            blueImage.style.display = 'none'
            purpleImage.style.display = 'none'
            pinkImage.style.display = 'none'
        }
        if(index.target.className == 'colorBox2'){
            watchImage.style.display = 'none'
            redImage.style.display = 'none'
            blueImage.style.display = 'none'
            purpleImage.style.display = 'block'
            pinkImage.style.display = 'none'
        }
        if(index.target.className == 'colorBox3'){
            watchImage.style.display = 'none'
            redImage.style.display = 'none'
            blueImage.style.display = 'none'
            purpleImage.style.display = 'none'
            pinkImage.style.display = 'block'
        }
        if(index.target.className == 'colorBox4'){
            watchImage.style.display = 'none'
            redImage.style.display = 'none'
            blueImage.style.display = 'block'
            purpleImage.style.display = 'none'
            pinkImage.style.display = 'none'
        }

    })
    allColorBox.appendChild(colorBox);
}
aboutWatchContainer.appendChild(allColorBox);

var features = document.createElement('p');
features.innerHTML = 'Features';
features.className = 'features';
aboutWatchContainer.appendChild(features);

// FUNCTIONALITY CONTAINER FOR TIME AND HEARTRATE BUTTON
var functionalityContainer = document.createElement('div');
functionalityContainer.className = 'functionalityButtons';
var timeButton = document.createElement('button');
timeButton.className = 'timeButton';
timeButton.innerHTML = 'Time';
timeButton.addEventListener('click',function(){
    watchTime.style.display = 'block'
    heartBeatContainer.style.display = 'none'
})
functionalityContainer.appendChild(timeButton);


var heartRate = document.createElement('button');
heartRate.className = 'heartRateButton';
heartRate.innerHTML = 'Heart Rate';
heartRate.addEventListener('click',function(){
    heartBeatContainer.style.display = 'block'
    watchTime.style.display = 'none'
})
functionalityContainer.appendChild(heartRate);

aboutWatchContainer.appendChild(functionalityContainer);

var buyNowButton = document.createElement('button');
buyNowButton.className = 'buyNow';
buyNowButton.innerHTML = 'BUY NOW';
aboutWatchContainer.appendChild(buyNowButton);



