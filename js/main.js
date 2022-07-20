
const boothBoxs = document.querySelectorAll(".boothBox");
const conceptName = {
  neon: ["Sweet Peach", "Mango Green", "Mixed Blue", "Shadow Pink"],
  profile: ["Soft-Right", "Soft-Left", "Contrast-Right", "Contrast-Left"],
  modern: ["Soft", "Contrast", "Sepia", "Blue"],
  art: ["Heart", "Night Sky", "Butterfly", "Full Moon"],
  dynamic: ["Photo", "Video"]
};
const bustConceptImgSrc = {
  neon: "/images/bust/concepts/neon/neon.png",
  profile: "/images/bust/concepts/profile/profile.png",
  modern: "/images/bust/concepts/modern/modern.png",
};
const metalConceptImgSrc = {
  neon: "/images/metal/concepts/neon/neon.jpg",
  profile: "/images/metal/concepts/profile/profile.png",
  modern: "/images/metal/concepts/modern/modern.png",
};
const fullConceptImgSrc = {
  neon: "/images/full/concepts/neon/neon.png",
  profile: "/images/full/concepts/profile/profile.png",
  modern: "/images/full/concepts/modern/modern.png",
  art: "/images/full/concepts/art/nightsky.png",
};
const dynamicConceptImgSrc = "/images/dynamic/dynamic.jpg"

const neonFilter = [
  "linear-gradient(90deg, rgba(240,109,178,.7) 40%, rgba(255,141,131,.7) 60%)", // sweet peach
  "linear-gradient(90deg, rgba(224,104,76,.7) 40%, rgba(118,159,57,.7) 60%)", // mango green
  "linear-gradient(90deg, rgba(172,139,162,1) 40%, rgba(21,177,227,.7) 60%)", // mixed blue
  "linear-gradient(90deg, rgba(206,96,160,1) 40%, rgba(204,175,179,1) 60%)" // shadow pink
]
const profileFilter = [
  "linear-gradient(90deg, rgba(170,170,170,1) 45%, rgba(238,238,238,.7) 55%)", // soft-right
  "linear-gradient(90deg, rgba(238,238,238,.7) 45%, rgba(170,170,170,1) 55%)", // soft-left
  "linear-gradient(90deg, rgba(170,170,170,1) 45%, rgba(255,255,255,.8) 55%)", // contrast-right
  "linear-gradient(90deg, rgba(255,255,255,.8) 45%, rgba(170,170,170,1) 55%)" // contrast-left
]
const artFilter = [
  "background: url('/images/full/concepts/art/heart.png') no-repeat center; background-size: contain;",
  "background: url('/images/full/concepts/art/nightsky.png') no-repeat center; background-size: contain;",
  "background: url('/images/full/concepts/art/butterfly.png') no-repeat center; background-size: contain;",
  "background: url('/images/full/concepts/art/heart.png') no-repeat center; background-size: contain;",
]
const dynamicFilter = "background: url('/images/dynamic/concept/dynamic.jpg') no-repeat center; background-size: cover;"

const artBtnImg = [
  "background: url('/images/full/heart.png'); background-size: cover;", // heart
  "background: url('/images/full/cloud.png'); background-size: cover;", // night sky
  "background: url('/images/full/butterfly.png'); background-size: cover;", // butterfly
  "background: url('/images/full/heart.png'); background-size: cover;", // moon
]
const modernFilter = [
  "#888", // soft
  "#555", // contrast
  "rgba(255,201,90,.2)", // sepia
  "rgba(75,158,219,.3)" // blue
]

let disable = true;

