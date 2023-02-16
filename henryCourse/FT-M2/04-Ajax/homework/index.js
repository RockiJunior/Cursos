$('#boton').click(() => {
    let list = $('#lista').empty();
    $.get('http://localhost:5000/amigos', (data) => {
        data.map(elem => $('#lista').append('<li>' + elem.name + '</li>'));
        console.log(lista);
    });
});


// con jquery selector, llamo al elemento con id boton, y le agrego un evento que se llama click();
// este evento realiza una funcion; adentro de ésta traigo el elemento lista, y lo seteo en nulo, para que
// cada vez que realize un click, no se acumulen los elementos que traigo.
// traigo la url de donde saco la data.. despues con una funcion, busco con el .map() elem.name,
// valor de la propiedad del objeto, y lo apendeo con el id de #lista, y lo concateno
// con dos etiquetas de formato li, para CADA elemento!!!!

$('#search').click(() => {
    $('#amigo').empty();
    let input = $('#input')[0];
    $.get(`http://localhost:5000/amigos/${input.value}`, (data) => {
        let span = document.getElementById('amigo')
        span.innerHTML = data.name;
    });
});
// me paro en la id search; agrego un evento click; traigo los elementos del input
// creo una ruta con backticks utilizando el input.value.
// me paro en el id amigo, y seteo el valor del nombre del amigo en esa etiqueta.

$('#delete').click(() => {
    let inputDelete = document.getElementById('inputDelete');
    const options = {
        type: 'DELETE',
        url: `http://localhost:5000/amigos/${inputDelete.value}`,
        success: (data) => {
            let list = document.getElementById('lista');
            list.innerHTML = '';
            data.map(elem => $('#lista').append('<li>' + elem.name + '</li>'));
            alert('se borro', data.name);
            console.log(data);
        },
        error: (data) => {
            alert('ERROR', data)
        }
    };
    $.ajax(options);
});