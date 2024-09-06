// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:

// - O menor valor de faturamento ocorrido em um dia do ano;
// - O maior valor de faturamento ocorrido em um dia do ano;
// - Número de dias no ano em que o valor de faturamento diário foi superior à média anual.

// a) Considerar o vetor já carregado com as informações de valor de faturamento.

// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.

// c) Utilize o algoritmo mais veloz que puder definir.

const faturamento = [ 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030 ];

let menorFaturamento = faturamento[0];
let maiorFaturamento = faturamento[0];
let diasAcimaDaMedia = 0;

for (let i = 0; i < faturamento.length; i++) {
    if (faturamento[i] < menorFaturamento) {
        menorFaturamento = faturamento[i];
    }
    if (faturamento[i] > maiorFaturamento) {
        maiorFaturamento = faturamento[i];
    }
    const media = faturamento.reduce((a, b) => a + b, 0) / faturamento.length;
    if (faturamento[i] > media) {
        diasAcimaDaMedia++;
    }
}

console.log(`Menor faturamento: ${menorFaturamento}`);
console.log(`Maior faturamento: ${maiorFaturamento}`);
console.log(`Dias acima da media: ${diasAcimaDaMedia}`);
console.log(`Total de dias: ${faturamento.length}`);
