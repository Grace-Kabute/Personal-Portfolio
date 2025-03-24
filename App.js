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