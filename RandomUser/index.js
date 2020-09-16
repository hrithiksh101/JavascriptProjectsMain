const reviews = [
  {
    id: 1,
    name: 'Rose',
    job: 'web devloper',
    img: './img/1.jpg',
  },
  {
    id: 2,
    name: 'Jonathon',
    job: 'Android devloper',
    img: './img/2.jpg',
  },
  {
    id: 3,
    name: 'Maria',
    job: 'ios devloper',
    img: './img/3.jpg',
  },
  {
    id: 4,
    name: 'Alex',
    job: 'software devloper',
    img: './img/4.jpg',
  },
  {
    id: 1,
    name: 'Nicola',
    job: 'Graphic designer',
    img: './img/5.jpg',
  },
];

// firstly hooking up to all the buttons

const img = document.querySelector('.author-image') ;
const author = document.querySelector('.author-name') ;
const job = document.querySelector('.author-job') ;

const prevBtn = document.querySelector('.left-btn') ;
const nextBtn = document.querySelector('.right-btn') ;
const randomBtn = document.querySelector('.random-btn') ;

// Now doing the magic

let currentItem = 0 ;

nextBtn.addEventListener( 'click' , (e) => {

    currentItem++ ;

    if( currentItem > reviews.length - 1 )
    currentItem = 0 ;
      
    const item = reviews[currentItem].img ;
    const name = reviews[currentItem].name ;
    const AuthorJob = reviews[currentItem].job ;

    console.log('next button pressed') ;
    img.src = item ;
    author.innerHTML = name ;
    job.innerHTML = AuthorJob ;

    

} )
prevBtn.addEventListener( 'click' , (e) => {

    currentItem-- ;

    if( currentItem < 0 )
    currentItem = reviews.length - 1 ;
      
    const item = reviews[currentItem].img ;
    const name = reviews[currentItem].name ;
    const AuthorJob = reviews[currentItem].job ;

    console.log('previous button pressed') ;
    img.src = item ;
    author.innerHTML = name ;
    job.innerHTML = AuthorJob ;

    

} )

randomBtn.addEventListener( 'click' , (e) => {

    currentItem  = Math.floor( Math.random() * reviews.length ) ;


      
    const item = reviews[currentItem].img ;
    const name = reviews[currentItem].name ;
    const AuthorJob = reviews[currentItem].job ;

    console.log('random button pressed') ;
    img.src = item ;
    author.innerHTML = name ;
    job.innerHTML = AuthorJob ;

    

} )

window.addEventListener( "DOMContentLoaded" , (e) => {
    console.log('initial window loaded') ;
} )

// woohoo