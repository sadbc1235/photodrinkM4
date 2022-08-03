const conceptName = {
  neon: ["Sweet Peach", "Mango Green", "Mixed<br> Blue", "Shadow Pink"],
  profile: ["Soft-Right", "Soft-Left", "Contrast Right", "Contrast Left"],
  modern: ["Soft", "Contrast", "Sepia", "Blue"],
  art: ["Heart", "Night Sky", "Butterfly", "Full Moon"],
  dynamic: ["Photo", "Video"]
};

const mainImgSrc = {
  bust: "/images/bust/bustmain1.png",
  metal: "/images/metal/metal4.jpg",
  full: "/images/full/fullshot5.jpg",
  dynamic: "/images/dynamic/dynamic2.jpg"
}
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
  art: "/images/full/concepts/modern/modern.png",
};
const dynamicConceptImgSrc = "/images/dynamic/dynamic.jpg"

const neonFilter = [
  "linear-gradient(90deg, rgba(240,109,178,.3) 40%, rgba(255,141,131,.3) 60%)", // sweet peach
  "linear-gradient(90deg, rgba(224,104,76,.3) 40%, rgba(118,159,57,.3) 60%)", // mango green
  "linear-gradient(90deg, rgba(172,139,162,.3) 40%, rgba(21,177,227,.3) 60%)", // mixed blue
  "linear-gradient(90deg, rgba(206,96,160,.3) 40%, rgba(204,175,179,.3) 60%)" // shadow pink
]
const profileFilter = [
  "linear-gradient(90deg, rgba(170,170,170,.3) 45%, rgba(238,238,238,.3) 55%)", // soft-right
  "linear-gradient(90deg, rgba(238,238,238,.3) 45%, rgba(170,170,170,.3) 55%)", // soft-left
  "linear-gradient(90deg, rgba(170,170,170,.3) 45%, rgba(255,255,255,.3) 55%)", // contrast-right
  "linear-gradient(90deg, rgba(255,255,255,.3) 45%, rgba(170,170,170,.3) 55%)" // contrast-left
]
const artFilter = [
  "background: url('/images/full/concepts/art/heart.png') no-repeat center; background-size: cover;",
  "background: url('/images/full/concepts/art/nightsky.png') no-repeat center; background-size: cover;",
  "background: url('/images/full/concepts/art/butterfly.png') no-repeat center; background-size: cover;",
  "background: url('/images/full/concepts/art/heart.png') no-repeat center; background-size: cover;",
]
const dynamicFilter = "background: url('/images/dynamic/concept/dynamic.jpg') no-repeat center; background-size: cover;"

const artBtnImg = [
  "background: url('/images/full/heart.png'); background-size: cover;", // heart
  "background: url('/images/full/cloud.png'); background-size: cover;", // night sky
  "background: url('/images/full/butterfly.png'); background-size: cover;", // butterfly
  "background: url('/images/full/heart.png'); background-size: cover;", // moon
]
const dynamicBtnImg = [
  "background: url('/images/dynamic/dynamicbtn.jpg'); background-size: cover;", // photo
  "background: url('/images/dynamic/dynamicbtn2.jpg'); background-size: cover;", // video
]
const modernFilter = [
  "rgba(136, 136, 136, .2)", // soft
  "rgba(85, 85, 85,.2)", // contrast
  "rgba(255,201,90,.1)", // sepia
  "rgba(75,158,219,.1)" // blue
]
const cards = document.querySelectorAll(".card");
const galleryBox = document.querySelector(".galleryBox");
const galleryBtn = galleryBox.querySelector(".galleryBtn");
const closeBtn = galleryBox.querySelector(".closeBtn");
const gallery = document.querySelector(".gallery");

let imgLength = 0;
let boothName = null;


const initVideo = () => {
  document.querySelector("video").pause();
  document.querySelector("video").currentTime = 0;
}

const playVideo = () => {
  document.querySelector("video").play();
}

