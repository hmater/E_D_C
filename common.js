

function showScore(p,t,g){
    p=(p/t)*100;
    window.location.assign('../resultados/game_over.html?p='+p+'&g='+g);
}

function loadExit(){
    body=document.getElementsByTagName("body")[0];
    body.style.margin = 0;
    body.style.padding = 0;
    
    score_overlay = document.createElement("div");
    score_overlay.style.position = 'absolute';

    score_overlay.style.color = 'white';
    score_overlay.style.zIndex = 200;
    score_overlay.style.top = 0;
    score_overlay.style.left = 0;
    score_overlay.style.padding = '10px';
    score_overlay.style.fontSize = '20px';
    score_overlay.style.fontFamily = 'system-ui, sans';
    score_overlay.innerText = "Salir";
    score_overlay.onclick =  function(){window.location.assign('../index.html')}
    body.prepend(score_overlay);
}

