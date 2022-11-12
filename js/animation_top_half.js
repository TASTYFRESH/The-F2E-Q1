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

// questions ani

// // question title ani
gsap.from("#questions > h1", {
    scrollTrigger: {
        trigger:"#questions > h1",
        start: "top 900px",
    },
    y: 50,
    opacity: 0,
    duration: 2,

})

// // litle question ani

gsap.utils.toArray(".question").forEach(element => {
    ScrollTrigger.create({
        trigger: element,
        // markers: true,
        onEnter: function () {
            questionAnimation(element);
        },
    })
});

function questionAnimation(element) {
    let questAni = gsap.timeline()
    x = 0;

    if (element.classList.contains("from-left")) {
        x = -150;
        gsap.set(element, { rotation: 10 })
    } else if (element.classList.contains("from-right")) {
        x = 150
        if (!(element.classList.contains("line2")))
            gsap.set(element, { rotation: -10 })
    }

    questAni.from(element,
        { x: x, y: 400, opacity: 0, duration: 3, ease: Power3 });
    questAni.to(element, {
        y: 30,
        duration: 3,
        yoyo: true,
        repeat: -1,
        opacity: 1,
        ease: Power1.easeInOut,
        yoyoEase: Power1.easeInOut,
    })
}

function hide(element) {
    gsap.set(element, { opacity: 0, visibility: "hidden" });
}


// cloud ani

gsap.registerPlugin(ScrollTrigger);



let cloudAni_1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#cloud1",
        start: "top center",
        // markers: true,
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


function cloudAnimation(a) {

    let cloudAni = gsap.timeline({
        scrollTrigger: {
            trigger: a,
            start: "top 400px",
            end: "bottom top"
            // markers: true,
        }
    })

    cloudAni.from(a, { y: 50, opacity: 0, ease: Power1.easeInOut, duration: 2 })
        .to(a, {
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


// weekInfo ani

function weekInfoAnimation(a) {

    let weekInfoAni = gsap.timeline({
        scrollTrigger: {
            trigger: a,
            start: "top 700px",
            // markers: true,
        }
    })

    weekInfoAni.from(a, { x: -50, opacity: 0, ease: Power2.easeIn, duration: 3 })
}

weekInfoAnimation("#week1")
weekInfoAnimation("#week2")
weekInfoAnimation("#week3")




// parallax scrolling

var paraScroll_cloud2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#cloud2",
        start: "top bottom",
        // markers: true,
        scrub: 1
    },
})

var paraScroll_cloud4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#cloud2",
        start: "top bottom",
        // markers: true,
        scrub: 1
    },
})

paraScroll_cloud2.from("#cloud2", { y: 200, duration: 2, ease: Power1 })
    .to("#cloud2", { y: -300, duration: 3, ease: Power1 })

paraScroll_cloud4.from("#cloud4", { y: -80, duration: 1, ease: Power1 })
    .to("#cloud4", { y: 105, duration: 4, ease: Power1 })