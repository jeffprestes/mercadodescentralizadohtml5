package handler

import "github.com/jeffprestes/mercadodescentralizadohtml5/lib/contx"

import "net/http"

//Index redireciona a pagina principal
func Index(ctx *contx.Context) {
	ctx.NativeHTML(http.StatusOK, "index")
}
