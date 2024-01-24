import { Component } from '@angular/core';
import { Funcionario } from '../../Models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router } from '@angular/router'; // Corrigido o import para o Router do Angular

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'] // Corrigido para styleUrls
})
export class CadastroComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar Funcionário"

  constructor(private funcionarioService: FuncionarioService, private router: Router) {

  }

  createFuncionario(funcionario: Funcionario) {
    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }

}
