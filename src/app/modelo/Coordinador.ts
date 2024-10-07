import { Area } from "./Area";
import { Usuario } from "./Usuario";

export class Coordinador extends Usuario{

    area:Area=new Area(0, "");

    constructor(id: number,nom: String,ape: String,ident: String,ema: String,tel: String,log: String,
<<<<<<< HEAD
        pass: String, tip: String, est: String) {
        super(id,nom,ape,ident,ema,tel,log, pass, tip, est); // Llama al constructor de la clase base
=======
        pass: String, tip: String, est: String, hor: number)  {
        super(id,nom,ape,ident,ema,tel,log, pass, tip, est, hor); // Llama al constructor de la clase base
>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9
      }
}