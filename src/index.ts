import products from './products.json'
class ListaDeCosas {
  name: string;
  cosas: any[] = [];
  constructor(name: string) {
    // nombre de esta lista
    this.name = name;
  }
  add(nuevaCosa) {
    this.cosas.push(nuevaCosa);
  }
getCosas() {
  return this.cosas.map((p) => ({
    name: p.name,
    price: p.price,
    id: p.id,
  }));
}

}

class Product {
  name: string;
  price: number;
  id: number;
  constructor(name: string, price: number, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ListaDeProductos extends ListaDeCosas {
  nameLista:string
  constructor(name:string){
    super(name);
    const productos=require('./products.json');
    console.log(productos)
    productos.forEach(producto => {
      const nuevoPrducto=new Product(producto.name,producto.price,producto.id);
      this.addProduct(nuevoPrducto);
      
    });

  }
  addProduct(producto:Product):void{
    const exist=this.cosas.some(existeProducto=>existeProducto.id===producto.id);
    if(!exist){
      this.cosas.push(producto)
    }else{
      console.error(`Este producto: ${producto}, ya existe`);
    }
  }
      getProduct(id:number):Product | undefined{
        return(this.cosas.find(product=>product.id===id));
    }
    removeProduct(id:number):void{
      this.cosas=this.cosas.filter(product=>product.id!==id);
      }
    getSortedByPrice(order:string):Product[]{
      let ordenado=[...this.cosas].sort((a,b)=>a.price-b.price);
      if(order==="desc"){
        return ordenado.reverse();
      }
      return ordenado;
    }
}

export { ListaDeProductos, Product };
