let string = "";
let buttons = document.querySelectorAll('.buttons button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');

        if (value === '=') {
            try {
                string = eval(string);
            
                document.querySelector('.result').value = string;
            } catch {
                document.querySelector('input').value = "Error";
                string = "";
            }
        } else if (value === 'AC') {
            string = "";
            document.querySelector('input').value = string;
            document.querySelector('.result').value = string;
        } else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;
        } else {
            string += value;
            document.querySelector('input').value = string;
        }
    });
});
