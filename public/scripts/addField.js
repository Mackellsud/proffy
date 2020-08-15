document.querySelector('#add-time')
.addEventListener('click', cloneField)


function cloneField() {

    // Duplicar os campos. Qual campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // limpa os campos. Qual campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Captura o field do momento e limpa.
        field.value = ""
    })

    // Colocar na página. Qual página?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}