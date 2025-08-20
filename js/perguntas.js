export const perguntas = [
    {
        enunciado: "Sua mãe te coloca de castigo por não sair de casa e tira seu videogame e celular, mas então te coloca para treinar futebol, com que intensidade é o treino?",
        alternativas: [
            {
                texto: "Não leva o treino a sério, mas vai.",
                afirmacao: [
                    "Você não se dedica, e apenas se diverte com o futebol."
                ],
                proxima: 1,
            },
            {
                texto: "Você leva o treino a sério e se dedica.",
                afirmacao: [
                    "Você leva os treinos a sério e acaba se destacando entre os outros."
                ],
                proxima: 1,
            },
        ]
    },
    {
        enunciado: "Seu treinador faz uma reunião em equipe para decidir quem será o novo capitão, e pergunta quem quer disputar isso, o que você faz?",
        alternativas: [
            {
                texto: "Você se oferece para ser o capitão",
                afirmacao: [
                    "O professor viu sua dedicação e sua qualidade e te escolhe para ser o novo capitão.",
                    "O professor gosta da sua confiança para se oferecer a ser capitão, mas sua falta de foco nos treinos faz você não ser escolhido.",
                ],
                proxima: 2,
            },
            {
                texto: "Você pensa não estar apto a isso.",
                afirmacao: [
                    "Seu professor pensou em conversar com você, mas ignora"
                ],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "Você conta para sua mãe que está focado e ela te tira do castigo",
        alternativas: [
            {
                texto: "Você não vê tanta graça no videogame",
                afirmacao: [
                    "Você continua focado em seu objetivo."
                ],
                proxima: 3,
            },
            {
                texto: "Você volta a jogar videogame.",
                afirmacao: [
                    "Você se vicia e perde seu foco no futebol."
                ],
                proxima: 3,
            },
        ]
    },
    {
        enunciado: "É seu último jogo do ano e você está cara a cara com o goleiro, o que você faz?",
        alternativas: [
            {
                texto: "Você toca a bola pro seu amigo",
                afirmacao: [
                    "Ele erra e seu time perde.",
                    "Você erra o passe e seu time perde."
                ],
                proxima: 4,
            },
            {
                texto: "Você chuta.",
                afirmacao: [
                    "Você erra",
                    "Você faz o gol,seu time ganha e você é convidado para jogar na europa."
                ],
                proxima: 4,
            },
        ]
    }]