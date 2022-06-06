const tl = gsap.timeline({defaults: {duration: 0.5, ease: "expo.out"}, paused:true})

$('.main').on('click', function(event) {
    event.preventDefault();

    // animation start //
    tl.play()
    tl.fromTo('.on-1', {scale: (1)}, {scale: (0.9)})
    tl.fromTo('.on-2', {scale: (1), opacity: 0}, {opacity: 1, scale: (0.9)}, '<')
    tl.to('#border', {backgroundColor: "#1f2041"}, '<')
    tl.fromTo('.on-3', {opacity: (0), scale: (0.9)}, {opacity: 1, scale: (1.05), delay: (0.5)}, '<0%')
    tl.to('#border', {scale: (1.04), backgroundColor: "#342f59"}, '<')
    tl.to('#flash', {width: 500, height: 500, opacity: 0,}, '<')
    tl.to('#flash-2', {width: 900, height: 900, opacity: 0, timeScale: (0.1)}, '<20%')

    // animation end //
    tl.to('.on-3', {scale: (1), delay: 1})
    tl.to('.on-1', {scale: (1), opacity: 1}, '<')
    tl.to('#border', {scale: (1)}, '<40%')
    tl.to('.on-3', {opacity: 0}, '<')
    tl.to('.on-2', {opacity: 0}, '<')
    tl.to('#flash', {width: 200, height: 200, opacity: 0}, '<')
    tl.to('#flash-2', {width: 200, height: 200, opacity: 0}, '<')
    tl.to('#flash', {opacity: 1})
    tl.to('#flash-2', {opacity: 1}, '<')
});