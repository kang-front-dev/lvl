var logoClass = document.querySelector('.header__timer-extra'),
    logoInfo = logoClass.innerHTML,
    lvl = Number(logoInfo);
lvlAnimation()
function lvlAnimation() {

    if (lvl >= 0 && lvl <= 30) {
        lvl++;
        logoClass.innerHTML = lvl;
        setTimeout(() => lvlAnimation(), 80);
    }else if (lvl > 30 && lvl <= 80) {
        lvl++;
        logoClass.innerHTML = lvl;
        setTimeout(() => lvlAnimation(), 130);
    }else if (lvl > 80 && lvl <= 89) {
        lvl++;
        logoClass.innerHTML = lvl;
        setTimeout(() => lvlAnimation(), 180);
    }else if (lvl < 100) {
        lvl++;
        logoClass.innerHTML = lvl;
        setTimeout(() => lvlAnimation(), 250);
    }else{
        logoClass.innerHTML = 0;
        lvl = 0
        setTimeout(() => lvlAnimation(), 500);
    }
}