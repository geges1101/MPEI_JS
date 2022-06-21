select.onchange = function(e){
    var elem = e ? e.target : window.event.target;
    document.body.style.backgroundColor = elem.value;
  }
select1.onchange = function(t){
    var elem = t ? t.target : window.event.target;
    document.body.style.color = elem.value;
}
select2.onchange = function(s){
    var elem = s ? s.target : window.event.target;
    document.body.style.fontSize = elem.value;
}
select3.onchange = function(h){
    var elem = h ? h.target : window.event.target;
    if(elem.value == "small") window.resizeTo(300, window.innerHeight);
    if(elem.value == "medium") window.resizeTo(600, window.innerHeight);
    if(elem.value == "large") window.resizeTo(900, window.innerHeight);
}

select4.onchange = function(w){
    var elem = w ? w.target : window.event.target;
    if(elem.value == "small") window.resizeTo(window.innerWidth, 250);
    if(elem.value == "medium") window.resizeTo(window.innerWidth, 400);
    if(elem.value == "large") window.resizeTo(window.innerWidth, 750);
}