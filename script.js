
const elementos = [
    // Período 1
    [1,"H","Hidrogênio","ametal",1,1],
    [2,"He","Hélio","gas-nobre",18,1],

    // Período 2
    [3,"Li","Lítio","alcalino",1,2],
    [4,"Be","Berílio","alcalino-terroso",2,2],
    [5,"B","Boro","semimetal",13,2],
    [6,"C","Carbono","ametal",14,2],
    [7,"N","Nitrogênio","ametal",15,2],
    [8,"O","Oxigênio","ametal",16,2],
    [9,"F","Flúor","halogenio",17,2],
    [10,"Ne","Neônio","gas-nobre",18,2],

    // Período 3
    [11,"Na","Sódio","alcalino",1,3],
    [12,"Mg","Magnésio","alcalino-terroso",2,3],
    [13,"Al","Alumínio","pos-transicao",13,3],
    [14,"Si","Silício","semimetal",14,3],
    [15,"P","Fósforo","ametal",15,3],
    [16,"S","Enxofre","ametal",16,3],
    [17,"Cl","Cloro","halogenio",17,3],
    [18,"Ar","Argônio","gas-nobre",18,3],

    // Período 4
    [19,"K","Potássio","alcalino",1,4],
    [20,"Ca","Cálcio","alcalino-terroso",2,4],
    [21,"Sc","Escândio","transicao",3,4],
    [22,"Ti","Titânio","transicao",4,4],
    [23,"V","Vanádio","transicao",5,4],
    [24,"Cr","Cromo","transicao",6,4],
    [25,"Mn","Manganês","transicao",7,4],
    [26,"Fe","Ferro","transicao",8,4],
    [27,"Co","Cobalto","transicao",9,4],
    [28,"Ni","Níquel","transicao",10,4],
    [29,"Cu","Cobre","transicao",11,4],
    [30,"Zn","Zinco","transicao",12,4],
    [31,"Ga","Gálio","pos-transicao",13,4],
    [32,"Ge","Germânio","semimetal",14,4],
    [33,"As","Arsênio","semimetal",15,4],
    [34,"Se","Selênio","ametal",16,4],
    [35,"Br","Bromo","halogenio",17,4],
    [36,"Kr","Criptônio","gas-nobre",18,4],

    // Período 5
    [37,"Rb","Rubídio","alcalino",1,5],
    [38,"Sr","Estrôncio","alcalino-terroso",2,5],
    [39,"Y","Ítrio","transicao",3,5],
    [40,"Zr","Zircônio","transicao",4,5],
    [41,"Nb","Nióbio","transicao",5,5],
    [42,"Mo","Molibdênio","transicao",6,5],
    [43,"Tc","Tecnécio","transicao",7,5],
    [44,"Ru","Rutênio","transicao",8,5],
    [45,"Rh","Ródio","transicao",9,5],
    [46,"Pd","Paládio","transicao",10,5],
    [47,"Ag","Prata","transicao",11,5],
    [48,"Cd","Cádmio","transicao",12,5],
    [49,"In","Índio","pos-transicao",13,5],
    [50,"Sn","Estanho","pos-transicao",14,5],
    [51,"Sb","Antimônio","semimetal",15,5],
    [52,"Te","Telúrio","semimetal",16,5],
    [53,"I","Iodo","halogenio",17,5],
    [54,"Xe","Xenônio","gas-nobre",18,5],

    // Período 6
    [55,"Cs","Césio","alcalino",1,6],
    [56,"Ba","Bário","alcalino-terroso",2,6],
    [57,"La","Lantânio","lantanideo",3,6],
    [72,"Hf","Háfnio","transicao",4,6],
    [73,"Ta","Tântalo","transicao",5,6],
    [74,"W","Tungstênio","transicao",6,6],
    [75,"Re","Rênio","transicao",7,6],
    [76,"Os","Ósmio","transicao",8,6],
    [77,"Ir","Irídio","transicao",9,6],
    [78,"Pt","Platina","transicao",10,6],
    [79,"Au","Ouro","transicao",11,6],
    [80,"Hg","Mercúrio","transicao",12,6],
    [81,"Tl","Tálio","pos-transicao",13,6],
    [82,"Pb","Chumbo","pos-transicao",14,6],
    [83,"Bi","Bismuto","pos-transicao",15,6],
    [84,"Po","Polônio","semimetal",16,6],
    [85,"At","Astato","halogenio",17,6],
    [86,"Rn","Radônio","gas-nobre",18,6],

    // Período 7
    [87,"Fr","Frâncio","alcalino",1,7],
    [88,"Ra","Rádio","alcalino-terroso",2,7],
    [89,"Ac","Actínio","actinideo",3,7],
    [104,"Rf","Rutherfórdio","transicao",4,7],
    [105,"Db","Dúbnio","transicao",5,7],
    [106,"Sg","Seabórgio","transicao",6,7],
    [107,"Bh","Bóhrio","transicao",7,7],
    [108,"Hs","Hássio","transicao",8,7],
    [109,"Mt","Meitnério","transicao",9,7],
    [110,"Ds","Darmstádio","transicao",10,7],
    [111,"Rg","Roentgênio","transicao",11,7],
    [112,"Cn","Copernício","transicao",12,7],
    [113,"Nh","Nihônio","pos-transicao",13,7],
    [114,"Fl","Fleróvio","pos-transicao",14,7],
    [115,"Mc","Moscóvio","pos-transicao",15,7],
    [116,"Lv","Livermório","pos-transicao",16,7],
    [117,"Ts","Tenessino","halogenio",17,7],
    [118,"Og","Oganessônio","gas-nobre",18,7],

    // Lantanídeos
    [58,"Ce","Cério","lantanideo",3,8],
    [59,"Pr","Praseodímio","lantanideo",4,8],
    [60,"Nd","Neodímio","lantanideo",5,8],
    [61,"Pm","Promécio","lantanideo",6,8],
    [62,"Sm","Samário","lantanideo",7,8],
    [63,"Eu","Európio","lantanideo",8,8],
    [64,"Gd","Gadolínio","lantanideo",9,8],
    [65,"Tb","Térbio","lantanideo",10,8],
    [66,"Dy","Disprósio","lantanideo",11,8],
    [67,"Ho","Hólmio","lantanideo",12,8],
    [68,"Er","Érbio","lantanideo",13,8],
    [69,"Tm","Túlio","lantanideo",14,8],
    [70,"Yb","Itérbio","lantanideo",15,8],
    [71,"Lu","Lutécio","lantanideo",16,8],

    // Actinídeos
    [90,"Th","Tório","actinideo",3,9],
    [91,"Pa","Protactínio","actinideo",4,9],
    [92,"U","Urânio","actinideo",5,9],
    [93,"Np","Netúnio","actinideo",6,9],
    [94,"Pu","Plutônio","actinideo",7,9],
    [95,"Am","Amerício","actinideo",8,9],
    [96,"Cm","Cúrio","actinideo",9,9],
    [97,"Bk","Berquélio","actinideo",10,9],
    [98,"Cf","Califórnio","actinideo",11,9],
    [99,"Es","Einstênio","actinideo",12,9],
    [100,"Fm","Férmio","actinideo",13,9],
    [101,"Md","Mendelévio","actinideo",14,9],
    [102,"No","Nobélio","actinideo",15,9],
    [103,"Lr","Laurêncio","actinideo",16,9]
];

