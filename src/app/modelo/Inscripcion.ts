import { Usuario } from "./Usuario";
import { Actividad } from "./Actividad";

export class Inscripcion {
    id: number = 0;
    tipoVinculacion: String = "";
    fechaInscripcion: Date = new Date();
    usuario: number= 0 ;
    actividad_id : number = 0 ;
<<<<<<< HEAD
    dia: string;
  estado: any;

    constructor(id: number, tipoVinculacion: String, fechaInscripcion: Date, usuario: number,actividad_id :number,dia:string) {
=======

    constructor(id: number, tipoVinculacion: String, fechaInscripcion: Date, usuario: number,actividad_id :number) {
>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9
        this.id = id;
        this.tipoVinculacion = tipoVinculacion;
        this.fechaInscripcion = fechaInscripcion;
        this.usuario = usuario;
        this.actividad_id = actividad_id;
<<<<<<< HEAD
        this.dia= dia;
=======
>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9
    }
}

