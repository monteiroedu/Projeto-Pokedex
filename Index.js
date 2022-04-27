import express from "express"
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const __dirname = path.resolve(path.dirname(''))

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, ()=>console.log(`Server function in http://localhost:${PORT} `));

let pokemon = [{
        id: 1,
        nome: "Pikachu",
        categoria: "Mouse",
        descrição: 'Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.',
        altura: '.4m',
        peso: '6kg',
        tipo: "Elétrico",
        habilidade: 'Estático',
        iframe: 'width=560 height=315 src=https://www.youtube.com/embed/_1TBy7UIDEE title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen',
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    },
    {
        id: 2,
        nome: "Charmander",
        categoria: "Lizard",
        descrição: 'Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.',
        altura: '.6m',
        peso: '8.5kg',
        tipo: "Fogo",
        habilidade: 'Chama',
        iframe: 'width=560 height=315 src=https://www.youtube.com/embed/TGWoIAB41yE title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen',
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },
    {
        id: 3,
        nome: "Cyndaquil",
        categoria: "Rato de fogo",
        descrição: 'Cyndaquil se protege acendendo as chamas em suas costas. As chamas são vigorosas se o Pokémon estiver com raiva. No entanto, se estiver cansado, as chamas crepitam irregularmente com combustão incompleta.',
        altura: '.5m',
        peso: '7.9kg',
        tipo: "Pokemon de perfurção",
        habilidade: 'Chama. Fogo relâmpago.',
        iframe: 'width=560 height=315 src=https://www.youtube.com/embed/Gvsnj-r7Z90 title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen',
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
    },
    {
        id: 4,
        nome: "Bulbasaur",
        categoria: "Seed",
        descrição: 'Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.',
        altura: '.7m',
        peso: '6.9kg',
        tipo: "Pokemon semente",
        habilidade: 'Excesso de clorofila.',
        iframe: 'width=560 height=315 src=https://www.youtube.com/embed/LOegjLY194M title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen',
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
        id: 5,
        nome: "Pidgeot",
        categoria: "Bird",
        descrição: 'Este Pokémon voa em velocidade Mach 2, em busca de presas. Suas grandes garras são temidas como armas perversas.',
        altura: '1.5m',
        peso: '39.5kg',
        tipo: "Pokemon Pássaro",
        habilidade: 'Olhos afiados e pés emaranhados.',
        iframe: 'width=560 height=315 src=https://www.youtube.com/embed/wBCShxsdkCI title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen',
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    },
    {
        id: 6,
        nome: "Ninetales",
        categoria: "Fox",
        descrição: 'Diz-se que vive 1.000 anos, e cada uma de suas caudas é carregada com poderes sobrenaturais.',
        altura: '1.1m',
        peso: '19.9kg',
        tipo: "Pokemon raposa",
        habilidade: 'Fogo Relâmpago',
        iframe: 'width=560 height=315 src=https://www.youtube.com/embed/4NWVqegaQNE title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen',
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    }
]


app.get('/', (req, res) => {
    res.render('index.ejs', {
        pokemon
    })
})

app.get('/detalhes/:id', (req, res) => {
    let pokemon1
  
    pokemon.filter((element) => {
        if(element.id == req.params.id) {
            pokemon1 = element

        }
           })
         
    res.render('detalhes.ejs', {
        pokemon1
    } ) 
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro.ejs')
})

app.post('/cadastro', (req, res) => {
    let novaId = pokemon[pokemon.length-1].id + 1
    const { nome, tipo, imagem, descrição, altura, peso, categoria, habilidade} = req.body
    pokemon.push({id: novaId, nome, tipo, imagem, descrição, altura, peso, categoria, habilidade})
    res.redirect('/')
})

const PORT=process.env.PORT || 3003;