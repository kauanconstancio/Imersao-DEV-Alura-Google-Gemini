let dados = [
    {
        banner : "../assets/banners/bo6-banner.jpg",
        nome : "Call of Duty Black Ops 6",
        descricao : "Call of Duty: Black Ops 6 é o próximo jogo eletrônico de tiro em primeira pessoa desenvolvido pela Treyarch e Raven Software e publicado pela Activision. Será o sétimo título da série Black Ops e o vigésimo primeiro da série Call of Duty, servindo como uma sequência de Call of Duty: Black Ops Cold War.",
        lancamento : "<span>Data de Lançamento:</span> 25 de outubro de 2024",
        genero : "<span>Gênero:</span> Tiro em primeira pessoa",
        estudios : "<span>Estúdios:</span> Actvision, Actvision Blizzard",
        link : "https://store.steampowered.com/app/2933620/Call_of_Duty_Black_Ops_6/"
    },
    {
        banner : "../assets/banners/bo-cw.jpeg",
        nome : "Call of Duty Black Ops Cold War",
        descricao : "Call of Duty: Black Ops Cold War é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Treyarch e Raven Software e publicado pela Activision. É o quinto jogo da série Black Ops, e o décimo sétimo jogo da série Call of Duty ao todo.",
        lancamento : "<span>Data de lançamento:</span> 13 de novembro de 2020",
        genero : "<span>Gênero:</span> Tiro em primeira pessoa",
        estudios : "<span>Estúdios</span>: Actvision",
        link : "https://store.steampowered.com/app/1985810/Call_of_Duty_Black_Ops_Cold_War/"
    },
    {
        banner: "../assets/banners/doom-eternal.jpeg",
        nome: "Doom Eternal",
        descricao: "Um shooter frenético com combate visceral e demônios implacáveis.",
        lancamento: "<span>Data de lançamento:</span> 20 de março de 2020",
        genero: "<span>Gênero: </span>Tiro em Primeira Pessoa",
        estudios: "<span>Estúdios:</span> id Software",
        link : "https://store.steampowered.com/app/782330/DOOM_Eternal/"
    },
    {
        banner: "../assets/banners/half-life.webp",
        nome: "Half-Life 2",
        descricao: "Um marco nos jogos de FPS, com uma história envolvente e jogabilidade inovadora.",
        lancamento: "<span>Data de lançamento:</span> 16 de novembro de 2004",
        genero: "<span>Gênero: </span>Tiro em Primeira Pessoa",
        estudios: "<span>Estúdios:</span> Valve Corporation",
        link : "https://store.steampowered.com/app/220/HalfLife_2/"
    },
    {
        banner: "../assets/banners/overwatch.jpeg",
        nome: "Overwatch",
        descricao: "Um jogo de tiro em equipe com personagens coloridos e habilidades únicas.",
        lancamento: "<span>Data de lançamento:</span> 4 de outubro de 2022",
        genero: "<span>Gênero: </span>Tiro em Primeira Pessoa",
        estudios: "<span>Estúdios:</span> Blizzard Entertainment",
        link : "https://store.steampowered.com/app/2357570/Overwatch_2/"
    },
    {
        banner: "../assets/banners/apex-legends.jpg",
        nome: "Apex Legends",
        descricao: "Um battle royale frenético com um sistema de classes e habilidades únicas.",
        lancamento: "<span>Data de lançamento:</span> 4 de fevereiro de 2019",
        genero: "<span>Gênero: </span>Tiro em Primeira Pessoa",
        estudios: "<span>Estúdios:</span> Respawn Entertainment",
        link : "https://store.steampowered.com/app/1172470/Apex_Legends/"
    },
    {
        banner: "../assets/banners/valorant.jpg",
        nome: "Valorant",
        descricao: "Um jogo tático de equipe com personagens únicos e habilidades baseadas em agentes.",
        lancamento: "<span>Data de lançamento:</span> 2 de junho de 2020",
        genero: "<span>Gênero: </span>Tiro em Primeira Pessoa",
        estudios: "<span>Estúdios:</span> Riot Games",
        link : "https://playvalorant.com/pt-br/download/"
    },
    {
        banner: "../assets/banners/battlefield-2042.jpg",
        nome: "Battlefield 2042",
        descricao: "Um jogo de tiro em primeira pessoa com batalhas em grande escala e mapas dinâmicos.",
        lancamento: "<span>Data de lançamento:</span> 19 de novembro de 2021",
        genero: "<span>Gênero: </span>Tiro em Primeira Pessoa",
        estudios: "<span>Estúdios:</span> DICE",
        link : "https://store.steampowered.com/app/1517290/Battlefield_2042/"
    },
    {
        banner: "../assets/banners/titanfall-2.png",
        nome: "Titanfall 2",
        descricao: "Um shooter rápido e fluido com parkour e mechs gigantes.",
        lancamento: "<span>Data de lançamento:</span> 28 de outubro de 2016",
        genero: "G<span>ênero: </span>Tiro em Primeira Pessoa",
        estudios: "<span>Estúdios:</span> Respawn Entertainment",
        link : "https://store.steampowered.com/app/1237970/Titanfall_2/"
    },
    {
        banner: "../assets/banners/mw2.jpg",
        nome: "Call of Duty: Modern Warfare II",
        descricao: "Um reboot da icônica franquia, com um modo campanha intenso e um multiplayer competitivo.",
        lancamento: "<span>Data de lançamento:</span> 28 de outubro de 2022",
        genero: "<span>Gênero: </span>Tiro em Primeira Pessoa",
        estudios: "<span>Estúdios:</span> Infinity Ward",
        link : "https://store.steampowered.com/app/1962660/Call_of_Duty_Modern_Warfare_II/"
    },
    {
        banner : "../assets/banners/legends-of-zelda.webp",
        nome : "The Legend of Zelda: Breath of the Wild",
        descricao : "The Legend of Zelda: Breath of the Wild é um jogo eletrônico de ação-aventura desenvolvido pela Nintendo Entertainment Planning & Development e publicado pela Nintendo. É o décimo nono título da série The Legend of Zelda e foi lançado mundialmente para Wii U e Nintendo Switch.",
        lancamento : "<span>Data de lançamento:</span> 3 de março de 2017",
        genero : "<span>Gênero:</span> Ação e Aventura",
        estudios : "<span>Estúdios</span>: Nintendo Entertainment Planning & Development",
        link : "https://www.nintendo.com/pt-br/store/products/the-legend-of-zelda-breath-of-the-wild-switch/?srsltid=AfmBOorVXO3M8uur3FjXpLeAEzjJSVla5mT8iwT1wRtpqgKnevVXcTHv"
    },
    {
        banner: "../assets/banners/red-dead-redemption-2.jpeg",
        nome: "Red Dead Redemption 2",
        descricao: "Um faroeste épico com um mundo aberto detalhado e uma história envolvente.",
        lancamento: "<span>Data de lançamento:</span> 26 de outubro de 2018",
        genero: "<span>Gênero: </span>Aventura, Ação",
        estudios: "<span>Estúdios:</span> Rockstar Games",
        link : "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
    },
    {
        banner: "../assets/banners/uncharted-4.webp",
        nome: "Uncharted 4: A Thief's End",
        descricao: "Uma aventura emocionante com Nathan Drake em busca de um tesouro perdido.",
        lancamento: "<span>Data de lançamento:</span> 10 de maio de 2016",
        genero: "<span>Gênero: </span>Aventura, Ação",
        estudios: "<span>Estúdios:</span> Naughty Dog",
        link : "https://store.steampowered.com/app/1659420/UNCHARTED_Colecao_Legado_dos_Ladroes/"
    },
    {
        banner: "../assets/banners/horizon-zero-dawn.jpeg",
        nome: "Horizon Zero Dawn",
        descricao: "Uma aventura pós-apocalíptica onde máquinas gigantes dominam o mundo.",
        lancamento: "<span>Data de lançamento:</span> 1 de março de 2017",
        genero: "<span>Gênero: </span>Ação, RPG",
        estudios: "<span>Estúdios:</span> Guerrilla Games",
        link : "https://store.steampowered.com/app/1151640/Horizon_Zero_Dawn_Complete_Edition/"
    },
    {
        banner: "../assets/banners/elden-ring.jpg",
        nome: "Elden Ring",
        descricao: "Um RPG de mundo aberto com combate desafiador e um universo intrigante.",
        lancamento: "<span>Data de lançamento:</span> 25 de fevereiro de 2022",
        genero: "<span>Gênero: </span>Ação, RPG",
        estudios: "<span>Estúdios:</span> FromSoftware",
        link : "https://store.steampowered.com/app/1245620/ELDEN_RING/"
    },
    {
        banner: "../assets/banners/as-odissey.jpeg",
        nome: "Assassin's Creed Odyssey",
        descricao: "Uma aventura épica ambientada na Grécia Antiga, com elementos de RPG e mundo aberto.",
        lancamento: "<span>Data de lançamento:</span> 5 de outubro de 2018",
        genero: "<span>Gênero: </span>Ação, RPG",
        estudios: "<span>Estúdios:</span> Ubisoft",
        link : "https://store.steampowered.com/app/812140/Assassins_Creed_Odyssey/"
    },
    {
        banner: "../assets/banners/god-of-war.avif",
        nome: "God of War (2018)",
        descricao: "Uma reinvenção da franquia God of War, com uma narrativa cinematográfica e combates brutais.",
        lancamento: "<span>Data de lançamento:</span> 20 de abril de 2018",
        genero: "<span>Gênero: </span>Ação, Aventura",
        estudios: "<span>Estúdios:</span> Santa Monica Studio",
        link : "https://store.steampowered.com/app/1593500/God_of_War/"
    },
    {
        banner: "../assets/banners/spider-man.avif",
        nome: "Spider-Man (2018)",
        descricao: "Sinta-se como o Homem-Aranha balançando pelos arranha-céus de Nova York.",
        lancamento: "<span>Data de lançamento:</span> 7 de setembro de 2018",
        genero: "<span>Gênero: </span>Aventura, Ação",
        estudios: "<span>Estúdios:</span> Insomniac Games",
        link : "https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/"
    },
    {
        banner : "../assets/banners/the-witcher.jpeg",
        nome : "The Witcher 3: Wild Hunt",
        descricao : "Considerado um dos melhores RPGs de todos os tempos, The Witcher 3 encanta com sua narrativa rica, personagens complexos e um mundo aberto cheio de detalhes. As escolhas do jogador têm um impacto significativo na história, tornando cada jornada única.",
        lancamento : "<span>Data de lançamento:</span> 18 de maio de 2015",
        genero : "<span>Gênero:</span> RPG eletrônico, Jogo eletrônico de aventura, Jogo eletrônico de luta",
        estudios : "<span>Estúdios</span>: CD Projekt",
        link : "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
    },
    {
        banner : "../assets/banners/csgo.webp",
        nome : "Counter-Strike: Global Offensive",
        descricao : "Counter-Strike: Global Offensive foi um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. É o quarto título principal da franquia.",
        lancamento : "<span>Data de lançamento:</span> 21 de agosto de 2012",
        genero : "<span>Gênero:</span> Tiro em primeira pessoa",
        estudios : "<span>Estúdios</span>: Valve Corporation, Hidden Path Entertainment",
        link : "https://store.steampowered.com/app/730/CounterStrike_2/"
    },
    {
        banner : "../assets/banners/minecraft.avif",
        nome : "Minecraft",
        descricao : "CA simplicidade e a criatividade são as marcas registradas de Minecraft. Com blocos coloridos e infinitas possibilidades, o jogo permite que os jogadores construam desde casas simples até cidades inteiras, explorando mundos gerados proceduralmente.",
        lancamento : "<span>Data de lançamento:</span> 18 de novembro de 2011",
        genero : "<span>Gênero:</span> Exploração e Aventura",
        estudios : "<span>Estúdios</span>: Markus / Notch",
        link : "https://www.minecraft.net/pt-br/download"
    },
    {
        banner : "../assets/banners/resident-evil-2.jpeg",
        nome : "Resident Evil 2 Remake",
        descricao : "Resident Evil 2 Remake é um remake fiel e ao mesmo tempo inovador de um dos jogos de terror mais icônicos da história. Com uma história envolvente, jogabilidade aprimorada e gráficos de última geração, o jogo é uma experiência obrigatória para fãs de survival horror.",
        lancamento : "<span>Data de lançamento:</span> 25 de janeiro de 2019",
        genero : "<span>Gênero:</span> Terror",
        estudios : "<span>Estúdios</span>: Capcom, Capcom U.S.A., Inc.",
        link : "https://store.steampowered.com/sub/281610/"
    },
    {
        banner: "../assets/banners/silent-hill.avif",
        nome: "Silent Hill 2",
        descricao: "Um dos jogos de terror psicológico mais aclamados, com uma atmosfera densa e personagens memoráveis.",
        lancamento: "<span>Data de lançamento:</span> 24 de setembro de 2001",
        genero: "<span>Gênero: </span>Terror Psicológico",
        estudios: "<span>Estúdios:</span> Konami",
        link : "https://store.steampowered.com/app/2124490/SILENT_HILL_2/"
    },
    {
        banner: "../assets/banners/outlast.webp",
        nome: "Outlast",
        descricao: "Um jogo de terror em primeira pessoa onde você não tem armas, apenas uma câmera para registrar o horror.",
        lancamento: "<span>Data de lançamento:</span> 4 de setembro de 2013",
        genero: "<span>Gênero: </span>Terror Psicológico",
        estudios: "<span>Estúdios:</span> Red Barrels",
        link : "https://store.steampowered.com/app/238320/Outlast/"
    },
    {
        banner: "../assets/banners/dead-space.avif",
        nome: "Dead Space",
        descricao: "Um jogo de terror de ficção científica ambientado em uma nave espacial infestada por criaturas alienígenas.",
        lancamento: "<span>Data de lançamento:</span> 13 de outubro de 2008",
        genero: "<span>Gênero: </span>Terror de Sobrevivência",
        estudios: "<span>Estúdios:</span> Visceral Games",
        link : "https://store.steampowered.com/app/1693980/Dead_Space/"
    },
    {
        banner: "../assets/banners/amnesia.jpeg",
        nome: "Amnesia: The Dark Descent",
        descricao: "Um jogo de terror psicológico que enfatiza a ausência de combate, forçando os jogadores a fugir e se esconder.",
        lancamento: "<span>Data de lançamento:</span> 8 de outubro de 2010",
        genero: "<span>Gênero: </span>Terror Psicológico",
        estudios: "<span>Estúdios:</span> Frictional Games",
        link : "https://store.steampowered.com/app/57300/Amnesia_The_Dark_Descent/"
    },
    {
        banner: "../assets/banners/five-nights.webp",
        nome: "Five Nights at Freddy's",
        descricao: "Um jogo de terror indie onde você precisa sobreviver a noites trabalhando em uma pizzaria infestada por animatrônicos assassinos.",
        lancamento: "<span>Data de lançamento:</span> 8 de agosto de 2014",
        genero: "<span>Gênero: </span>Terror Indie",
        estudios: "<span>Estúdios:</span> Scott Cawthon",
        link : "https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/"
    },
    {
        banner: "../assets/banners/alien-isolation.avif",
        nome: "Alien: Isolation",
        descricao: "Uma experiência aterrorizante ambientada no universo Alien, onde você precisa sobreviver a um xenomorfo implacável.",
        lancamento: "<span>Data de lançamento:</span> 7 de outubro de 2014",
        genero: "<span>Gênero: </span>Terror de Sobrevivência",
        estudios: "<span>Estúdios:</span> Creative Assembly",
        link : "https://store.steampowered.com/app/214490/Alien_Isolation/"
    },
    {
        banner: "../assets/banners/soma.avif",
        nome: "Soma",
        descricao: "Um jogo de terror psicológico subaquático que explora temas de identidade e existência.",
        lancamento: "<span>Data de Lançamento:</span> 22 de setembro de 2015",
        genero: "<span>Gênero: </span>Terror Psicológico",
        estudios: "<span>Estúdios:</span> Frictional Games",
        link : "https://store.steampowered.com/app/282140/SOMA/"
    },
    {
        banner: "../assets/banners/the-evil-within.jpeg",
        nome: "The Evil Within",
        descricao: "Um jogo de terror psicológico desenvolvido por Shinji Mikami, criador da série Resident Evil.",
        lancamento: "<span>Data de Lançamento:</span> 14 de outubro de 2014",
        genero: "<span>Gênero: </span>Terror Psicológico",
        estudios: "<span>Estúdios:</span> Tango Gameworks",
        link : "https://store.steampowered.com/app/268050/The_Evil_Within/"
    }
];
