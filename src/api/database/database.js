const ItemPatrimonio = require("./model/ItemPatrimonio");

class Banco {
    constructor() {
        this.items = []
    }

    getAllItems() {
        return this.items
    }

    addItem(novoItem) {
        if(novoItem instanceof ItemPatrimonio){
            this.items.push(novoItem)
        }else{
            throw Error("DB: Objeto não é do tipo ItemPatrimonio")
        }
    }

    findByPatrimonio(patrimonio) {
          return this.items.filter(item => item.patrimonio === patrimonio)
    }
}

let banco = new Banco();

module.exports = banco;