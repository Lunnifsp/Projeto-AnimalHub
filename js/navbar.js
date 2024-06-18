window.addEventListener('resize', function(){
    document.getElementById('menu').style.display = 'none';
});

function exibeMenu(){
    let menu = document.getElementById('menu');
    let menuDisplay = document.getElementById('menu').style.display;
    
    if (menuDisplay == "none" || menuDisplay == ""){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function submitForm(idInputText){
    let textSearch = document.getElementById(idInputText).value;
    alert('Você pesquisou ' + textSearch);
}