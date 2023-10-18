const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    // Mouse
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mouses.png",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "O Logitech MX Master 3s é a escolha ideal para quem procura um mouse versátil e altamente funcional. \n Seja no trabalho ou no lazer, este mouse é projetado para atender às necessidades de produtividade e precisão. Seu design ergonômico proporciona conforto durante longas horas de uso, enquanto seu sensor de alta precisão permite um controle preciso do cursor. \nAlém disso, você pode personalizar os botões para se adequar ao seu fluxo de trabalho. Com conectividade Bluetooth e uma bateria de longa duração, o MX Master 3s está pronto para acompanhar você em todas as suas tarefas.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_mx-master-3s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_mx-master-3s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_mx-master-3s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_mx-master-3s.png",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "O Logitech Pro X Superlight é o companheiro definitivo para jogadores profissionais que buscam aprimorar seu desempenho nos jogos. \nCom um design leve e ergonômico, este mouse é a escolha perfeita para aqueles que demandam precisão e agilidade inigualáveis. Seu sensor de alta precisão garante rastreamento preciso em todas as situações, enquanto sua construção durável garante sua longevidade mesmo nas sessões de jogo mais intensas. \nPersonalize sua experiência com a iluminação RGB e aproveite um desempenho superior. Não perca a oportunidade de elevar seu jogo com o Logitech Pro X Superlight!",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-superlight.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-superlight.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-superlight.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-superlight.png",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "O Logitech G305 Lightspeed é a escolha perfeita para jogadores que buscam desempenho excepcional a um preço acessível. \n Projetado para atender às demandas dos jogadores, este mouse oferece rastreamento preciso e responsivo graças ao sensor de alta qualidade. \n Com um design ergonômico, ele se encaixa confortavelmente em sua mão, garantindo horas de jogo sem fadiga. Personalize sua experiência de jogo com facilidade e aproveite a vantagem competitiva. Este mouse combina desempenho e valor, sendo a escolha ideal para gamers de todos os níveis.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed.png",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "O HyperX Pulsefire Dart é o parceiro perfeito para jogadores que buscam desempenho de elite e estilo. \nProjetado para oferecer precisão e agilidade, este mouse combina um sensor de alta precisão com um design ergonômico para uma experiência de jogo imbatível. \nSua conectividade sem fio garante liberdade de movimento, enquanto a iluminação RGB personalizável adiciona um toque de estilo à sua configuração. \nCom uma bateria de longa duração, você pode jogar por horas a fio sem interrupções. Prepare-se para dominar os jogos com o HyperX Pulsefire Dart.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_hyperx-dart.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_hyperx-dart.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_hyperx-dart.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_hyperx-dart.png",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "O Razer Deathadder V2 Pro é uma escolha incomparável para jogadores que buscam desempenho de elite e precisão sem igual. \nProjetado com atenção aos detalhes, este mouse oferece um sensor de alta precisão e um design ergonômico para permitir um controle preciso e conforto durante longas sessões de jogo. \nA conectividade sem fio garante a liberdade de movimento, enquanto os botões programáveis oferecem personalização total. Com uma bateria de longa duração, você pode jogar sem interrupções. \nEleve sua experiência de jogo com o Razer Deathadder V2 Pro.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-deathadder.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-deathadder.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-deathadder.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-deathadder.png",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    // Keyboard
    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/keyboards.png",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "O Logitech MX Keys Mini é a escolha perfeita para quem busca um teclado compacto e de alto desempenho. \nProjetado com atenção aos detalhes, este teclado oferece uma experiência de digitação excepcional. Suas teclas oferecem um toque suave e silencioso, proporcionando um conforto inigualável durante longas horas de trabalho ou jogo. \nA conectividade Bluetooth permite que você se conecte a vários dispositivos, alternando facilmente entre eles. Com um design elegante e compacto, o MX Keys Mini se encaixa perfeitamente em qualquer espaço de trabalho. Eleve sua produtividade com este teclado de qualidade.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-mini.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-mini.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-mini.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-mini.png",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "O Logitech MX Keys S é a escolha ideal para quem busca um teclado de alto desempenho e elegância. \nProjetado com precisão, este teclado oferece uma experiência de digitação excepcional. Suas teclas proporcionam um toque suave e responsivo, garantindo um conforto superior durante longas horas de trabalho ou jogo. \nA conectividade sem fio permite que você se conecte a vários dispositivos com facilidade e alterne entre eles sem esforço. \nCom um design elegante e compacto, o MX Keys S é a adição perfeita para qualquer espaço de trabalho sofisticado. \nEleve sua produtividade e estilo com este teclado premium.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-s.png",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "O Logitech Pop Keys é a escolha perfeita para quem busca um teclado elegante e funcional. \nEste teclado combina estilo e desempenho, oferecendo uma experiência de digitação suave e responsiva. Suas teclas proporcionam um toque confortável, tornando-o ideal para longas horas de trabalho ou jogo. \nCom conectividade sem fio, você pode se conectar a vários dispositivos com facilidade e alternar entre eles de forma conveniente. \nO design compacto e moderno do Pop Keys se encaixa perfeitamente em qualquer configuração.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-pop-keys.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-pop-keys.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-pop-keys.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-pop-keys.png",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "O Logitech MX Mechanical é um teclado excepcional para quem busca uma experiência de digitação precisa e responsiva. \nEste teclado mecânico oferece um toque tátil e feedback audível, tornando-o ideal para digitação rápida e precisa. \nSuas teclas são duráveis e projetadas para resistir ao desgaste constante, proporcionando uma longa vida útil. \nCom uma construção sólida e design elegante, ele se destaca em qualquer ambiente. \nEleve sua produtividade e desfrute de uma digitação de alta qualidade com o Logitech MX Mechanical.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-mechanical.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-mechanical.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-mechanical.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-mechanical.png",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "O Epomaker TH80 é um teclado mecânico que atende às necessidades de digitação de entusiastas e profissionais. \nCom teclas mecânicas responsivas, oferece uma experiência de digitação excepcional, proporcionando um toque tátil e feedback auditivo que satisfaz os mais exigentes. \nConstruído com durabilidade em mente, suas teclas são projetadas para suportar anos de uso intensivo. \nCom um design elegante e compacto, este teclado se destaca em qualquer configuração. Eleve sua produtividade e desfrute de uma digitação de alta qualidade com o Epomaker TH80.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_epomaker-th80.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_epomaker-th80.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_epomaker-th80.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_epomaker-th80.png",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "O teclado Redragon Gamer Ashe é uma escolha excelente para jogadores que buscam um desempenho excepcional e um design impressionante. \nCom teclas mecânicas responsivas e retroiluminação RGB personalizável, este teclado oferece uma experiência de jogo envolvente. \nSua construção robusta e durável garante que ele resista ao uso intenso durante longas sessões de jogo. Com um design ergonômico e teclas programáveis, você pode personalizar sua experiência de jogo. \nEleve seu desempenho e estilo com o Redragon Gamer Ashe.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_redragon-gamer-ashe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_redragon-gamer-ashe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_redragon-gamer-ashe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_redragon-gamer-ashe.png",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    // Headphone
    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/headphones.png",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "O fone de ouvido Logitech Zone Vibe 100 é a escolha perfeita para quem busca uma experiência auditiva imersiva e confortável. \nCom qualidade de som excepcional, ele proporciona áudio nítido e envolvente para músicas, chamadas e muito mais. \nSeu design ergonômico e almofadas auriculares macias garantem conforto durante longas sessões de audição. A conectividade sem fio permite que você se mova livremente enquanto aproveita seu conteúdo favorito. \nCom o Logitech Zone Vibe 100, você pode mergulhar no mundo do som com estilo e qualidade.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-vibe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-vibe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-vibe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-vibe.png",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "O fone de ouvido Logitech Pro X 2 Lightspeed oferece uma experiência de áudio premium para audiófilos e entusiastas da música. \nCom qualidade de som excepcional e reprodução precisa, você desfrutará de músicas e podcasts com incrível clareza e riqueza de detalhes. \nOs materiais de alta qualidade e o design confortável garantem que você possa usar este fone de ouvido por horas a fio sem desconforto. Com conectividade sem fio e controles intuitivos, é uma escolha versátil para audição em movimento. \nEleve sua experiência de áudio com o Logitech Pro X 2 Lightspeed.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed-phone.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed-phone.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed-phone.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed-phone.png",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "O fone de ouvido Logitech Astro A30 é a escolha definitiva para audiófilos e amantes da música que buscam qualidade de som excepcional. \nCom drivers de alta resolução, ele oferece uma experiência de áudio imersiva, com graves profundos e agudos cristalinos. Seu design confortável permite longas sessões de audição sem desconforto, enquanto o isolamento de ruído ativo proporciona uma experiência sonora pura. \nCom conectividade sem fio e controles intuitivos, este fone de ouvido é perfeito para audição em casa ou em movimento. Eleve sua experiência de áudio com o Logitech Astro A30.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-astro-a30.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-astro-a30.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-astro-a30.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-astro-a30.png",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Os fones de ouvido Logitech Zone Wired Earbuds são a escolha perfeita para profissionais e entusiastas de música que desejam uma experiência auditiva excepcional. \nCom drivers de alta qualidade, eles oferecem um som nítido e envolvente para suas músicas e chamadas. \nSeu design compacto e leve os torna ideais para uso em movimento, proporcionando conforto durante todo o dia. Com conectividade com fio confiável, você pode contar com áudio de alta qualidade em qualquer lugar. \nOs Logitech Zone Wired Earbuds são a combinação perfeita de desempenho e portabilidade.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-earbuds.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-earbuds.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-earbuds.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-earbuds.png",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "Os fones de ouvido Hyperx Cloud Stinger 2 são projetados para oferecer áudio de alta qualidade e conforto excepcional. \nCom drivers potentes, eles proporcionam um som imersivo para jogos, música e comunicação. O design ergonômico e almofadado permite que você use esses fones por horas a fio sem desconforto. \nO microfone removível com cancelamento de ruído garante que suas comunicações sejam nítidas e livres de interferências. \nCom a qualidade lendária da Hyperx, os Cloud Stinger 2 são a escolha ideal para gamers e entusiastas de áudio que buscam desempenho confiável.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_hyperx-stinger.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_hyperx-stinger.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_hyperx-stinger.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_hyperx-stinger.png",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Os fones de ouvido Razer Kraken X proporcionam uma experiência sonora imersiva e conforto excepcional para sessões de jogos prolongadas. \nCom drivers de áudio de alta qualidade, eles oferecem um som nítido e envolvente para que você possa ouvir cada detalhe do seu jogo. \nO design leve e almofadado permite que você jogue por horas sem desconforto. O microfone retrátil garante que suas comunicações sejam claras, enquanto o design robusto e elegante torna esses fones de ouvido ideais para gamers e entusiastas de áudio. \nCom os Razer Kraken X, você estará pronto para enfrentar qualquer desafio.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-kraken.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-kraken.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-kraken.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-kraken.png",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    // Mousepad
    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mousepads.png",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "O mousepad Logitech Powerplay foi projetado para aprimorar sua experiência de jogo. \nCom uma superfície de alta qualidade e tecnologia de carregamento sem fio integrada, ele oferece uma solução conveniente e inovadora. \nMantenha seu mouse sem fio carregado enquanto joga, eliminando a necessidade de interrupções para recarregar a bateria. O Logitech Powerplay fornece um deslize suave e preciso para seu mouse, permitindo movimentos rápidos e precisos. \nEste mousepad é a escolha perfeita para gamers que buscam o máximo desempenho e conveniência.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-powerplay.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-powerplay.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-powerplay.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-powerplay.png",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "O mousepad Logitech Desk Mat é a adição perfeita para sua configuração de computador. \nCom um design elegante e uma superfície suave, proporciona um ambiente de trabalho mais confortável e eficiente. Este mousepad espaçoso oferece muito espaço para seu mouse e teclado, permitindo movimentos suaves e precisos. \nAlém disso, seu design durável e resistente garante que você possa usá-lo por muito tempo. Ele não apenas melhora a funcionalidade de sua estação de trabalho, mas também acrescenta um toque de estilo. \nO Logitech Desk Mat é a escolha ideal para quem valoriza qualidade e estética.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-desk-mat.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-desk-mat.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-desk-mat.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-desk-mat.png",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "O mousepad Logitech G740 é projetado para atender às demandas dos jogadores mais exigentes. \nCom uma superfície de alta qualidade, este mousepad oferece um rastreamento preciso e suave para o seu mouse, proporcionando uma vantagem competitiva nos jogos. \nSua base antiderrapante garante estabilidade, mesmo durante as sessões de jogo mais intensas. O Logitech G740 possui um design elegante e durável que combina perfeitamente com qualquer configuração de jogo. \nAproveite o conforto e a qualidade deste mousepad premium para elevar seu desempenho nos jogos.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-g740.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-g740.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-g740.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-g740.png",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "O mousepad Logitech Studio Series é uma adição elegante e funcional para o seu espaço de trabalho. \nEle oferece uma superfície suave e precisa para o seu mouse, tornando-o perfeito para tarefas criativas e produtivas. A base antiderrapante mantém o mousepad no lugar, mesmo durante longas horas de trabalho. \nO design da série Studio é minimalista e sofisticado, combinando bem com qualquer estilo de configuração. Ele é durável e resistente, garantindo um desempenho confiável. \nTransforme sua área de trabalho com o Logitech Mousepad Studio Series.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-studio-series.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-studio-series.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-studio-series.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-studio-series.png",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "O mousepad Force One Skyhawk Dark é a escolha perfeita para gamers que buscam precisão e desempenho. \nSua superfície proporciona um deslize suave e preciso para o seu mouse, garantindo que cada movimento conte em suas partidas. \nA base antiderrapante mantém o mousepad firme no lugar, mesmo durante as sessões de jogos mais intensas. Com um design elegante e o logotipo do Skyhawk Dark, ele é uma adição estilosa para sua estação de batalha. \nConstruído para durar, o Force One Skyhawk Dark é resistente e pronto para enfrentar as demandas dos jogadores mais dedicados.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_force-dark.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_force-dark.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_force-dark.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_force-dark.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "O mousepad Force One Skyhawk Snow é a escolha perfeita para gamers que buscam precisão e desempenho. \nSua superfície proporciona um deslize suave e preciso para o seu mouse, garantindo que cada movimento conte em suas partidas. \nA base antiderrapante mantém o mousepad firme no lugar, mesmo durante as sessões de jogos mais intensas. Com um design elegante e o logotipo do Skyhawk Snow, ele é uma adição estilosa para sua estação de batalha. \nConstruído para durar, o Force One Skyhawk Snow é resistente e pronto para enfrentar as demandas dos jogadores mais dedicados.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_force-snow.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_force-snow.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_force-snow.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_force-snow.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    // Monitor
    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/monitors.png",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "O monitor Dell S2421HN oferece uma experiência visual incrível para o trabalho, entretenimento e jogos. \nCom uma tela de alta resolução e cores vibrantes, você desfrutará de imagens nítidas e detalhadas em qualquer tarefa. Sua taxa de atualização rápida e tempo de resposta reduzido garantem uma jogabilidade suave e responsiva em jogos de ação e aventura. \nAlém disso, a ampla gama de conectividade e opções de ajuste permite que você personalize sua configuração de acordo com suas necessidades. \nO Dell S2421HN é a escolha ideal para aqueles que buscam qualidade e desempenho em um monitor.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S2421HN.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S2421HN.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S2421HN.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S2421HN.png",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "O monitor Dell P2422H é uma escolha excepcional para quem busca qualidade e desempenho. \nSua tela de alta resolução oferece imagens nítidas e detalhadas, tornando-o ideal para produtividade e entretenimento. \nCom uma taxa de atualização rápida e tempo de resposta reduzido, ele proporciona uma experiência de jogos suave e envolvente. \nAlém disso, as opções de conectividade avançada e os recursos de ajuste personalizável tornam este monitor versátil e adequado para diversas necessidades. \nO Dell P2422H é uma adição valiosa para qualquer configuração de PC.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2422H.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2422H.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2422H.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2422H.png",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "O monitor Dell P2723QE é uma escolha excepcional para quem busca qualidade e desempenho. \nSua tela de alta resolução oferece imagens nítidas e detalhadas, tornando-o ideal para produtividade e entretenimento. \nCom uma taxa de atualização rápida e tempo de resposta reduzido, ele proporciona uma experiência de jogos suave e envolvente. \nAlém disso, as opções de conectividade avançada e os recursos de ajuste personalizável tornam este monitor versátil e adequado para diversas necessidades. \nO Dell P2723QE é uma adição valiosa para qualquer configuração de PC.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2723QE.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2723QE.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2723QE.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2723QE.png",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "O monitor Dell S3422DWG oferece uma experiência de visualização imersiva e de alta qualidade. \nCom uma tela ampla e curvada, ele é ideal para assistir a filmes, jogar e trabalhar com várias janelas abertas. A resolução nítida e as cores vibrantes proporcionam imagens impressionantes. \nAlém disso, a taxa de atualização rápida e o suporte a tecnologias avançadas o tornam perfeito para jogos e aplicações exigentes. \nCom várias opções de conectividade e recursos de ajuste personalizável, este monitor atende às necessidades dos usuários mais exigentes.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3422DWG.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3422DWG.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3422DWG.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3422DWG.png",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "O monitor Dell S3222DGM é uma excelente opção para quem busca uma experiência visual imersiva e de alta qualidade. \nCom uma tela ampla e nítida, ele proporciona imagens vívidas e detalhadas, ideal para trabalhar, jogar ou assistir a conteúdos multimídia. \nA resolução e o contraste deste monitor oferecem uma qualidade excepcional, enquanto a taxa de atualização rápida é perfeita para jogos e aplicativos exigentes. \nCom várias opções de conectividade e recursos personalizáveis, este monitor atende às necessidades dos usuários mais exigentes.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3222DGM.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3222DGM.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3222DGM.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3222DGM.png",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "O monitor Dell AW2524HF é uma escolha excepcional para quem busca uma experiência de jogo de alta qualidade e desempenho de imagem incrível. \nCom uma tela nítida e taxa de atualização ultrarrápida, este monitor oferece imagens vívidas e detalhadas, ideais para jogos de alta ação e entretenimento multimídia. \nA resolução de alta definição e o alto contraste proporcionam uma qualidade de imagem excepcional. \nEste monitor também oferece conectividade versátil e opções de personalização para atender às necessidades dos jogadores mais exigentes.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-AW2524HF.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-AW2524HF.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-AW2524HF.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-AW2524HF.png",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    // Speaker
    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/speakers.png",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "O sistema de som Logitech Surround Sound Z607 oferece uma experiência de áudio imersiva e envolvente. \nCom alto-falantes potentes e uma variedade de opções de conectividade, este sistema de som é perfeito para entretenimento em casa. \nDesfrute de áudio de alta qualidade ao assistir a filmes, ouvir música ou jogar jogos. \nCom a conveniência de controle remoto e várias opções de entrada, você pode personalizar sua experiência sonora de acordo com suas preferências.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-surround-z607.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-surround-z607.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-surround-z607.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-surround-z607.png",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "O Logitech Dock é a solução ideal para a conectividade e carregamento de dispositivos. \nCom várias portas de conexão e compatibilidade com uma ampla gama de dispositivos, você pode simplificar suas necessidades de conectividade. \nEste dock oferece velocidade e eficiência de carregamento para seus dispositivos, mantendo todos os seus aparelhos eletrônicos prontos para uso. \nSeja para carregar smartphones, tablets, laptops ou outros dispositivos, o Logitech Dock proporciona conectividade e carregamento rápidos e confiáveis.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-dock.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-dock.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-dock.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-dock.png",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Os alto-falantes Sony SA-Z9R oferecem uma experiência de áudio de alta qualidade, proporcionando som imersivo e nítido para a sua sala de estar ou espaço de entretenimento. \nCom um design elegante e construção de alta qualidade, esses alto-falantes são a escolha perfeita para os audiófilos que buscam um áudio excepcional. \nA tecnologia avançada garante um som cristalino e poderoso, transformando suas músicas, filmes e jogos em experiências verdadeiramente envolventes. \nCom conectividade fácil e configuração rápida, você pode desfrutar do melhor som em questão de minutos.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-SA-Z9R.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-SA-Z9R.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-SA-Z9R.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-SA-Z9R.png",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 35, // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "Os alto-falantes Sony XB43 Extra Bass são projetados para proporcionar um som poderoso e vibrante com graves aprimorados. \nCom um design compacto e portátil, esses alto-falantes são ideais para levar a festas, churrascos ou qualquer lugar onde você queira animar a sua música. \nA tecnologia de áudio avançada da Sony oferece uma experiência sonora excepcional, garantindo que você sinta a batida da música. Conecte seu dispositivo facilmente via Bluetooth e desfrute de horas de reprodução sem fio. \nOs alto-falantes Sony XB43 Extra Bass são a escolha perfeita para os amantes da música que desejam alta qualidade e portabilidade.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-extra-bass.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-extra-bass.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-extra-bass.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-extra-bass.png",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "Os alto-falantes Sony XB23 Extra Bass oferecem uma experiência de áudio excepcional com graves profundos e nítidos. \nSeu design compacto e portátil torna-os ideais para levar sua música para onde você for. Com tecnologia avançada de áudio, você pode desfrutar de um som de alta qualidade que enche o ambiente. \nA conectividade Bluetooth permite que você reproduza suas músicas sem fio a partir de dispositivos compatíveis. \nOs alto-falantes Sony XB23 Extra Bass são perfeitos para quem aprecia um som potente e claro em um pacote portátil.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-XB23.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-XB23.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-XB23.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-XB23.png",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "A Soundbar Sony HT-S200F é a escolha perfeita para melhorar a qualidade do áudio da sua TV e transformar a experiência de entretenimento. \nCom um design elegante e compacto, esta soundbar se encaixa perfeitamente em qualquer espaço. \nEla oferece áudio de alta qualidade com tecnologia avançada que proporciona clareza de som e graves aprimorados. \nA conectividade Bluetooth permite que você transmita suas músicas favoritas de dispositivos móveis, proporcionando versatilidade. Além disso, o controle remoto fácil de usar torna a operação simples e conveniente. \nA Sony HT-S200F é a escolha ideal para quem deseja uma experiência sonora imersiva e envolvente.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-S200F.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-S200F.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-S200F.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-S200F.png",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
