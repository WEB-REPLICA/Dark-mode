const selectElement=(element)=>document.querySelector(element);
selectElement('.mode').addEventListener('click',()=>{
  selectElement('section').classList.toggle('active');
});