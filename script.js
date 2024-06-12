function gototop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

let date = new Date();
let year = date.getFullYear();

document.getElementById("year").innerText = year;

// Show or hide the Go to Top button based on scroll position
window.onscroll = function () {
  let goToTopButton = document.getElementById("goToTop");
  if (document.documentElement.scrollTop > 20) {
    goToTopButton.classList.add("active");
  } else {
    goToTopButton.classList.remove("active");
  }
};

// let count = 0;
// async function test(){
//    await setTimeout(() => {
//       count++;
//     }, 2000);

//     console.log(count);

// }
