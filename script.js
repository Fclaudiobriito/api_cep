const findEstado = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => (a.nome > b.nome) ? 1: -1)
            
            let estados = ''
            data.forEach(e => estados += `<option value=${e.sigla}>${e.nome}</option>`);
            //console.log(estados)

            uf.innerHTML = estados;

            })

        }

findEstado()

const findCep = () => { 
    let cepValue = cep.value
    console.log(cepValue)
    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then(response => response.json())
        .then(json => {
            preencheInput(json)

        })
}

const preencheInput = json => {
    numero.focus()
    logradouro.value = json.logradouro
    bairro.value = json.bairro
    uf.value = json.uf
    localidade.value = json.localidade
}