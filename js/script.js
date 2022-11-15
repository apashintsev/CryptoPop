
  (() => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("overlay");
    let open = false;
  
    const change = () => {
      if (!open) {
        hamburger.classList.add("open");
        menu.classList.add("menu");
      } else {
        hamburger.classList.remove("open");
        menu.classList.remove("menu");
      }
      open = !open;
    };
  
    hamburger.addEventListener("click", change);
  })();



  function openBox(num){
    let box  = document.querySelector(".box-"+num);
    let image = document.querySelector(".img-"+num);
    box.style.display = box.style.display == 'none' ? 'block' : 'none';
    if(box.style.display == 'block'){
      image.src = './img/minus-square-Regular.svg';
    }else{
      image.src = './img/plus-square-Regular.svg';
    }
   }




  // when  you get to element action animate

  function onVisibleShow(element, animate_core , animate) {
    let el = document.getElementById(element);
    new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
          el.classList.add(animate_core);
          el.classList.add(animate);
          observer.disconnect();
        }
      });
    }).observe(el);
  }


  onVisibleShow("team" , "animate__animated" ,  "animate__slideInUp");


  

  

  

// increments precentage 
function onVisible(element, limit , counter) {
  new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0) {
        
        let count = counter;
        // console.log(count);
        setInterval(() => {
          if(count >= limit){
            return;
          }
          element.innerHTML = ++count + "%";
        }, 30);
        observer.disconnect();
      }
    });
  }).observe(element);
}









let i=0 ;
    
$('.slide').click(function(){
    $('.slide.active').removeClass('active').addClass('nonActive').find('span').empty()
    $(this).removeClass('nonActive').addClass('active')
    i= $(this).index()
})

setItner = setInterval(go,5000);

function go(){
    $('.slide.active').removeClass('active').addClass('nonActive').find('span').empty()
    $($('.slide')[i%6]).removeClass('nonActive').addClass('active')
    i++;
}
    







