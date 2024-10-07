import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/Usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { Router } from '@angular/router';
import { SessionService } from '../servicios/session.service';

@Component({
  selector: 'app-pinicio',
  templateUrl: './pinicio.component.html',
  styleUrls: ['./pinicio.component.scss']
})

export class PInicioComponent implements OnInit {


<<<<<<< HEAD
  usuario: Usuario = new Usuario(0, "", "", "", "", "", "", "", "", "");
=======
  usuario: Usuario = new Usuario(0, "", "", "", "", "", "", "", "", "",0);
>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9
  usuarios: Usuario[] = [];
  constructor(private ususer: UsuarioService, private router: Router,private sesSer: SessionService) {

  }

  public iniciar(): String {
    let destino: String = "";
    console.log("Login: "+this.usuario.login+" Password: "+this.usuario.password);
    this.ususer.iniciar(this.usuario.login, this.usuario.password).subscribe(
      usua => {   
        this.usuario =usua[0];
        destino = this.usuario.tipo;
        this.sesSer.setUser(this.usuario);
        this.navegar();
      }
    );
  
    return destino;
  }

  public navegar() {
    if (this.usuario.tipo === "Estudiante") {
      console.log('Navegando a la ruta de estudiante');
      this.irAEstudiante();
    }
    if (this.usuario.tipo === "Instructor") {
      console.log('Navegando a la ruta de instructor');
      this.irAInstructor();
    }
    if (this.usuario.tipo === "Coordinador") {
      this.irACoordinador();
      console.log('Navegando a la ruta de coordinador');
    }
    if (this.usuario.tipo === "Director") {
      this.irADirector();
      console.log("Navegando a la ruta de director");
    }
  }

  irAEstudiante() {
    this.router.navigate(['/guiEstudiante']);
    console.log("fui a la pagina del estudiante");

  }
  irACoordinador() {
    this.router.navigate(['/guiCoordinador']);
    console.log("fui a la pagina del coordinador");
  }
  irAInstructor() {
    this.router.navigate(['/guiInstructor']);
    console.log("fui a la pagina del Instructor");
  }
  irADirector(){
    this.router.navigate(['/guiDirector'])
    console.log("fui a la pagina del director");
  }

  ngOnInit(): void {
  
  }
<<<<<<< HEAD
  passwordFieldType: string = 'password';
  passwordIcon: string = 'fas fa-eye';

  togglePasswordVisibility() {
    // Cambia el tipo de campo de 'password' a 'text' y viceversa
    if (this.passwordFieldType === 'password') {
      this.passwordFieldType = 'text';
      this.passwordIcon = 'fas fa-eye-slash'; // Cambia el icono a un ojo tachado
    } else {
      this.passwordFieldType = 'password';
      this.passwordIcon = 'fas fa-eye'; // Cambia el icono a un ojo abierto
    }
  }
}
=======
}
>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9
