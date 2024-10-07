import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desvinculacion',
  templateUrl: './desvinculacion.component.html',
  styleUrls: ['./desvinculacion.component.scss']
})
export class DesvinculacionComponent implements OnInit {

  // Arreglo de solicitudes de desvinculación
  solicitudes = [
    { id: 1, nombre: 'Juan Pérez', actividad: 'Fútbol', motivo: 'Razones personales' },
    { id: 2, nombre: 'María López', actividad: 'Natación', motivo: 'Incompatibilidad de horarios' },
    { id: 3, nombre: 'Carlos Gómez', actividad: 'Baloncesto', motivo: 'Problemas de salud' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  aceptarSolicitud(id: number) {
    // Lógica para aceptar la solicitud
    console.log('Solicitud aceptada con ID:', id);
    // Aquí puedes agregar lógica adicional para manejar la aceptación (por ejemplo, actualizando el estado en el servidor)
    this.solicitudes = this.solicitudes.filter(solicitud => solicitud.id !== id);
  }

  rechazarSolicitud(id: number) {
    // Lógica para rechazar la solicitud
    console.log('Solicitud rechazada con ID:', id);
    this.solicitudes = this.solicitudes.filter(solicitud => solicitud.id !== id);
  }

}
