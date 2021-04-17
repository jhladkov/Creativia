const accordionBtn = document.querySelectorAll('.accordion');
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const accordionPanel = document.querySelectorAll('.about-creativia-inner-item-panel');

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].onclick = () => {
        accordionPanel[i].classList.toggle('show');
        accordionBtn[i].classList.toggle('active');
        plus[i].classList.toggle('none');
        minus[i].classList.toggle('block');
        if ( i === 1 || i === 2) {
            // ++i;
            // if (accordionPanel[i].classList.contains('show')) {
            //     accordionPanel[i].classList.remove('show');
            // }else {
            //     --i
            // }

            --i;
            accordionPanel[i].classList.remove('show');
            accordionBtn[i].classList.remove('active');
            plus[i].classList.remove('none');
            minus[i].classList.remove('block');
            ++i;
        }
    }
}
