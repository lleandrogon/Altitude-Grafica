import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HomeComponent } from "../home/home.component";
import { SobreComponent } from "../sobre/sobre.component";
import { ServicosComponent } from "../servicos/servicos.component";
import { EstatisticasComponent } from "../estatisticas/estatisticas.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, SobreComponent, ServicosComponent, EstatisticasComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
