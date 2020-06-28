# Jogo Mercado Descentralizado

## Regras

Jogo de periodo indeterminado.

Os jogadores avancam em posicoes. A quantidade de posicoes a serem avancadas eh determinada pelo ultima posicao do hash do ultimo bloco minerado no Ethereum dividido por 2 arredondados para cima. Como os hashes sao representados em numeros hexadecimais, a conversao para decimais eh necessaria para o calculo. A conversao deve ser feita assim: 0=10, a=11, b=12, c=13, d=14, e=15, f=15  |   Exemplos para o calculo: 1/2 = 0.5 -> 1 posicao a ser avancada  ou e/2 = 7.5 -> 8 posicoes a serem avancadas.

Cada jogador ganha da Rede 2 ethers ao iniciar o jogo e 1 ether como dividendos do Pool de Emprestimos ao passar por todas as posicoes e reiniciar o ciclo de investimentos.

Jogadores inicialmente compram as posicoes da Rede. Ha precos minimos para cada posicao. Os precos sao definidos pela Rede.

O jogador ao cair em uma posicao pode fazer uma oferta ao dono da posicao.

Caso o jogador acesse uma posicao que ja possui um dono - que nao a rede - ele deve pagar uma taxa pelo "aluguel" daquela posicao. O preco do aluguel eh: quantidade de posicoes avancadas multimplicadas pela taxa de aluguel daquela posicao. A taxa de aluguel eh definida previamente pela Rede.

Publicado inicialmente em 16/01/2020

## Autoria

Jeff Prestes e Mateus Prestes

## Licença

Creative Commons Atribuição-CompartilhaIgual 4.0 Internacional (CC BY-SA 4.0)

https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR
```