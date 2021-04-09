function menuopen() {
    let curtain = document.getElementById('menu-curtain');
    let menu = document.getElementById('menu-container');

    switch (menu.style.width) {

        case '':

            menu.style.width = '272px';
            curtain.classList.add('block')
            setTimeout(() => {
                curtain.classList.add('menu-curtain-visible');
                curtain.classList.add('menu-curtain-opacity')
            }, 80)

            break;
        case '272px':
            curtain.classList.remove('menu-curtain-opacity')
            setTimeout(() => { curtain.classList.remove('block'); curtain.classList.remove('menu-curtain-visible'); }, 500)
            menu.style.width = '0px';
            break;
        default:

            menu.style.width = '272px';
            curtain.classList.add('block')
            setTimeout(() => {
                curtain.classList.add('menu-curtain-visible')
                curtain.classList.add('menu-curtain-opacity')
            }, 80)

            break;;
    }
}
function on() {

    if (!window.matchMedia("(min-width:768px)").matches) {
        
        let busca = document.getElementById('busca-campo');
        let lupa = document.getElementById('lupa');
        let lupacolor =document.getElementById('eixo-icone-busca'); 
        lupacolor.style.color = '#000000';
        lupacolor.style.fill = '#000000';
        lupa.style.right = '222px';
        busca.style.borderRadius = '4px'
        busca.style.padding = '5px 5px 3px 30px';
    }
    if (window.matchMedia("(min-width:768px)").matches) {
        
        let busca = document.getElementById('busca-campo');
        let lupa = document.getElementById('lupa');
        let lupacolor =document.getElementById('eixo-icone-busca'); 
        lupacolor.style.color = '#000000';
        lupacolor.style.fill = '#000000';
        lupa.style.right = '222px';
        busca.style.borderRadius = '4px'
        busca.style.padding = '5px 5px 3px 30px';
    }

}
function off() {

    if (!window.matchMedia("(min-width:768px)").matches) {
        
        let busca = document.getElementById('busca-campo');
        let lupa = document.getElementsByClassName('lupa')[0];
        let lupacolor =document.getElementById('eixo-icone-busca'); 
        lupacolor.style.color = '#fff';
        lupacolor.style.fill = '#fff';
        lupa.style.right = '3px';
        busca.style.borderRadius = '25px'
        busca.style.padding = '0';
    }
    if (window.matchMedia("(min-width:768px)").matches) {
        
        let busca = document.getElementById('busca-campo');
        let lupa = document.getElementsByClassName('lupa')[0];
        let lupacolor =document.getElementById('eixo-icone-busca'); 
        lupacolor.style.color = '#fff';
        lupacolor.style.fill = '#fff';
        lupa.style.right = '132px';
        busca.style.borderRadius = '4px'
        busca.style.padding = '5px 5px 3px 30px';
    }

}
window.onload = () => {

    if (window.matchMedia("(min-width:768px)").matches) {
        let busca = document.getElementById('busca-campo');

        busca.setAttribute('placeholder', 'BUSCAR');
    }


}
window.onresize = () => {
    if (window.matchMedia("(min-width:768px)").matches) {
        let busca = document.getElementById('busca-campo');
        let lupa = document.getElementsByClassName('lupa')[0];
        let lupacolor =document.getElementById('eixo-icone-busca'); 
        lupacolor.style.color = '#fff';
        lupacolor.style.fill = '#fff';
        lupa.style.right = '132px';
        busca.setAttribute('placeholder', 'BUSCAR');
        busca.style.padding = '5px 5px 3px 30px';
        busca.style.borderRadius = '4px'
    }
    if (!window.matchMedia("(min-width:768px)").matches) {
        let busca = document.getElementById('busca-campo');
        let lupa = document.getElementsByClassName('lupa')[0];
        let lupacolor =document.getElementById('eixo-icone-busca'); 
        lupacolor.style.color = '#fff';
        lupacolor.style.fill = '#fff';
        lupa.style.right = '3px';
        busca.style.borderRadius = '25px'
        busca.style.padding = '0';
        busca.setAttribute('placeholder', '');
    }
}






