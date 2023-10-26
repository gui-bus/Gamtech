const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    // !Mouse
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Fredragon-cobra-black-02.webp?alt=media&token=54661009-6152-4e89-95b5-21554cd6bd25&_gl=1*11iqg0y*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODA4NS42MC4wLjA.",
      },
    });

    const mouses = [
      {
        name: "Mouse Gamer Logitech G502 HERO com RGB LIGHTSYNC, Ajustes de Peso, 11 Botões Programáveis, Sensor HERO 25K",
        slug: "mouse-gamer-logitech-g502-hero-com-rgb-lightsync-ajustes-de-peso-11-botoes-programaveis-sensor-hero-25k",
        description:
          "Seu mouse gamer favorito de alto desempenho oferece uma funcionalidade mais precisa do que nunca. Agora, personalize a iluminação RGB para combinar com seu estilo e ambiente ou sincronize com outros produtos Logitech G. O G502 apresenta nosso sensor HERO 25K de última geração para máxima precisão e exatidão de rastreamento. Não importa o seu estilo de jogo, é fácil ajustar o G502 HERO para atender às suas necessidades, com perfis personalizados para seus jogos, sensibilidade ajustável de 400 a 25.600 DPI e um sistema de peso ajustável que permite ajuste e balanceamento de até cinco 3,6g pesos para o equilíbrio e a sensação corretos.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Flogitech-hero-01.webp?alt=media&token=3e053cec-3961-4adb-bd78-b2fc02569d07&_gl=1*63irmh*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODEwNy4zOC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Flogitech-hero-02.webp?alt=media&token=925de75f-44ba-4da9-90d0-f7943a571fd1&_gl=1*19phj9h*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODIxOS42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Flogitech-hero-03.webp?alt=media&token=05926e36-b701-4ec2-ba76-f4bac7b076c2&_gl=1*nqkgeh*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODIyNS41NC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Flogitech-hero-04.webp?alt=media&token=27e15200-a043-4137-95ad-a1d3cd54e366&_gl=1*ivjp4a*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODIzMS40OC4wLjA.",
        ],
        basePrice: 376,
        categoryId: mousesCategory.id,
        discountPercentage: 15,
      },
      {
        name: "Mouse Gamer Logitech G502 X, RGB, 25600 DPI, 13 Botões, Switch Híbrido, Branco",
        slug: "mouse-gamer-logitech-g502-x-rgb-25600-dpi-13-botoes-switch-hibrido-branco",
        description:
          "G502 X é a última adição à lendária linhagem do G502. Reinventado com as tecnologias mais inovadoras para jogos. Os novíssimos interruptores híbridos ópticos-mecânicos atingem níveis mais altos de velocidade e confiabilidade com acionamento óptico. Enquanto o acionamento mecânico mantém a resposta nítida e tátil que os jogos pedem e os jogadores precisam. Nosso mais avançado sensor para jogos oferece precisão ímpar, suavização máxima, filtragem e aceleração. Com rastreamento aprimorado e tecnologia de consumo inteligente, o HERO 25K entrega desempenho ímpar, eficiência de energia e precisão. A Logitech G recriou o botão de troca de DPI para que você possa escolher a configuração que combina com sua pegada. O design icônico do G502 X tem uma incrível redução de peso para 89 gramas graças ao fino exoesqueleto, com material mínimo e rigidez máxima, roda de rolagem iluminada e muito mais. Use a roda de rolagem livremente no modo hiper- rápido. Troque com um clique para o modo catraca para uma rolagem precisa. Incline à direita ou esquerda para dois controles programáveis adicionais. Os mouses G502 X são os primeiros da família G502 a virem em duas cores: branco e preto. Escolha o seu.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Flogiteg-502-01.webp?alt=media&token=61424e46-c227-4040-9d9c-a1e6b0b8e7e2&_gl=1*o19ouh*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODI0OS4zMC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Flogiteg-502-02.webp?alt=media&token=8a72027d-7e2f-4422-9d4a-2c26551f382a&_gl=1*9dl9p0*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODMxMS42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Flogiteg-502-03.webp?alt=media&token=4db524ca-b1ed-4800-9493-c8caafc91669&_gl=1*l634k4*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODMxNi41NS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Flogiteg-502-04.webp?alt=media&token=c38e136b-ff6e-4028-913b-077167ed2932&_gl=1*3lu8lt*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODMyMC41MS4wLjA.",
        ],
        basePrice: 411,
        categoryId: mousesCategory.id,
        discountPercentage: 15, 
      },
      {
        name: "Mouse Gamer Razer Basilisk V3 PRO, RGB Chroma, 26000 DPI, Optical Switch, 11 Botões, Preto",
        slug: "mouse-gamer-razer-basilisk-v3-pro-rgb-chroma-26000-dpi-optical-switch-11-botoes-preto",
        description:
          "Crie, controle e defenda seu estilo de jogo com o novo Razer Basilisk V3 - o mouse ergonômico para jogos por excelência para desempenho personalizado. Com 10+1 botões programáveis, uma roda de rolagem inteligente e uma dose pesada de Razer Chroma RGB, é hora de iluminar a competição do seu jeito. Nossa mais recente inovação em roda de rolagem oferece um novo nível de funcionalidade que você pode definitivamente colocar um dedo. Oferecendo dois tipos de rolagem para maior flexibilidade, ele também pode alternar automaticamente entre eles para um uso verdadeiramente perfeito, graças a uma função inteligente de ponta.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Frazer-basilisk-01.webp?alt=media&token=824666b5-5a5d-414f-92c4-792c651608c0&_gl=1*13o6la9*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODM4OS42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Frazer-basilisk-02.webp?alt=media&token=96b74369-f6b7-4e8b-93b4-42178af96ce5&_gl=1*1eqt8qw*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODM5NC41NS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Frazer-basilisk-03.webp?alt=media&token=8363c36e-f9b8-400e-a878-0f38dccff747&_gl=1*vjt218*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODM5OS41MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Frazer-basilisk-04.webp?alt=media&token=787b2b68-b617-4a9c-86ca-2d9bae0c155d&_gl=1*c12a5j*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODQwNC40NS4wLjA.",
        ],
        basePrice: 1588,
        categoryId: mousesCategory.id,
        discountPercentage: 0, 
      },
      {
        name: "Mouse Gamer Sem Fio Razer Orochi V2, 18000 DPI, Optical Switch, 6 Botões, Mercury White",
        slug: "mouse-gamer-sem-fio-razer-orochi-v2-18000-dpi-optical-switch-6-botoes-mercury-white",
        description:
          "Apresentamos o Razer Orochi V2 - um mouse para jogos compacto e ultraleve sem fio com a maior duração de bateria inigualável. Equipado com os modos Razer HyperSpeed Wireless e Bluetooth, é o companheiro perfeito para jogos em movimento. Desfrute de movimentos mais rápidos e controle hábil com um dos mouses para jogos mais leves.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Frazer-orochi-01.webp?alt=media&token=caadaf3f-1900-4513-a5d4-a44555fa0014&_gl=1*qmr65a*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODQ2MC42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Frazer-orochi-02.webp?alt=media&token=8605d325-157c-490c-8d9d-cc8e6e3b04a0&_gl=1*ny4ljh*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODQ2NS41NS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Frazer-orochi-03.webp?alt=media&token=10d584d8-05f4-4e50-a3fd-326c3cc9e1a2&_gl=1*azfjj9*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODQ3MS40OS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Frazer-orochi-04.webp?alt=media&token=6c393758-1934-4ded-8426-361f5a8e72de&_gl=1*17gl58r*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODQ3NS40NS4wLjA.",
        ],
        basePrice: 560,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Mouse Gamer Redragon Cobra, Chroma RGB, 12400DPI, 7 Botões, Preto",
        slug: "mouse-gamer-redragon-cobra-chroma-rgb-12400dpi-7-botoes-preto",
        description:
          "O Mouse Gamer Redragon Cobra, possui sensor PIXART 3327 para Alta Performance (20 G / 100 IPS) e seu sistema é de Iluminação RGB Redragon Chroma Mk.II (7 Diferentes Modos de Iluminação). Possui Polling Rate de 1000hz (Tempo de Resposta Ajustável via Software de 1/2/4/8ms), com 8 Botões Programáveis e 2 Botões laterais para funções / atalhos, macros, etc. Tudo isso com 130 gramas, leve e preciso para aquela jogada especial. Ele é compatível com Software para Configuração de Macro / Ajuste Iluminação RGB / Configurações de Performance. Tem Memória Interna para Salvamento de Configurações, e Base com Pés de Teflon para Deslize Suave. 5 Perfis de Configurações para Troca Rápida de Configurações de um Game para Outro, com Pegada Ergonômica  confortável perfeita para Destros e cabo Trançado para maior resistência.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Fredragon-cobra-black-01.webp?alt=media&token=1f376893-0137-4418-9ed8-763580b6baa2&_gl=1*8dyaj2*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODUzNi42MC4wLjA.g",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Fredragon-cobra-black-02.webp?alt=media&token=54661009-6152-4e89-95b5-21554cd6bd25&_gl=1*1cq3sav*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODU0NC41Mi4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Fredragon-cobra-black-03.webp?alt=media&token=24cbfa8e-e58c-457d-ba8e-c231819e89ca&_gl=1*17eai8i*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODU1MC40Ni4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Fredragon-cobra-black-04.webp?alt=media&token=58e3aedf-503c-437d-a875-236fb4e03586&_gl=1*tk4ym8*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODU1Ni40MC4wLjA.",
        ],
        basePrice: 176,
        categoryId: mousesCategory.id,
        discountPercentage: 15,
      },
      {
        name: "Mouse Gamer Redragon Cobra, RGB, 7 Botões, 10000DPI, Lunar White",
        slug: "mouse-gamer-redragon-cobra-rgb-7-botoes-10000dpi-lunar-white",
        description:
          "Trazendo a já amada iluminação Redragon Chroma Mark II o mouse Gamer Profissional Cobra impressiona com tanta beleza, conforto e precisão. Vá além e customize do seu jeito a iluminação do seu mouse com o software Redragon. Você ficara surpreso com o conforto encontrado no Cobra : com uma pegada universal, esse é um Mouse letal e preciso para todas as suas partidas. Tenha vantagem extra com 7 botões totalmente programáveis, que permitem acesso rápido a ações, combos específicos de jogos, ou até mesmo um atalhos multimídia totalmente configuráveis via Software. Equipado com o sensor Pixart PWM 3325 de 10000 DPI, o Redragon Cobra é uma escolha de performance inigualável para quem procura desempenho profissional em um mouse.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Fredragon-cobra-white-01.webp?alt=media&token=05eaed7c-7872-4c93-86cb-09678c4e5901&_gl=1*di38mq*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODYxNi42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Fredragon-cobra-white-02.webp?alt=media&token=84e68587-8be3-4d43-b5be-15d782c9ff66&_gl=1*11ou3dh*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODY4Mi42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Fredragon-cobra-white-03.webp?alt=media&token=66c82ee7-9434-4f18-acc6-261a1a6240cf&_gl=1*159g6rv*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODY4OS41My4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/mouses%2Fredragon-cobra-white-04.webp?alt=media&token=0620b511-045a-42f4-badf-fdf572242f47&_gl=1*1rxk6dz*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODY5Ni40Ni4wLjA.",
        ],
        basePrice: 196,
        categoryId: mousesCategory.id,
        discountPercentage: 15,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    // !Keyboard
    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Frazer-blackwindow-v3-tenkeyless-03.webp?alt=media&token=a4336d6e-506f-4896-9106-f90cb628d777&_gl=1*1jcnjic*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODk0My41Ni4wLjA.",
      },
    });

    const keyboards = [
      {
        name: "Teclado Gamer Razer Cynosa V2, Chroma, Membrane Switch, US",
        slug: "teclado-gamer-razer-cynosa-v2-chroma-membrane-switch-us",
        description:
          "Pinte seu jogo com uma luz verdadeiramente envolvente com o Razer Cynosa V2, o teclado de jogos RGB essencial. Com iluminação personalizável em cada tecla, veja-a ganhar vida enquanto joga em títulos integrados ao Chroma e adote uma experiência de jogo da qual você nunca vai querer se afastar. Com teclas para jogos com retroiluminação individual, para toques silenciosos e amortecidos com iluminação personalizada,  equipado com Chroma RGB Avanços de Iluminação e uma Maior Funcionalidade no Jogo.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Frazer-cynosa-v2-01.webp?alt=media&token=3d3aabc1-c37f-4f4b-9911-550b17b44416&_gl=1*2nodai*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTA2MS4zLjAuMA..",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Frazer-cynosa-v2-02.webp?alt=media&token=ef449e5c-1bdc-4029-9aba-83f391d80a85&_gl=1*1a2uvqx*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTA2Ny42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Frazer-cynosa-v2-03.webp?alt=media&token=b54ceed9-4c09-4081-97a7-ff43e5f391f4&_gl=1*1fwuiqy*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTA3My41NC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Frazer-cynosa-v2-04.webp?alt=media&token=9659bca8-a0a4-4cce-a339-b33906d5366e&_gl=1*1sky3qz*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTA3OS40OC4wLjA.",
        ],
        basePrice: 352,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15,
      },
      {
        name: "Teclado Mecânico Gamer Razer Blackwidow V3 Tenkeyless Chroma, Switch Green Us",
        slug: "teclado-mecanico-gamer-razer-blackwidow-v3-tenkeyless-chroma-switch-green-us",
        description:
          "Desempenho médio em uma forma mais enxuta - entre no Razer BlackWidow V3 Tenkeyless. Continuando um legado icônico, este teclado compacto para jogos está equipado com nossos interruptores mecânicos Razer, mundialmente renomados, e com tecnologia Razer Chroma RGB, para um nível de precisão e personalização amado por jogadores de todo o mundo. Razer Green Mechanical Switch: Para uma execução precisa com um toque tátil. Desenvolvido por Razer Chroma RGB: Para iluminação personalizável e maior imersão no jogo. 80 milhões de vida útil de pressionamento de tecla: Para durabilidade de longa duração. Fator de forma compacto: Para uma configuração simplificada. Opções de roteamento de cabo: Para fácil gerenciamento de cabos. Teclas totalmente programáveis: Para perfis personalizados, combinações de teclas e macros.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Frazer-blackwindow-v3-tenkeyless-01.webp?alt=media&token=9d8547a5-6952-4ef6-a546-2f5f804bdf83&_gl=1*1b5jm4a*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzODk1OC40MS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Frazer-blackwindow-v3-tenkeyless-02.webp?alt=media&token=8aed1b2a-7c5c-4e18-b484-9e2af856d013&_gl=1*1ap7zr7*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTAwNC42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Frazer-blackwindow-v3-tenkeyless-03.webp?alt=media&token=a4336d6e-506f-4896-9106-f90cb628d777&_gl=1*rore38*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTAxMS41My4wLjA.",
        ],
        basePrice: 1244,
        categoryId: keyboardsCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Teclado Gamer Razer Huntsman Mini 60 Switch Purple Mercury",
        slug: "teclado-gamer-razer-huntsman-mini-60-switch-purple-mercury",
        description:
          "Entre em uma nova dimensão de ataque com o Razer Huntsman Mini, um teclado 60% para jogos com Switches ópticos Razer de última geração. Altamente portátil e ideal para setups dinamizados, com ele, você agora vivenciará um acionamento à velocidade da luz com nosso formato mais compacto até o momento. Oferecem acionamentos mais rápidos, mais leves e mais suaves do que os switches mecânicos, e duram mais porque exigem menos peças móveis que operam com menos fricção. Oferecendo toques de teclas instantâneos e suaves sem o impacto tátil, este design de 2ª geração exibe melhorias significativas na acústica do switch, com amortecedores de som para reduzir o ruído quando você vai fundo nas teclas. O Razer Huntsman Mini não tem a fileira de funções, o grupo de teclas de navegação e o teclado numérico presentes nos teclados tradicionais full size, mas, ainda assim, não perde nenhuma funcionalidade, pois todos esses comandos ainda são acessíveis por meio das funções secundárias e dos atalhos. Ideal para setups minimalistas ou menores onde o espaço na mesa é um luxo, sua estrutura compacta também significa que ele pode ser transportado com tranquilidade e posicionado mais facilmente durante o jogo, o que permite que você jogue com mais conforto.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Frazer-huntsman-mini-01.webp?alt=media&token=f4e9ee8d-c2a2-4fdf-8c0e-2acf8278d507&_gl=1*9j7q4m*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTA5Mi4zNS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Frazer-huntsman-mini-02.webp?alt=media&token=ba0fef4c-ea53-4cf0-a8ef-5b76415a03c5&_gl=1*cidpyp*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTEzMi42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Frazer-huntsman-mini-03.webp?alt=media&token=4fd32a87-7a2c-4689-bb32-1cc265e8e6a3&_gl=1*a5xlcy*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTEzNy41NS4wLjA.",
        ],
        basePrice: 1284,
        categoryId: keyboardsCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Teclado Mecânico Gamer Redragon Kumara, RGB, Switch Outemu Brown",
        slug: "teclado-mecanico-gamer-redragon-kumara-rgb-switch-outemu-brown",
        description:
          "O teclado mais vendido do Brasil, em sua versão RGB! A opção de qualidade, performance e benefício mais escolhida, com o padrão Double Shoot Injection. O teclado mecânico Kumara é a melhor opção de Custo x Benefício focada em alta performance e durabilidade para jogadores do mercado, em sua versão RGB, possui uma linda iluminação ajustável com 19 diferentes modos para combinar com o seu estilo. O Kumara é ideal para jogadores de alto nível e foi testado profissionalmente em competições por profissionais de E-Sports e é o primeiro teclado do mercado com sistema de marcação Double Shot Injection para uma durabilidade avançada mesmo sob o uso intenso. Sua construção combina metal e plástico ABS, e possui o conector USB banhado à ouro, que garantem maior durabilidade e qualidade na conexão.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Fredragon-kumara-01.webp?alt=media&token=d528fd59-3570-4fa2-ae0f-2d00d32b55bb&_gl=1*1exlsba*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTE4NC44LjAuMA..",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Fredragon-kumara-02.webp?alt=media&token=2c218739-ca44-4e07-83fe-35e838181994&_gl=1*1mrt5o5*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTE5Mi42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Fredragon-kumara-03.webp?alt=media&token=87534fd2-9dda-438e-a49f-9e05f76e3b43&_gl=1*1hgrmln*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTE5OS41My4wLjA.",
        ],
        basePrice: 294,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15,
      },
      {
        name: "Teclado Gamer Redragon Lakshmi, Switch Brown, Layout 60%, ABNT2 , Preto",
        slug: "teclado-gamer-redragon-lakshmi-switch-brown-layout-60-abnt2-preto",
        description:
          "Para os gamers que procuram deixar o máximo de espaço possível sobre a mesa, o Redragon Lakshmi vem no layout compacto 60% ABNT2. Contando com um cabo removível USB-C, o Lakshmi é um modelo muito portátil para aqueles usuários que buscam praticidade na hora levar seus equipamentos. Sem deixar de lado a qualidade na sua construção, as keycaps do Lakshmi são feitas com o método de double shot injection para a longevidade das marcações.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Fredragon-lakshmi-01.webp?alt=media&token=5d3829cb-a7ba-4293-a758-6d2f01f057a2&_gl=1*nxnq2t*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTI1OC42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Fredragon-lakshmi-02.webp?alt=media&token=bf5a846f-cf0f-485d-b95e-3750d51bf633&_gl=1*1ta0gom*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTI2NS41My4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Fredragon-lakshmi-03.webp?alt=media&token=406d8b31-7619-4eeb-aa01-5a1d07cb6e39&_gl=1*1erlluy*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTI3MC40OC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Fredragon-lakshmi-04.webp?alt=media&token=1f66603a-1e6c-412b-8ff9-bb68df044ac3&_gl=1*131d6ue*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTI3Ni40Mi4wLjA.",
        ],
        basePrice: 152,
        categoryId: keyboardsCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Teclado Gamer Redragon Shiva Membrane, RGB, ANSI",
        slug: "teclado-gamer-redragon-shiva-membrane-rgb-ansi",
        description:
          "O Redragon Shiva é feito especialmente para aqueles usuários que buscam um teclado silencioso para uso durante a jogatina. Sem economizar na iluminação, o Shiva traz um sistema RGB completo para os gamers que buscam estilo no seu equipamento. Misturando conforto e funcionalidades, este modelo possui 6 teclas macro dedicadas, apoio de pulso magnético e teclas multimídia.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Fredragon-shiva-01.webp?alt=media&token=cb43ae98-4080-4746-b48b-eb32afedab45&_gl=1*hxotok*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTMxMi42LjAuMA..",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Fredragon-shiva-02.webp?alt=media&token=9a9d482c-5480-4a41-96c6-e2d7fbdcc23e&_gl=1*1h26hzg*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTMxOS42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Fredragon-shiva-03.webp?alt=media&token=174fb557-3ce3-466e-8f58-b4771aa038d1&_gl=1*1r6z3b*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTMyNi41My4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/keyboards%2Fredragon-shiva-04.webp?alt=media&token=787e00b1-580c-481c-a29d-cb1bdca7ed2f&_gl=1*17istrw*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTMzMy40Ni4wLjA.",
        ],
        basePrice: 199,
        categoryId: keyboardsCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    // !Headphone
    const headsetsCategory = await prisma.category.create({
      data: {
        name: "Headsets",
        slug: "headsets",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fastro-a40-02.webp?alt=media&token=f9e42901-50a8-4a52-984c-39bdc1c29a7c&_gl=1*c99kmy*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTY5OS40LjAuMA..",
      },
    });

    const headsets = [
      {
        name: "Headset Gamer Logitech Astro A40, Áudio Dolby, USB, PS4, PC e MAC + Mixamp Pro Tr, Preto",
        slug: "logitech-zone-vibe-100",
        description:
          "O ASTRO A40 TR Headset + MixAmp Pro TR para PS4, PC e Mac é a solução de áudio premium para atletas de e-sports, criadores de conteúdo e streamers. Ele atende aos rigorosos padrões dos atletas de esportes para fidelidade de áudio, conforto e durabilidade. O MixAmp Pro TR possui processamento Dolby Audio e permite a comunicação livre de atrasos e interferência de som do jogo e comunicação de voz. Seus controles simples permitem o ajuste rápido das configurações de equilíbrio entre jogo e voz, determinando a altura do som dos jogos e bate-papos de voz ouvidos. O A40 TR chega como um headset open-back com microfone de precisão intercambiável e tags de fones personalizáveis.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fastro-a40-01.webp?alt=media&token=f3bb648d-9e92-44cb-ab4c-80aff26a9677&_gl=1*lta6ng*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTY0My42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fastro-a40-02.webp?alt=media&token=f9e42901-50a8-4a52-984c-39bdc1c29a7c&_gl=1*c99kmy*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTY5OS40LjAuMA..",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fastro-a40-03.webp?alt=media&token=9f373abd-6971-4f24-9649-6bf9ab474f35&_gl=1*81paw9*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTcyNy40Ni4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fastro-a40-04.webp?alt=media&token=74399b60-3543-4f16-a610-89823cf7bc31&_gl=1*1qfvsbo*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTczNC4zOS4wLjA.",
        ],
        basePrice: 2481,
        categoryId: headsetsCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Headset Gamer Redragon Lamia 2, RGB, 7.1, 40mm, Suporte Incluso - Branco",
        slug: "headset-gamer-redragon-lamia-2-rgb-7-1-40mm-suporte-incluso-branco-h320w-rgb",
        description:
          "Equipado com a incrível iluminação RGB Redragon Chroma Mark II o Lamia 2 Lunar White impressiona com tamanha beleza. Equipado com um sistema de som surround 7.1 virtual, o Lamia 2 Lunar White entrega uma excelente qualidade de aúdio, e uma ótima ambientalização. Earpads com espumas macias e confortáveis, o headset Lamia 2 Lunar White proporciona horas de jogabilidade com extremo conforto. Acompanhado de um exclusivo Headset Holder com detalhes em black piano. O Lumia 2 Lunar White vem pronto para a batalha.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Flamia-01.webp?alt=media&token=7004b17c-4a1b-48a0-be77-5c97daabd8d7&_gl=1*dm7kbw*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTc0Ny4yNi4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Flamia-02.webp?alt=media&token=dc0c05d8-8719-4980-925f-ac741a3b9036&_gl=1*c8mlc2*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTc4NS42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Flamia-03.webp?alt=media&token=a8652f98-8c03-48c7-9860-4e34318c21ac&_gl=1*1wvnavo*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTc5MC41NS4wLjA.",
        ],
        basePrice: 229,
        categoryId: headsetsCategory.id,
        discountPercentage: 5,
      },
      {
        name: "Headset Steelseries Arctis Nova Pro Xbox, Cancelamento de Ruído, Xbox Series X|S e Xbox One, PC, PS5 e PS4, Nintendo, Preto",
        slug: "headset-steelseries-arctis-nova-pro-xbox-cancelamento-de-ruido-xbox-series-x-s-e-xbox-one-pc-ps5-e-ps4-nintendo-preto",
        description:
          "Alcance níveis de áudio poderosos com o Nova Pro Acoustic System e os Drivers Premium de Alta Fidelidade aprimorados com o Software Sonar. O GameDAC Gen 2 com certificação de alta resolução eleva a experiência de áudio aumentando a resolução para um som 78% mais puro* com menor distorção para uma qualidade inédita em outros headsets para jogos *em comparação com o GameDAC Gen 1. A clareza máxima e a qualidade do som se unem no Nova Pro Acoustic System, elevando o nível do que significa áudio em jogos. Nossos engenheiros de áudio superaram os limites do desempenho lendário com os drivers de alta fidelidade premium, alcançando uma pureza de som diferente de qualquer outro headset para jogos.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fsteelseries-arctis-01.webp?alt=media&token=9f18c647-b1b0-4be7-b4c3-2ab1031b4d58&_gl=1*oicjnz*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTgwNi4zOS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fsteelseries-arctis-02.webp?alt=media&token=8f8eb800-074c-4ecf-af06-24078debf932&_gl=1*az1n8s*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTg0OC42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fsteelseries-arctis-03.webp?alt=media&token=d6a8115f-86bc-41cb-9cb9-e378ab66ec34&_gl=1*1cioa4x*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTg1Mi41Ni4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fsteelseries-arctis-04.webp?alt=media&token=ebb2166b-1c44-4155-83ab-7f2f3a1d6d60&_gl=1*1w0v2xh*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTg1Ny41MS4wLjA.",
        ],
        basePrice: 2117,
        categoryId: headsetsCategory.id,
        discountPercentage: 15,
      },
      {
        name: "Headset Sem Fio Gamer HyperX Cloud Stinger Core, Drivers 40mm, PS5 PS4 e PC, Branco e Azul",
        slug: "headset-sem-fio-gamer-hyperx-cloud-stinger-core-drivers-40mm-ps5-ps4-e-pc-branco-e-azul",
        description:
          "Desfrute da liberdade sem fio a um ótimo preço. O HyperX Cloud Stinger Core sem fio é leve, durável e pronto para jogar em sistemas PS4. Converse com seus amigos online e desfrute de uma comunicação clara com seu squad graças ao microfone com cancelamento de ruído. Mergulhe nos seus jogos e se perca no seu entretenimento de áudio com o som rico do Cloud Stinger Core. Ele também possui controles de áudio integrados no fone de ouvido e um prático microfone giratório para mudo. Desfrute da liberdade sem fio a um ótimo preço. O HyperX Cloud Stinger Core sem fio é leve, durável e pronto para jogar em sistemas PS4. Mergulhe nos seus jogos e se perca no seu entretenimento de áudio com o som rico do Cloud Stinger Core. Ele também possui controles de áudio integrados no fone de ouvido e um prático microfone giratório para mudo",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fstinger-01.webp?alt=media&token=df13469d-8112-4b2a-8b04-d9ace29fdb65&_gl=1*pd0kss*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTg3MS4zNy4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fstinger-02.webp?alt=media&token=a0cde09c-73f9-44a5-a867-73c32de8921b&_gl=1*1g22y61*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTkxNS42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fstinger-03.webp?alt=media&token=045bdd8e-b4c5-4f89-a3dd-b3bce6f3f738&_gl=1*1a7xc8a*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTkyMS41NC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fstinger-04.webp?alt=media&token=6b80cc57-128e-4789-a227-fe401d8982ad&_gl=1*1ajn1ht*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzOTkyNi40OS4wLjA.",
        ],
        basePrice: 499,
        categoryId: headsetsCategory.id,
        discountPercentage: 10, 
      },
      {
        name: "Headset Sem Fio Gamer Corsair Virtuoso Premium Carbono, RGB, Som Surround 7.1, Drivers 50mm, Múltiplas Plataformas",
        slug: "headset-sem-fio-gamer-corsair-virtuoso-premium-carbono-rgb-som-surround-7-1-drivers-50mm-multiplas-plataformas",
        description:
          "O CORSAIR VIRTUOSO RGB Wireless proporciona uma experiência de áudio de alta fidelidade e conforto o dia inteiro, por meio de seus auriculares premium em viscoelástico e conectividade ultrarrápida com a tecnologia SLIPSTREAM WIRELESS. De um leve passo a um retumbante som grave, você vai ouvir tudo melhor com o VIRTUOSO RGB Wireless. Um par combinado de drivers de alto-falante em neodímio de 50mm ajustados com precisão apresentam um intervalo de frequência de 20Hz-40.000Hz, o dobro da maioria dos headsets gamer. Auriculares premium de viscoelástico que se adaptam ao formato de sua cabeça, juntamente com um arco de cabeça leve, proporcionam um conforto suave e duradouro que lhe permite jogar por várias horas. A estrutura em alumínio usinado garante que o VIRTUOSO RGB Wireless ofereça a combinação perfeita de design leve, durabilidade robusta e conforto máximo.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fvirtuoso-01.webp?alt=media&token=297164f7-f1f7-4c7c-acc5-dca6fa4ef704&_gl=1*bbud66*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDAyOC42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fvirtuoso-02.webp?alt=media&token=37db19cc-0a32-4879-9f2f-cba768c292d6&_gl=1*1bvtq91*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDAzOC41MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fvirtuoso-03.webp?alt=media&token=0be2fa5a-7f5b-41a3-9dee-0965b0343d21&_gl=1*1apx8n9*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDA0Ni40Mi4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fvirtuoso-04.webp?alt=media&token=56f7efd0-dca9-4e48-89a4-06f8d76f4c6d&_gl=1*s8bt99*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDA1My4zNS4wLjA.",
        ],
        basePrice: 899,
        categoryId: headsetsCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Headset Gamer Redragon Zeus X, Chroma Mk.II, RGB, Surround 7.1, USB, Drivers 53MM, Preto/Vermelho",
        slug: "headset-gamer-redragon-zeus-x-chroma-mk-ii-rgb-surround-7-1-usb-drivers-53mm-preto-vermelho-h510-rgb",
        description:
          "Iluminação RGB Redragon Chroma Mk.II com 4 efeitos. Almofadas e revestimento interno do arco em tecido para proporcionar o máximo de conforto. Som estéreo e Surround 7.1 Virtual de alta qualidade pelos drivers de 53mm. Microfone com redução de ruído de fundo para captação clara e limpa. Controladora integrada para maior praticidade durante o uso. Compatível com software para ajustes e configurações personalizadas como equalização e controle de volume independente.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fzeus-01.webp?alt=media&token=7cab2357-b2ba-40a1-aa28-cd94ae728853&_gl=1*okze8q*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDEwNi41OS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fzeus-02.webp?alt=media&token=0a199e67-9aa9-4bfb-9f66-af70373b75cb&_gl=1*1skizlh*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDExMy41Mi4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fzeus-03.webp?alt=media&token=ca815c96-272e-4eac-b698-835d3c586fa0&_gl=1*dfbpwc*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDExOC40Ny4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/headphone%2Fzeus-04.webp?alt=media&token=a35b37fb-598c-44ec-9caf-ff033c93c9e7&_gl=1*14t2whz*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDEyNC40MS4wLjA.",
        ],
        basePrice: 435,
        categoryId: headsetsCategory.id,
        discountPercentage: 15,
      },
    ];

    await prisma.product.createMany({
      data: headsets,
    });

    // !cpu
    const cpuCategory = await prisma.category.create({
          data: {
            name: "Processadores",
            slug: "cpu",
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fryzen9-7950x3d-01.webp?alt=media&token=a7cfee57-6a0d-41d1-8139-97f572e0ff2b&_gl=1*q1iypz*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzExNS41OC4wLjA.",
          },
    });
    
    const cpu = [
          {
            name: "Intel Core i9 12900K 3.2GHz (5.2GHz Turbo), 12ª Geração, 16-Cores 24-Threads, LGA 1700, Sem Cooler",
            slug: "intel-core-i9-12900k-32ghz-52ghz-turbo-12-geracao-16-cores-24-threads-lga-1700",
            description:
              "O processador Intel Core i9-12900K é um componente de alto desempenho da 12ª geração da família Intel Core. Com 16 núcleos e 24 threads, ele oferece uma notável capacidade de processamento, tornando-o adequado para uma ampla gama de tarefas. Com uma frequência base de 3.2GHz e uma frequência turbo de 5.2GHz, o i9-12900K é capaz de fornecer um desempenho excepcional em tarefas que variam desde jogos de última geração até cargas de trabalho de produtividade intensiva. Este processador utiliza o soquete LGA 1700, o que significa que requer uma placa-mãe compatível com LGA 1700 para operar. É importante notar que o i9-12900K é fornecido 'sem cooler' o que implica que você precisará adquirir um sistema de resfriamento separadamente para manter as temperaturas sob controle durante o uso intenso. O Intel Core i9-12900K é uma escolha excelente para entusiastas e profissionais que buscam desempenho de ponta em suas tarefas computacionais, seja em jogos, edição de vídeo, modelagem 3D ou outras aplicações que exijam poder de processamento. Certifique-se de verificar a compatibilidade com a placa-mãe ao montar seu sistema.",
            imageUrls: [
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fi9-12900k-01.webp?alt=media&token=7eefc0b8-9e83-40b1-a073-47bf62f58511&_gl=1*13wb50y*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzEzMi40MS4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fi9-12900k-02.webp?alt=media&token=92df82c9-9da3-4cb7-bb9d-c14023729f12&_gl=1*ccx2f5*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzIzNi41NC4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fi9-12900k-03.webp?alt=media&token=d1e84e98-113a-4342-bb25-374a998da78a&_gl=1*t8a2y0*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzI0My40Ny4wLjA.",
            ],
            basePrice: 6718,
            categoryId: cpuCategory.id,
            discountPercentage: 35, 
          },
          {
            name: "Intel Core i9 12900KF 3.2GHz (5.2GHz Turbo), 12ª Geração, 16-Cores 24-Threads, LGA 1700, Sem Cooler",
            slug: "intel-core-i9-12900kf-32ghz-52ghz-turbo-12-geracao-16-cores-24-threads-lga-1700",
            description:
              "O processador Intel Core i9-12900KF é uma unidade de processamento de alta performance da 12ª geração da família Intel Core. Com 16 núcleos e 24 threads, ele oferece uma potência de processamento significativa para lidar com uma ampla gama de tarefas computacionais. Com uma frequência base de 3.2GHz e uma frequência turbo de 5.2GHz, o i9-12900KF é capaz de entregar um desempenho excepcional em tarefas que variam desde jogos de última geração até tarefas de produtividade intensiva. Este processador utiliza o soquete LGA 1700, o que significa que requer uma placa-mãe compatível com LGA 1700 para operar. Vale destacar que o i9-12900KF é fornecido 'sem cooler,' o que significa que você precisará adquirir um sistema de resfriamento separadamente para manter as temperaturas sob controle durante o uso intenso. O Intel Core i9-12900KF é uma excelente escolha para entusiastas e profissionais que buscam um alto desempenho em suas tarefas computacionais, seja em jogos, edição de vídeo, ou outros aplicativos que exijam poder de processamento. Certifique-se de verificar a compatibilidade com a placa-mãe ao montar seu sistema.",
            imageUrls: [
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fi9-12900kf-01.webp?alt=media&token=c80aebeb-8345-4db4-8724-9a6ee2ae640a&_gl=1*11dcnmx*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzI5OC41OS4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fi9-12900kf-02.webp?alt=media&token=e630d3bd-dc8a-4281-a57e-819a31d18d09&_gl=1*g0i8wn*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzMwNS41Mi4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fi9-12900kf-03.webp?alt=media&token=63b0d53a-fa29-4c72-bfc9-0e8bef4e727b&_gl=1*f47wja*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzMxMi40NS4wLjA.",
            ],
            basePrice: 5716,
            categoryId: cpuCategory.id,
            discountPercentage: 35,
          },
          {
            name: "Intel Core i9 13900K 3.0GHz (5.8GHz Turbo), 13ª Geração, 24-Core 32-Threads, LGA 1700",
            slug: "intel-core-i9-13900k-30ghz-58ghz-turbo-13-geracao-24-core-32-threrads-lga-1700",
            description:
              "O processador Intel Core i9-13900K é uma unidade de processamento de alto desempenho da 13ª geração da família Intel Core. Com uma frequência base de 3.0GHz e uma frequência turbo de impressionantes 5.8GHz, este processador oferece um poder de processamento excepcional que o torna adequado para uma ampla gama de tarefas computacionais, desde jogos de última geração até cargas de trabalho de produtividade intensiva. Com 24 núcleos e 32 threads, o i9-13900K é capaz de lidar com multitarefa de alto desempenho, tornando-o uma escolha ideal para jogos, edição de vídeo, modelagem 3D e muito mais. O processador utiliza o soquete LGA 1700, o que significa que você precisará de uma placa-mãe compatível com o LGA 1700 para operá-lo. O Intel Core i9-13900K é uma escolha excepcional para entusiastas e profissionais que buscam um desempenho de nível superior em suas tarefas computacionais. Sua alta contagem de núcleos e threads, juntamente com a frequência turbo impressionante, o tornam uma opção poderosa para qualquer sistema de computador de alto desempenho. Certifique-se de verificar a compatibilidade com a placa-mãe ao montar seu sistema.",
            imageUrls: [
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fi9-13900k-01.webp?alt=media&token=0e64725b-cff6-4149-b23b-9b49754e35e1&_gl=1*15s8fed*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzM4OC42MC4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fi9-13900k-02.webp?alt=media&token=ee6091f2-f155-49bd-b280-be51bad74b6d&_gl=1*vs6oqd*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzM5OC41MC4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fi9-13900k-03.webp?alt=media&token=8a79cfd4-c98e-445d-98f6-e2f937030170&_gl=1*1qifahn*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzQwNC40NC4wLjA.",
            ],
            basePrice: 6549,
            categoryId: cpuCategory.id,
            discountPercentage: 20, 
          },
          {
            name: "AMD Ryzen 5 5600 3.5GHz (4.4GHz Turbo), 6-Cores 12-Threads, Cooler Wraith Stealth, AM4",
            slug: "ryzen-5-5600-35ghz-44ghz-turbo-6-cores-12-threads-cooler-wraith-stealth-am4",
            description:
              "O processador AMD Ryzen 5 5600 é uma unidade de processamento de alto desempenho projetada para atender às necessidades de uma ampla gama de usuários. Com uma frequência base de 3.5GHz e uma frequência de turbo de 4.4GHz, este processador oferece um ótimo equilíbrio entre desempenho e eficiência. Com 6 núcleos e 12 threads, o Ryzen 5 5600 é capaz de lidar com tarefas variadas, desde jogos até tarefas de produtividade. O cooler Wraith Stealth incluído é uma solução de resfriamento eficaz que mantém as temperaturas sob controle, permitindo um funcionamento suave e silencioso. O Ryzen 5 5600 é compatível com soquete AM4, tornando-o adequado para uma ampla variedade de placas-mãe. Este processador é uma escolha sólida para construir um sistema de computador eficiente, equilibrando desempenho e valor. Se você está em busca de um processador capaz de lidar com uma variedade de tarefas diárias, o Ryzen 5 5600 é uma opção confiável.",
            imageUrls: [
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fryzen5-3600-01.webp?alt=media&token=52525f87-6e53-40aa-864a-fcf71652022f&_gl=1*1oznbus*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzQ3NC42MC4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fryzen5-3600-02.webp?alt=media&token=3e694edb-fc00-4672-bb11-25c3662abea7&_gl=1*1s6g8x4*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzQ4Mi41Mi4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fryzen5-3600-03.webp?alt=media&token=5ff72938-11a1-4252-a020-04b8a82fe8c1&_gl=1*1aa9aa*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzQ5OC4zNi4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fryzen5-3600-04.webp?alt=media&token=227ccaa5-8c7c-4d80-862f-2f208a73e21d&_gl=1*18uk1cc*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzUwNi4yOC4wLjA.",
            ],
            basePrice: 1750,
            categoryId: cpuCategory.id,
            discountPercentage: 35,
          },
          {
            name: "AMD Ryzen 7 7700 3.8GHz (5.3GHz Turbo), 8-Cores 16-Threads, AM5, Com Cooler AMD Wraith Prism",
            slug: "ryzen-7-7700-38ghz-53ghz-turbo-8-cores-16-threads-am5-com-cooler-amd-wraith-prism",
            description:
              "O processador AMD Ryzen 7 7700 é uma poderosa unidade de processamento projetada para oferecer desempenho de alto nível. Com uma frequência base de 3.8GHz e uma frequência turbo impressionante de 5.3GHz, este processador é capaz de lidar com uma ampla variedade de tarefas de computação com facilidade. Equipado com 8 núcleos e 16 threads, o Ryzen 7 7700 oferece um excelente desempenho multitarefa, tornando-o adequado para jogos exigentes, edição de vídeo, modelagem 3D e muito mais. O processador utiliza o soquete AM5 e vem com o cooler AMD Wraith Prism incluído. Este cooler é uma solução de resfriamento eficaz que mantém o processador em temperaturas ideais, permitindo um funcionamento suave e silencioso. O AMD Ryzen 7 7700 é uma escolha sólida para quem busca um desempenho de alto nível em um processador que atenderá às demandas das tarefas mais intensivas. É uma escolha confiável para montar um sistema de computador poderoso e versátil.",
            imageUrls: [
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fryzen7-7700-01.webp?alt=media&token=a8c4043d-11a5-47d6-b330-e8c6ab514b66&_gl=1*1l0ykri*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzU2Ny41NS4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fryzen7-7700-02.webp?alt=media&token=cc648b7f-9108-497f-a774-c90dcfc82eb8&_gl=1*1g9k1me*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzU3My40OS4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fryzen7-7700-03.webp?alt=media&token=8d7975dc-97b3-4b65-8492-9e713695cc56&_gl=1*8938et*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzU3OS40My4wLjA.",
            ],
            basePrice: 3499,
            categoryId: cpuCategory.id,
            discountPercentage: 28,
          },
          {
            name: "AMD Ryzen 9 7950X3D, 4.2GHz (5.7GHz Turbo), 16-Cores 32-Threads, AM5, Sem Cooler",
            slug: "amd-ryzen-9-7950x3d-42ghz-57ghz-turbo-16-cores-32-threads-am5-sem-cooler",
            description:
              "O processador AMD Ryzen 9 7950 é um chip de alto desempenho projetado para entregar potência de processamento excepcional. Com uma frequência de base de 4.2GHz e uma frequência de turbo impressionante de 5.7GHz, este processador é capaz de lidar com uma ampla gama de tarefas computacionais com facilidade. Com 16 núcleos e 32 threads, o Ryzen 9 7950 é uma escolha ideal para jogos intensivos, edição de vídeo, renderização 3D e tarefas de produtividade. Sua capacidade de multitarefa é notável, tornando-o adequado para qualquer usuário que exija desempenho de ponta. O AMD Ryzen 9 7950 é um componente fundamental para qualquer sistema de alto desempenho, oferecendo uma potência excepcional para enfrentar as cargas de trabalho mais desafiadoras. Se você busca desempenho de nível superior em seu PC, o Ryzen 9 7950 é uma opção que não decepcionará.",
            imageUrls: [
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fryzen9-7950x3d-01.webp?alt=media&token=a7cfee57-6a0d-41d1-8139-97f572e0ff2b&_gl=1*n6ut8h*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzY2Ny42MC4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fryzen9-7950x3d-02.webp?alt=media&token=d45828d7-f616-4f56-8960-9a5c24038475&_gl=1*1exjdmp*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzY3Ny41MC4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fryzen9-7950x3d-03.webp?alt=media&token=5b0044d2-a4b8-4ac4-aff9-af76d13f009a&_gl=1*qo8db1*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzcwNC4yMy4wLjA.",
              "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/cpu%2Fryzen9-7950x3d-04.webp?alt=media&token=6384d788-ebd4-4a38-9e3b-11a661049d5e&_gl=1*m8r5ez*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODMzNzcxNC4xMy4wLjA.",
            ],
            basePrice: 7999,
            categoryId: cpuCategory.id,
            discountPercentage: 25,
          },
    ];
    
    await prisma.product.createMany({
          data: cpu,
    });

    // !gpu
    const gpuCategory = await prisma.category.create({
      data: {
        name: "Placas de Vídeo",
        slug: "gpu",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fgigabyte-4070-01.webp?alt=media&token=be86340b-1185-4279-8708-50fb935c3fc3&_gl=1*fvxfht*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTYwOC41Ni4wLjA.",
      },
    });

    const gpu = [
      {
        name: "Placa de Vídeo RTX 4060 TI O16G Gaming ROG-STRIX, 16GB GDDR6, ARGB, DLSS, Ray Tracing",
        slug: "placa-de-video-rtx-4060-ti-o16g-gaming-rog-strix-16gb-gddr6-argb-dlss-ray-tracing",
        description:
          "A ROG Strix GeForce RTX 4060 Ti traz um significado totalmente novo para seguir o fluxo. Por dentro e por fora, todos os elementos da placa fornecem espaço monstruoso para a GPU respirar livremente e alcançar o desempenho máximo. O reinado da arquitetura NVIDIA Ada Lovelace chegou. Maiores e melhores. As ventoinhas Axial Tech giram em rolamentos de esferas duplas e foram dimensionadas para impulsionar 21% mais ar através da placa, preparando o cenário para temperaturas mais baixas, menos ruído e maior desempenho. As duas ventoinhas laterais giram no sentido anti-horário para minimizar a turbulência e maximizar a dispersão do ar através do dissipador de calor. Todas as três ventoinhas param quando a temperatura da GPU está abaixo de 50 graus Celsius, permitindo que você jogue games menos exigentes ou execute tarefas leves em relativo silêncio. As ventoinhas ligam novamente quando as temperaturas ultrapassam 55C, referenciando uma curva de velocidade que equilibra desempenho e acústica para trabalho ou lazer.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fasus-rog-01.webp?alt=media&token=1047e4a9-fc28-4d66-9317-00d41a79d1e0&_gl=1*smgslk*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDUzNi42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fasus-rog-02.webp?alt=media&token=480ad37a-d7ae-4657-b6d4-58ce70ae4d8f&_gl=1*10asiyj*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDc2OS42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fasus-rog-03.webp?alt=media&token=60388556-76db-4fe0-93ee-85160409f82f&_gl=1*w5isl3*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDc3NS41NC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fasus-rog-04.webp?alt=media&token=99c4f6e6-b4e1-42c9-b2bc-e4089e82d4f0&_gl=1*sinxyz*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDc3OS41MC4wLjA.",
        ],
        basePrice: 4941,
        categoryId: gpuCategory.id,
        discountPercentage: 20,
      },
      {
        name: "Placa de Vídeo RTX 4070 Ti Asus TUF Gaming NVIDIA GeForce, 12 GB GDDR6X, ARGB, DLSS, Ray Tracing",
        slug: "placa-de-video-rtx-4070-ti-asus-tuf-gaming-nvidia-geforce-12-gb-gddr6x-argb-dlss-ray-tracing",
        description:
          "A Placa de Vídeo Asus TUF Gaming NVIDIA GeForce RTX 4070 Ti é uma escolha sólida para jogadores que desejam uma experiência de jogo de alta qualidade e desempenho impressionante. Equipada com 12GB de memória GDDR6X e as tecnologias de ponta DLSS e Ray Tracing, esta placa de vídeo proporciona gráficos realistas e uma jogabilidade fluida. O design robusto da série TUF Gaming garante confiabilidade e durabilidade, tornando-a perfeita para sessões de jogo prolongadas. Com a Asus TUF Gaming RTX 4070 Ti, você pode mergulhar em jogos e projetos criativos com visuais deslumbrantes e um desempenho de primeira linha.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fasus-tuf-01.webp?alt=media&token=50d22cf1-ce2e-4bcd-a4e7-4ae2d7e406c9&_gl=1*wkaeth*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDc5NS4zNC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fasus-tuf-02.webp?alt=media&token=aac6f0f9-c3a2-48c1-b8ec-4526c7eca6d0&_gl=1*ekb8yk*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDg3My42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fasus-tuf-03.webp?alt=media&token=d636d77b-6519-4408-a753-5ecb0b89bb81&_gl=1*1hxjks3*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDg3OC41NS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fasus-tuf-04.webp?alt=media&token=58d1d52c-fe5c-4d72-8f30-08f11e78b9c6&_gl=1*gnswli*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDg4Ni40Ny4wLjA.",
        ],
        basePrice: 6999,
        categoryId: gpuCategory.id,
        discountPercentage: 10, 
      },
      {
        name: "Placa de Video Gigabyte GeForce RTX 4070 Ti AORUS MASTER, 12GB, GDDR6X, DLSS, Ray Tracing",
        slug: "placa-de-video-gigabyte-geforce-rtx-4070-ti-aorus-master-12gb-gddr6x-dlss-ray-tracing",
        description:
          "A NVIDIA GeForce RTX 4070 oferece o ultra desempenho e os recursos que os gamers e criadores entusiastas exigem. Dê vida aos seus jogos e projetos criativos com ray tracing e gráficos com inteligência artificial. Ele é alimentado pela arquitetura ultra-eficiente NVIDIA Ada Lovelace e até 12 GB de memória G6X super-rápida. O DLSS é um revolucionário avanço gráfico fornecido por AI que aumenta imensamente o desempenho. Aprimorado com os novos Tensor Cores de quarta geração e o Optical Flow Accelerator nas GPUs GeForce RTX Série 40, o DLSS 3 usa AI para criar quadros adicionais de alta qualidade.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fgigabyte-4070-01.webp?alt=media&token=be86340b-1185-4279-8708-50fb935c3fc3&_gl=1*swmqic*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MDg5NS4zOC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fgigabyte-4070-02.webp?alt=media&token=d5df9179-f183-46fa-a6ee-d7b2297855a7&_gl=1*g5oros*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTAwMC42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fgigabyte-4070-03.webp?alt=media&token=65a3e923-6fb4-423a-8fcd-b3889f53ca35&_gl=1*1dnphnh*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTAwNy41My4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fgigabyte-4070-04.webp?alt=media&token=7d9482e4-a3d5-4613-92e9-96157f79a99b&_gl=1*ydh14o*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTAxMy40Ny4wLjA.",
        ],
        basePrice: 10899,
        categoryId: gpuCategory.id,
        discountPercentage: 25, 
      },
      {
        name: "Placa de Video Leadtek WinFast 4080 HURRICANE, 16GB, GDDR6X, DLSS, Ray Tracing",
        slug: "placa-de-video-leadtek-winfast-4080-hurricane-16gb-gddr6x-dlss-ray-tracing",
        description:
          "A NVIDIA GeForce RTX 4080 oferece o ultra desempenho e os recursos que os gamers e criadores entusiastas exigem. Dê vida aos seus jogos e projetos criativos com ray tracing e gráficos com inteligência artificial. Ele é alimentado pela arquitetura ultra-eficiente NVIDIA Ada Lovelace e até 16 GB de memória G6X super-rápida. A arquitetura Ada libera toda a glória do Ray Tracing, simulando o comportamento da luz no mundo real. Com o poder da RTX Série 40 e dos RT Cores de Terceira Geração, você pode experimentar mundos virtuais incrivelmente detalhados como nunca antes.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fleadtek-winfast-01.webp?alt=media&token=9ebb9da0-5dba-47c3-b33e-3e101b418130&_gl=1*ru06wa*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTAyMi4zOC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fleadtek-winfast-02.webp?alt=media&token=19bf934b-6f60-4596-9f25-8dca7d159c03&_gl=1*1ci2gcg*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTA5MS42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fleadtek-winfast-03.webp?alt=media&token=e26e29a1-626a-4ebb-917b-7fe205743cc0&_gl=1*2vqwud*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTA5Ny41NC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fleadtek-winfast-04.webp?alt=media&token=fb9b12e2-0d8c-4dc2-95ca-3f9b69e19f97&_gl=1*wbb99e*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTEwNi40NS4wLjA.",
        ],
        basePrice: 13999,
        categoryId: gpuCategory.id,
        discountPercentage: 35, // 10% discount
      },
      {
        name: "Placa De Vídeo RTX 4070TI OC Xlr8 PNY Nvidia, 12GB, GDDR6x, RGB",
        slug: "placa-de-video-rtx-4070ti-oc-xlr8-pny-nvidia-12gb-gddr6x-rgb",
        description:
          "A nova arquitetura nvidia ada lovelace oferece um salto quântico em desempenho, eficiência e gráficos baseados em ia. Possui novos multiprocessadores streaming, núcleos ray tracing de 3 geração e núcleos tensores de 4 geração. Ele é construído em um novo processo tsmc 4n personalizado, roda com clocks extremamente rápidos e possui um grande cache l2. Ele permite rastreamento de raio rápido, novas maneiras de criar e muito mais. Com iluminação eletrizante epic-x rgb, para a melhor experiência de iluminação controlável com infinitas possibilidades de iluminação argb.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fpny-4070-01.webp?alt=media&token=12ba4627-4cb6-4c96-93b2-2e1fdb046d4a&_gl=1*klhkbx*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTEyOC4yMy4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fpny-4070-02.webp?alt=media&token=543e2a87-fdcf-4b73-b13b-31473d39e2e3&_gl=1*193an3e*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTE4MS42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fpny-4070-03.webp?alt=media&token=3a1f44cf-9d26-4712-96a3-44cbd6093f72&_gl=1*1po0dr*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTE4Ny41NC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Fpny-4070-04.webp?alt=media&token=939b4bbe-3fbe-4c91-b405-db3eeda838b0&_gl=1*xa8evb*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTE5My40OC4wLjA.",
        ],
        basePrice: 6134,
        categoryId: gpuCategory.id,
        discountPercentage: 0, 
      },
      {
        name: "Placa de Vídeo Gigabyte NVIDIA GeForce RTX 4070 WINDFORCE OC, 12GB, GDDR6X, DLSS, Ray Tracing",
        slug: "placa-de-video-gigabyte-nvidia-geforce-rtx-4070-windforce-oc-12gb-gddr6x-dlss-ray-tracing",
        description:
          "A NVIDIA GeForce RTX 4070 oferece o ultra desempenho e os recursos que os gamers e criadores entusiastas exigem. Dê vida aos seus jogos e projetos criativos com ray tracing e gráficos com inteligência artificial. Ele é alimentado pela arquitetura ultra-eficiente NVIDIA Ada Lovelace e até 12 GB de memória G6X super-rápida. Leve seus projetos criativos a um novo nível com o NVIDIA Studio. Impulsionada por um novo hardware dedicado, a RTX Série 40 oferece um desempenho imcomparável em renderizações 3D, edição de vídeo e design gráfico. Experimente recursos avançados acelerados por RTX nos principais softwares criativos, drivers NVIDIA Studio desenvolvidos para oferecer máxima estabilidade, e um confunto de ferramentas exclusivas que utiliza todo o poder da RTX para fluxos de trabalho criativos otimizados por AI.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Frtx-4070-01.webp?alt=media&token=9b8b77d5-edbd-4801-bf8d-e2c455fafb1d&_gl=1*1gcqsp2*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTIxNC4yNy4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Frtx-4070-02.webp?alt=media&token=61c09968-839d-48c2-8740-d31552f01181&_gl=1*8puw8b*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTMxNi42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Frtx-4070-03.webp?alt=media&token=3568fca7-8502-4024-bc51-f05d1f5f4598&_gl=1*nspo8*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTMyMi41NC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/gpu%2Frtx-4070-04.webp?alt=media&token=905b923e-9b3b-4d43-a98f-33bee179aefe&_gl=1*hqy3kw*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTMyOS40Ny4wLjA.",
        ],
        basePrice: 6299,
        categoryId: gpuCategory.id,
        discountPercentage: 35, 
      },
    ];

    await prisma.product.createMany({
      data: gpu,
    });

    // !Motherboard
    const motherboardsCategory = await prisma.category.create({
      data: {
        name: "Placas Mãe",
        slug: "motherboards",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fgigabyte-z790-01.webp?alt=media&token=c7d908f1-431b-4cdd-b702-e9566890f717&_gl=1*lv8kl9*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTU2OS4zNC4wLjA.",
      },
    });

    const motherboards = [
      {
        name: "Placa Mãe Gigabyte B550M Aorus Elite, AMD AM4, Micro ATX, DDR4",
        slug: "placa-mae-gigabyte-b550m-aorus-elite-amd-am4-micro-atx-ddr4",
        description:
          "As placas-mãe da série de jogos B550 usam um design de MOSFETs PWM + baixo RDS (on) digital de 5 + 3 fases para oferecer suporte aos processadores AMD Ryzen de 3ª geração, oferecendo incrível precisão no fornecimento de energia aos componentes que mais demandam energia, além de oferecer desempenho aprimorado do sistema. Com os conectores NVMe PCIe 4.0 * / 3.0 x4 e PCIe 3.0 x2 M.2, as placas-mãe GIGABYTE levam os usuários a experimentar o modo NVMe ou a conectividade no modo SATA para dispositivos SSD M.2. Com velocidade de transferência de dados de até 64 Gb / s, o design de dois conectores M.2 fornece uma solução de armazenamento ideal, além de oferecer suporte nos modos RAID. As placas-mãe GIGABYTE usam capacitores de áudio de última geração. Esses capacitores de alta qualidade ajudam a fornecer áudio de alta resolução e alta fidelidade para fornecer os efeitos sonoros mais realistas para os jogadores.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Faorus-b550m-01.webp?alt=media&token=5b365c6f-6033-45eb-adb7-5df041c80222&_gl=1*36t7mq*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTQ2NS4xMS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Faorus-b550m-02.webp?alt=media&token=b680d694-fdb8-4344-9a4f-91088dcaeb75&_gl=1*lfoime*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTU0My42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Faorus-b550m-03.webp?alt=media&token=f62113b2-d01c-4504-9f06-fb9a0e6e8be0&_gl=1*vpn9nw*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTU0OS41NC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Faorus-b550m-04.webp?alt=media&token=0fd4c7d6-3839-4838-8f15-0594998eded6&_gl=1*aon5pa*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTU1NC40OS4wLjA.",
        ],
        basePrice: 999,
        categoryId: motherboardsCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Placa Mãe Gigabyte B760M Gaming X, Intel, Micro ATX, DDR4",
        slug: "placa-mae-gigabyte-b760m-gaming-x-1-0-intel-micro-atx-ddr4-b760m-gaming-x-ddr4",
        description:
          "O desempenho sem aceleração das placas-mãe GIGABYTE é garantido pelo design térmico inovador e otimizado para garantir a melhor estabilidade de CPU, Chipset, SSD e baixas temperaturas sob aplicativos de carga total e desempenho de jogos. As placas-mãe GIGABYTE permitem a melhor experiência de conexão com velocidades incríveis de transferência de dados através da próxima geração de rede e armazenamento. Fornece durabilidade do produto e processo de fabricação de alta qualidade. As placas-mãe GIGABYTE usam os melhores componentes e reforçam todos os slots para torná-los sólidos e duráveis. Ajuda os usuários a controlar todos os aspectos da placa-mãe e fornecer efeitos de iluminação personalizáveis ??com estética excepcional para se adequar à sua personalidade única.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Faorus-b760m-01.webp?alt=media&token=4ab56600-af33-4830-82ce-1422d22452bd&_gl=1*bpifsv*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTYyNy4zNy4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Faorus-b760m-02.webp?alt=media&token=d5366bfa-2a6e-42c9-a273-276f63ea09ce&_gl=1*1aiod1v*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTcyMS42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Faorus-b760m-03.webp?alt=media&token=0620fa83-9a63-437c-838b-10268ec252c7&_gl=1*1k3kdjn*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTcyNi41NS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Faorus-b760m-04.webp?alt=media&token=be75b8c3-b1e1-4019-95d9-9c8823cc82b4&_gl=1*1t54qvx*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTczMC41MS4wLjA.",
        ],
        basePrice: 1269,
        categoryId: motherboardsCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Placa Mãe ASRock X670E Taichi, AMD, ATX, DDR5",
        slug: "placa-mae-asrock-x670e-taichi-amd-atx-ddr5",
        description:
          "Todas as placas-mãe X670E são construídas com 8 camadas e materiais premium de baixa perda, os entusiastas podem aproveitar o aumento do desempenho de overclock da memória DDR5 de até 6600MHz e além, habilitando os perfis pré-testados. Certifique-se de que os módulos de memória sejam compatíveis com AMD EXPO/Intel  XMP e que o overclocking seja acessível, satisfatório e absolutamente sem complicações. Equipada com um dissipador de VRM composto, combinando uma ventoinha de resfriamento, dissipador de alumínio maior e tubo de calor para máxima dissipação.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fasrock-x670e-01.webp?alt=media&token=6d974014-0ed1-44ab-888c-216b05d57718&_gl=1*1jxm25d*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTc0Ny4zNC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fasrock-x670e-02.webp?alt=media&token=0a099871-a72d-4828-abe0-d4ca41aa2ee1&_gl=1*1gcyjhg*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTgyMi42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fasrock-x670e-03.webp?alt=media&token=1257c3ec-9e8b-429d-bc25-c742f3224d27&_gl=1*1e80zcn*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTgyNy41NS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fasrock-x670e-04.webp?alt=media&token=fc7b9111-a4b6-41d4-b013-140afe453fca&_gl=1*fstdtb*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTgzMi41MC4wLjA.",
        ],
        basePrice: 4318,
        categoryId: motherboardsCategory.id,
        discountPercentage: 5, 
      },
      {
        name: "Placa Mãe Asus PRIME B650M-A, Chipset B650, AMD AM5, mATX, DDR5",
        slug: "placa-mae-asus-prime-b650m-a-chipset-b650-amd-am5-matx-ddr5",
        description:
          "As placas-mãe da série ASUS Prime são habilmente projetadas para liberar todo o potencial dos processadores AMD Ryzen série 7000. Com um design de energia robusto, soluções abrangentes de refrigeração e opções de ajuste inteligentes, a PRIME B650M-A oferece aos usuários e montadores de PC DIY uma variedade de otimizações de desempenho por meio de recursos intuitivos de software e firmware. Várias camadas de PCB otimizam o gerenciamento de calor para componentes críticos, oferecendo mais espaço para impulsionar as CPUs além das velocidades padrão. As placas-mãe Prime B650 oferecem conectividade PCIe 4.0 Slot para as GPUs mais recentes. A largura de banda ampla e as velocidades de transmissão super rápidas permitem que você crie montagens ricas em recursos que podem lidar com cargas altas sem esforço.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fasus-prime-b650m-01.webp?alt=media&token=68ba47d2-f15b-4d95-a74a-eace34a4211e&_gl=1*b9n5tm*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTkxNC42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fasus-prime-b650m-02.webp?alt=media&token=d67b78c2-d7d9-4416-802b-61e51e36c8d6&_gl=1*ev96y1*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTkyMC41NC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fasus-prime-b650m-03.webp?alt=media&token=9b8fa98e-5523-495e-b5ae-334355802990&_gl=1*mgiwch*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTkyNS40OS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fasus-prime-b650m-04.webp?alt=media&token=af09972d-6ac7-48c1-b17f-623b630d9645&_gl=1*185qw9w*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MTkzMC40NC4wLjA.",
        ],
        basePrice: 2129,
        categoryId: motherboardsCategory.id,
        discountPercentage: 15, 
      },
      {
        name: "Placa Mãe Gigabyte X670 Aorus Elite AX, AMD AM5, ATX, DDR5, LED RGB, Bluetooth, Wi-Fi 6E",
        slug: "placa-mae-gigabyte-x670-aorus-elite-ax-amd-am5-atx-ddr5-led-rgb-bluetooth-wi-fi-6e",
        description:
          "Mega-Heatpipe e M.2 Thermal Guard?Para garantir a estabilidade de energia do VRM e o desempenho do SSD 25110 PCIe 5.0 M.2, EZ-Latch?Slot PCIe x16 e conectores M.2 com liberação rápida e design sem parafusos, redes rápidas: LAN de 2,5 GbE e Wi-Fi 6E 802.11ax. Conectividade estendida: HDMI, Dual USB-C 20 Gbps e suporte GIGABYTE USB4 AIC, Smart Fan 6: Possui vários sensores de temperatura, cabeçalhos de ventilador híbridos com FAN STOP, Q-Flash Plus: Atualize o BIOS sem instalar a CPU, memória e placa gráfica. Com o rápido movimento das mudanças tecnológicas, a GIGABYTE segue as últimas tendências e oferece aos clientes recursos avançados e tecnologias mais recentes. As placas-mãe GIGABYTE vêm com solução de energia atualizada, padrões de armazenamento mais recentes e conectividade excepcional para otimizar o desempenho para as necessidades de jogos. O desempenho sem aceleração das placas-mãe GIGABYTE é garantido pelo design térmico inovador e otimizado para garantir a melhor estabilidade de CPU, chipset, SSD e baixas temperaturas sob carga total e desempenho de jogos. As placas-mãe GIGABYTE permitem a melhor experiência de conexão com velocidades incríveis de transferência de dados através da rede, armazenamento e conectividade WIFI de próxima geração.",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fgigabyte-z790-01.webp?alt=media&token=c7d908f1-431b-4cdd-b702-e9566890f717&_gl=1*124921h*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MjAwMi42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fgigabyte-z790-02.webp?alt=media&token=6bb86c78-f573-4f55-9e4e-189ca4fa6e27&_gl=1*16qawjv*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MjAwOS41My4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fgigabyte-z790-03.webp?alt=media&token=4079f6de-b644-42f4-9a07-dc7d85b16a23&_gl=1*1h146nl*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MjAxNS40Ny4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fgigabyte-z790-04.webp?alt=media&token=e95ebcd0-22ee-450d-8af1-7004c9b08ad8&_gl=1*1upgph1*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MjAyMS40MS4wLjA.",
        ],
        basePrice: 2299,
        categoryId: motherboardsCategory.id,
        discountPercentage: 0, 
      },
      {
        name: "Placa Mãe ASRock B450M Steel Legend, Chipset B450, AMD AM4, mATX, DDR4",
        slug: "placa-mae-asrock-b450m-steel-legend-chipset-b450-amd-am4-matx-ddr4",
        description:
          "Placas-mãe de Steel Legend oferecem um desempenho estonteante e estética superior para comandar sua própria maneira de iluminação RGB e com um controle muito abrangente para executar os LEDs RGB Embutidos. Os slots PCI-E Avançados de Aço são montados com uma proteção sólida que previne qualquer interferência de sinal com placas de vídeo. Ele também assegura que placas de vídeo pesadas sejam bem instaladas nos slots PCI-E com segurança. Personalize sua placa mãe do seu jeito. Tanto as faixas de LED conectadas, os fans da CPU, os resfriadores, o chassi e qualquer dispositivo RGB podem ser ajustados ao seu gosto. Os dispositivos também podem ser sincronizados nos acessórios certificados pelo Polychrome RGB Sync .",
        imageUrls: [
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fsteel-legend-01.webp?alt=media&token=1c26f7d8-0408-49de-ad17-7cefe4ec1bb7&_gl=1*yvzhjn*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MjAzMy4yOS4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fsteel-legend-02.webp?alt=media&token=8db58b8c-5f3b-4e72-a969-f0c021784fbd&_gl=1*13clgav*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MjA5NS42MC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fsteel-legend-03.webp?alt=media&token=c928c180-4797-49f2-8547-e6dcbe484f8d&_gl=1*122cl4a*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MjEwMS41NC4wLjA.",
          "https://firebasestorage.googleapis.com/v0/b/gamtechimages001.appspot.com/o/motherboards%2Fsteel-legend-04.webp?alt=media&token=b0e1c12b-4f96-42e4-b872-d2c541bdd4bb&_gl=1*i498d0*_ga*MTM3MDI1ODQ5My4xNjk4MjY2NzA3*_ga_CW55HF8NVT*MTY5ODMzNTcxMy4zLjEuMTY5ODM0MjEwNy40OC4wLjA.",
        ],
        basePrice: 1269,
        categoryId: motherboardsCategory.id,
        discountPercentage: 30, 
      },
    ];

    await prisma.product.createMany({
      data: motherboards,
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
