const defaultImage = document.querySelector('#default-image');
const hiddenImage = document.querySelector('#hidden-image');

function changeImage() {
    defaultImage.classList.add('hidden')
    hiddenImage.classList.remove('hidden')
}

const resetImage = () => {
    defaultImage.classList.remove('hidden')
    hiddenImage.classList.add('hidden')
}

defaultImage.addEventListener('mouseover', changeImage)
hiddenImage.addEventListener('mouseout', resetImage)