for(let i=0; i<boothBoxs.length; i++) {
  let intoConceptBtn = boothBoxs[i].querySelector(".intoConceptBtn");
  let boothInner = boothBoxs[i].querySelector(".boothInner");
  let boothName = boothBoxs[i].querySelector(".boothName");
  let backBtn = boothName.querySelector(".backBtn");
  let boothExplain = boothBoxs[i].querySelector(".boothExplain");
  let conceptListBox = boothBoxs[i].querySelector(".conceptListBox");
  let conceptItems = conceptListBox.querySelectorAll(".conceptItem");


  // more button click event
  intoConceptBtn.addEventListener("click", () => {

    if(disable) {
      disable = false;

      for(let j=0; j<boothBoxs.length; j++) {
        if (i !== j) {
          boothBoxs[j].classList.add("fadeout");
        }
      }
      
      setTimeout(() => {

        boothBoxs[i].style.display = "block";
        conceptListBox.style.display = "block";
        boothBoxs[i].classList.add("active");
        boothInner.classList.add("active");

        for(let j=0; j<boothBoxs.length; j++) {
          if (i !== j) {
            boothBoxs[j].style.display = "none";
          }
        }

        setTimeout(() => {
          backBtn.style.display = "block";
          boothExplain.style.display = "block";

        }, 300)
  
        setTimeout(() => {
          conceptListBox.style.opacity = 1;
          backBtn.style.opacity = 1;
          boothExplain.style.opacity = 1;
          
          for(let i=0; i<conceptItems.length; i++) {
            conceptItems[i].style.transform = "translateY(-150%)";
          }

        }, 380)
  
      }, 350)
    }

  })

  // concept button click event
  let boothImg = boothBoxs[i].querySelector(".boothImg");
  let filters = boothImg.querySelectorAll(".filter");
  let conceptImg = boothImg.querySelector(".conceptImgBox").querySelector("img");
  let filterListBox = intoConceptBtn.querySelector(".filterListBox");
  let filterNames = filterListBox.querySelectorAll(".filterName");
  let circles = filterListBox.querySelectorAll(".circle");

  for(let j=0; j<conceptItems.length; j++) {
    

    conceptItems[j].addEventListener("click", () => {

      boothExplain.style.opacity = 0;
      
      for (let j=0; j<filters.length; j++) {
        filters[j].classList.remove("active");
        filters[j].classList.remove("active2");
        filterNames[j].classList.remove("active");
      }

      for(let i=0; i<conceptItems.length; i++) {
        conceptItems[i].style.transitionDelay = "0s";
      }

      conceptItems.forEach( conceptItem => {
        conceptItem.classList.remove("active");
      })
      conceptItems[j].classList.add("active");

      if(conceptItems[j].innerText.includes("NEON")) {
        conceptImg.style.opacity = 0;
        filterListBox.style.opacity = 0;

        setTimeout(() => {

          switch(boothName.querySelector("h2").innerText) {
            case "Bust Shot":
              conceptImg.setAttribute("src", bustConceptImgSrc.neon);
            break;
            case "Metal":
              conceptImg.setAttribute("src", metalConceptImgSrc.neon);
            break;
            case "Full Shot":
              conceptImg.setAttribute("src", fullConceptImgSrc.neon);
            break;
          }

          for(let i=0; i<neonFilter.length; i++) {
            
            filters[i].style.background = neonFilter[i];
            circles[i].style.background = neonFilter[i];
            filterNames[i].innerText = conceptName.neon[i];
          }
        }, 200)
        
      } else if(conceptItems[j].innerText.includes("Profile")) {
        conceptImg.style.opacity = 0;
        filterListBox.style.opacity = 0;

        setTimeout(() => {

          switch(boothName.querySelector("h2").innerText) {
            case "Bust Shot":
              conceptImg.setAttribute("src", bustConceptImgSrc.profile);
            break;
            case "Metal":
              conceptImg.setAttribute("src", metalConceptImgSrc.profile);
            break;
            case "Full Shot":
              conceptImg.setAttribute("src", fullConceptImgSrc.profile);
            break;
          }
          

          for(let i=0; i<neonFilter.length; i++) {
            filters[i].style.background = profileFilter[i];
            circles[i].style.background = profileFilter[i];
            filterNames[i].innerText = conceptName.profile[i];
          }
        }, 200)
        
      } else if(conceptItems[j].innerText.includes("Modern")) {
        conceptImg.style.opacity = 0;
        filterListBox.style.opacity = 0;

        setTimeout(() => {

          switch(boothName.querySelector("h2").innerText) {
            case "Bust Shot":
              conceptImg.setAttribute("src", bustConceptImgSrc.modern);
            break;
            case "Metal":
              conceptImg.setAttribute("src", metalConceptImgSrc.modern);
            break;
            case "Full Shot":
              conceptImg.setAttribute("src", fullConceptImgSrc.modern);
            break;
          }
          

          for(let i=0; i<neonFilter.length; i++) {
            filters[i].style.background = modernFilter[i];
            circles[i].style.background = modernFilter[i];
            filterNames[i].innerText = conceptName.modern[i];
          }
        }, 200)
        
      } else if(conceptItems[j].innerText.includes("Art")) {
        conceptImg.style.opacity = 0;
        filterListBox.style.opacity = 0;

        setTimeout(() => {
          conceptImg.setAttribute("src", fullConceptImgSrc.art);

          for(let i=0; i<neonFilter.length; i++) {
            filters[i].style = artFilter[i];
            circles[i].style = artBtnImg[i];
            filterNames[i].innerText = conceptName.art[i];
          }
        }, 200)
        
      } else if(conceptItems[j].innerText.includes("Dynamic")) {
        conceptImg.style.opacity = 0;
        filterListBox.style.opacity = 0;

        setTimeout(() => {
          conceptImg.setAttribute("src", dynamicConceptImgSrc);
          filters[0].style = dynamicFilter;
          for(let i=0; i<conceptName.dynamic.length; i++) {
            circles[i].style = artBtnImg[i];
            filterNames[i].innerText = conceptName.dynamic[i];
          }
        }, 200)
      }

      setTimeout(() => {
        filterListBox.style.opacity = 1;
        conceptImg.style.opacity = 1;
      }, 300)
      boothImg.classList.add("active");
      
    })

  }

  let filterItems = filterListBox.querySelectorAll(".filterItem");

  for(let i=0; i<filterItems.length; i++) {
    filterItems[i].addEventListener("click", () => {

      
      for (let j=0; j<filters.length; j++) {
        filters[j].classList.remove("active2");
        filters[j].classList.remove("active");
        filterNames[j].classList.remove("active");
      }

        if(filterNames[i].innerText == "Heart" ||
           filterNames[i].innerText == "Night Sky" ||
           filterNames[i].innerText == "Butterfly" ||
           filterNames[i].innerText == "Full Moon" ||
           filterNames[i].innerText == "Photo") {

          filters[i].classList.add("active2");
          filterNames[i].classList.add("active");

        } else {
          filters[i].classList.add("active");
          filterNames[i].classList.add("active");
        }
      
    })
  }

    // back button click event
    backBtn.addEventListener("click", () => {
      boothExplain.style.opacity = 0;

      for (let j=0; j<filters.length; j++) {
        filters[j].classList.remove("active");
        filters[j].classList.remove("active2");
        filterNames[j].classList.remove("active");
      }

      conceptItems.forEach( conceptItem => {
        conceptItem.classList.remove("active");
      })
      conceptImg.style.opacity = 0;
      filterListBox.style.opacity = 0;
      

      let delay = 0;
      for(let i=0; i<conceptItems.length; i++) {
        conceptItems[i].style.transitionDelay = delay+"s";
        delay += 0.2;
      }
  
      
      conceptListBox.style.opacity = 0;
      backBtn.style.opacity = 0;
      
      setTimeout(() => {
        boothImg.classList.remove("active");
        
        for(let i=0; i<conceptItems.length; i++) {
          conceptItems[i].style.transform = "translateY(0%)";
        }
        backBtn.style.display = "none";
  
      }, 300)
  
      setTimeout(() => {
        boothBoxs[i].style.display = "flex";
        conceptListBox.style.display = "none";
        boothBoxs[i].classList.remove("active");
        boothInner.classList.remove("active");
  
        for(let j=0; j<boothBoxs.length; j++) {
          if (i !== j) {
            boothBoxs[j].style.display = "flex";
          }
        }
  
        setTimeout(() => {
        
          for(let j=0; j<boothBoxs.length; j++) {
            if (i !== j) {
              boothBoxs[j].classList.remove("fadeout");
            }
          }
          disable = true;
  
        }, 380)
      }, 320)
  
    })

}