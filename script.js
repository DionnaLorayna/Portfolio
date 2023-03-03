// ADD ACTIVE CLASS TO LINK ON CLICK
const navUL = document.getElementById("nav-ul");
const navLi = navUL.getElementsByClassName("nav-li");

for (let i = 0; i < navLi.length; i++) {
      navLi[i].addEventListener("click", function() {
      const current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  // SLIDE THE CONTENT SECTION ON LINK CLICK
  let links = document.querySelectorAll(".link");
  let allContent = document.querySelectorAll(".content");
 
  if (window.innerWidth > 850) {
      for (let i = 0; i < links.length; i++) {
          links[i].addEventListener("click", (e) => {
            e.preventDefault();

            const filter = e.target.dataset.filter;
            console.log(filter);

            allContent.forEach((content) => {
              if (filter === "content") {
                content.style.display = "block"
              } else if (content.classList.contains(filter)) {
                content.style.display = "block"
              } else {
                content.style.display = "none"
              }

            })
          });
      }
  }

  // SMOOTH SCROLL FOR MOBILE AND TABLET
  if (window.innerWidth < 850) {
    links = document.querySelectorAll(".nav-li a");

    for (const link of links) {
      link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(e) {
      e.preventDefault();
      const href = this.getAttribute("href");

      document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      });
    }



  }
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const Tabugon = { lat: 9.79346693364655, lng: 122.7986650782998 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: Tabugon,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: Tabugon,
    map: map,
  });
}

window.initMap = initMap;


//slide images
var myIndex = 0;
	carousel();

	function carousel() {
	  var i;
	  var x = document.getElementsByClassName("mySlideImages");
	  for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";
	  }
	  myIndex++;
	  if (myIndex > x.length) {myIndex = 1}
	  x[myIndex-1].style.display = "block";
	  setTimeout(carousel, 3500);
	}

 