const menuBtn= document.querySelector(".menu-btn");
const closeBtn= document.querySelector(".close-btn");
const menu= document.querySelector(".nav_items");
//open nav
menuBtn.addEventListener("click",()=>{
    menu.style.display='block';
    menuBtn.style.display='none';
    closeBtn.style.display='inline-block';
})
//close nav
closeBtn.addEventListener("click",()=>{
    menu.style.display='none';
    menuBtn.style.display='inline-block';
    closeBtn.style.display='none';
})
//faqs
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        //minus icon
        const icon=faq.querySelector('.faq_icon i')
        if(icon.className=='uil uil-plus'){
            icon.className='uil uil-minus'
        }
        else{
            icon.className='uil uil-plus'
        }
    })
    //addline to nav
    window.addEventListener('scroll',()=>{
        document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
        
    })
})