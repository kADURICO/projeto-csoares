import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DialogoCsoaresComponent } from '../dialogo-csoares/dialogo-csoares.component';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-principal-csoares',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './principal-csoares.component.html',
  styleUrl: './principal-csoares.component.css'
})
export class PrincipalCsoaresComponent {
  constructor(private router: Router, private dialog: MatDialog) {}

  logado: boolean = false;

  ngDoCheck(): void {
    this.logado = localStorage.getItem('logado') === 'true';
  }
  async sair() {
    if (await this.abrirConfirmacao('Atenção', 'Deseja realmente sair?')) {
      localStorage.removeItem('logado');
      this.logado = false;
      this.router.navigate(['/']);
    }
  }
  abrirConfirmacao(tituloDialogo : string, conteudoDialogo : string) : Promise<boolean> {
    const caixaConfirmacao = this.dialog.open(DialogoCsoaresComponent, {
      width: '200px',
      height: '200px',
      data: {
        titulo: tituloDialogo,
        conteudo: conteudoDialogo,
        textoConfirmar: 'Confirmar',
        textoCancelar: 'Cancelar'
      },
    });
    return lastValueFrom(caixaConfirmacao.afterClosed());
  }
}
