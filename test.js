// -------------------------------li menu-----------------------------
var li=document.querySelectorAll('.List1');
function Listes_chenge(){
    li.forEach(s=>s.classList.remove('activeListePanel'));
    this.classList.add('activeListePanel');
}
li.forEach(s=>s.addEventListener('click',Listes_chenge));



// -------------------------------CHERCHER----------------------





// -------------------------------button de type (3)------------
var btn_types=document.querySelectorAll('.btn-type');
function btn_active_chenge(){
    btn_types.forEach(s=>s.classList.remove('btn-active'));
    this.classList.add('btn-active');
}
btn_types.forEach(s=>s.addEventListener('click',btn_active_chenge));

// ------------------------------------------------------------



