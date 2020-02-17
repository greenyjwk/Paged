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
        var timeElapsed = currentTime = startTime;  
    }
    requestAnimationFrame(animation);     
}






nextPage('.section1', 1000 );