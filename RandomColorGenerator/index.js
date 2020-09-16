const hex = [ 0 , 1  , 2 , 3 , 4 , 5 , 6 , 7 , 8  , 9 , "A" , "B" , "C" , "D" , "E" , "F" ] ;


const btn = document.querySelector('.clickme') ;
const color = document.querySelector('.color') ;


btn.addEventListener('click' , () => {

    let hexColor = '#' ;

    for( let i = 0 ; i<6 ; i++ ){
        hexColor += hex[ Math.floor( Math.random() * hex.length ) ] ;
    }
    
    console.log('i was here') ;
     document.body.style.backgroundColor = hexColor ;
     color  .textContent = hexColor ;  



} )