var temp = document.querySelectorAll('.nav-menu a');
var interval;
for(var i = 0; i<temp.length; i++){
    temp[i].addEventListener('click',function(event) {
        event.preventDefault();
        var sectionId = this.textContent.trim();
        console.log(sectionId);
        var section = document.getElementById(sectionId);
        console.log(section);
        interval = setInterval(scrollVertically, 20, section);
    });
}

function scrollVertically(section){
	var sectionCoordinates = section.getBoundingClientRect();

	// Check if we're already at the bottom section (Contact)
    if (section === document.querySelector('main > section:last-child') && sectionCoordinates.top <= 300) {
        clearInterval(interval);
        return;
    }
        	if(sectionCoordinates.top <= 0){
        		clearInterval(interval);
        		return;
        	}
        	window.scrollBy(0,50);
}


// Skill bar auto fill

// var progressBars = document.querySelectorAll('.skill-progress > div');
// var skillContainer = document.getElementsByClassName('skill-display');
// window.addEventListener('scroll', checkScroll);
// var scIsVisible = false;


// function intiliazeBarWidth(){
// 	for(let bar of progressBars){
// 		bar.style.width = 0 + '%';
// 	}
// }


// intiliazeBarWidth();

// function fillBar(){
// 	for(let bar of progressBars){
// 	let currentWidth = 0;
// 	let targetWidth = bar.getAttribute('data-bar-width');
// 	var interval = setInterval(function(){
// 		if(currentWidth > targetWidth){
// 			clearInterval(interval);
// 			return;
// 		}
// 		else{
// 			currentWidth++;
// 			bar.style.width = currentWidth + '%';
// 		}
// 	},5);
// }
// }

// function checkScroll(){
// 	var containerDim = skillContainer[0].getBoundingClientRect();

// 	if(scIsVisible === false && containerDim.top < window.innerHeight){
// 		console.log("visible");
// 		scIsVisible = true;
// 		fillBar();
// 	}else if(containerDim.top > window.innerHeight){
// 		scIsVisible = false;
// 		intiliazeBarWidth();
// 	}
// }


// for individual bars //

var progressBars = document.querySelectorAll(".skill-progress > div");


function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}


function fillBar(bar){
	let currentWidth = 0;
	let targetWidth = bar.getAttribute('data-bar-width');
	var interval = setInterval(function(){
		if(currentWidth > targetWidth){
			clearInterval(interval);
			return
		}else{
			currentWidth++;
			bar.style.width = currentWidth + '%';
		}
	},5);
}


function progress(){
    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight))) {
            bar.setAttribute("data-visited", true);
            console.log("hello");
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}

var percScrolled = document.querySelector('#perc');

function percentageScrolled(){
     const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const scrollPercentage = (scrolled / scrollableHeight) * 100;
    console.log(scrollableHeight);
    console.log(scrollPercentage);
    percScrolled.innerText = Math.floor(scrollPercentage);
}

function checkScroll() {

    progress();
    percentageScrolled();

}



window.addEventListener("scroll", checkScroll);





