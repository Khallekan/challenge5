const btn = document.getElementById('share');
const social = document.getElementById('social');

const showContent = () => {
    social.classList.toggle('active');
    btn.classList.toggle('svgfill');
}

btn.addEventListener('click', showContent);
