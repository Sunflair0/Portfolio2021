

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');


if (menuBtn)
    menuBtn.addEventListener('click', () => {
        hamburger.classList.toggle('open')
        nav.classList.toggle('open');
        menuNav.classList.toggle('open');
        navItems.forEach(item => item.classList.toggle('open'));
    })

else {
    console.log("put the code back");
}

///// // scroll fade
const fadeElements = document.querySelectorAll(".section_content");
const fadeJobs = document.querySelectorAll(".job_content");

revealOnScroll = () => {
    let windowHt = window.innerHeight;
    fadeElements.forEach(element => {
        let elementPos = element.getBoundingClientRect().top;
        if (elementPos <= windowHt / 1.3) {
            element.classList.add("scroll_fade");
        }
        if (elementPos > windowHt / 1.3) {
            element.classList.remove("scroll_fade");
        }
    });
    fadeJobs.forEach(element => {
        let elementPos = element.getBoundingClientRect().top;
        if (elementPos <= windowHt / 1.2) {
            element.classList.add("scroll_fade");
        }
        if (elementPos > windowHt / 1.2) {
            element.classList.remove("scroll_fade");
        }
    });
}

document.addEventListener("DOMContentLoaded", revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// /////skills progress bars
const percent = 0;

function skillChoice() {
    clearInterval();
    let counter = 0;

    let percent = document.querySelector('[name="skill"]:checked').value;
    let skill_readout_label_id = document.querySelector('[name="skill"]:checked').id;
    skills__graph = document.querySelector(".skills__graph");
    skill_readout_percent = document.querySelector("#skill_readout_percent");
    skill_readout_label = document.querySelector("#skill_readout_label");

    setInterval(() => {
        if (counter == percent) {
            clearInterval();
            return;
        }
        counter++

        skill_readout_percent.textContent = skills__graph.style.background = `conic-gradient(#02ffdd ${counter * 3.6}deg, transparent 0deg)`;
        skill_readout_percent.innerHTML = counter + "%";

        document.getElementById("skill_readout_label").hidden = false;
        skill_readout_label.innerHTML = skill_readout_label_id;
    }, percent / 10);
    return;
}

// VIDEO IIFE
let videoIife = (() => {

    // // /////video section
    let video = document.getElementById('video');
    let vidClose = document.querySelector(".video__close");
    let toggle__fade = document.querySelector(".toggle__fade");
    let centerTitle = document.querySelector(".center-title");

    if (video && vidClose && toggle__fade) {

        vidClose.addEventListener("click", videoClose);

        function previewSelect() {
            let preview = document.querySelector('[name="preview"]:checked').value;

            toggle__fade.style.cssText = "color: transparent; text-shadow: none";
            vidClose.style.cssText = "opacity: 1";
            video.style.cssText = "opacity: 1; display: visible";
            video.src = `/Portfolio2021/dist/videos/${preview}`;
        };

        // /////Menu when video-player active

        function videoClose() {
            video.style.cssText = "opacity: 0; display: hidden";
            vidClose.style.cssText = "opacity: 0";
            centerTitle.style.transform = "translateY(-5vh)";
            toggle__fade.style.cssText = "color: #ef7f31; text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.7), 1px -1px rgb(0, 0, 0), 2px -1px 0 rgba(27, 27, 27, 0.7), -1px 1px 0 rgba(0, 0, 0, 0.7), 1px 1px 0 rgba(39, 39, 39, 0.7)";
            resetChecked();
        };

        function resetChecked() {
            let reset = document.querySelector('input[type=radio][name=preview]:checked');
            if (reset) {
                reset.checked = false;
            }
        };
    }

    return {
        previewSelect,
        videoClose
    }
})()


// /////TLDR button
let tldr_btn = document.querySelector('.tldr__btn');

if (tldr_btn) {

    tldr_btn.addEventListener('click', tldrPopUp);

    let tldr = document.querySelector('#tldr');
    let tldr_text = document.querySelector('#tldr_text');

    function tldrPopUp() {
        if (tldr) {
            tldr.classList.toggle('tldrText__btn');
            tldr_text.classList.toggle('tldr__btn__inside_text');
        }

    }
}
else {
    console.log("tldr not found");
}