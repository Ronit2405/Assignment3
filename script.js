const box1 = document.getElementById("box1");
box1.addEventListener('click', () => {
    box1.style.backgroundColor = "red"
})


const box2 = document.getElementById("box2");
box2.addEventListener('click', ()=> {
    box2.style.backgroundColor = "blue";
})


const box3 = document.getElementById("box3");
box3.addEventListener('click', ()=> {
    box3.style.backgroundColor = "green";
})


const box4 = document.getElementById("box4");
box4.addEventListener('click', ()=> {
    box4.style.backgroundColor = "yellow";
})


function updateHeading(){
    let name = document.getElementById('data').value;
    document.getElementById('res').innerText = `Hello, ${name}`;
}