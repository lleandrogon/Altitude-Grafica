import { Component } from '@angular/core';
import { Pagamento } from '../../models/pagamento';
import { Contato } from '../../models/contato';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  linkedinLeandro: string = "https://www.linkedin.com/in/leandro-gon%C3%A7alves-cris%C3%B3stomo-9936422b0/";

  pagamentos: Pagamento[] = [
    {
      forma: "Dinheiro",
      icon: "fa-solid fa-money-bill"
    },
    {
      forma: "Pix",
      icon: "fa-brands fa-pix"
    },
    {
      forma: "Cartão",
      icon: "fa-solid fa-credit-card"
    }
  ]

  contatos: Contato[] = [
    {
      tipo: "telefone",
      icon: "fa-solid fa-phone",
      descricao: "+55 82 98810-3004"
    },
    {
      tipo: "endereço",
      icon: "fa-solid fa-house",
      descricao: "R. Xavier de Brito, 1281, Prado"
    },
    {
      tipo: "email",
      icon: "fa-solid fa-envelope",
      descricao: "atitudegraficamcz@gmail.com"
    }
  ]

  redesSociais: Contato[] = [
    {
      tipo: "Whatsapp",
      icon: "fa-brands fa-whatsapp",
      descricao: "+55 82 8810-3004",
      link: "https://wa.me/558288103004"
    },
    {
      tipo: "Instagram",
      icon: "fa-brands fa-instagram",
      descricao: "@atitudegrafmcz",
      link: "https://www.instagram.com/atitudegrafmcz?igsh=MTA3ZXJ0bmZ3cHRnNg==",
    },
    {
      tipo: "Facebook",
      icon: "fa-brands fa-facebook",
      descricao: "@atitudegrafmcz",
      link: "https://www.facebook.com/share/1FPkkA8nLc/"
    }
  ]
}