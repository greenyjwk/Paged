function nextPage( target, duration){

    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    console.log(startPosition);
    function animation(currentTime){
        if(startTime === null){
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;  
        var run = ease( timeElapsed , startPosition , distance , duration );
        window.scroll( 0 , run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }
    requestAnimationFrame(animation);     
}

nextPage('.firstPageClick', 1000);