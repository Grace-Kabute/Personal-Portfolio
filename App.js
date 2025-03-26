document.addEventListener('DOMContentLoaded', ()=>{
    const links = document.querySelectorAll('.navigation a')
    const sections = document.querySelectorAll('.content')

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
})

function dropfunction() {
    const hambuger = document.querySelector('.hambuger');
    const content = document.querySelector('.dropdown-content');

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        hambuger.innerHTML = '<i class="fa fa-close fa-2x"></i>';
    } else {
        content.style.display = "none";
        hambuger.innerHTML = '<i class="fa fa-bars fa-2x"></i>';
    }
}
