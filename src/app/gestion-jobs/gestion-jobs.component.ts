import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/Usuario';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-gestion-jobs',
  templateUrl: './gestion-jobs.component.html',
  standalone: true,
  imports: [MatChipsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GestionJobsComponent implements OnInit {
[x: string]: any;

  
  estudiante: Usuario;

  constructor() {
    // Inicialización de datos de ejemplo
    this.estudiante = new Usuario(
      1, // id
      'Juan', // nombre
      'Pérez', // apellido
      '123456789', // identificación
      'juan.perez@unicolombo.edu.co', // email
      '555-1234', // telefono
      'jperez', // login
      'password123', // password
      'estudiante', // tipo
      'activo', // estado
      5,

    );
  }

  ngOnInit(): void {
    
  }
}
