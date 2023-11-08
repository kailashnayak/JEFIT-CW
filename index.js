let button = document.querySelector("button");

function mediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    button.innerText = "Try For Free";
  } else {
    button.innerText="Sign Up"
  }
}

const mediaQuery = window.matchMedia("(max-width: 921px)");
mediaChange(mediaQuery);

mediaQuery.addListener(mediaChange);

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
        this.classList.add("active");
    });

    dropdown.addEventListener("mouseleave", function () {
        this.classList.remove("active");
    });
});


window.addEventListener("scroll", function() {
  var navbar = document.getElementById("navbar");
  var scrollPosition = window.scrollY;
if(window.matchMedia('(min-width: 769px)').matches && scrollPosition > 960 )
  { 
    navbar.parentElement.classList.add("scrollon");
  } else if (window.matchMedia('(min-width: 640px)').matches && scrollPosition > 1100 ) {
      navbar.parentElement.classList.add("scrollon");
  } else if (window.matchMedia('(max-width: 641px)').matches && scrollPosition > 1150 ) {
    navbar.parentElement.classList.add("scrollon");
} 
  else {
    navbar.parentElement.classList.remove("scrollon");
  }
});


  var mySwiper;

  function initializeSwiper() {
    mySwiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 6,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
      },
      speed: 800,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }


  function updateSwiperConfig() {
    var slidesPerView = 6; 
    if (window.matchMedia('(max-width: 768px)').matches) {
      slidesPerView = 1; 
    } else if (window.matchMedia('(max-width: 1080px)').matches) {
      slidesPerView = 4; 
    }
    
    mySwiper.params.slidesPerView = slidesPerView;
    mySwiper.update();
  }
  
  window.addEventListener('resize', updateSwiperConfig);
  window.addEventListener('load', function () {
    initializeSwiper();
    updateSwiperConfig();
  });
  

  const loginLink = document.getElementById("login-link");
  const loginForm = document.getElementById("login-form");
  const loginButton = document.getElementById("login-button");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  
  loginLink.addEventListener("click", function () {
      loginForm.style.display = "block";
  });
  
  const loginLink1 = document.querySelector(".sBtn");
  const loginForm1 = document.querySelector("#login-form");
  const loginButton1 = document.getElementById("login-button");
  const usernameInput1 = document.getElementById("username");
  const passwordInput1 = document.getElementById("password");
  
  loginLink1.addEventListener("click", function () {
      loginForm1.style.display = "block";
  });

  loginButton1.addEventListener("click", function () {
    if (usernameInput.value === "" || passwordInput.value === "") {
        alert("Please enter both username and password.");
    } else {
        alert("Login Successful");
        loginForm.style.display = "none";
      
        usernameInput.value = "";
        passwordInput.value = "";
    }
});



  loginButton.addEventListener("click", function () {
      if (usernameInput.value === "" || passwordInput.value === "") {
          alert("Please enter both username and password.");
      } else {
          alert("Login Successful");
          loginForm.style.display = "none";
        
          usernameInput.value = "";
          passwordInput.value = "";
      }
  });

  document.getElementById("cancel-button").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "none";
});




  

