export default function footerDOM() {

    const footerObj = document.createElement('footer');
    footerObj.classList.add('footer');
    footerObj.innerHTML =  "<p>Made by <strong>Adam Conner</strong></p>";
    return footerObj;
};