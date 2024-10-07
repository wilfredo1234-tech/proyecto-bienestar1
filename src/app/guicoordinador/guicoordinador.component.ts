import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/Usuario';
import { SessionService } from '../servicios/session.service';

<<<<<<< HEAD

=======
>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9
@Component({
  selector: 'app-guicoordinador',
  templateUrl: './guicoordinador.component.html',
  styleUrls: ['./guicoordinador.component.scss']
})

export class GUICoordinadorComponent implements OnInit {
  mostrarParea: boolean = false;
  mostrarPinstructor: boolean = false;
  mostrarPescenario: boolean = false;
  mostrarPdisciplina: boolean = false;
  mostrarPprograma: boolean = false;
  mostrarPtipoActividad: boolean = false;
<<<<<<< HEAD
  mostrarPactividad: boolean = true;
  public usuario: Usuario = new Usuario(0, "", "", "", "", "", "", "", "", "");

  constructor(private sesSer: SessionService) {

  }

  ngOnInit(): void {
    this.usuario=this.sesSer.getUser();
  }

  mostrarComponenteArea() {
    this.mostrarParea = true;
    this.mostrarPinstructor = false;
    this.mostrarPescenario = false;
    this.mostrarPdisciplina = false;
    this.mostrarPprograma = false;
    this.mostrarPtipoActividad = false;
    this.mostrarPactividad = false;
  }

  mostrarComponenteEscenario() {
    this.mostrarParea = false;
    this.mostrarPinstructor = false;
    this.mostrarPescenario = true;
    this.mostrarPdisciplina = false;
    this.mostrarPprograma = false;
    this.mostrarPtipoActividad = false;
    this.mostrarPactividad = false;
  }
  mostrarComponenteInstructor() {
    this.mostrarParea = false;
    this.mostrarPinstructor = true;
    this.mostrarPescenario = false;
    this.mostrarPdisciplina = false;
    this.mostrarPprograma = false;
    this.mostrarPtipoActividad = false;
    this.mostrarPactividad = false;
  }
  mostrarComponenteDisciplina() {
    this.mostrarParea = false;
    this.mostrarPinstructor = false;
    this.mostrarPescenario = false;
    this.mostrarPdisciplina = true;
    this.mostrarPprograma = false;
    this.mostrarPtipoActividad = false;
    this.mostrarPactividad = false;
  }

  mostrarComponentePrograma() {
    this.mostrarParea = false;
    this.mostrarPinstructor = false;
    this.mostrarPescenario = false;
    this.mostrarPdisciplina = false;
    this.mostrarPprograma = true;
    this.mostrarPtipoActividad = false;
    this.mostrarPactividad = false;
  }

  mostrarComponenteTipoActividad(){
    this.mostrarParea = false;
    this.mostrarPinstructor = false;
    this.mostrarPescenario = false;
    this.mostrarPdisciplina = false;
    this.mostrarPprograma = false;
    this.mostrarPtipoActividad = true;
    this.mostrarPactividad = false;
  }

  mostrarComponenteActividad(){
    this.mostrarParea = false;
    this.mostrarPinstructor = false;
    this.mostrarPescenario = false;
    this.mostrarPdisciplina = false;
    this.mostrarPprograma = false;
    this.mostrarPtipoActividad = false;
    this.mostrarPactividad = true;
  }
=======
  mostrarPactividad: boolean = false;
  mostrarPdesvinculacion: boolean = false; // Nueva propiedad para gestión de desvinculación
  
  public usuario: Usuario = new Usuario(0, "", "", "", "", "", "", "", "", "", 0);

  constructor(private sesSer: SessionService) {}

  ngOnInit(): void {
    this.usuario = this.sesSer.getUser();
  }

  mostrarComponenteArea() {
    this.resetearComponentes();
    this.mostrarParea = true;
  }

  mostrarComponenteEscenario() {
    this.resetearComponentes();
    this.mostrarPescenario = true;
  }

  mostrarComponenteInstructor() {
    this.resetearComponentes();
    this.mostrarPinstructor = true;
  }

  mostrarComponenteDisciplina() {
    this.resetearComponentes();
    this.mostrarPdisciplina = true;
  }

  mostrarComponentePrograma() {
    this.resetearComponentes();
    this.mostrarPprograma = true;
  }

  mostrarComponenteTipoActividad() {
    this.resetearComponentes();
    this.mostrarPtipoActividad = true;
  }

  mostrarComponenteActividad() {
    this.resetearComponentes();
    this.mostrarPactividad = true;
  }

  // Método para mostrar el componente de "Gestión Desvinculación"
  mostrarComponenteDesvinculacion() {
    this.resetearComponentes();
    this.mostrarPdesvinculacion = true;
  }

  // Método auxiliar para resetear la visibilidad de todos los componentes
  private resetearComponentes() {
    this.mostrarParea = false;
    this.mostrarPinstructor = false;
    this.mostrarPescenario = false;
    this.mostrarPdisciplina = false;
    this.mostrarPprograma = false;
    this.mostrarPtipoActividad = false;
    this.mostrarPactividad = false;
    this.mostrarPdesvinculacion = false; // También resetea la nueva opción
  }
>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9
}
