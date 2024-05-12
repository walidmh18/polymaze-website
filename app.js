const logo = document.querySelector('img#animatedLogo')
const polymaze = document.querySelector('#polymaze');
const screenH = screen.height;
const slider1 = document.querySelector('#polymaze .slider1 .container')
const slider2 = document.querySelector('#polymaze .slider2 .container')
let animationInterval = screenH*3

addEventListener('scroll', () => {
   let Y = scrollY 
   if (scrollY<polymaze.offsetTop- screenH || scrollY >polymaze.offsetTop + polymaze.offsetHeight){
      // slider1.scrollTo((slider1.scrollWidth / 2) - (slider1.offsetWidth /2),0)
      slider2.scrollTo((slider2.scrollWidth / 2) - (slider2.offsetWidth /2),0)
      slider1.scrollTo((slider2.scrollWidth / 2) - (slider2.offsetWidth /2),0)
      
   } else{

      let p = (Y-polymaze.offsetTop - screenH)/polymaze.offsetHeight
      let d = p*(slider1.scrollWidth - slider1.offsetWidth);
      slider1.scrollTo((slider2.scrollWidth / 2) - (slider2.offsetWidth /2) -d/3 ,0)
      slider2.scrollTo((slider2.scrollWidth / 2) - (slider2.offsetWidth /2) + d/3,0)
      // slider1.scroll(100/5,Y)
      // console.log(p,d, slider1.scrollWidth,polymaze.offsetTop ,Y);
      console.log(((slider2.scrollWidth / 2) - (slider2.offsetWidth /2),0) -d);
      console.log(((slider2.scrollWidth / 2) - (slider2.offsetWidth /2),0) +d);


   }

   // console.log(Y);

   // sliderScroll(slider1,5,Y)
   // sliderScroll(slider1,-5,Y)
})


function sliderScroll(slider, speed, y){
   slider.scroll(y/speed,0);
}

// setInterval(() => {
      
//    document.querySelector("spline-viewer").shadowRoot.querySelector('a').style.display = 'none'
//    }, 1200);


