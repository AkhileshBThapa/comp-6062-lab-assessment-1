//Assign your name and studentNumber to a variable called studentName and studentNumber
const studentName = 'Akhilesh Bikram Thapa';
const studentNumber = '1172618';

//combine the variables into a single string printed into the console log
const result = (studentName).concat('-', studentNumber);
console.log(result);

//Use document.querySelector to access the <h1> and assign it to a variable called headerContent
const headrContent=document.querySelector("h1");
headrContent.innerHTML=result;
headrContent.classList.add("headings");