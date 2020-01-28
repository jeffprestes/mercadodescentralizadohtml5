function pegaCard() {
    setTimeout(escolheCard, 2000);      
    exibeAguarde()
}

function exibeAguarde() {
    $("#aguarde").show()
    $("#cardbump").hide()
    $("#carddump").hide()
}

function escolheCard() {
    let cardIndex = Math.floor(Math.random() * 24)      
    let card = cards[cardIndex]
    console.log(cardIndex, card)
    if (card.tipo==='Bump') {
        preparaCardBump(card)    
    } else {
        preparaCardDump(card)    
    }
    $("#aguarde").hide()
}

function preparaCardBump(card) {
    $("#cardbumpdescricao").text(card.descricao)
    if (card.valor>0) {
        $("#cardbumpvalor").text("Receba " + card.valor)
    } else {
        $("#cardbumpvalor").text("")
    }
    $("#cardbump").show("slow")
}

function preparaCardDump(card) {
    $("#carddumpdescricao").text(card.descricao)
    if (card.valor>0) {
        $("#carddumpvalor").text("Pague " + card.valor)
    } else {
        $("#carddumpvalor").text("")
    }
    $("#carddump").show("slow")
}