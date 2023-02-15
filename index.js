const navElement = document.querySelector(".header");       //Get the navigation element
const contentEl = document.querySelector(".main");            //Get the content element of the page

window.addEventListener("scroll", ()=>{             //Add event listener to the window to get the value of page Y axis when scrolled.
                                                    //The set a condition that if the Y axis of the window when scrolled, is greater than the content element of the page from the top of the page
                                                    // minus(-) the navbar height - the margin top of the content element
                                                    //If that is true add the changed class with the navbar and else remove it.
    if(window.scrollY > contentEl.offsetTop - navElement.offsetHeight - 50){
        navElement.classList.add("active");
    }else{
        navElement.classList.remove("active");
    }
});