
document.addEventListener('DOMContentLoaded', function () {
    const btns = document.querySelectorAll('.categorias button');
    const contProduc = document.querySelector('.cont-produc');

    const cervezasPorCategoria = {
        'Blonde Beer': [
            { nombre: 'Golde apple', imagen: './imagenes/Productos/birrajs1.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' },
            { nombre: 'Golden Shark', imagen: './imagenes/Productos/birrajs2.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' },
            { nombre: 'Golden Melodi', imagen: './imagenes/Productos/birrajs3.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' },
            { nombre: 'Golden four ', imagen: './imagenes/Productos/birrajs4.png', descripcion: 'Nuestra Cerveza Rubia ofrece una experiencia equilibrada, con un cuerpo ligero que permite que los matices de malta y lúpulo' }
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
        tarjeta.classList.add('produc-1','mi-clase-adicional');

        const imagen = document.createElement('img');
        imagen.src = cerveza.imagen;
        imagen.alt = cerveza.nombre;
        imagen.classList.add(`kol-${index}`,'otra-clase-imagen');

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


        //Validacion de formulario

        function enviarFormulario() {
            // Obtener valores de los campos
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            // Validar campos
            if (!nombre || !email || !telefono || !mensaje) {
                alert('Por favor, complete todos los campos.');
                return;
            }

            // Validar formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingrese un correo electrónico válido.');
                return;
            }

            // Almacenar en localStorage
            const formularioData = {
                nombre,
                email,
                telefono,
                mensaje,
            };

            // Convertir a JSON y almacenar
            localStorage.setItem('formularioData', JSON.stringify(formularioData));

            // Notificar éxito
            alert('Formulario enviado correctamente.');

            // Limpiar campos después del envío
            limpiarCampos();
        }

        function limpiarCampos() {
            // Limpiar campos del formulario
            document.getElementById('nombre').value = '';
            document.getElementById('email').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('mensaje').value = '';
        }
