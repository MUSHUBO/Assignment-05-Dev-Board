
document.getElementById('btn-contain-box')
.addEventListener('click', function(event){
    alert('Board updated Successfully')

    const tuskAssigned = document.getElementById('tusk-assigned').innerText;
    const convertTuskNumber = parseInt(tuskAssigned);

    if(convertTuskNumber > 0){
        const sum = convertTuskNumber - 1;
        console.log(sum);
        document.getElementById('tusk-assigned').innerText = sum;
        document.getElementById('btn-contain-box').disabled = true;
    }

    
    const navbarNumber = document.getElementById('navbar-number').innerText;
    const convertNavNumber = parseInt(navbarNumber);
    
    if(convertNavNumber === 23){
        const sum = convertNavNumber + 1;
        console.log(sum);
        document.getElementById('navbar-number').innerText = sum;
    }
    

})