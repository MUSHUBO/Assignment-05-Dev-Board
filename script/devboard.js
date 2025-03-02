const allButtons = document.querySelectorAll('#all-box-element button')

for (let allButton of allButtons) {
    allButton.addEventListener('click', function () {

        alert('Board updated Successfully')
        const tuskAssigned = document.getElementById('tusk-assigned').innerText;
        const convertTuskNumber = parseInt(tuskAssigned);

        if (convertTuskNumber > 0) {
            const sum = convertTuskNumber - 1;
            console.log(sum);
            document.getElementById('tusk-assigned').innerText = sum;
            this.setAttribute('disabled', true);

            if (convertTuskNumber === 1) {
                alert('Congrats!! You have completed all the current task')
            }
        }


        const navbarNumber = document.getElementById('navbar-number').innerText;
        const convertNavNumber = parseInt(navbarNumber);

        if (convertNavNumber < 29) {
            const sum = convertNavNumber + 1;
            console.log(sum);
            document.getElementById('navbar-number').innerText = sum;
        }


    })
}


function updateDateAndTime() {
    const now = new Date().toDateString()
    document.getElementById('date-and-time').innerText = now;
}
updateDateAndTime()


document.getElementById('another-page')
    .addEventListener('click', function () {
        window.location.href = 'blog.html'
    })

    