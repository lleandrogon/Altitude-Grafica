import { Component } from '@angular/core';
import { Estatistica } from '../../models/estatistica';

@Component({
  selector: 'app-estatisticas',
  standalone: true,
  imports: [],
  templateUrl: './estatisticas.component.html',
  styleUrl: './estatisticas.component.css'
})
export class EstatisticasComponent {
  estatisticas: Estatistica[] = [
    {
      icon: "fa-solid fa-book-open",
      quantidade: "50 mil",
      descricao: "materiais aplicados"
    },
    {
      icon: "fa-solid fa-handshake",
      quantidade: "Mil",
      descricao: "clientes satisfeitos"
    },
    {
      icon: "fa-solid fa-briefcase",
      quantidade: "10 anos",
      descricao: "ambiente profissional"
    },
    {
      icon: "fa-regular fa-circle-check",
      quantidade: "300",
      descricao: "projetos concluídos"
    }
  ]
}
