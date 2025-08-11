//    #bolvdlhP
//    описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//    Після опису, використовуючи функції масивів:
// – знайти піковий туз
// – всі шістки
// – всі червоні карти
// – всі буби
// – всі трефи від 9 та більше
//    Приклад моделі об’єкту карти:
//    {
//        cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//        value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//        color:”, // ‘red’,’black’
//    }

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
        }}
    console.log(deck)
    let findA = deck.find(card => card.rank === 'A' && card.suit === 'spades');
    console.log(findA);
    let find6 = deck.filter(card => card.rank === '6');
    console.log(find6)
    findRed = deck.filter(card => card.color === 'red');
    console.log(findRed)
    findDiamond = deck.filter(card => card.suit === 'diamonds');
    console.log(findDiamond)
    function cardRating(card){
        if(card.rank === '6' || card.rank === '7' || card.rank === '8' || card.rank === '9' || card.rank === '10'){
            return Number(card.rank);
        }else if (card.rank === 'J'){
            return 11;
        }else if (card.rank === 'Q'){
            return 12;
        }else if (card.rank === 'K'){
            return 13;
        }else if (card.rank === 'A'){
            return 14;
        }
    }
let findBigClubs = deck.filter(card => card.suit === 'clubs' && cardRating(card) >= 10);
    console.log(findBigClubs)
