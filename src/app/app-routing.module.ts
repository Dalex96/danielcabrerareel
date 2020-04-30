import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './Pages/inicio/inicio.component'
import { SkillsComponent } from './Pages/skills/skills.component'
import { ExperiencesComponent } from './Pages/experiences/experiences.component'
import { ReelComponent } from './Pages/reel/reel.component'
import { ContactComponent } from './Pages/contact/contact.component'


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    data: { menuActive: 'active' }
  },  
  {
    path: 'skills',
    component: SkillsComponent,
    data: { menuActive: 'active' }
  },
  {
    path: 'experiences',
    component: ExperiencesComponent,
    data: { menuActive: 'active' }
  },  
  {
    path: 'portafolio',
    component: ReelComponent,
    data: { menuActive: 'active' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { menuActive: 'active' }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
