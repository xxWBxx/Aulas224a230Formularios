import { Component } from '@angular/core';
import { Aluno } from '../../models/aluno';



@Component({
    selector: 'app-cadastro-aluno-template',
    templateUrl: './cadastro-aluno-template.component.html',
    styleUrls: ['./cadastro-aluno-template.component.css']
})
export class cadastroAlunoTemplateComponent {
    aluno: Aluno = {
        nome: '',
        email: '',
        descricao: '',
        nivel: '',
        usuarioAtivo: false,
        endereco: {
            cidade: '',
            estado:''
        }
    }
form: any;

    onSubmit() {
        console.log(this.aluno);
    }
  
  }