const clickMore = (e) => {
  const card = e.path[3];
  const cardClose = card.querySelector(".cardClose");
  const btnBox = e.target.parentNode;
  const conBtnBox = btnBox.querySelector(".conBtnBox");
  const conBtns = conBtnBox.querySelectorAll(".conBtn");
  const btnName = e.target;
  const cardExplain = e.target.nextElementSibling;

  if(card.className.includes("bust")) {
    imgLength = 25;
    boothName = "bust";
  } else if(card.className.includes("metal")) {
    imgLength = 26;
    boothName = "metal";
  } else if(card.className.includes("profile")) {
    imgLength = 25;
    boothName = "full";
  } else if(card.className.includes("dyna")) {
    imgLength = 8;
    boothName = "dyna";
  }

  galleryBtn.style.display = "block";
  
  // loadGallery(imgLength, boothName)

  cards.forEach(card => {
    card.classList.add("fadeOut");
  })

  card.classList.remove("fadeOut");
  setTimeout(() => {
    card.classList.add("showCon");
    btnName.classList.remove("showName");

    setTimeout(() => {
      cardExplain.classList.add("showEx");

      setTimeout(() => {
        conBtnBox.classList.add("showBtnBox");
        conBtns[0].classList.add("showConBtn");

        setTimeout(() => {
          if(conBtns.length >= 2) {
            conBtns[1].classList.add("showConBtn");
          }
    
          setTimeout(() => {
            if(conBtns.length >= 3) {
              conBtns[2].classList.add("showConBtn");
            }
            
            if(conBtns.length == 4) {
              setTimeout(() => {
                conBtns[3].classList.add("showConBtn");
              }, 200)
            }

            setTimeout(() => {
              cardClose.classList.add("showClose");
              galleryBtn.classList.add("showBtn");

            }, 400)
          }, 200)
        }, 200)
      }, 400)
    }, 450)
  }, 400)
  
}

const clickConBtn = (e) => {
  initVideo();
  const card = e.path[4];
  const conBtnBox = card.querySelector(".conBtnBox");
  const mainImg = card.querySelector(".mainImg");
  const cardExplain = card.querySelector(".cardExplain");
  const conBox = card.querySelector(".conBox");
  const cons = conBox.querySelectorAll(".con");
  const conNames = conBox.querySelectorAll(".conName");
  const conCircle = conBox.querySelectorAll(".conCircle");
  const imgFilter = card.querySelectorAll(".imgFilter");
  const loading = card.querySelector(".loading");


  cardExplain.classList.remove("showEx");
  conBox.classList.remove("showConBox");
  mainImg.classList.add("closeImg");
  loading.classList.add("active");
  for(let i=0; i<imgFilter.length; i++) {
    imgFilter[i].classList.remove("showFilter");
  }
  for(let i=0; i<cons.length; i++) {
    cons[i].classList.remove("active");
  }

  let boothSrc;

  if(card.className.includes("bust")) {
    boothSrc = bustConceptImgSrc;
  } else if(card.className.includes("metal")) {
    boothSrc = metalConceptImgSrc;
  } else if(card.className.includes("profile")) {
    boothSrc = fullConceptImgSrc;
  } else if(card.className.includes("dyna")) {
    boothSrc = dynamicConceptImgSrc;
  }

  let currentConBtn = conBtnBox.querySelector(".active");

  setTimeout(() => {
    switch(currentConBtn.innerText) {
      case "NEON":
        mainImg.setAttribute("src", boothSrc.neon);
        for(let i=0; i<conNames.length; i++) {
          conNames[i].innerHTML = conceptName.neon[i];
          conCircle[i].style.background = neonFilter[i];
          imgFilter[i].style.background = neonFilter[i];
        }
      break;
      case "Profile":
        mainImg.setAttribute("src", boothSrc.profile);
        for(let i=0; i<conNames.length; i++) {
          conNames[i].innerHTML = conceptName.profile[i];
          conCircle[i].style.background = profileFilter[i];
          imgFilter[i].style.background = profileFilter[i];
        }
      break;
      case "Modern Black":
        mainImg.setAttribute("src", boothSrc.modern);
        for(let i=0; i<conNames.length; i++) {
          conNames[i].innerHTML = conceptName.modern[i];
          conCircle[i].style.background = modernFilter[i];
          imgFilter[i].style.background = modernFilter[i];
        }
      break;
      case "Art":
        mainImg.setAttribute("src", boothSrc.modern);
        for(let i=0; i<conNames.length; i++) {
          conNames[i].innerHTML = conceptName.art[i];
          conCircle[i].style = artBtnImg[i];
          imgFilter[i].style = artFilter[i];
        }
        imgFilter[0].classList.add("showFilter");
        cons[0].classList.add("active");
      break;
      case "Dynamic":
        mainImg.setAttribute("src", boothSrc);
        imgFilter[0].style = dynamicFilter;
        for(let i=0; i<conNames.length; i++) {
          conCircle[i].style = dynamicBtnImg[i];
        }
      break;
    }
    
    mainImg.addEventListener("load", () => {
      mainImg.classList.remove("closeImg");
      loading.classList.remove("active");
    })
    conBox.classList.add("showConBox");
  }, 400)
}

