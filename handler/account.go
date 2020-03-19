package handler

import (
	"net/http"

	"github.com/jeffprestes/mercadodescentralizadohtml5/lib/contx"
)

//GenerateEthereumPrivateKey generates a string to be imported at Metamask to create a new Ethereum Account
func GenerateEthereumPrivateKey(ctx *contx.Context) {

	ctx.JSON(http.StatusOK, "qwertyuiopqwertyuiopqwertyuiop12")
}
