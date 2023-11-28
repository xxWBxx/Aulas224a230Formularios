import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroAlunoReactiveComponent } from './components/cadastro-aluno-reactive/cadastro-aluno-reactive.component';
import { cadastroAlunoTemplateComponent } from './components/cadastro-aluno-template/cadastro-aluno-template.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declaration: [
   AppComponent,
   cadastroAlunoTemplateComponent,
   CadastroAlunoReactiveComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   NgModule,
   FormsModule
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 })
 export class AppModule {}