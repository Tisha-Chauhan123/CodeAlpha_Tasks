document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behaviour:'smooth'
        });
    });
});