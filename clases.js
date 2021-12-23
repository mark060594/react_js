class auto{
    constructor(marca,modelo,color){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color; 
        this.info = `Este es un automovil marca ${this.marca} modelo ${this.modelo} y color ${this.color}`;
    }

    darInfo() {
        document.write(this.info + "<br>");
    }
}


let ford = new auto("ford","figo","negro");
let kia = new auto("kia","rio","rojo");
let seat = new auto("seat","ibiza","azul");

kia.darInfo();
ford.darInfo();
seat.darInfo();