
let animationCount = 0;


function animateBox(boxElement) {
    animationCount++; 
    boxElement.classList.add("animate");

    
    setTimeout(() => {
        boxElement.classList.remove("animate");
    }, 1000);

    return animationCount; 
}


function toggleModal(modal, show) {
    if (show) {
        modal.style.display = "flex";
    } else {
        
        const content = modal.querySelector(".modal-content");
        content.style.animation = "slideOut 0.5s forwards";
        setTimeout(() => {
            modal.style.display = "none";
            content.style.animation = "slideIn 0.5s forwards"; 
        }, 500);
    }
}


document.getElementById("animateBoxBtn").addEventListener("click", () => {
    const box = document.querySelector(".box");
    const count = animateBox(box); 
    console.log(`Box animated ${count} times`);
});

const modal = document.getElementById("modal");
document.getElementById("openModalBtn").addEventListener("click", () => toggleModal(modal, true));
document.getElementById("closeModalBtn").addEventListener("click", () => toggleModal(modal, false));
