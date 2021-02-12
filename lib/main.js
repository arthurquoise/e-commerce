'use strict';

//Open modal
var addProductButton = document.getElementById('add-product');
var closeAddProduct = document.getElementById('close-addProduct');
[addProductButton, closeAddProduct].forEach(function (button) {
    return button.onclick = function () {
        return openCloseModal();
    };
});
function openCloseModal() {
    var modal = document.getElementById("addProduct");
    modal.classList.toggle('is-active');
}