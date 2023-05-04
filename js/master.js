let mylinks = document.querySelectorAll("header .links a");

mylinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    mylinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

let bars = document.querySelector("header .search .bars");
let dropDownMenu = document.querySelector("header .links");

bars.onclick = function (e) {
  dropDownMenu.classList.toggle("open");
};

// Ligh/Dark Mode switching
let modeToggle = document.querySelector("header .search .mode-toggle");
let choosedModeLocal = localStorage.getItem("dark-mode");
if (choosedModeLocal !== null) {
  if (choosedModeLocal === "dark") {
    let myLinkTag = document.createElement("link");
    myLinkTag.setAttribute("rel", "stylesheet");
    myLinkTag.setAttribute("href", "css/dark.css");
    document.head.appendChild(myLinkTag);
  }
}

modeToggle.onclick = function () {
  if (document.querySelector("head link[href='css/dark.css']") === null) {
    let myLinkTag = document.createElement("link");
    myLinkTag.setAttribute("rel", "stylesheet");
    myLinkTag.setAttribute("href", "css/dark.css");
    document.head.appendChild(myLinkTag);
    // Store The Selected Mode in Local Storage
    localStorage.setItem("dark-mode", "dark");
  } else {
    document.querySelector("head link[href='css/dark.css']").remove();
    // Store The Selected Mode in Local Storage
    localStorage.setItem("dark-mode", "light");
  }
};
