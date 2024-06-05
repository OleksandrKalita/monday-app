import './home.scss';
import '../../components/component';

console.log('Home Page');


// document.addEventListener("DOMContentLoaded", () => {
//     const headlineFirst = document.getElementById("headline_1");

//     if (headlineFirst) {
//         headlineFirst.addEventListener("click", () => {
//             console.log("toggle")
//             headlineFirst.classList.toggle("active");
//         });
//     }
// });

window.onload = () => {
    const headlineFirst = document.getElementById("headline_1");
    const headlineSecond = document.getElementById("headline_2");
    const headlineThird = document.getElementById("headline_3");
    const headlineFourth = document.getElementById("headline_4");

    if (headlineFirst && headlineSecond && headlineThird && headlineFourth) {
        headlineFirst.addEventListener("click", () => {
            console.log("toggle")
            headlineFirst.classList.toggle("active");
            
            headlineSecond.classList.remove("active");
            headlineThird.classList.remove("active");
            headlineFourth.classList.remove("active");
        });

        headlineSecond.addEventListener("click", () => {
            console.log("toggle")
            headlineSecond.classList.toggle("active");

            headlineFirst.classList.remove("active");
            headlineThird.classList.remove("active");
            headlineFourth.classList.remove("active");
        });

        headlineThird.addEventListener("click", () => {
            console.log("toggle")
            headlineThird.classList.toggle("active");

            headlineFirst.classList.remove("active");
            headlineSecond.classList.remove("active");
            headlineFourth.classList.remove("active");
        });

        headlineFourth.addEventListener("click", () => {
            console.log("toggle")
            headlineFourth.classList.toggle("active");

            headlineFirst.classList.remove("active");
            headlineSecond.classList.remove("active");
            headlineThird.classList.remove("active");
        });
    }  

    // if (headlineSecond) {
    //     headlineSecond.addEventListener("click", () => {
    //         console.log("toggle")
    //         headlineSecond.classList.toggle("active");
    //     });

    // } 
    // if (headlineThird) {
    //     headlineThird.addEventListener("click", () => {
    //         console.log("toggle")
    //         headlineThird.classList.toggle("active");
    //     });
    // } 
    // if (headlineFourth) {
    //     headlineFourth.addEventListener("click", () => {
    //         console.log("toggle")
    //         headlineFourth.classList.toggle("active");
    //     });
    // } 
}