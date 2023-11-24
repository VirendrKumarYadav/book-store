
// ----------------List Conatianers ----------------

let category = document.querySelector('.sidebar__categories');
async function getAllCategries() {
    let res = await fetch('https://books-backend.p.goit.global/books/category-list');
    let categoryList = await res.json();
    categoryList.forEach(element => {
        let li = document.createElement('li');
        li.classList.add('category-item');
        li.setAttribute('data-id', element.list_name);
        li.innerText = element.list_name;
        category.appendChild(li);
    });
    theamButton();
}
getAllCategries();
// -------------------main container ------------------------
let main_cont = document.querySelector('.main_container');

// books list 
async function getAllBooks() {
    let res = await fetch('https://books-backend.p.goit.global/books/top-books');
    let categoryList = await res.json();
    let bookCount = 0;

    for (let i = 0; i < 3; i++) {
        let element = categoryList[i];
        for (let index = 0; index < element.books.length - 1; index++) {
            // console.log();
            bookCount++;
            // console.log(element.books[index].book_image);
            let div = document.createElement('div');
            div.classList.add('book-item');
            div.innerHTML = ` <img src="${element.books[index].book_image}" alt="">
           <h3 class='title'>${element.books[index].title}</h3>`;
            main_cont.appendChild(div);
        }
    }
    theamButton();
}
getAllBooks();
//------------------------ main books container -----------------------------
let main_Img_cont = document.querySelector('.image_container');
let images;
async function getMainData() {
    let res = await fetch('https://books-backend.p.goit.global/books/top-books');
    let categoryList = await res.json();
    let bookCount = 0;

    for (let i = 0; i < categoryList.length; i++) {
        let element = categoryList[i];
        let head=document.createElement('div');
        head.classList.add('rowList');
        let heading=document.createElement('div');
        heading.classList.add('heading');
        heading.innerHTML=`<h2>${element.list_name}</h2>`;
        head.appendChild(heading);
        main_Img_cont.appendChild(head);
        let head_1=document.createElement('div');
        head_1.classList.add('rowList-image');
        for (let index = 0; index < element.books.length - 1; index++) {
            bookCount++;
       
            let div = document.createElement('div');
            div.classList.add('book-item-main');
            
            div.innerHTML = ` <img src="${element.books[index].book_image}" alt="">
            <h3 class='title'>${element.books[index].title}</h3>
            <p class="author"><i>${element.books[index].author}</i></p>`;
             
           
            head_1.appendChild(div);
            head.appendChild(head_1);
        }
    }
    theamButton();
    showDilogDetails();
}
getMainData();


theamButton();
let book_sh_main=document.querySelectorAll('.book-item-main img');

function theamButton(){
    images=document.querySelectorAll('.book-item-main');
    // hover
    let title=document.querySelector('.title');
    
    // theme 
    let bodyColor=document.querySelector('body'); 
    let tog=document.querySelector('.toggle');
    let nav_cont=document.querySelector('nav .continer');
    let firstViewHight=document.querySelector('.firstViewHight');

    let book_sh=document.querySelector('.book-item img');
    let data_con=document.querySelector('.sidebar__categories');
    let data_con2=document.querySelector('.support__container');
    let theme_sign_btn=document.querySelector('.signin_btn button');
    tog.addEventListener('click',(e)=>{
    
     let theme=document.querySelector('input[type="checkbox"]');
        if(theme.checked==true){
          bodyColor.style.backgroundColor='rgb(0, 0, 0)';
          bodyColor.style.color="white";
          nav_cont.style.border='2px solid white'
          firstViewHight.style.border='1px solid white'
        //   book_sh.style.box_shadow='5px 5px 5px 5px rgba(0, 0, 0, 0.627)';
          data_con.style.border='2px solid white';
          data_con2.style.border='2px solid white';
          theme_sign_btn.style.backgroundColor='white';
          theme_sign_btn.style.color='black';
        }else{
            bodyColor.style.backgroundColor='white';
            bodyColor.style.color="black";
            nav_cont.style.border='2px solid black'
            firstViewHight.style.border='1px solid black'
            // book_sh.style.box_shadow='5px 5px 5px 5px white';
            data_con.style.border='2px solid black';
            data_con2.style.border='2px solid black';
            theme_sign_btn.style.backgroundColor='black';
            theme_sign_btn.style.color='white';
        }
    });
    
}

async function initApi() {
    let res = await fetch('https://books-backend.p.goit.global/books/top-books');
    let categoryList = await res.json();
   
   let book = categoryList[0].books[0];
//    console.log(book);

   let title = document.querySelector('.title_dilog');
   title.innerText=book.title;
   let auther = document.querySelector('.auther');
   auther.innerText="-"+book.author;
   let list = document.querySelector('.list-off');
   list.innerText=book.list_name;
   let buyList=document.querySelectorAll('ul li a');
   let imgage=document.querySelector('.book');
   imgage.src=book.book_image;
  
   for (let index = 0; index < buyList.length; index++) {  
       buyList[index].setAttribute('href', book.buy_links[index].url);
   }

}
initApi();

function showDilogDetails(){
    let listImage = document.querySelectorAll('.book-item-main');
    console.log(listImage);
}

