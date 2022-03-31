class EntradaService{
    constructor(){
        this.products = [];
    }
    store(){

    }

    find(){
        return this.products;
    }

    findOne(){
        return this.products.find(item => item.id === id);
    }

    update(){

    }

    delete(){

    }
}

module.exports = EntradaService;