const openMenu = document.getElementById("OpenMenu");
const sliderMenu = document.querySelector(".sliderMenu__content");


openMenu.addEventListener("click", () => {
  sliderMenu.classList.toggle("sliderMenu__content-active"); 
});

  
window.addEventListener("scroll",()=>{
  const headerBar = document.querySelector(".header__collection")
  const scrollPosition = window.scrollY;
  

  if(scrollPosition > 300){
    headerBar.classList.add("fixed")
  } else {
    headerBar.classList.remove("fixed")
  }
})


const dumbelsContainers = document.querySelectorAll(".dumbels-container");

dumbelsContainers.forEach(dumbelsContainer => {
  const dumbel = dumbelsContainer.querySelector(".dumbels");

  dumbel.addEventListener("click", () => {
    let height = 29;
    if (dumbelsContainer.clientHeight === 29) {
      height = dumbelsContainer.scrollHeight;
    }
    dumbelsContainer.style.height = `${height}px`;
  });
});


