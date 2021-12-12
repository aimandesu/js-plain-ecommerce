(function(){


    var topNavigation = document.querySelector('.top-navigation');
    var navigationLinks = document.querySelectorAll('.top-navigation a');
    var activeLink = document.querySelector('a.active');
    var slide = document.querySelector('.active-link');
    
    navigationLinks.forEach(link =>{
        link.addEventListener('click', slideToLink);
    })

    function slideToLink(e){
        removeActiveClass();
        setActiveSlide(e.target);
        e.target.classList.add('active');
    }

    function removeActiveClass(){
        activeLink = document.querySelector('a.active');
        activeLink.classList.remove('active');
    }

    function setActiveSlide(target){
        var left = getLeftValue(target);
        slide.style.left = `${left}px`;
    }

    function getLeftValue(targetLink){
        var targetLeft = targetLink.getBoundingClientRect().left;
        var topNavigationLeft = topNavigation.getBoundingClientRect().left;
        return targetLeft - topNavigationLeft + 50;
    }

    setActiveSlide(activeLink);
})();