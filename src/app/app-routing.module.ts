import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GUICoordinadorComponent } from './guicoordinador/guicoordinador.component';
import { GUIDirectorComponent } from './guidirector/guidirector.component';
import { GUIEstudianteComponent } from './guiestudiante/guiestudiante.component';
import { GUIInstructorComponent } from './guiinstructor/guiinstructor.component';
import { IPrincipalComponent } from './iprincipal/iprincipal.component';
<<<<<<< HEAD
=======
import { GestionJobsComponent } from './gestion-jobs/gestion-jobs.component';
>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9

const routes: Routes = [
  { path: '', component: IPrincipalComponent },
  { path: 'guiEstudiante', component: GUIEstudianteComponent },
  { path: 'guiCoordinador', component: GUICoordinadorComponent },
  { path: 'guiInstructor', component: GUIInstructorComponent },
<<<<<<< HEAD
  { path: 'guiDirector', component: GUIDirectorComponent}
=======
  { path: 'guiDirector', component: GUIDirectorComponent},
  { path: 'gestionJobs', component: GestionJobsComponent },
>>>>>>> a42c23152b9800e9d1e69d05c16af714fa390fa9
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
