class ControleRemoto {
    constructor(tv) {
      this.tv = tv;
      this.volume = 0;
    }
  
    // Método de instância, usado na instancia(controle1) da class
    aumentarVolume() {
      this.volume += 2;
    }
    diminuirVolume() {
      this.volume -= 2;
    }
  
    // Método estático se usa na propria class
    static soma(x, y) {
      console.log(this);
    }
  }
  
  const controle1 = new ControleRemoto('LG');
  ControleRemoto.soma();