const tabela = document.getElementById("tabela-periodica");


// ORDEM DE PREENCHIMENTO DOS SUBNÍVEIS
const orbitais = [
    [1, "s", 2], [2, "s", 2],
    [2, "p", 6], [3, "s", 2],
    [3, "p", 6], [4, "s", 2],
    [3, "d", 10], [4, "p", 6],
    [5, "s", 2], [4, "d", 10],
    [5, "p", 6], [6, "s", 2],
    [4, "f", 14], [5, "d", 10],
    [6, "p", 6], [7, "s", 2],
    [5, "f", 14], [6, "d", 10],
    [7, "p", 6]
];

function distribuicaoEletronica(numero) {
    let restante = numero;
    let configuracao = [];

    for (const [nivel, subnivel, capacidade] of orbitais) {
        if (restante <= 0) break;

        const quantidade = Math.min(restante, capacidade);

        configuracao.push(
            `${nivel}${subnivel}${quantidade}`
        );

        restante -= quantidade;
    }

    return configuracao.join(" ");
}

function distribuicaoCamadas(numero) {
    let camadas = {};

    for (let n = 1; n <= 7; n++) {
        camadas[n] = 0;
    }

    let restante = numero;

    for (const [nivel, subnivel, capacidade] of orbitais) {
        if (restante <= 0) break;

        const quantidade = Math.min(restante, capacidade);

        camadas[nivel] += quantidade;
        restante -= quantidade;
    }

    return Object.entries(camadas)
        .filter(([nivel, quantidade]) => quantidade > 0)
        .map(([nivel, quantidade]) => `Camada ${nivel}: ${quantidade}`)
        .join(" | ");
}

