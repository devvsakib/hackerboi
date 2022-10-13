const unlockLock = document.querySelector('.lockUnlock'),
    pass = document.querySelector('#pass'),
    lockAgain = document.querySelector('.lock'),
    submit = document.querySelector('#submit')




submit.onclick = () => {
    event.preventDefault()
    getPass = pass.value;
    const times = new Date();
    const hour = times.getHours();
    const minute = times.getMinutes();
    let passToMatch = `${hour}${minute}`
    if (Number(getPass) == passToMatch) {
        unlockLock.classList.add('hide');
        unlockLock.style.opacity = "0";
        unlockLock.style.transition = "1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";


        document.body.style.overflow = "auto";
        pass.value = ""
    }
    else if (getPass == '') {
        alert("Password Required");
    }
    else {
        alert("Think Twice!!");
    }
}
lockAgain.onclick = () => {
    unlockLock.classList.remove('hide');
    document.querySelector("body").style.overflow = "hidden"
}
window.onscroll = () => {
    if (window.scrollY <= 20) {
        document.querySelector(".downArrow").style.opacity = '1';
        document.querySelector(".downArrow").style.transition = '300ms ease-in-out';

    } else {
        document.querySelector(".downArrow").style.opacity = '0';
        document.querySelector(".downArrow").style.transition = '300ms ease-in-out';
    }
}
