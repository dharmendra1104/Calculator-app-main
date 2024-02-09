
window.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.input');
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = button.textContent;
 
            if (buttonText === 'RESET') {
                input.value = '';
            } else if (buttonText === 'DEL') {
                input.value = input.value.slice(0, -1);
            } else if (buttonText === '=') {
                try {
                    input.value = eval(input.value);
                } catch {
                    input.value = 'Error';
                }
            } else {
                input.value += buttonText;
            }
        });
    });
 });
 document.addEventListener('DOMContentLoaded', function () {
    const numbers = document.querySelectorAll('.one');
    const circle = document.getElementById('circle');
  
    numbers.forEach(number => {
      number.addEventListener('click', function () {
        numbers.forEach(num => num.classList.remove('selected'));
        this.classList.add('selected');
        
        const clickedNumber = parseInt(this.innerText); // Convert innerText to an integer
      if (clickedNumber === 1) {
        document.getElementById('circle').style.marginLeft = "1px";
      } else if (clickedNumber === 2) {
        document.getElementById('circle').style.marginLeft = "16px";
      } else if (clickedNumber === 3) {
        document.getElementById('circle').style.marginLeft = "30px";
      }

        });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const numbers = document.querySelectorAll('.one');
    const circle = document.getElementById('circle');
    const container = document.querySelector('.container');
    const section1 = document.querySelector('.section-1');
    const section2 = document.querySelector('.section-2');
    const body = document.body;
    const inputText = document.querySelector('.input');

    numbers.forEach(number => {
        number.addEventListener('click', function () {
            numbers.forEach(num => num.classList.remove('selected'));
            this.classList.add('selected');

            const clickedNumber = parseInt(this.innerText); // Convert innerText to an integer
            if (clickedNumber === 1) {
                circle.style.marginLeft = "1px";
                circle.style.backgroundColor = "red";
                section1.style.backgroundColor = "hsl(0, 0%, 93%)"; // Change section-1 background color
                section2.style.backgroundColor = "hsl(224, 29%, 27%)"; // Change section-2 background color
                container.style.backgroundColor = "hsl(222, 26%, 31%)"; // Change container background color
                body.style.backgroundColor = " hsl(222, 26%, 31%)"; // Change body background color
                inputText.style.color = "white";
                inputText.style.backgroundColor = "hsl(223, 31%, 20%)";
            } else if (clickedNumber === 2) {
                circle.style.marginLeft = "16px";
                circle.style.backgroundColor = "red";
                section1.style.backgroundColor = "hsl(0, 0%, 93%)"; // Change section-1 background color
                section2.style.backgroundColor = "hsl(0, 5%, 81%)"; // Change section-2 background color
                container.style.backgroundColor = "hsl(0, 0%, 90%)"; // Change container background color
                body.style.backgroundColor = "hsl(0, 0%, 90%)"; // Change body background color
                inputText.style.color = "black";
                inputText.style.backgroundColor = "hsl(0, 0%, 95%)";
                tittle.style.color="black";
            } else if (clickedNumber === 3) {
                circle.style.marginLeft = "30px";
                circle.style.backgroundColor = "red";
                section1.style.backgroundColor = "hsl(268, 47%, 21%)"; // Change section-1 background color
                section2.style.backgroundColor = "hsl(268, 47%, 21%)"; // Change section-2 background color
                container.style.backgroundColor = "hsl(268, 75%, 9%)"; // Change container background color
                body.style.backgroundColor = "hsl(268, 75%, 9%)"; // Change body background color
                inputText.style.color = "yellow";
                inputText.style.backgroundColor = "hsl(268, 47%, 21%)";
            }
        });
    });
});


  

 