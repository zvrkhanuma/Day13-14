var myModal = document.getElementById('modal1');
var modalImg = document.getElementById('modalSlika');
var modalText = document.getElementById('modalTekst');

function showModal(url, text){
  myModal.style.display = "block";
  modalImg.src = url;
  modalText.innerHTML = text;
}

function closeModal(){
  myModal.style.display = "none";
}