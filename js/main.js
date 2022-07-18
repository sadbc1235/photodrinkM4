// more button click event
const boothBoxs = document.querySelectorAll(".boothBox");

for(let i=0; i<boothBoxs.length; i++) {
  let intoConceptBtn = boothBoxs[i].querySelector(".intoConceptBtn");
  let boothInner = boothBoxs[i].querySelector(".boothInner");
  let boothName = boothBoxs[i].querySelector(".boothName");
  let backBtn = boothName.querySelector(".backBtn");
  let boothExplain = boothBoxs[i].querySelector(".boothExplain");
  let conceptListBox = boothBoxs[i].querySelector(".conceptListBox");
  let conceptItems = conceptListBox.querySelectorAll(".conceptItem");

  intoConceptBtn.addEventListener("click", () => {

      for(let j=0; j<boothBoxs.length; j++) {
        if (i !== j) {
          boothBoxs[j].classList.add("fadeout");
        }
      }
      
      setTimeout(() => {

        boothBoxs[i].style.display = "block";
        boothExplain.style.display = "block";
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
        }, 300)
  
        setTimeout(() => {
          boothExplain.style.opacity = 1;
          conceptListBox.style.opacity = 1;
          backBtn.style.opacity = 1;
          
          for(let i=0; i<conceptItems.length; i++) {
            conceptItems[i].style.transform = "translateY(-150%)";
          }

        }, 380)
  
      }, 350)

  })

  backBtn.addEventListener("click", () => {

    boothExplain.style.opacity = 0;
    conceptListBox.style.opacity = 0;
    backBtn.style.opacity = 0;
    
    setTimeout(() => {

      for(let i=0; i<conceptItems.length; i++) {
        conceptItems[i].style.transform = "translateY(0%)";
      }
      backBtn.style.display = "none";

    }, 300)

    setTimeout(() => {
      boothBoxs[i].style.display = "flex";
      boothExplain.style.display = "none";
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

      }, 380)
    }, 320)

  })

}