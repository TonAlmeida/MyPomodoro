const bell = new Audio(`bell.mp3`),
      click = new Audio(`click.mp3`);
let minutes = 25,
    seconds = 0;

document.getElementById(`pomodoro`).addEventListener(`click`, pomodoro);
document.getElementById(`short`).addEventListener(`click`, shortBreak);
document.getElementById(`long`).addEventListener(`click`, longBreak);
document.getElementById(`play`).addEventListener(`click`, play);
document.getElementById(`ico-reset`).addEventListener(`click`, e => {
    window.location.reload();
});
document.getElementById(`ico-plus`).addEventListener(`click`, e => {
    minutes++;
    inCommon.reload(minutes, seconds);
});
document.getElementById(`cover`).addEventListener(`click`, e => {
    const result = window.confirm(`you time is still running`)
    if(result === true)window.location.reload();
});


const inCommon = {
    reload: (min = 25, sec = 0) => {
        let formatSeconds = (`0` + sec).slice(-2);
        let formatMinuts = (`0` + min).slice(-2);
        document.querySelector(`.timer.title`).innerHTML = `${formatMinuts}:${formatSeconds}`;
    },
    resetSelected: () => {
        document.getElementById(`pomodoro`).classList.remove(`span-selected`);
        document.getElementById(`short`).classList.remove(`span-selected`);
        document.getElementById(`long`).classList.remove(`span-selected`);
    },
    anyLess: () => {
        minutes--;
        seconds = 59
    },
    decressing: () => { //there is a very large function here hehehe
        inCommon.reload(minutes, seconds);

        document.getElementById(`pause`).addEventListener(`click`, pause);//pause

        runSeconds = setInterval(decressingSeconds, 1000);

        function decressingSeconds() {
            seconds--;
            inCommon.reload(minutes, seconds);

            if (seconds <= 0) {

                if (minutes <= 0) {
                    clearInterval(runSeconds);

                    document.getElementById(`cover`).classList.add(`hide`)

                    inCommon.hideClickPause();
                    
                    bell.play();
                }

                seconds = 60;
                minutes--;

                console.log(minutes);
            }
        }
    }, //end
    coverHide: () => {
        document.getElementById(`cover`).classList.add(`hide`);
    },
    coverRemoveHide: () => {
        document.getElementById(`cover`).classList.remove(`hide`);
    },
    hideClickPlay: () => {
        document.getElementById(`play`).classList.add(`hide`);
        document.getElementById(`pause`).classList.remove(`hide`);
    },
    hideClickPause: () => {
        document.getElementById(`play`).classList.remove(`hide`);
        document.getElementById(`pause`).classList.add(`hide`);
    }
}

//FUNCTIONS
function pomodoro() {
    let minutesPmomodoro = 25;
    inCommon.reload(minutesPmomodoro);
    inCommon.resetSelected();
    document.getElementById(`pomodoro`).classList.add(`span-selected`);

    window.location.reload()
    minutes = minutesPmomodoro
}

function shortBreak() {
    let minutesShort = 1;
    inCommon.reload(minutesShort);
    inCommon.resetSelected();
    document.getElementById(`short`).classList.add(`span-selected`);

    minutes = minutesShort;
}

function longBreak() {
    let minutesLong = 15;
    inCommon.reload(minutesLong);
    inCommon.resetSelected();
    document.getElementById(`long`).classList.add(`span-selected`);

    minutes = minutesLong;
}

function play() {//here play
    if(minutes < 0)return ;
    if(seconds === 0)inCommon.anyLess();
    inCommon.decressing();
    inCommon.hideClickPlay();
    inCommon.coverRemoveHide();

    click.play()
}

function pause() { //pause here
    clearInterval(runSeconds);

    click.play();

    inCommon.hideClickPause();
    inCommon.coverHide();
}

inCommon.reload(25, 0);
