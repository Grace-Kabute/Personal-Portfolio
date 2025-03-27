document.addEventListener('DOMContentLoaded', ()=>{
    const links = document.querySelectorAll('.navigation a')
    const sections = document.querySelectorAll('.content')
    const stacks = document.querySelectorAll('.stack p')

    links.forEach(link=>{
        link.addEventListener('click', (e)=>{
            e.preventDefault()
            let target = link.getAttribute('data-target')
            sections.forEach(section =>{
                section.classList.remove('active')
            })
            document.getElementById(target).classList.add("active");
        })
    })

    stacks.forEach(stack => {
        const text = stack.innerText.trim().toLowerCase();
        
        if (text === 'react') {
            stack.style.backgroundColor = 'green';
        } else if (text === 'html') {
            stack.style.backgroundColor = '#E34F26';
        } else if (text === 'css') {
            stack.style.backgroundColor = '#264DE4';
        } else if (text === 'vanilla js' || text === 'javascript') {
            stack.style.backgroundColor = '#F7DF1E';
            stack.style.color = '#000';
        }else if (text === 'c' || text === 'c programming') {
            stack.style.backgroundColor = '#A8B9CC';
        } else if (text === 'nodejs' || text === 'node.js') {
            stack.style.backgroundColor = '#3C873A';
            stack.style.color = '#fff';
        } else if (text === 'nextjs' || text === 'next.js') {
            stack.style.backgroundColor = '#000';
            stack.style.color = '#fff';
        } else if (text === 'material ui' || text === 'mui') {
            stack.style.backgroundColor = '#0081CB';
        } else if (text === 'mongodb') {
            stack.style.backgroundColor = '#47A248';
        } else if (text === 'ai integration') {
            stack.style.backgroundColor = '#5A0FC8';
            stack.style.color = '#fff';
        }
    });
})

function dropfunction() {
    const hambuger = document.querySelector('.hambuger');
    const content = document.querySelector('.dropdown-content');

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        hambuger.innerHTML = '<i class="fa fa-close fa-2x"></i>';
    } else {
        content.style.display = 'none';
        hambuger.innerHTML = '<i class="fa fa-bars fa-2x"></i>';
    }
}

const flipper = document.querySelector("#swiper");
const links = document.querySelectorAll(".vertical a");

links.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute("data-target");

    if (!target) return; // Ignore clicks on links without a target

    const rotations = {
      home: "rotateY(0deg)",
      about: "rotateY(180deg)",
      projects: "rotateY(0deg)",
      contact: "rotateY(-180deg"
    };

    flipper.style.transition = "transform 0.8s ease-in-out"; // Smooth flip effect
    flipper.style.transform = rotations[target] || "rotateY(0deg)";
  });
});



