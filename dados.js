let classesRPG = [
    {
        nome: "Guerreiro",
        descricao: "O guerreiro é um mestre em combate corpo a corpo, usando armaduras pesadas e armas poderosas para enfrentar seus inimigos de frente.",
        habilidades: "Força, Defesa, Resistência",
    },
    {
        nome: "Mago",
        descricao: "O Mago controla os elementos para conjurar poderosas magias à distância, porém sua defesa física é restrita.",
        habilidades: "Inteligência, Magia, Controle Elemental",
    },
    {
        nome: "Arqueiro",
        descricao: "O arqueiro é um especialista em combate à distância, usando arcos e flechas para atacar com precisão e velocidade.",
        habilidades: "Agilidade, Precisão, Furtividade",
    },
    {
        nome: "Paladino",
        descricao: "O paladino é um guerreiro sagrado que combina combate corpo a corpo com magias divinas para proteger seus aliados.",
        habilidades: "Força, Fé, Cura",
    },
    {
        nome: "Ladino",
        descricao: "O ladino é um mestre em furtividade e engano, especializado em ataques rápidos e silenciosos.",
        habilidades: "Agilidade, Furtividade, Engano",
    },
    {
        nome: "Necromante",
        descricao: "O necromante controla os mortos e utiliza magias sombrias para enfraquecer e destruir seus inimigos.",
        habilidades: "Necromancia, Invocação, Magia Sombria",
    },
    {
        nome: "Bárbaro",
        descricao: "O bárbaro é um combatente ancestral, reconhecido por sua tremenda força e sua fúria durante os combates, lançando-se em ataques com intensa ferocidade.",
        habilidades: "Força Bruta, Resistência, Fúria",
    },
    {
        nome: "Feiticeiro",
        descricao: "O feiticeiro é um mestre das artes arcanas, capaz de conjurar feitiços poderosos e manipular a magia para criar efeitos impressionantes.",
        habilidades: "Magia Arcana, Conjuração, Inteligência",
    },
    {
        nome: "Druida",
        descricao: "O druida é um guardião da natureza, capaz de se transformar em animais e utilizar magias naturais para proteger o mundo selvagem.",
        habilidades: "Transformação, Magia Natural, Conexão com a Natureza",
    },
    {
        nome: "Monge",
        descricao: "O monge se destaca como um especialista em artes marciais, preparado para batalhar utilizando suas mãos e pés, além de direcionar sua energia interior para realizar feitos surpreendentes.",
        habilidades: "Artes Marciais, Disciplina, Energia Interior",
    },
    {
        nome: "Invocador",
        descricao: "O invocador tem a habilidade de chamar criaturas e entidades de outros planos para ajudá-lo em batalha.",
        habilidades: "Invocação, Controle de Criaturas, Magia Elemental",
    },
    {
        nome: "Caçador",
        descricao: "O caçador é um especialista em rastreamento e armadilhas, utilizando seu conhecimento da natureza para capturar ou eliminar suas presas.",
        habilidades: "Rastreamento, Armas de Fogo, Armadilhas",
    },
    {
        nome: "Cavaleiro",
        descricao: "O cavaleiro é um defensor nobre, montado em seu fiel corcel e equipado com armaduras pesadas para proteger e liderar os aliados em batalha.",
        habilidades: "Cavalaria, Defesa, Liderança",
    },
    {
        nome: "Bardo",
        descricao: "O bardo usa sua música e encanto para inspirar aliados e desorientar inimigos, misturando magia e habilidades de entretenimento.",
        habilidades: "Música, Encantamento, Magia de Suporte",
    },
    {
        nome: "Sombra",
        descricao: "A sombra é um mestre da furtividade e dos ataques surpresa, movendo-se entre as sombras para desferir ataques fatais.",
        habilidades: "Furtividade, Ataques Surpresa, Agilidade",
    },
    {
        nome: "Engenheiro",
        descricao: "O engenheiro utiliza tecnologia e invenções para criar dispositivos e armamentos únicos que podem mudar o curso da batalha.",
        habilidades: "Tecnologia, Inventiva, Engenharia de Guerra",
    },
    {
        nome: "Xamã",
        descricao: "O xamã é um sábio espiritual que utiliza rituais e magias ancestrais para manipular o ambiente e invocar espíritos.",
        habilidades: "Rituais, Invocação Espiritual, Magia Ancestral",
    },
    {
        nome: "Místico",
        descricao: "O místico é um estudioso dos mistérios e do oculto, capaz de desvendar segredos e utilizar poderes sobrenaturais.",
        habilidades: "Ocultismo, Desvendar Segredos, Poderes Sobrenaturais",
    },
    {
        nome: "Samurai",
        descricao: "O samurai é um guerreiro honrado que segue um código de conduta rigoroso, especializado no uso de espadas e no combate disciplinado.",
        habilidades: "Espadas, Disciplina, Honra",
    },
    {
        nome: "Alquimista",
        descricao: "O alquimista utiliza seu conhecimento de poções e transmutações para criar substâncias e artefatos mágicos.",
        habilidades: "Poções, Transmutação, Química Arcana",
    },
    {
        nome: "Pistoleiro",
        descricao: "O pistoleiro é um mestre do combate à distância, usando pistolas e outras armas de fogo com precisão mortal.",
        habilidades: "Armas de Fogo, Precisão, Reflexos Rápidos",
    },
    {
        nome: "Caçador de Demônios",
        descricao: "Especializado em eliminar criaturas infernais, o caçador de demônios usa habilidades sagradas e profanas para derrotar forças do mal.",
        habilidades: "Exorcismo, Agilidade, Armas Anti-demoníacas",
    },
    {
        nome: "Pirata",
        descricao: "O pirata é um aventureiro dos mares, capaz de lutar tanto em terra quanto no mar, com habilidades de navegação e combate.",
        habilidades: "Navegação, Espadas, Táticas Navais",
    },
    {
        nome: "Berseker",
        descricao: "O berseker entra em um estado de fúria incontrolável durante a batalha, atacando com força bruta e descuido próprio.",
        habilidades: "Fúria, Força, Resistência ao Medo",
    },
    {
        nome: "Ilusionista",
        descricao: "O ilusionista usa magia para criar ilusões visuais e auditivas, confundindo e enganando seus inimigos.",
        habilidades: "Ilusões, Manipulação Mental, Magia de Engano",
    },
    {
        nome: "Mecânico",
        descricao: "O mecânico é especialista em criar e consertar máquinas, utilizando sua expertise para construir engenhocas em combate.",
        habilidades: "Engenharia, Robótica, Reparos Rápidos",
    },
    {
        nome: "Sentinela",
        descricao: "O sentinela é um defensor implacável, treinado para guardar locais sagrados e proteger seus aliados com uma defesa impenetrável.",
        habilidades: "Defesa, Vigilância, Proteção de Aliados",
    },
    {
        nome: "Vampiro",
        descricao: "O vampiro utiliza sua imortalidade e habilidades sombrias para drenar a vida de seus inimigos e controlar a escuridão.",
        habilidades: "Drenar Vida, Força Sobrenatural, Manipulação das Sombras",
    },
    {
        nome: "Elementalista",
        descricao: "O elementalista canaliza o poder dos quatro elementos, utilizando fogo, água, terra e ar para devastar seus inimigos.",
        habilidades: "Controle Elemental, Invocação de Elementos, Magia Natural",
    },
    {
        nome: "Ninja",
        descricao: "O ninja é um guerreiro ágil e silencioso, especialista em assassinatos furtivos e técnicas de combate dissimuladas.",
        habilidades: "Furtividade, Agilidade, Armas Ninja",
    },
    {
        nome: "Psíquico",
        descricao: "O psíquico usa poderes mentais para manipular objetos e pessoas à distância, além de ler mentes e prever movimentos inimigos.",
        habilidades: "Telecinese, Leitura Mental, Precognição",
    },
    {
        nome: "Corsário",
        descricao: "O corsário é um pirata sancionado pelo governo, lutando por riquezas e glória em batalhas navais.",
        habilidades: "Combate Naval, Espadas, Intimidação",
    },
    {
        nome: "Guarda Florestal",
        descricao: "O guarda florestal protege as fronteiras naturais, utilizando suas habilidades em rastreamento e conhecimento da fauna e flora.",
        habilidades: "Rastreamento, Conhecimento de Animais, Armas Leves",
    },
    {
        nome: "Taverneiro",
        descricao: "O taverneiro usa suas habilidades de manipulação e rede de contatos para influenciar acontecimentos e obter vantagens estratégicas.",
        habilidades: "Manipulação, Negociação, Liderança Comunitária",
    },
    {
        nome: "Arcanista",
        descricao: "O arcanista estuda as profundezas da magia arcana para realizar rituais complexos e desvendar segredos universais.",
        habilidades: "Rituais Arcanos, Pesquisa Mágica, Conjuração Poderosa",
    },
    {
        nome: "Templário",
        descricao: "O templário é um defensor sagrado da fé, combinando habilidades de combate e proteção divina.",
        habilidades: "Força Divina, Defesa, Magia Sagrada",
    },
    {
        nome: "Mestre de Feras",
        descricao: "O mestre de feras comanda animais selvagens em combate, utilizando suas criaturas para atacar e defender.",
        habilidades: "Domínio Animal, Conexão com a Natureza, Combate com Feras",
    },
    {
        nome: "Artífice",
        descricao: "O artífice é um inventor que utiliza materiais mágicos e mecânicos para criar equipamentos e artefatos poderosos.",
        habilidades: "Invenção, Engenharia Mágica, Criação de Artefatos",
    },
    {
        nome: "Domador de Dragões",
        descricao: "O domador de dragões é uma elite que treina e monta dragões para o combate, tornando-se uma força destrutiva nos céus.",
        habilidades: "Montaria de Dragões, Controle de Feras, Combate Aéreo",
    },
    {
        nome: "Espadachim",
        descricao: "O espadachim é um duelista habilidoso com lâminas, usando velocidade e precisão em combate.",
        habilidades: "Espadas, Agilidade, Reflexos",
    },
    {
        nome: "Andarilho",
        descricao: "O andarilho viaja pelo mundo, aprendendo diferentes culturas e técnicas de combate e sobrevivência.",
        habilidades: "Sobrevivência, Conhecimento Cultural, Adaptabilidade",
    },
    {
        nome: "Necromante das Sombras",
        descricao: "Um necromante especializado em controlar sombras e invocar criaturas sombrias para lutar por ele.",
        habilidades: "Magia Sombria, Invocação de Sombras, Controle de Mortos-vivos",
    },
    {
        nome: "Caçador de Recompensas",
        descricao: "O caçador de recompensas rastreia e captura seus alvos com precisão e habilidade mortais.",
        habilidades: "Rastreamento, Armas de Fogo, Combate à Distância",
    },
    {
        nome: "Sacerdote",
        descricao: "O sacerdote utiliza sua fé para curar aliados e lançar bênçãos que protegem contra o mal.",
        habilidades: "Cura, Bênçãos, Proteção Divina",
    },
    {
        nome: "Ciborgue",
        descricao: "O ciborgue é uma fusão de ser humano e máquina, utilizando tecnologia avançada para melhorar suas capacidades físicas e mentais.",
        habilidades: "Tecnologia Avançada, Força Melhorada, Resistência",
    },
    {
        nome: "Fantasma",
        descricao: "O fantasma pode se tornar intangível e atravessar objetos, além de possuir uma forte conexão com o plano espiritual.",
        habilidades: "Intangibilidade, Assombração, Magia Espiritual",
    }
];
