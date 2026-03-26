import '../stylesheets/style.css'

const filterActive = document.querySelector('.filter-active');
const filterActiveOne = document.querySelector('.filter-active .chooseOne');
const filterChoose = document.querySelector('.filter-choose');
const filterList = document.querySelectorAll('.chooseOne');

filterActive.addEventListener('click', () => {
    filterActive.classList.remove('active');
    filterChoose.classList.add('active');
    filterList.forEach((filterOne) => {
        filterOne.addEventListener('click', () => {
            filterActive.classList.add('active');
            filterChoose.classList.remove('active');
            filterActiveOne.innerText = filterOne.innerText;
            filterActiveOne.setAttribute('class', filterOne.getAttribute('class'))
        })
    })
})