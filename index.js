const modalBtn = document.getElementById('modal-btn')
const modal = document.getElementById('modal')
const menuIcon = document.getElementById('menu-icon')

const homeMain = document.getElementById('home-main')
const aboutMain = document.getElementById('about-main')
const indexMain = document.getElementById('index-main')


// const more = 


modalBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})
menuIcon.addEventListener('click', function() {
    modal.style.display = 'block'
})

const string = `<div class="blog four">
                    <img src="/images/blog4.jfif" alt="">
                    <h6 class="date-hero">JULY 23, 2022</h6>
                    <h2 class="blog-title">Blog four</h2>
                    <p class="preview">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>

                <div class="blog five">
                    <img src="/images/blog5.jfif" alt="">
                    <h6 class="date-hero">JULY 23, 2022</h6>
                    <h2 class="blog-title">Blog five</h2>
                    <p class="preview">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>

                <div class="blog six">
                    <img src="/images/blog6.avif" alt="">
                    <h6 class="date-hero">JULY 23, 2022</h6>
                    <h2 class="blog-title">Blog six</h2>
                    <p class="preview">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>`

document.addEventListener("click", function(e){
    

    if(e.target.id === "home-more") {
        document.getElementById(e.target.id).style.display = 'none'
        homeMain.innerHTML += string
    }else if(e.target.id === "about-more") {
        document.getElementById(e.target.id).style.display = 'none'
        aboutMain.innerHTML += string
    }else if(e.target.id === "index-more") {
        document.getElementById(e.target.id).style.display = 'none'
        indexMain.innerHTML += string
    }
    
    
                        
})