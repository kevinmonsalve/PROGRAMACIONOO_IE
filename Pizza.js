//CLASE PIZZA

class Pizza{
    constructor(masa, tamano, ingrediente){
        this.masa = masa;
        this.tamano = tamano;
        this.ingrediente=ingrediente;
        }

    //Metodos
    preparar(){
      console.log(`Preparando pizza ${this.tamano}, ${this.masa},Ingrediente: ${this.ingrediente}`);
      return this;

    }

    hornear(){
        console.log(`La pizza está en el horno`);
        return this;
    
    }
   empacar(){
       console.log('Empacando la pizza...');
       console.log('Pizza lista para enviar!');
       return this; 
   }


}

const pizzaPolloChampinones = new Pizza ('Masa delgada','Grande', ['Queso','Pollo','Champiñones'] );

console.log(pizzaPolloChampinones.preparar());
console.log(pizzaPolloChampinones.hornear());
console.log(pizzaPolloChampinones.empacar());

//HERENCIA

class Combos extends Pizza{
     constructor(combo, cantidad, masa, tamano, ingrediente, bebida, postre){
         super(masa, tamano, ingrediente);
         this.combo = combo;
         this.cantidad = cantidad;
         this.bebida = bebida;
         this.postre = postre;
     }

     elegirCombo(){
         this.preparar();
         this.hornear();
         this.empacar();

         console.log(`Pedido: Combo ${this.combo} - ${this.cantidad} Pizza ${this.masa}, ${this.ingrediente} + ${this.bebida} + ${this.postre}`);
         return this
     }

}

const Pedido = new Combos ('Personas', 1, 'Mediana', 'Masa Tradicional', ['Queso', 'Pollo', 'Champiñones'], 'Coca-cola', 'Rollitos de canela', 1);
console.log(Pedido.elegirCombo());


