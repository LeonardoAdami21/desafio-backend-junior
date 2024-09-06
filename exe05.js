
// 5) Dois veículos, um carro e um caminhão, saem respectivamente de cidades opostas pela mesma rodovia. O carro, de Ribeirão Preto em direção a Barretos, a uma velocidade constante de 90 km/h, e o caminhão, de Barretos em direção a Ribeirão Preto, a uma velocidade constante de 80 km/h. Quando eles se cruzarem no percurso, qual estará mais próximo da cidade de Ribeirão Preto?

// a) Considerar a distância de 125km entre a cidade de Ribeirão Preto <-> Barretos.
// b) Considerar 3 pedágios como obstáculo e que o carro leva 5 minutos a mais para passar em cada um deles, pois ele não possui dispositivo de cobrança de pedágio.
// c)Explique como chegou no resultado.

const dist = 125;
const veloCaminhao = 80;
const veloMicro = 90;
const tempoCaminhao = dist / veloCaminhao;
const tempoMicro = dist / veloMicro;
const tempoTotal = tempoCaminhao + tempoMicro + (5 * 60);

const resultado = (tempoTotal / 60) >= 1 ? `Tempo total: ${Math.round(tempoTotal / 60)}h ${Math.round(tempoTotal % 60)}m` : `Tempo total: ${Math.round(tempoTotal / 60)}m`;
console.log(resultado);

// R: Tempo total: 5h 3m, como cheguei ao resultado fui pegando as informações da distância, convertendo-as e calculando o tempo total.