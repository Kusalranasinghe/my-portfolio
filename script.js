function dateAlert() {

    const time = new Date();
    const hour = time.getHours;

    let greeting ;

    if (hour<12) {
        alert('Good Morning !')
    }

    else if (hour<18) {
        alert('Good Afternoon !')
    }

    else {
        alert('Good Evening !')
    }
}

dateAlert();