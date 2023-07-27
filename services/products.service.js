const { faker } = require('@faker-js/faker');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    for (let index = 0; index < 100; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }
  }

  findAll(){
    return this.products;
  }

  findOne(id){
    return this.products.find( product => product.id === id);
  }

  create(data){
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  update(id, data){
    const index = this.products.findIndex( product => product.id === id);
    if (index === -1) {
      throw new Error(`Product ${id} not exists`)
    }
    this.products[index] = {
      ...this.products[index],
      ...data
    }
    return this.products[index]
  }

  delete(id){
    const index = this.products.findIndex( product => product.id === id);
    if (index === -1) {
      throw new Error(`Product ${id} not exists`)
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
