import { Component } from '@angular/core';
import { Servico } from '../../models/servico';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
  servicos: Servico[] = [
    {
      imagem: "../../../assets/wind-banner.jfif",
      nome: "Wind Banner",
      descricao: "Wind Banner é uma excelente solução para publicidade ao ar livre. Ideal para promover sua marca de maneira impactante em eventos ou em locais com grande movimentação de pessoas."
    },
    {
      imagem: "../../../assets/cartao-de-visita.jfif",
      nome: "Cartão de Visita",
      descricao: "Cartões de visita personalizados para deixar uma primeira impressão marcante. Ótimo para quem busca destacar sua imagem profissional com qualidade e estilo."
    },
    {
      imagem: "../../../assets/fachadas.jfif",
      nome: "Fachadas",
      descricao: "Fachadas personalizadas que garantem visibilidade e atração para o seu estabelecimento. Uma forma eficaz de chamar a atenção dos clientes e valorizar sua marca."
    },
    {
      imagem: "../../../assets/adesivo-veiculo.jfif",
      nome: "Adesivação de Veículos",
      descricao: "A adesivação de veículos transforma carros e frotas em poderosos meios de comunicação móvel. Perfeita para divulgar sua empresa em movimento."
    },
    {
      imagem: "../../../assets/banners.jfif",
      nome: "Banners",
      descricao: "Banners de alta qualidade para eventos, promoções ou decoração. A melhor opção para quem deseja visibilidade em grande escala e impacto visual."
    },
    {
      imagem: "../../../assets/adesivo-jateado.jfif",
      nome: "Adesivos Jateados",
      descricao: "Adesivos jateados para dar um toque elegante e moderno a vidros e superfícies. Ideal para ambientes corporativos e comerciais que buscam privacidade e sofisticação."
    },
    {
      imagem: "../../../assets/painel-metalico.jfif",
      nome: "Painéis Metálicos",
      descricao: "Painéis metálicos resistentes e duráveis, ideais para sinalização, fachadas e projetos que necessitam de materiais robustos e de alta performance."
    },
    {
      imagem: "../../../assets/placa-refletiva.webp",
      nome: "Placas Refletivas",
      descricao: "Placas refletivas para garantir maior visibilidade em ambientes noturnos ou com pouca luz. Perfeitas para sinalização e segurança em vias públicas e privadas."
    },
    {
      imagem: "../../../assets/placas-pvc.jfif",
      nome: "Placas em PVC",
      descricao: "Placas de PVC duráveis e versáteis, ideais para interiores e exteriores. Uma opção econômica e resistente para sinalizações de diversos tipos."
    },
    {
      imagem: "../../../assets/quadro-gestao.jfif",
      nome: "Quadros de Gestão",
      descricao: "Quadros de gestão para facilitar a organização e visualização de informações. Perfeito para ambientes corporativos e empresas que buscam otimizar seus processos internos."
    },
    {
      imagem: "../../../assets/placa-acm.jfif",
      nome: "Placas em ACM",
      descricao: "Placas em ACM (Aluminium Composite Material) combinam resistência e sofisticação. Ideal para projetos de sinalização e comunicação visual de alta qualidade."
    },
    {
      imagem: "../../../assets/adesivo-porta.jfif",
      nome: "Adesivação de Portas",
      descricao: "Adesivação de portas para transformar ambientes internos com design moderno e personalizado. Ideal para empresas que buscam criatividade e profissionalismo na decoração."
    }
  ]
}