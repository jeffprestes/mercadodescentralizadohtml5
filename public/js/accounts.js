function gerarConta() {
    console.log("chamado gerarConta")
    $("#cardhash").hide()
    $("#cardbump").hide()
    $("#carddump").hide()
    $("#gerarconta").hide()    
    $("#aguardegerarconta").show()
    $("#btnGerarConta").removeClass( "btn-primary" ).addClass( "btn-light" );
    $("#btnGerarConta").prop("disabled", true)
    $.get("/account/new", function(data, status) {
        console.log("gerarConta", "/account/new", "Data: " + data + "\nStatus: " + status);
        if (status==="success") {
            $("#gerarcontadescricao").text(data)
            $("#gerarconta").show()             
        } 
        $("#btnGerarConta").removeClass( "btn-light" ).addClass( "btn-primary" );
        $("#btnGerarConta").prop("disabled", false)  
        $("#aguardegerarconta").hide()
    });
}

function fecharGerarConta() {
    $("#btnGerarConta").removeClass( "btn-light" ).addClass( "btn-primary" );
    $("#btnGerarConta").prop("disabled", false)  
    $("#aguardegerarconta").hide()
    $("#gerarcontadescricao").text("")
    $("#gerarconta").hide()   
}