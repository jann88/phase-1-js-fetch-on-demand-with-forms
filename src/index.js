const initForm = () => {


        document.addEventListener('DOMContentLoaded', init);
        const inputForm = document.querySelector('form');
        inputForm.addEventListener('submit', (event) => {
                event.preventDefault();
                console.log(event);
                const input = document.querySelector('input# searchById ');
                console.log(input.value)
                fetch(`http://localhost:3000/movies/${input.value}`)
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data);

                    });
            }
        }
        document.addEventListener('DOMContentLoaded', init);