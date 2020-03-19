var provider = ethers.getDefaultProvider()
var lastBlockNumber = "z"

function pegaHash() {
    console.log("chamado pegaHash")
    $("#cardhash").hide()
    $("#cardbump").hide()
    $("#carddump").hide()
    $("#gerarconta").hide()    
    $("#aguardehash").show()
    $("#btnBuscarHash").removeClass( "btn-primary" ).addClass( "btn-light" );
    $("#btnBuscarHash").prop("disabled", true)
    provider.getBlockNumber().then((blockNumber) => {
        provider.getBlock(blockNumber).then((block) => {
            if (block.number == lastBlockNumber) {
                setTimeout(function() { 
                    pegaHash()
                }, 15000)
                return
            }
            lastBlockNumber = block.number
            $("#cardhashavance").text("Avance "+calculaAvanco(block.hash))
            $("#cardhashbloco").text("Bloco "+block.number)
            $("#cardhashtexto").text(block.hash)
            $("#cardhash").show()
            $("#btnBuscarHash").removeClass( "btn-light" ).addClass( "btn-primary" );
            $("#btnBuscarHash").prop("disabled", false)
            $("#aguardehash").hide()
        });
    });
}

function calculaAvanco(hash) {
    let ultimoDigito = hash.charAt(hash.length-1).toLowerCase()
    if ((ultimoDigito == "1") || (ultimoDigito == "2")) {
        return 1
    } else if ((ultimoDigito == "3") || (ultimoDigito == "4")) {
        return 2
    } else if ((ultimoDigito == "5") || (ultimoDigito == "6")) {
        return 3
    } else if ((ultimoDigito == "7") || (ultimoDigito == "8")) {
        return 4
    } else if ((ultimoDigito == "9") || (ultimoDigito == "0")) {
        return 5
    } else if ((ultimoDigito == "a") || (ultimoDigito == "b")) {
        return 6
    } else if ((ultimoDigito == "c") || (ultimoDigito == "d")) {
        return 7
    } else if ((ultimoDigito == "e") || (ultimoDigito == "f")) {
        return 8
    }  
}
