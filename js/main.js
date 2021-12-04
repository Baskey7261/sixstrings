function learnMore(x) {
    let prev = x.previousElementSibling;
    let label1 = x.getAttribute("data-label1");
    let label2 = x.getAttribute("data-label2");
    let h = x.previousElementSibling.offsetHeight;
    $(prev).slideToggle();
    x.innerText = h < 3 ? label2 : label1;
}