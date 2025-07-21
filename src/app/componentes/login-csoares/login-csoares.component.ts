import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogoCsoaresComponent } from '../dialogo-csoares/dialogo-csoares.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../servicos/autenticacao.service';

@Component({
  selector: 'app-login-csoares',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-csoares.component.html',
  styleUrl: './login-csoares.component.css'
})
export class LoginCsoaresComponent {
  loginForm: FormGroup;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private autenticacaoService: AutenticacaoService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const senha = this.loginForm.get('senha')?.value;

      const loginSucesso = this.autenticacaoService.login({ email, senha });

      if (loginSucesso) {
        this.abrirDialogo('Informação', 'Login realizado com sucesso!');
        localStorage.setItem('logado', 'true');
        this.router.navigateByUrl('/home', { replaceUrl: true });
      } else {
        this.abrirDialogo('Erro', 'Usuário ou senha inválidos!');
      }
    } else {
      console.log('Formulário inválido');
      this.loginForm.markAllAsTouched();
    }
  }

  abrirDialogo(tituloDialogo: string, conteudoDialogo: string) {
    this.dialog.open(DialogoCsoaresComponent, {
      width: '200px',
      height: '200px',
      data: {
        titulo: tituloDialogo,
        conteudo: conteudoDialogo
      }
    });
  }
}
