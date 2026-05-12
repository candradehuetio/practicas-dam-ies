let botonTheme = document.getElementById('modoOscuro');
localStorage.setItem('theme', 'claro');

botonTheme.addEventListener('click', () => {
    let body = document.body;

    if (localStorage.getItem('theme') == 'claro') {
        body.style.backgroundColor = 'black';
        botonTheme.innerText = 'Modo Claro';
        localStorage.setItem('theme', 'oscuro')
    } else {
        body.style.backgroundColor = '#DAF0EE';
        botonTheme.innerText = 'Modo Oscuro';
        localStorage.setItem('theme', 'claro');
    }
});
