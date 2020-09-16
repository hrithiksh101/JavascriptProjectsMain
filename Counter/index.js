const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--;
      
    }

    if (styles.contains('increase')) {
      count++;
    }

    if (styles.contains('reset')) {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red" ;
    } else {
      value.style.color =  "black" ;
    }

    value.textContent = count ;

  });
});

// hooking up the value



