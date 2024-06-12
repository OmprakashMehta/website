function gototop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

let date = new Date();
let year = date.getFullYear();

document.getElementById("year").innerText = year;
// let count = 0;
// async function test(){
//    await setTimeout(() => {
//       count++;
//     }, 2000);

//     console.log(count);

// }
