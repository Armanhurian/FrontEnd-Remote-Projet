let firstChevronDownBtn = document.querySelector('.firstChevronDownBtn')
let secondChevronDownBtn = document.querySelector('.secondChevronDownBtn')
let featureList = document.querySelector('.featureList')
let companyList = document.querySelector('.companyList')
let lableForCheckBox = document.querySelector('#checkbox')
let check = document.querySelector('.check')


firstChevronDownBtn.addEventListener('click',function(){
   console.log(firstChevronDownBtn.children[0].className);
    if(firstChevronDownBtn.children[0].className === 'fa-solid fa-chevron-down'){
        
        firstChevronDownBtn.children[0].classList.remove('fa-chevron-down')
        firstChevronDownBtn.children[0].classList.add('fa-chevron-up')
        featureList.style.opacity = '0.9'
    }else if(firstChevronDownBtn.children[0].className === 'fa-solid fa-chevron-up'){
        firstChevronDownBtn.children[0].classList.remove('fa-chevron-up')
        firstChevronDownBtn.children[0].classList.add('fa-chevron-down')
        featureList.style.opacity = '0'
        
    }
})
secondChevronDownBtn.addEventListener('click',function(){
    
    if(secondChevronDownBtn.children[0].className === 'fa-solid fa-chevron-down'){
        
        secondChevronDownBtn.children[0].classList.remove('fa-chevron-down')
        secondChevronDownBtn.children[0].classList.add('fa-chevron-up')
        companyList.style.opacity = '0.9'

    }else if(secondChevronDownBtn.children[0].className === 'fa-solid fa-chevron-up'){
        secondChevronDownBtn.children[0].classList.remove('fa-chevron-up')
        secondChevronDownBtn.children[0].classList.add('fa-chevron-down')
        companyList.style.opacity = '0'

    }
})

lableForCheckBox.addEventListener('click',function(){
    if(document.body.className !== 'addClassForBody'){
        document.body.classList.add('addClassForBody')
        
    }else{
        document.body.classList.remove('addClassForBody')

    }
})