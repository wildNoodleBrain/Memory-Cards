document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'poppy',
            img: 'images/poppy.png'
        },
        {
            name: 'rosehip',
            img: 'images/rosehip.png'
        },
        {
            name: 'rosemary',
            img: 'images/rosemary.png'
        },
        {
            name: 'saffron',
            img: 'images/saffron.png'
        },
        {
            name: 'turmeric',
            img: 'images/turmeric.png'
        },
        {
            name: 'vanilla',
            img: 'images/vanilla.png'
        },
        {
            name: 'poppy',
            img: 'images/poppy.png'
        },
        {
            name: 'rosehip',
            img: 'images/rosehip.png'
        },
        {
            name: 'rosemary',
            img: 'images/rosemary.png'
        },
        {
            name: 'saffron',
            img: 'images/saffron.png'
        },
        {
            name: 'turmeric',
            img: 'images/turmeric.png'
        },
        {
            name: 'vanilla',
            img: 'images/vanilla.png'
        }       
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

   //create your board
   function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white-square-rounded.png')
      cards[optionTwoId].setAttribute('src', 'images/white-square-rounded.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/4) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})