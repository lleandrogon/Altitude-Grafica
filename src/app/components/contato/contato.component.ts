import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  contatoForm: FormGroup = new FormGroup({
    nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, [Validators.required, Validators.pattern(/^(\(\d{2}\) )?\d{4,5}-?\d{4}$/),]),
    mensagem: new FormControl(null, [Validators.required, Validators.minLength(5)]),
  })

  formatarTelefone(event: any): void {
    const input = event.target as HTMLInputElement;
    let valor = input.value.replace(/\D/g, '');

    if (valor.length > 10) {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (valor.length > 6) {
      valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (valor.length > 2) {
      valor = valor.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else {
      valor = valor.replace(/^(\d*)$/, '($1');
    }

    input.value = valor;
    this.contatoForm.controls['telefone'].setValue(valor, { emitEvent: false });
  }

  limparFormulario() {
    this.contatoForm.reset();
  }

  enviarEmail() {
    const nome = this.contatoForm.value.nome;
    const email = this.contatoForm.value.email;
    const telefone = this.contatoForm.value.telefone;
    const mensagem = this.contatoForm.value.mensagem;

    const emailLink = `mailto:atitudegraficamcz@gmail.com?subject=Contato pelo Site&body=Nome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefone} %0AMensagem: ${mensagem}`;

    window.open(emailLink, "_blank");
  }
}