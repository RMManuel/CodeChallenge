document.addEventListener('DOMContentLoaded',async ()=>{
    document.getElementById("enviarBtn").addEventListener("click", function () {
    
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let fechaNacimiento = document.getElementById("fechaNacimiento").value;

        fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    nombre,
                    apellido,
                    fechaNacimiento
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Respuesta del servidor:', data);
                alert('Registro con exito');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al enviar los datos');
            });
    })
})

