const btn=document.querySelector('button.mobile-menu-btn');
const menu=document.querySelector('.mobile-menu');
const freeBox=document.querySelectorAll('#free-box')
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
  console.log(freeBox );
freeBox.forEach((e)=>{
  console.log(e);
  e.addEventListener("click", ()=>{
    if(e.src==='http://127.0.0.1:5500/img/free-box.png'){
     e.src='/img/tick-blue.png'
    }else{
      e.src='/img/free-box.png'
    }
  })
})
  console.log(freeBox);