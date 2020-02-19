/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const studentList = document.querySelectorAll(".student-item"); //All student data from the pate
const studentPerPage = 10; //Number of students displayed in each page

/*** This function shows studentPerPage from the startingPage of the list of students passed in ***/
const showPage = (studentList, startingPage) => {
  const pageStart = startingPage*studentPerPage - studentPerPage;
  const pageEnd = startingPage*studentPerPage;
  
  for (let i = 0; i<studentList.length; i++) {
      if (i >= pageStart && i<pageEnd) {
        studentList[i].style.display = "";
      }
      else
      {
        studentList[i].style.display = "none";
      }
    }
}

/*** Creates the pagination according to the studentList it gets and studentPerPage number set ***/
const appendPageLinks =  (studentList) => {
  const numberOfPages = Math.ceil(studentList.length/studentPerPage);
  const activePage = 1;

  const paginationDiv = document.createElement('div'); //creates DIV for the pagination
    paginationDiv.className = 'pagination';

  const fullPage = document.querySelector('.page'); //Selects the page
    fullPage.appendChild(paginationDiv); 

  const paginationUl = document.createElement('ul'); //Creates UL for the list
    paginationDiv.appendChild(paginationUl)

  for (let i=0; i<numberOfPages; i++) {
    const paginationLi = document.createElement('li'); //creates each numbered li
      paginationUl.appendChild(paginationLi);
    
    const link = document.createElement('a'); //creates the link
      link.href = '#'; //so the number is clickable
      link.text = i+1;
      if (i === 0) { link.className = 'active'};
      paginationLi.appendChild(link);
    
    link.addEventListener('click', (e) => {  //Event listener for every link, changes classname, calls showpage
      const linkList = document.getElementsByTagName('a');
      for (let i=0; i<linkList.length;i++) {
        linkList[i].className='';
      }
      e.target.className = 'active';
      showPage(studentList,e.target.text);
    })
  }
}

showPage(studentList,1);
appendPageLinks(studentList);
