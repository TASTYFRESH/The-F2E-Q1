gsap.from(".ani_04_1", {
    scrollTrigger: {
        trigger: "#schedule",
        // markers:true,
        start: "top 18%",
        end: "bottom 100%",
        // toggleActions:"restart none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
})


gsap.from(".ani_04_t", {
    scrollTrigger: {
        trigger: "#timeline_img",
        // markers: true,
        start: "top 50%",
        end: "bottom 100%",
        // toggleActions: "restart none none reverse"
    },
    x: -1300,
    opacity: 0,
    duration: 3,
})

gsap.from(".ani_04_a", {
    scrollTrigger: {
        trigger: "#timeline_img",
        // markers: true,
        start: "top 50%",
        end: "bottom 100%",
        // toggleActions: "restart none none reverse"
    },
    x: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.7,
    delay: 0.2,
})


let timeline_ani = new gsap.timeline({
    scrollTrigger: {
        // markers: true,
        trigger: "#timeline_img",
        start: "top 50%",
        end: "bottom 80%",
        // toggleActions:"restart none none reverse"
    }
})
    .from(".ani_04_2", {
        y: 40,
        opacity: 0,
        delay: 0.6,
    })
    .from(".ani_04_3", {
        y: 20,
        opacity: 0,
        delay: 0.3,
    })
    .from(".ani_04_5", {
        y: 20,
        opacity: 0,
        delay: 0.3,
    })





let ra_ani = new gsap.timeline({
    scrollTrigger: {
        markers: true,
        trigger: "#review_award",
        start: "top 50%",
        end: "bottom 80%",
        // toggleActions:"restart none none reverse"
    }
})
    .from(".ani_05_1", {
        y: -80,
        opacity: 0,
        duration:1,
    })
    .from(".ani_05_2", {
        y: -40,
        opacity: 0,
    })
    .from(".ani_05_3_t", {
        y: -60,
        opacity: 0,
    })
    .from(".ani_05_3_m", {
        y: -40,
        opacity: 0,
        delay: 0.3,
    })
    .from(".ani_05_3_b", {
        y: -40,
        opacity: 0,
    })
    .from(".ani_05_4", {
        y: -40,
        opacity: 0,
        stagger: 0.8,
    })
    .from(".ani_05_5", {
        x: -100,
        opacity: 0,
        duration: 0.8,
    })
    .from(".ani_05_6", {
        y: -20,
        opacity: 0,
    })