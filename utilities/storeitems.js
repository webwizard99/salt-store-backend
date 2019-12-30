module.exports = (function(){
  let items = [];

  const item = function(payload) {
    this.img = payload.img;
    this.alt = payload.alt;
    this.name = payload.name;
    this.price = payload.price;
    this.description = payload.description;
    this.categoryId = payload.categoryId;
    this.weight = payload.weight;
    this.height = payload.height;
    this.width = payload.width;
    this.depth = payload.depth;
  }

  const flavors = [ 'Mint', 'Peppermint', 'Frankincense', 'Lavender', 'Tea Tree', 'Lemon', 'Sage', 'Clove'];

  return {
    getItems: function(page, number) {
      let start = (page - 1) * number;
      let end = page * number;
      if (end >= items.length) {
        end = items.length -1;
      }
      return items.slice(start, end);
    },

    setItems: function(newItems) {
      items = newItems;
    },

    getItemsLength: function() {
      return items.length;
    },

    initTestItems: function(n) {
      // if (items != []) return;
      for (let i = 0; i < n; i++) {
        let flavor = Math.floor(Math.random() * flavors.length);
        let cost = (Math.random() * 2) + 4;
        let itemPayload = {
          img: './joanna-kosinska-Prfs32wh-o4-unsplash.jpg',
          alt: 'A spoon-full of salt',
          name: `${flavors[flavor]} Salt`,
          price: cost.toFixed(2),
          description: `${flavors[flavor]} Salt for rejuvenation and relaxation.`,
          categoryId: 1,
          weight: 3,
          height: 10,
          width: 6,
          depth: 2.5
        }
        let newItem = new item(itemPayload);
        items.push(newItem);
      }
    }


  }
}());