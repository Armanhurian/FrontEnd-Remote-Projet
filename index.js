let firstChevronDownBtn = document.querySelector('.firstChevronDownBtn')
let secondChevronDownBtn = document.querySelector('.secondChevronDownBtn')
let firstChevronDownBtnQuestion = document.querySelector('.firstChevronDownBtnQuestion')
let secondChevronDownBtnQuestion = document.querySelector('.secondChevronDownBtnQuestion')
let threthChevronDownBtnQuestion = document.querySelector('.threthChevronDownBtnQuestion')
let forthChevronDownBtnQuestion = document.querySelector('.forthChevronDownBtnQuestion')
let featureList = document.querySelector('.featureList')
let companyList = document.querySelector('.companyList')
let lableForCheckBox = document.querySelector('#checkbox')
let check = document.querySelector('.check')


firstChevronDownBtn.addEventListener('click',function(){

    if(firstChevronDownBtn.children[0].className === 'fa-solid fa-chevron-down'){
        
        firstChevronDownBtn.children[0].classList.remove('fa-chevron-down')
        firstChevronDownBtn.children[0].classList.add('fa-chevron-up')
        console.log(firstChevronDownBtn.children[0].className);
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

firstChevronDownBtnQuestion.addEventListener('click',function(){
    
    if(firstChevronDownBtnQuestion.children[0].className === 'fa-solid fa-chevron-down'){
        
        firstChevronDownBtnQuestion.children[0].classList.remove('fa-chevron-down')
        firstChevronDownBtnQuestion.children[0].classList.add('fa-chevron-up')
        firstChevronDownBtnQuestion.parentElement.parentElement.children[2].style.color = '#e84393'
        firstChevronDownBtnQuestion.parentElement.parentElement.children[2].innerHTML = 'My name is Arman Hourian and I work as the only programmer and site designer in the team'

        
    }else if(firstChevronDownBtnQuestion.children[0].className === 'fa-solid fa-chevron-up'){

        firstChevronDownBtnQuestion.children[0].classList.remove('fa-chevron-up');
        firstChevronDownBtnQuestion.children[0].classList.add('fa-chevron-down');
        firstChevronDownBtnQuestion.parentElement.parentElement.children[2].innerHTML = ''
    }
})
secondChevronDownBtnQuestion.addEventListener('click',function(){

    if(secondChevronDownBtnQuestion.children[0].className === 'fa-solid fa-chevron-down'){
        
        secondChevronDownBtnQuestion.children[0].classList.remove('fa-chevron-down')
        secondChevronDownBtnQuestion.children[0].classList.add('fa-chevron-up')
        secondChevronDownBtnQuestion.parentElement.parentElement.children[2].style.color = '#e84393'
        secondChevronDownBtnQuestion.parentElement.parentElement.children[2].innerHTML = 'As a front-end programmer, I specialize in HTML, CSS, JAVASCRIPT, and soon React framework will be added to this list.'
 
        
    }else if(secondChevronDownBtnQuestion.children[0].className === 'fa-solid fa-chevron-up'){

        secondChevronDownBtnQuestion.children[0].classList.remove('fa-chevron-up');
        secondChevronDownBtnQuestion.children[0].classList.add('fa-chevron-down');
        secondChevronDownBtnQuestion.parentElement.parentElement.children[2].innerHTML = ''
    }
})
threthChevronDownBtnQuestion.addEventListener('click',function(){
    
    
        if(threthChevronDownBtnQuestion.children[0].className === 'fa-solid fa-chevron-down'){
            
            threthChevronDownBtnQuestion.children[0].classList.remove('fa-chevron-down')
            threthChevronDownBtnQuestion.children[0].classList.add('fa-chevron-up')
            threthChevronDownBtnQuestion.parentElement.parentElement.children[2].style.color = '#e84393'
            threthChevronDownBtnQuestion.parentElement.parentElement.children[2].innerHTML = 'I think at least after 5 months'

            
        }else if(threthChevronDownBtnQuestion.children[0].className === 'fa-solid fa-chevron-up'){

            threthChevronDownBtnQuestion.children[0].classList.remove('fa-chevron-up');
            threthChevronDownBtnQuestion.children[0].classList.add('fa-chevron-down');
            threthChevronDownBtnQuestion.parentElement.parentElement.children[2].innerHTML = ''
        }
    })
    forthChevronDownBtnQuestion.addEventListener('click',function(){

        
            if(forthChevronDownBtnQuestion.children[0].className === 'fa-solid fa-chevron-down'){
                
                forthChevronDownBtnQuestion.children[0].classList.remove('fa-chevron-down')
                forthChevronDownBtnQuestion.children[0].classList.add('fa-chevron-up')
                forthChevronDownBtnQuestion.parentElement.parentElement.children[2].style.color = '#e84393'
                forthChevronDownBtnQuestion.parentElement.parentElement.children[2].innerHTML = 'My goal is to be recognized as a senior front-end programmer in Iran and then immigrate'

                
            }else if(forthChevronDownBtnQuestion.children[0].className === 'fa-solid fa-chevron-up'){
   
                forthChevronDownBtnQuestion.children[0].classList.remove('fa-chevron-up');
                forthChevronDownBtnQuestion.children[0].classList.add('fa-chevron-down');
                forthChevronDownBtnQuestion.parentElement.parentElement.children[2].innerHTML = ''
            }
})