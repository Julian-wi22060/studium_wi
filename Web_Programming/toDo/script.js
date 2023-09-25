window.onload = init;
function init(){
  document.getElementById('add').onclick = add;
}
function add(){
  var el = document.getElementById('list');
  var node = document.createElement("li");
  var link = document.createElement("a");
  link.setAttribute('href', 'www.google.it');
  link.innerHTML = "link";
  node.appendChild(link);
  el.appendChild(node);
}