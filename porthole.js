//TODO: 

//add default rules
var default_css = document.createElement('style');
default_css.innerHTML = `
  .porthole-1, .porthole{
    --offset: 1;
  }

  .porthole-2 {
    --offset: 2;
  }
  
  .porthole-3 {
    --offset: 3;
  }
  
  .porthole-4 {
    --offset: 4;
  }
  
  .porthole-5 {
    --offset: 5;
  }
  
  .porthole-6 {
    --offset: 6;
  }
  
  .porthole-7 {
    --offset: 7;
  }
  
  .porthole-8 {
    --offset: 8;
  }
  
  .porthole-9 {
    --offset: 9;
  }
  
  .porthole-10 {
    --offset: 10;
  }
  
  .porthole-11 {
    --offset: 11;
  }
  
  .porthole-12 {
    --offset: 12;
  }
  
  .porthole-13 {
    --offset: 13;
  }
  
  .porthole-14 {
    --offset: 14;
  }
  
  .porthole-15 {
    --offset: 15;
  }
  
  .porthole-16 {
    --offset: 16;
  }
  
  .porthole-17 {
    --offset: 17;
  }
  
  .porthole-18 {
    --offset: 18;
  }
  
  .porthole-19 {
    --offset: 19;
  }
  
  .porthole-20 {
    --offset: 20;
  }
  
  .porthole-21 {
    --offset: 21;
  }
  
  .porthole-22 {
    --offset: 22;
  }
  
  .porthole-23 {
    --offset: 23;
  }
  
  .porthole-24 {
    --offset: 24;
  }
  
  .porthole-25 {
    --offset: 25;
  }
  
  .porthole-26 {
    --offset: 26;
  }
  
  .porthole-27 {
    --offset: 27;
  }
  
  .porthole-28 {
    --offset: 28;
  }
  
  .porthole-29 {
    --offset: 29;
  }
  
  .porthole-30 {
    --offset: 30;
  }
  

  [class *= "porthole-"] {
    height: calc(100 vh + (var (--offset) * 1vh));
    transform: translateY(0 vh);
    transition: transform 500ms ease;
  }
`;
document.body.appendChild(default_css);

function porthole(){
  console.log("Porthole Opened");
    let porthole_objects = document.querySelectorAll('.porthole-container');
    var body = document.body, html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ); //previously used in calc porthole adjustements
    
    porthole_objects.forEach((p) => {
      let p_top = p.offsetTop;
      let p_bottom = p.offsetHeight + p_top;
      //console.log("Window Dims - T: " + p_top + " B: " + p_bottom);
        p.querySelectorAll('[class*="porthole"]:not(.porthole-container)').forEach((e) => {
        let offset = parseInt(getComputedStyle(e).getPropertyValue('--offset'));
        window.addEventListener('scroll', function(){
         
          let w_focus = window.scrollY + (window.innerHeight * .5);
          //console.log(w_focus)
          if( p_top < w_focus && w_focus < p_bottom ){ //solution 1: ensure scrolling while window is 'focused' (middle of visible window)
            let value = (window.scrollY / p_bottom) * offset;
            //console.log("value: " + value)
            e.style.transform = "translateY( -" + value + "vh)";      
          }
        });
      })  
    })
  }

  porthole();
