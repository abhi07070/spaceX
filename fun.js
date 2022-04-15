(function() {

    let socials = document.querySelectorAll('.social div a i');

    socials.forEach(function(social, index){
        social.style.animation = `moveIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/9}s`;
    })

    let rocketPieces = document.querySelectorAll('.rocket-body span');
    let rocket = document.querySelector('.rocket');

    let triggerStart = window.innerHeight/5;

    let rocketOffsettop = rocket.offsetTop;
    let thirdOffsetTop = rocketPieces[2].offsetTop;

    document.addEventListener('scroll',(e) =>{
    if(window.scrollY>(rocketOffsettop-triggerStart)){
        rocketPieces[0].classList.add('active');
        rocketPieces[1].classList.add('active');
    }else{
        rocketPieces[0].classList.remove('active');
        rocketPieces[1].classList.remove('active');
    }

    if(window.scrollY>(thirdOffsetTop-triggerStart)){
        rocketPieces[2].classList.add('active');
    }else{
        rocketPieces[2].classList.remove('active');
    }
    })

    // let nav = document.querySelector('header nav');
    // // let movedown=document.querySelector('header nav.scroll')
    // nav.addEventListener('scroll',(e)=>{
    //     if(window.scrollY > thirdOffsetTop){
    //        nav.classList.add('movedown')
    //     }
    // })

}())