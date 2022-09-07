// alert('Olá!')

function carregar() {
    var msg = document.getElementById('msg')
    var bom = document.getElementById('bom')
    var data = new Date()
    // para teste
    //var hora = 19
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora > 0 && hora < 12) {
        // bom dia
        document.body.style.background = '#f0d281'
        bom.innerHTML = 'Bom Dia!'
    } else if (hora > 12 && hora < 18) {
        // boa tarde
        document.body.style.background = '#bd854d'
        bom.innerHTML = 'Boa Tarde!'
    } else {
        // boa noite
        document.body.style.background = '#0c0f2b'
        bom.innerHTML = 'Boa Noite!'
    }
}
