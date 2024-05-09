import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { CozinhaComponent } from './cozinha/cozinha.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'cozinha', component: CozinhaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
