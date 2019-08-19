// ポップアップ
function popupImage(){
    let popup = document.getElementById('js-popup');
    if(!popup) return;

    let blackBg = document.getElementById('js-black-bg');
    let closeBtn = document.getElementById('js-close-btn');
    let showBtn = document.getElementById('js-show-popup');

    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);

    function closePopUp(elem) {
        if(!elem) return;
        elem.addEventListener('click', function() {
            popup.classList.toggle('is-show');
        });
    }
}
popupImage();


//タイマー

let endDate = new Date('2020/05/12 00:00:00');

function countdownTimer(){
    let nowDate = new Date();
    let period = endDate - nowDate;
    let addZero = function(num){
        return ('0'+num).slice(-2);
    }
    let addZeroDay = function(num){
        return ('0'+num).slice(-3);
    }

    if (period >= 0) {
        let day = Math.floor(period / (1000 * 60 * 60 * 24));
        period -= (day * 1000 * 60 * 60 *24);
        let hour = Math.floor(period / (1000 * 60 * 60));
        period -= (hour * 1000 * 60 * 60);
        let minutes = Math.floor(period / (1000 * 60));
        period -= (minutes * 1000 * 60);
        let second = Math.floor(period / (1000));

        let insert = "";
        insert += '<span class="num">' + addZeroDay(day) + '</span>' + '<span class="hu">' + 'days' + '</span>';
        insert += '<span class="num">' + addZero(hour) + '</span>' + '<span class="hu">' + 'hours' + '</span>';
        insert += '<span class="num">' + addZero(minutes) + '</span>' + '<span class="hu">' + 'minutes' + '</span>';
        insert += '<span class="num">' + addZero(second) + '</span>' + '<span class="hu">' + 'seconds' + '</span>';

        document.getElementById('result').innerHTML = insert;
        setTimeout(countdownTimer,10);
    }
}
countdownTimer();