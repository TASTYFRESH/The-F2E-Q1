// keyVision ani



gsap.to("#kv_f2e", {
    y: 50,
    duration: 5,
    yoyo: true,
    repeat: -1,
    ease: Power1.easeInOut,
    yoyoEase: Power1.easeInOut,
})

gsap.to("#kv_the", {
    y: 30,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: Power1.easeInOut,
    yoyoEase: Power1.easeInOut,
})

gsap.to("#kv_4th", {
    y: 40,
    duration: 4,
    yoyo: true,
    repeat: -1,
    ease: Power1.easeInOut,
    yoyoEase: Power1.easeInOut,
})






gsap.registerPlugin(ScrollTrigger);



let cloudAni_1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#cloud1",
        start: "top center",
        markers: true,
    }
})

cloudAni_1.from("#cloud1", { y: 50, opacity: 0, ease: Power1.easeInOut, duration: 2 })
    .to("#cloud1", {
        y: 50,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: Power1.easeInOut,
        yoyoEase: Power1.easeInOut,
    })


function cloudAnimation(x) {

    let cloudAni = gsap.timeline({
        scrollTrigger: {
            trigger: x,
            start: "top 400px",
            markers: true,
        }
    })

    cloudAni.from(x, { y: 50, opacity: 0, ease: Power1.easeInOut, duration: 2 })
        .to(x, {
            y: 50,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: Power1.easeInOut,
            yoyoEase: Power1.easeInOut,
        })
}

cloudAnimation("#cloud3")
cloudAnimation("#cloud5")


// parallax scrolling

var paraScroll_cloud2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#cloud2",
        start: "top bottom",
        markers: true,
        scrub: 1
    },
})

var paraScroll_cloud4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#cloud2",
        start: "top bottom",
        markers: true,
        scrub: 1
    },
})

paraScroll_cloud2.from("#cloud2", { y: 200, duration: 2, ease: Power1 })
    .to("#cloud2", { y: -300, duration: 3, ease: Power1 })

paraScroll_cloud4.from("#cloud4", { y: -100, duration: 2, ease: Power1 })
    .to("#cloud4", { y: 100, duration: 3, ease: Power1 })