const showGallery = () => {
  galleryBtn.classList.add("fadeOutBtn");
  setTimeout(() => {
    galleryBox.classList.add("showGallery");
  }, 300)
}
const closeGallery = () => {
  galleryBox.classList.remove("showGallery");
  setTimeout(() => {
    galleryBtn.classList.remove("fadeOutBtn");
  }, 300)
}

const loadGallery = (imgLength, boothName) => {
  cleanGallery()
  for (let i = 1; i <= imgLength; i++) {
    const imgBox = document.createElement("div");
    const img = document.createElement("img");
    imgBox.classList.add("imgBox");
    img.setAttribute("src", `./images/gallery/${boothName}/${boothName}${i}.png`);
    imgBox.append(img);
    gallery.append(imgBox);
  }
}
const cleanGallery = () => {
  gallery.innerText = null;
}

const clickClose = (e) => {
  initVideo();
  const card = e.path[2];
  const cardClose = card.querySelector(".cardClose");
  const btnName = card.querySelector(".btnName");
  const conBtnBox = card.querySelector(".conBtnBox");
  const conBtns = card.querySelectorAll(".conBtn");
  const mainImg = card.querySelector(".mainImg");
  const cardExplain = card.querySelector(".cardExplain");
  const conBox = card.querySelector(".conBox");
  const cons = conBox.querySelectorAll(".con");
  const imgFilter = card.querySelectorAll(".imgFilter");

  for(let i=0; i<imgFilter.length; i++) {
    imgFilter[i].classList.remove("showFilter");
    cons[i].classList.remove("active");
  }
  conBtns.forEach(conBtn => {
    conBtn.classList.remove("active");
    conBtn.classList.remove("showConBtn");
  })
  conBox.classList.remove("showConBox");
  cardClose.classList.remove("showClose");
  galleryBtn.classList.remove("showBtn");
  cardExplain.classList.remove("showEx");
  mainImg.classList.add("closeImg");

  setTimeout(() => {
    let boothSrc;

    if(card.className.includes("bust")) {
      boothSrc = mainImgSrc.bust;
    } else if(card.className.includes("metal")) {
      boothSrc = mainImgSrc.metal;
    } else if(card.className.includes("profile")) {
      boothSrc = mainImgSrc.full;
    } else if(card.className.includes("dyna")) {
      boothSrc = mainImgSrc.dynamic;
    }

    mainImg.setAttribute("src", boothSrc);

    mainImg.addEventListener("load", () => {
      mainImg.classList.remove("closeImg");
    })
    conBtnBox.classList.remove("showBtnBox");
    card.classList.remove("showCon");
    btnName.classList.add("showName");

    setTimeout(() => {
      cards.forEach(card => {
        card.classList.remove("fadeOut");
      })
      galleryBtn.style.display = "none";
    }, 300)
  }, 400)
}

galleryBtn.addEventListener("click", () => {
  showGallery();
})

closeBtn.addEventListener("click", () => {
  closeGallery();
})

cards.forEach(card => {
  const conBtnBox = card.querySelector(".conBtnBox");
  const conBtns = conBtnBox.querySelectorAll(".conBtn");
  const cardBtn = card.querySelector(".cardBtn .btnName");
  const cons = card.querySelectorAll(".con");
  const filters = card.querySelectorAll(".imgFilter");
  const cardClose = card.querySelector(".cardClose");
    cardBtn.addEventListener("click", (e) => {
      clickMore(e);
    })

    conBtns.forEach(conBtn => {
      conBtn.addEventListener("click", (e) => {
        for(let i=0; i<conBtns.length; i++) {
          conBtns[i].classList.remove("active");
        }
        conBtn.classList.add("active");
        clickConBtn(e);
      })
    })

    for(let i=0; i<cons.length; i++) {
      cons[i].addEventListener("click", () => {
        const conName = cons[i].querySelector(".conName");

        if(!conName.innerHTML.includes("Video")) {
          initVideo();
        }
        filters.forEach(filter => {
          filter.classList.remove("showFilter");
        })
        for(let i=0; i<cons.length; i++) {
          cons[i].classList.remove("active");
        }
        cons[i].classList.add("active");
        filters[i].classList.add("showFilter");
      })
    }


    cardClose.addEventListener("click", (e) => {
      clickClose(e);
    })
})