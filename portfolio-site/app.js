(function(){
var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
function show(id){
tabs.forEach(function(t){var on=t.id===id;t.setAttribute('aria-selected',on);document.getElementById(t.getAttribute('aria-controls')).hidden=!on});
}
tabs.forEach(function(t){t.addEventListener('click',function(){show(t.id);try{history.replaceState(null,'','#'+t.id.slice(2))}catch(e){}})});
var m={exp:'t-exp',gh:'t-gh',sk:'t-sk',cv:'t-cv'};
var h=location.hash.slice(1);if(m[h])show(m[h]);
window.addEventListener('hashchange',function(){var k=location.hash.slice(1);if(m[k])show(m[k])});
})();