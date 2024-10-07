import { Component } from '@angular/core';
import { Actividad } from 'src/app/modelo/Actividad';
import { Inscripcion } from 'src/app/modelo/Inscripcion';
import { ActividadService } from 'src/app/servicios/actividad.service';
import { InscripcionService } from 'src/app/servicios/inscripcion.service';
import { Usuario } from 'src/app/modelo/Usuario';
import { SessionService } from 'src/app/servicios/session.service'; 
@Component({
  selector: 'app-mi-horario',
  templateUrl: './mi-horario.component.html',
  styleUrls: ['./mi-horario.component.scss']

})
export class MiHorarioComponent {
<<<<<<< HEAD

  public actividades: Actividad[] = this.acti.actividades;

  public usuario: Usuario = new Usuario(0, "", "", "", "", "", "", "", "", "");
=======
isLoading: any;
eliminar(arg0: number) {
throw new Error('Method not implemented.');
}
cancelar(arg0: number) {
throw new Error('Method not implemented.');
}
cancelarInscripcion(arg0: number) {
throw new Error('Method not implemented.');
}


  public actividades: Actividad[] = this.acti.actividades;

  public usuario: Usuario = new Usuario(0, "", "", "", "", "", "", "", "", "",0);
>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9

  public MisIncripciones: Inscripcion[] = this.inscripcion.inscripcion;

  constructor(private acti: ActividadService, private inscripcion: InscripcionService,private sesSer: SessionService) {
      
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
<<<<<<< HEAD
   // Función para cambiar el estado a "En proceso de eliminación"
   marcarEnProceso(id: number): void {
    const actividad = this.actividades.find(acti => acti.id === id);
    if (actividad) {
      actividad.estado = 'En proceso de eliminación'; // Cambia el estado de la actividad
    }
  }
}
=======
confirmarEliminar(inscripcionId: number): void {
  const confirmacion = confirm('Esta inscripción estara en proceso');
  if (confirmacion) {
    this.cancelarInscripcion(inscripcionId);
  }

}
}


>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9
