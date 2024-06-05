import './home.scss';
import '../../components/component';

window.onload = () => {
    const headlineFirst = document.getElementById("headline_1");
    const headlineSecond = document.getElementById("headline_2");
    const headlineThird = document.getElementById("headline_3");
    const headlineFourth = document.getElementById("headline_4");

    if (headlineFirst && headlineSecond && headlineThird && headlineFourth) {
        headlineFirst.addEventListener("click", () => {
            headlineFirst.classList.toggle("active");
            
            headlineSecond.classList.remove("active");
            headlineThird.classList.remove("active");
            headlineFourth.classList.remove("active");
        });

        headlineSecond.addEventListener("click", () => {
            headlineSecond.classList.toggle("active");

            headlineFirst.classList.remove("active");
            headlineThird.classList.remove("active");
            headlineFourth.classList.remove("active");
        });

        headlineThird.addEventListener("click", () => {
            headlineThird.classList.toggle("active");

            headlineFirst.classList.remove("active");
            headlineSecond.classList.remove("active");
            headlineFourth.classList.remove("active");
        });

        headlineFourth.addEventListener("click", () => {
            headlineFourth.classList.toggle("active");

            headlineFirst.classList.remove("active");
            headlineSecond.classList.remove("active");
            headlineThird.classList.remove("active");
        });
    } 
}