import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilEditComponent } from './pages/perfil-edit/perfil-edit.component';
import { RouterModule } from "@angular/router";
import { DoacoesComponent } from './pages/doacoes/doacoes.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { NossaMissaoComponent } from './pages/nossa-missao/nossa-missao.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PetCadastroComponent } from './pages/pet-cadastro/pet-cadastro.component';
import { PetComponent } from './pages/pet/pet.component';
import { AnimalService } from './services/animal.service';
import { PetManageComponent } from './pages/pet-manage/pet-manage/pet-manage.component';
import { SponsorshipService } from './services/sponsorship.service';
import { CommonModule } from '@angular/common';
import { ApadrinhadosComponent } from './pages/apadrinhados/apadrinhados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    CadastroComponent,
    LoginComponent,
    PerfilEditComponent,
    DoacoesComponent,
    ContatoComponent,
    NossaMissaoComponent,
    HomePageComponent,
    PetCadastroComponent,
    PetComponent,
    PetManageComponent,
    ApadrinhadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    AnimalService,
    SponsorshipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

