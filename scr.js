
document.addEventListener('DOMContentLoaded', function () {
    const btns = document.querySelectorAll('.categorias button');
    const contProduc = document.querySelector('.cont-produc');

    const cervezasPorCategoria = {
        'Blonde Beer': [
            { nombre: 'Cerveza1', imagen: './imagenes/Productos/birrajs1.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' },
            { nombre: 'Cerveza2', imagen: './imagenes/Productos/birrajs2.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' },
            { nombre: 'Cerveza3', imagen: './imagenes/Productos/birrajs3.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' },
            { nombre: 'Cerveza4', imagen: './imagenes/Productos/birrajs4.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' }
        ],
        'Ipa Beer': [
            { nombre: 'Cerveza5', imagen: './imagenes/Productos/birrajs4.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' },
            { nombre: 'Cerveza6', imagen: './imagenes/Productos/birrajs3.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' },
            { nombre: 'Cerveza7', imagen: './imagenes/Productos/birrajs2.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' },
            { nombre: 'Cerveza8', imagen: './imagenes/Productos/birrajs1.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' }
        ],
        'Black Beer': [
            { nombre: 'Cerveza9', imagen: './imagenes/Productos/birrajs1.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' },
            { nombre: 'Cerveza10', imagen: './imagenes/Productos/birrajs2.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' },
            { nombre: 'Cerveza11', imagen: './imagenes/Productos/birrajs1.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' },
            { nombre: 'Cerveza12', imagen: './imagenes/Productos/cerveza12.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' }
        ],
        'Amber Beer': [
            { nombre: 'Cerveza13', imagen: './imagenes/Productos/cerveza13.png', descripcion: 'Descripción 13' },
            { nombre: 'Cerveza14', imagen: './imagenes/Productos/cerveza14.png', descripcion: 'Descripción 14' },
            { nombre: 'Cerveza15', imagen: './imagenes/Productos/cerveza15.png', descripcion: 'Descripción 15' },
            { nombre: 'Cerveza16', imagen: './imagenes/Productos/cerveza16.png', descripcion: 'Descripción 16' }
        ],
    };

    btns.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            const categoria = btn.textContent;
            const cervezasFiltradas = cervezasPorCategoria[categoria];

            contProduc.innerHTML = '';

            if (cervezasFiltradas) {
                cervezasFiltradas.forEach(cerveza => {
                    renderizarTarjeta(cerveza, index + 1);
                });
            } else {
                contProduc.innerHTML = `<p>No se encontraron cervezas en la categoría ${categoria}.</p>`;
            }
        });
    });

    function renderizarTarjeta(cerveza, index) {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('produc-1');

        const imagen = document.createElement('img');
        imagen.src = cerveza.imagen;
        imagen.alt = cerveza.nombre;
        imagen.classList.add(`kol-${index}`);

        const titulo = document.createElement('h6');
        titulo.textContent = cerveza.nombre;

        const parrafo = document.createElement('p');
        parrafo.textContent = cerveza.descripcion;

        const boton = document.createElement('button');
        boton.textContent = 'Comprar';

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(parrafo);
        tarjeta.appendChild(boton);

        contProduc.appendChild(tarjeta);
    }
});
