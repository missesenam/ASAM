// Get the element by ID
const navbarElement = document.getElementById("navbar");

// Set the innerHTML of the element
navbarElement.innerHTML = `
 <div class="navbar h-[100px] md:w-[80%] mx-auto  relative">
  <div class="flex items-center justify-between w-full">
    <!-- Logo -->
    <div class="flex-1">
      <a href="index.html" class="text-xl w-[100%] sm:w-auto px-0">
        <img src="./logo/asam.png" alt="Foresight Logo" class="h-[70px] max-w-full" />
      </a>
    </div>

    <!-- Hamburger Icon -->
    <div class="flex-none sm:hidden">
      <button id="menu-toggle" class="p-2 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>

      </button>
    </div>

    <!-- Menu Items -->
    <div id="menu" class="flex-none hidden sm:block opacity-70 backdrop-blur-3xl">
      <ul class="menu menu-horizontal px-1 text-primary navliknks">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="application.html">Apllication</a></li>
        <li><a href="funding.html">Funding</a></li>
        <li><a href="FAQs.html">FAQs</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full justify-end bg-white/50 backdrop-blur-lg  custom-backdrop z-10">
    <ul class="menu p-2 navliknks">
      <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="application.html">Apllication</a></li>
        <li><a href="funding.html">Funding</a></li>
        <li><a href="FAQs.html">FAQs</a></li>
        <li><a href="contact.html">Contact</a></li>  
    </ul>
  </div>
</div>


`;
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
// when src="./Iogo/Foresight.png"
// class="h-full max-w-full
const footerElement = document.getElementById("footer");

footerElement.innerHTML = `<div  class="footer bg-primary text-white p-10 mt-8">
      <aside>
        <h6 ><a href="index.html" class=" text-xl w-[100%] sm:w-auto px-0">
        <img src="./logo/asam.png" alt="" class="h-[40px]  max-w-full bg-white" />
      </a></h6>

        <p>
          &copy; 2025 ASAM-FOUNDATION. All rights reserved.
          <br />
          Let
          <span class="font-bold text-secondary">ASAM-FOUNDATION</span> Ltd be
          your trusted partner in financial success!
        </p>
      </aside>
      <nav>
        <h6 class="footer-title">Socials</h6>
        <div class="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              ></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              ></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              ></path>
            </svg>
          </a>
        </div>
      </nav>
      </div>`;
