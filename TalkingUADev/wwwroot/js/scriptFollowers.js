let avatars = document.querySelectorAll('.nickname .story img');
avatars.forEach((elem) => {
    if (elem.width > elem.height) {
        elem.style.height = '100%';
    } else if (elem.height >= elem.width) {
        elem.style.width = '100%';
    }
})