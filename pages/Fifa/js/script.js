const box = document.getElementById('box');

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
    if (box.style.display === 'none') {
        box.style.display = 'block';


    } else {
        box.style.display = 'none';


    }
});
const box2 = document.getElementById('box-2');

const btn2 = document.getElementById('btn-2');

btn2.addEventListener('click', function handleClick() {
if (box2.style.display === 'none') {
    box2.style.display = 'block';


} else {
    box2.style.display = 'none';


}
});