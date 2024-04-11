import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PetCadastroComponent } from './pages/pet-cadastro/pet-cadastro.component';
import { PetComponent } from './pages/pet/pet.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilEditComponent } from './pages/perfil-edit/perfil-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetCadastroComponent,
    PetComponent,
    NavBarComponent,
    FooterComponent,
    CadastroComponent,
    LoginComponent,
    PerfilEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
