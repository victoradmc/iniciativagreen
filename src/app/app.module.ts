import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//primeng
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { CozinhaComponent } from './cozinha/cozinha.component';
import { HomepageComponent } from './homepage/homepage.component';
@NgModule({
  declarations: [
    AppComponent,
    FuncionariosComponent,
    CozinhaComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BadgeModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
