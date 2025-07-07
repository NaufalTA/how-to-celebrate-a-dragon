var countDownDate = new Date("Jul 7, 2025 21:20:00").getTime();
var x = setInterval(function () {


    var now = new Date().getTime();
    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("counter-time").innerHTML = '[ ' + hours + "h " +
        minutes + "m " + seconds + "s" + ' ]';


    if (distance < 0) {
        AOS.refresh();
        document.getElementById("counter").classList.add("hidden");
        document.getElementById("main-content").classList.remove("hidden");
    } else {
        document.getElementById("counter").classList.remove("hidden");
        document.getElementById("main-content").classList.add("hidden");
    }
}, 1000);




function toothlessTranslator() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    document.getElementById("after").classList.remove('hidden')
    document.getElementById("before").classList.add('hidden')
}