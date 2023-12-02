const image1 = document.querySelector(".img1")
const img1 = document.getElementById("image1")
const image2 = document.querySelector(".img2")
const img2 = document.getElementById("image2")
const image3 = document.querySelector(".img3")
const img3 = document.getElementById("image3")
const image4 = document.querySelector(".img4")
const img4 = document.getElementById("image4")


image1.addEventListener("mouseover",()=>{
  img1.style.transform = 'scaleX(1.1)'; 
  img1.style.transition = 'transform 0.5s'; 
  img1.src = "/images/product1.1.webp"
})

image1.addEventListener("mouseout",()=>{
  img1.style.transform = 'scale(1)'; 
  img1.style.transition = 'transform 0.5s'; 
  img1.src = "/images/product1.webp"
})


image2.addEventListener("mouseover",()=>{
  img2.style.transform = 'scaleX(1.1)'; 
  img2.style.transition = 'transform 0.5s'; 
  img2.src = "/images/product2.1.webp"
})

image2.addEventListener("mouseout",()=>{
  img2.style.transform = 'scale(1)'; 
  img2.style.transition = 'transform 0.5s'; 
  img2.src = "/images/product2.webp"
})


image3.addEventListener("mouseover",()=>{
  img3.style.transform = 'scaleX(1.1)'; 
  img3.style.transition = 'transform 0.5s'; 
  img3.src = "/images/product1.webp"
})

image3.addEventListener("mouseout",()=>{
  img3.style.transform = 'scale(1)'; 
  img3.style.transition = 'transform 0.5s'; 
  img3.src = "/images/product2.1.webp"
})


image4.addEventListener("mouseover",()=>{
  img4.style.transform = 'scaleX(1.1)'; 
  img4.style.transition = 'transform 0.5s'; 
  img4.src = "/images/product4.1.webp"
})

image4.addEventListener("mouseout",()=>{
  img4.style.transform = 'scale(1)'; 
  img4.style.transition = 'transform 0.5s'; 
  img4.src = "/images/product4.webp"
})




//GRID IMAGES

const imgGrid1 = document.getElementById("grid__img1") 
const Grid1 = document.getElementById("grid1") 
const imgGrid2 = document.getElementById("grid__img2")
const Grid2 = document.getElementById("grid2")
const gridIcons = document.getElementById("grid__icons")


const gridIcons2 = document.getElementById("grid__icons2")

Grid1.addEventListener("mouseover",()=>{
  imgGrid1.style.transform = 'scaleX(1.1)';
  imgGrid1.style.transition = 'transform 0.7s';
  gridIcons.classList.add("active")
  imgGrid1.src = "/images/product1.webp"
})

Grid1.addEventListener("mouseout",()=>{
  imgGrid1.style.transform = 'scaleX(1)';
  imgGrid1.style.transition = 'transform 0.5s';
  gridIcons.classList.remove("active")
  imgGrid1.src = "/images/grid-image2.webp"
})

//imagen 2

Grid2.addEventListener("mouseover",()=>{
  imgGrid2.style.transform = 'scaleX(1.1)';
  imgGrid2.style.transition = 'transform 0.7s';
  gridIcons2.classList.add("active")
  imgGrid2.src = "/images/product1.webp"
})

Grid2.addEventListener("mouseout",()=>{
  imgGrid2.style.transform = 'scaleX(1)';
  imgGrid2.style.transition = 'transform 0.5s';
  gridIcons2.classList.remove("active")
  imgGrid2.src = "/images/product2.1.webp"
})


//SLIDERS IMAGES///

const slidersImg = document.querySelectorAll(".slider__img");

// Función para manejar eventos de mouse
function handleSliderHover(e) {
  e.target.classList.add("scale");
}

function handleSliderHoverOut(e) {
  e.target.classList.remove("scale");
}

// Asignar eventos a cada elemento de slider
slidersImg.forEach((slider) => {
  slider.addEventListener("mouseover", handleSliderHover);
  slider.addEventListener("mouseout", handleSliderHoverOut);
});

