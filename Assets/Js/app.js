(() =>{
  
    const backToGallery = (event) =>{
        document.querySelector('.large-image').style.display= "none";
    }
   

    const enlargeImage = (event) =>{
        const imagePath = event.target.src;
        const largeImage = document.querySelector(".large-image img");
        largeImage.src = imagePath;
        const largeImageContainer = document.querySelector(".large-image");
        largeImageContainer.style.display = "block";
    }
    const intializeEvent = () =>{
        const galleryImages = document.querySelectorAll(".gallery-container img");
        galleryImages.forEach((img) =>{
          img.addEventListener("click", enlargeImage )
      
         
        });
        const closeButton = document.querySelector(".cross-button");
        closeButton.addEventListener("click", backToGallery);
    }
 
const populateImages = () =>{

  const images = [
    "./Assets/Images/img1.jpeg",
    "./Assets/Images/img2.jpeg",
    "./Assets/Images/img3.jpeg",
    "./Assets/Images/img4.jpeg",
    "./Assets/Images/img5.jpeg",
    "./Assets/Images/img6.jpeg",
  ]
  const allImages = images.map((image) => {
    return `
    <div>
    <img src= ${image} alt = "">
</div>
    `
  });
  const galleryContainer = document.querySelector(".gallery-container");
  galleryContainer.innerHTML = allImages.join(" ");

}
populateImages();
intializeEvent();
})();