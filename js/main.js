function learnMore(x) {
    let prev = x.previousElementSibling;
    $(prev).slideToggle();
    x.innerText = prev.offsetHeight < 3 ? x.dataset['label2'] : x.dataset['label1'];
}