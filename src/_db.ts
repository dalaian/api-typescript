let games = [
    { id: '1', title: 'GoW: Ragnarok', platform: ['PS5', "PC"] },
    { id: '2', title: 'Zelda: Ocarina del tiempo', platform: ["N64"] }
]

let authors = [
    { id: '1', name: "Odin", verified: true },
    { id: '2', name: "Rah", verified: false }
]

let reviews = [
    { id: '1', rating: 10, content: "Best game evah", author_id: '1', game_id: '1' },
    { id: '2', rating: 10, content: "Besto gamu", author_id: '1', game_id: '1' }
]

export default { games, authors, reviews }