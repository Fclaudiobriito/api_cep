const findEstado = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => response.json())
        .then(json => {
            //console.log(json)
            let inputEstado = document.getElementById('estado')

            json.forEach(estado => {
                console.log(estado)
            })

        })
    }

findEstado()