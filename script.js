const form = document.getElementById('birthdayForm');
const birthdayMessage = document.getElementById('birthdayMessage');
const displayName = document.getElementById('displayName');
const animatedTitle = document.getElementById('animatedTitle');

const titleText = "Welcome to the Birthday Page!";
        titleText.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${index * 0.1}s`;
            animatedTitle.appendChild(span);
        });

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;

    displayName.textContent = name;
    form.style.display = 'none';
    birthdayMessage.style.display = 'block';
});

const movableDiv = document.getElementById('movableDiv');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    movableDiv.style.left = `${x}px`;
    movableDiv.style.top = `${y}px`;
}); 