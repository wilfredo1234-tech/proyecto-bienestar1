import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/modelo/Disciplina';
import { Instructor } from 'src/app/modelo/Instructor';
import { Usuario } from 'src/app/modelo/Usuario';
import { DisciplinaComponent } from '../disciplina/disciplina.component';
import { InstructorService } from 'src/app/servicios/instructor.service';
import { InformadorComponent } from 'src/app/utilidades/informador/informador.component';
import { DisciplinaService } from 'src/app/servicios/disciplina.service';
import { response } from 'express';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})

export class InstructorComponent implements OnInit {
  public instructor: Instructor = new Instructor("", new Disciplina(0, "", "",""), 0);
  public instructores: Instructor[] = [];
  public usuarios: Usuario[] = [];
  public disciplinas: Disciplina[] = [];
<<<<<<< HEAD
  public usuario: Usuario = new Usuario(0, "", "", "", "", "", "", "", "", "");
=======
  public usuario: Usuario = new Usuario(0, "", "", "", "", "", "", "", "", "",0);
>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9


  constructor(private discser:DisciplinaService, private instser: InstructorService, private infcom: InformadorComponent, private sesSer: SessionService) {

  }

  ngOnInit() {
    this.listarDisciplinas();
    this.listarUsuarios();
    this.listarInstructores()
  }


  listarDisciplinas() {
    this.discser.obtenerDisciplinas().subscribe(
      (data) => {
        this.disciplinas = data;
      }
    );    
  }

  eliminarInstructor(id: number) {
    this.instser.eliminarUsuario(id).subscribe(
      (response) => {
        console.log('El instructor se elimino', response);
        this.listarUsuarios();
<<<<<<< HEAD
        this.usuario = new Usuario(0, "", "", "", "", "", "", "", "", "");
=======
        this.usuario = new Usuario(0, "", "", "", "", "", "", "", "", "",0);
>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9
      }
    )
  }

  listarUsuarios() {
    this.instser.obtenerUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      }
    );
  }

  listarInstructores() {
    this.instser.obtenerInstructores().subscribe(
      (data) => {
        this.instructores = data;
      }
    );
  }

  seleccionarDisciplina(disc: Disciplina) {
    this.instructor.disciplina = disc;
  }

  crearInstructor(): void {
    this.usuario.id = this.usuarios.length + 1;
    this.instructor.id = this.usuario.id;
    this.usuario.tipo = "Instructor";
    this.usuario.estado = "Activo";
    if (this.instructor.disciplina.id > 0) {
      if (this.usuario.validar() && this.instructor.validar()) {
        this.instser.createUsuario(this.usuario).subscribe(
          (resp) => {
            console.log('Usuario Agregado', resp);
          }
        );
        this.instser.createInstructor(this.instructor).subscribe(
          (response) => {
            console.log('Instructor agregado:', response);
            //this.listarUsuarios();
            this.instructor = new Instructor("", new Disciplina(0, "", "", ""), 0);
          });
          this.listarUsuarios();
      } else {
        console.log("Debe digitar todos los datos");
      }
    } else {
      console.log("Debe agregar la disciplina");
      this.infcom.mostrarError("Debe agregar la disciplina");
    }

  }


}
