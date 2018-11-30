const cards = [
  {
    front: 'Frankfort',
    back: 'Kentucky',
    flipped: false,
  },
  {
    front: 'Montgomery',
    back: 'Alabama',
    flipped: false,
  },
  {
    front: 'Springfield',
    back: 'Illinois',
    flipped: false,
  },
  {
    front: 'Helena',
    back: 'Montana',
    flipped: false,
  },
  {
    front: 'Providence',
    back: 'Rhode Island',
    flipped: false,
  },
  {
    front: 'Columbia',
    back: 'South Carolina',
    flipped: false,
  },
  {
    front: 'Pierre',
    back: 'South Dakota',
    flipped: false,
  },

];

new Vue({
  el: '#flashcard-app',
  data: {
    cards: cards,
    newFront: '',
    newBack: '',
    error: false
  },
  methods: {
    toggleCard: function(card){
      card.flipped = !card.flipped;
    },
    addNew: function(){
      //!this.newFront || !this.newBack also works
      if(!this.newFront.length || !this.newBack.length){
        this.error = true;
      } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        });
        this.newFront = '';
        this.newBack = '';
        this.error = false;
      }
    }
  }
});
