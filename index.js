const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav .collapse ul li');

    window.addEventListener('scroll', ()=> {
      let current = '';
      sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
          current = section.getAttribute('id');
        }
      })

      navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
          li.classList.add('active')
      }
      })
    })

    // Modal Image Gallery
    function onClick(element) {
      document.getElementById("img01").src = element.src;
      document.getElementById("modal01").style.display = "block";
      var captionText = document.getElementById("caption");
      captionText.innerHTML = element.alt;
    }

    // Change style of navbar on scroll
    window.onscroll = function () { myFunction() };
    function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
    }

    // Used to toggle the menu on small screens when clicking on the menu button
  //   function toggleFunction() {
  //     var x = document.getElementById("navbarSupportedContent");
  //     if (x.className.indexOf("demonav") == -1) {
  //         x.className += "demonav";
  //     } else {
  //         x.className = x.className.replace("demonav", "");
  //     }
  // }