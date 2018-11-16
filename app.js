const cards = [
  {
    front: 'Created satellite orbit analyzation software for NASA',
    back: 'Dr. Evelyn Boyd Granville',
    flipped: false,
  }
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
