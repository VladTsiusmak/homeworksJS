// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let deck = [];
    for (let suit of suits) {
        for (let rank of ranks) {
            if(suit === 'hearts' || suit === 'diamonds'){
                deck.push({suit, rank, color: 'red'})}
            else{
                deck.push({suit, rank, color: 'black'});
            }
        }
    }
console.log(deck)

    let CardBySuit = deck.reduce((acc, card) => {
        if(acc[card.suit]){
            acc[card.suit].push(card)
        }else{
            acc[card.suit] = [card]
        }
        return acc
    })
console.log(CardBySuit)
