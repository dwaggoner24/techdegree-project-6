const objPerPage = 9;
const studentList = document.querySelector('.student-list');

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
//*viewPage = function will create and display student information of 9 students on the page.
//Creating the needed DOM elements to display information about each of the students using template literal*/
function viewPage(list,page){
   const startIndex = (page * objPerPage)-objPerPage;
   const endIndex = (page * objPerPage);
   studentList.innerHTML = '';
   for(let i = 0; i < list.length; i++){
      if(i >= startIndex && i < endIndex){
         const displayItems = 
            `<li class ="student-item cf">
               <div class"student-details">  
                  <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>`;
         studentList.insertAdjacentHTML('beforeend',displayItems);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
-Found some helpful information on youtube video/google regarding pagination
*/

function paginationBtn (list) {
   const pageNum = Math.ceil(list.length/objPerPage);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for(let i = 0; i <= pageNum.length; i++){
      const pagbtn = `<li>
                        <button type="button">${i}</button>
                     </li>`;
      linkList.insertAdjacentHTML('beforeend',pagbtn);
   };
   const button = document.querySelector('button:first-child');
   button.classList.add('active');
   linkList.addEventListener('click',(e)=>{
      if(e.target.tagName === 'BUTTON'){
         const activeBtn = document.querySelector('.active');
         e.target.className = 'active';
         activeBtn.className = '';
         viewPage(list,e.target.textContent);
      };
   });
} 


//*call functions*/

viewPage(data,1);

paginationBtn(data);



