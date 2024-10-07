import { Component } from '@angular/core';
import { Inscripcion } from 'src/app/modelo/Inscripcion';
import { InscripcionService } from 'src/app/servicios/inscripcion.service';
import { SessionService } from 'src/app/servicios/session.service';
import { Usuario } from 'src/app/modelo/Usuario';
import { Actividad } from 'src/app/modelo/Actividad';
import { ActividadService } from 'src/app/servicios/actividad.service';
@Component({
  selector: 'app-cronograma-actividades-instructor',
  templateUrl: './cronograma-actividades-instructor.component.html',
  styleUrls: ['./cronograma-actividades-instructor.component.scss']
})
export class CronogramaActividadesInstructorComponent {



  public MisIncripciones: Inscripcion[] = this.inscripcion.inscripcion;
  public actividades: Actividad[] = this.acti.actividades;
<<<<<<< HEAD
  public usuario: Usuario = new Usuario(0, "", "", "", "", "", "", "", "", "");
=======
  public usuario: Usuario = new Usuario(0, "", "", "", "", "", "", "", "", "",0);
>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9
  constructor(private inscripcion: InscripcionService,private sesSer: SessionService,private acti: ActividadService) {
      
  }
  ngOnInit() {
    this.listarActividades();
    this.listarIncripciones();
    this.usuario=this.sesSer.getUser();  
  }
  
  listarActividades() {
    this.acti.obtenerActividades().subscribe(
      (data) => {
        this.actividades = data;
      }
    );
  }



  listarIncripciones() {
    this.inscripcion.obtenerInscripcion().subscribe(
      (data) => {
        console.log(data);
        this.MisIncripciones = data;
      }
    );
  }
}
