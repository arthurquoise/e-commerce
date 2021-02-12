//Open modal
const addProductButton = document.getElementById('add-product');
const closeAddProduct = document.getElementById('close-addProduct');
[addProductButton, closeAddProduct].forEach(button => button.onclick = () => openCloseModal() )
  function openCloseModal(){
      let modal = document.getElementById("addProduct");
      modal.classList.toggle('is-active');
}

