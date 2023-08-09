class ProductManager {
    constructor(){
        this.products = [];
    }
    //valido que todos los campos sean obligatorios
    addProduct(title, description, price, thumbnail, code, stock){
        if(!title || !description || !price || !thumbnail || !code || ! stock){
            console.log("All fields are required");
            return;
        }
        //valido que no se repita el campo code
        const validateCode = this.products.find((product) => product.code === code);
        if(validateCode){
            console.log("Product code already exists");
            return;
        }
        //si id es 0 le asigno 1 sino le sumo 1 al ultimo id
        const id = this.products.length === 0
        ? 1
        : this.products[this.products.length - 1].id + 1;
        //agrego los productos al array this.products
        const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);
    }
    //metodo que devuelve un array con todos los productos
    getProducts(){
        return this.products;
    }
    getProductById(id){
        const product = this.products.find((product) => product.id === id );
        return product ? product : console.log("Not found")
    }
}

const manager1 = new ProductManager();
manager1.addProduct( "product 1", "description 1", null, "image01.jpg", "111", 10 )
manager1.addProduct( "product 2", "description 2", 200, "image02.jpg", "222", 20 )

// para mostrar en consola los productos agregados en las lineas 44 y 45
console.log(manager1.getProducts());

// para mostrar en consola por id
console.log(manager1.getProductById(1));
