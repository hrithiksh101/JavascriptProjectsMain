const about = document.querySelector('.about');
const buttons = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {

  const id = e.target.dataset.id;

  console.log( id , ' is the id attribute' )
  if (id) {
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });



    articles.forEach( (article) =>{
        // console.log( article.classList , 'before' ) ;
        article.classList.remove("active") ;
        // console.log(article.classList , 'after') ;
    }  ) ;

    const element = document.getElementById(id) ;

    e.target.classList.add("active") ;
    element.classList.add("active") ;

    console.log( element  )

  }
});
