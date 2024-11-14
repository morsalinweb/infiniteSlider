const images = document.querySelectorAll('#imageContainer img');
const containerWidth = window.innerWidth;
const speed = 2;

let totalWidth = 0;
images.forEach(img => {
    totalWidth += img.width + parseFloat(getComputedStyle(img).marginRight) * 2;
});

images.forEach((img, index) => {
    img.style.left = containerWidth + index * (img.width + 40) + 'px';
});

function animate() {
    images.forEach((img) => {
        let currentPos = parseFloat(img.style.left);

        currentPos -= speed;
        img.style.left = currentPos + 'px';

        if (currentPos < -img.width) {
            img.style.left = currentPos + totalWidth + 'px';
        }
    });

    requestAnimationFrame(animate);
}

animate();