// IDENTIFICAÇÃO DAS FAMÍLIAS
const nomesFamilias = {
    "alcalino": "Metais alcalinos",
    "alcalino-terroso": "Metais alcalino-terrosos",
    "transicao": "Metais de transição",
    "pos-transicao": "Metais pós-transição",
    "semimetal": "Semimetais",
    "ametal": "Ametais",
    "halogenio": "Halogênios",
    "gas-nobre": "Gases nobres",
    "lantanideo": "Lantanídeos",
    "actinideo": "Actinídeos"
};

// CRIAÇÃO DOS ELEMENTOS
elementos.forEach(elemento => {
    const [numero, simbolo, nome, familia, coluna, linha] = elemento;

    const bloco = document.createElement("div");

    bloco.classList.add("elemento", familia);

    bloco.style.gridColumn = coluna;
    bloco.style.gridRow = linha;

    bloco.innerHTML = `
        <span class="numero">${numero}</span>
        <strong>${simbolo}</strong>
        <span class="nome">${nome}</span>
    `;

    // INFORMAÇÕES DO ELEMENTO
    bloco.title = `${nome} (${simbolo})`;

    bloco.addEventListener("click", () => {
        const painel = document.getElementById("painel-elemento");
        const detalhes = document.getElementById("detalhes-elemento");

        const periodo = linha <= 7 ? linha : linha - 2;

        let grupo = coluna;

        if (familia === "lantanideo" || familia === "actinideo") {
            grupo = "Série f (associada ao grupo 3)";
        }

        detalhes.innerHTML = `
            <div class="detalhe-topo">
                <p>Número atômico: ${numero}</p>
                <strong>${simbolo}</strong>
                <h2>${nome}</h2>
                <p>${nomesFamilias[familia]}</p>
            </div>

            <div class="informacao">
                <span>Grupo:</span> ${grupo}
            </div>

            <div class="informacao">
                <span>Período:</span> ${periodo}
            </div>

            <div class="informacao">
                <span>Família:</span> ${nomesFamilias[familia]}
            </div>

            <div class="informacao">
                <span>Distribuição eletrônica:</span>
                <p class="configuracao">
                    ${distribuicaoEletronica(numero)}
                </p>
            </div>

            <div class="informacao">
                <span>Distribuição por camadas:</span>
                <p class="configuracao">
                    ${distribuicaoCamadas(numero)}
                </p>
            </div>
        `;

        painel.classList.add("ativo");
    });

    tabela.appendChild(bloco);
});

// FECHAR PAINEL
document.getElementById("fechar-painel")
    .addEventListener("click", () => {
        document.getElementById("painel-elemento")
            .classList.remove("ativo");
    });

// PESQUISAR ELEMENTOS
document.getElementById("pesquisa-elemento")
    .addEventListener("input", (evento) => {
        const busca = evento.target.value.toLowerCase();

        document.querySelectorAll(".elemento").forEach(bloco => {
            const texto = bloco.textContent.toLowerCase();

            bloco.style.opacity = texto.includes(busca) ? "1" : "0.15";
        });
    });
