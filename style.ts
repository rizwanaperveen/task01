const toggleButton = document.getElementById('education') as HTMLButtonElement;
const eduCation = document.getElementById('edu') as HTMLDivElement;
toggleButton?.addEventListener('click', () => {
    if(eduCation.style.display === 'none'){
         eduCation.style.display = 'block'
    }else{
        eduCation.style.display = 'none'
    }
});