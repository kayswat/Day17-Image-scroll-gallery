
let scrollContainer = document.querySelector('.gallery');
let backBtn = document.querySelector('#backBtn');
let nextBtn = document.querySelector('#nextBtn');

scrollContainer.addEventListener('wheel', (e) =>{
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener('click', () =>{
    scrollContainer.scrollLeft += 910;
    scrollContainer.style.scrollBehavior = 'smooth';
});

backBtn.addEventListener('click', () =>{
    scrollContainer.scrollLeft -= 910;
    scrollContainer.style.scrollBehavior = 'smooth';
});