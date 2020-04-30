import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { SkillsComponent } from './Pages/skills/skills.component';
import { ExperiencesComponent } from './Pages/experiences/experiences.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ReelComponent } from './Pages/reel/reel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    SkillsComponent,
    ExperiencesComponent,
    ContactComponent,
    ReelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
