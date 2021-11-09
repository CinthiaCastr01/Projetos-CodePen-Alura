var listaFilmes = ["Himym", "Friends", "Control Z"];
// Elemento  1   2   3
// Indice   0    1    2

listaFilmes.push("Sex Education");

// Experimente o h1, strong
// document.write("<p>" + listaFilmes[0] + "</p>");
// document.write("<p>" + listaFilmes[1] + "</p>");
// document.write("<p>" + listaFilmes[2] + "</p>");
// document.write("<p>" + listaFilmes[3] + "</p>");

//  valor inicial, condicao, expressao final
for (var indice = 0; indice < 4; indice = indice + 1) {
  document.write("<p>" + listaFilmes[indice] + "<p>");
}
