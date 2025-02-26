function openModal(imageElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = imageElement.src;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
