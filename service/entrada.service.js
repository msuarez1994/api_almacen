class EntradaService{
    constructor(){
        this.products = [];
    }
    store(){

    }

    find(){
        return this.products;
    }

    findOne(id){
        return this.products.find(item => item.id === id);
    }

    update(){

    }

    delete(){

    }
}

module.exports = EntradaService;