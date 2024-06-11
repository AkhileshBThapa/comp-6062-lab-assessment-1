const studentName = 'Akhilesh Bikram Thapa';
const studentNumber = '1172618';

const result = (studentName).concat('-', studentNumber);
console.log(result);

const headrContent =document.querySelector("h1");
headrContent.innerHTML=result;
headrContent.classList.add("headings");

