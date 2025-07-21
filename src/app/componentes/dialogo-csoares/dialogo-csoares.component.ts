import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

export interface DialogoData{
  titulo: string;
  conteudo: string;
  textoConfirmar: string;
  textoCancelar: string;
}

@Component({
  selector: 'app-dialogo-csoares',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './dialogo-csoares.component.html',
  styleUrl: './dialogo-csoares.component.css'
})
export class DialogoCsoaresComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogoCsoaresComponent>,
    private dialog: MatDialog) {}

    cancelar(): void {
      this.dialogRef.close(false); // Retorna false ao cancelar
    }
    confirmar(): void {
      this.dialogRef.close(true); // Retorna true ao confirmar
    }
}
