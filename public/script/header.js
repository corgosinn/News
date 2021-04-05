function menuopen(){
    let curtain = document.getElementById('menu-curtain');
    let menu = document.getElementById('menu-container');

    switch(menu.style.width){
        
        case'': 
    
            menu.style.width = '272px';
            curtain.classList.add('block')
            setTimeout(()=>{curtain.classList.add('menu-curtain-visible');
            curtain.classList.add('menu-curtain-opacity')},80)
            
            break;
        case '272px':
            curtain.classList.remove('menu-curtain-opacity')
            setTimeout(()=>{curtain.classList.remove('block');curtain.classList.remove('menu-curtain-visible');},500)
            menu.style.width = '0px';
            console.log(menu.style.width);
            break;
        default:
            
            menu.style.width = '272px';
            curtain.classList.add('block')
            setTimeout(()=>{curtain.classList.add('menu-curtain-visible')
            curtain.classList.add('menu-curtain-opacity')},80)
            
            break;;
    }
}