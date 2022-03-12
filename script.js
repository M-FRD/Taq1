const BOXES = document.querySelectorAll('.boxes')
const HELPER = document.querySelector('#helper')

// Responsive

window.addEventListener('load',()=>{
    document.querySelector('html').style.fontSize = window.innerWidth /100 + "px"
})
window.addEventListener('resize',()=>{
    document.querySelector('html').style.fontSize = window.innerWidth /100 + "px"
})
// Positions aléatoires
let Myid = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]
BOXES.forEach(Box => {
    let random = Math.floor(Math.random()*Myid.length)
    Box.id = `img${Myid[random]}`
    Myid.splice(random,1)
});
// aide

function help(){
    if(HELPER.checked){
        for(let i = 0; i < BOXES.length;i++){
            if(BOXES[i].id != 'img16' && BOXES[i].id == `img${Number(BOXES[i].getAttribute('row'))*4-(4-Number(BOXES[i].getAttribute('column')))}`){
                BOXES[i].classList.add('true')
                BOXES[i].classList.remove('false')
            }
            else if(BOXES[i].id != 'img16'){
                BOXES[i].classList.add('false')
                BOXES[i].classList.remove('true')
            }
        }
    }
    else{
        for(let i = 0; i < BOXES.length;i++){
            BOXES[i].classList.remove('true')
            BOXES[i].classList.remove('false')
        }
    }
}
// gagner ?
function win(){
    let res = 0
    for(let i = 0; i < BOXES.length;i++){
        if(BOXES[i].id == `img${Number(BOXES[i].getAttribute('row'))*4-(4-Number(BOXES[i].getAttribute('column')))}`){
            res++
        }
    if(res == BOXES.length){
        for(let i = 0; i < BOXES.length;i++){
            setTimeout(() => {
            BOXES[i].classList.add('win')
            document.querySelector('.taquin').classList.add('win')
            }, 500);
        }
    }
    }
}

// mouvement des cases

function taquin(){
    for(let i = 0; i < BOXES.length;i++){
        BOXES[i].addEventListener('click',()=>{
            for(let j = 0; j < BOXES.length;j++){
                if(BOXES[j].id == "img16"){
                    if(BOXES[i].getAttribute('row') == BOXES[j].getAttribute('row') && (BOXES[i].getAttribute('column') == Number(BOXES[j].getAttribute('column')) - 1 || BOXES[i].getAttribute('column') == Number(BOXES[j].getAttribute('column')) + 1 ) || BOXES[i].getAttribute('column') == BOXES[j].getAttribute('column') && (BOXES[i].getAttribute('row') == Number(BOXES[j].getAttribute('row')) - 1 || BOXES[i].getAttribute('row') == Number(BOXES[j].getAttribute('row')) + 1 )){
                        let prerow = BOXES[j].getAttribute('row')
                        let precol = BOXES[j].getAttribute('column')
                        BOXES[j].setAttribute('row',BOXES[i].getAttribute("row"))
                        BOXES[j].setAttribute('column',BOXES[i].getAttribute("column"))
                        BOXES[i].setAttribute('row',prerow)
                        BOXES[i].setAttribute('column',precol)
                    }
                }
                
            }
            help()
            win()
        })
    }
}
taquin()


// forcer la victoire

function adminwin(){
    for(let i = 0; i < BOXES.length;i++){
        if(i < 14){
            BOXES[i].id = `img${i+1}`
            console.log(Math.floor(3/4));
        }
        else{
            if(i == 14)
            BOXES[i].id = `img${i+2}`
        
            else{
            BOXES[i].id = `img${i}`
            }
        }
    }
    help()
}
