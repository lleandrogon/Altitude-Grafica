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
      imagem: "https://res.cloudinary.com/printstore/image/upload/v1691427416/ind%C3%BAstria-gr%C3%A1fica.jpg",
      nome: "Nome do Produto",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas et, rerum earum unde vitae voluptatum fuga omnis eum sunt rem, esse blanditiis cupiditate itaque, enim alias officia eveniet magnam."
    },
    {
      imagem: "https://res.cloudinary.com/printstore/image/upload/v1691427416/ind%C3%BAstria-gr%C3%A1fica.jpg",
      nome: "Nome do Produto",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas et, rerum earum unde vitae voluptatum fuga omnis eum sunt rem, esse blanditiis cupiditate itaque, enim alias officia eveniet magnam."
    },
    {
      imagem: "https://res.cloudinary.com/printstore/image/upload/v1691427416/ind%C3%BAstria-gr%C3%A1fica.jpg",
      nome: "Nome do Produto",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas et, rerum earum unde vitae voluptatum fuga omnis eum sunt rem, esse blanditiis cupiditate itaque, enim alias officia eveniet magnam."
    },
    {
      imagem: "https://res.cloudinary.com/printstore/image/upload/v1691427416/ind%C3%BAstria-gr%C3%A1fica.jpg",
      nome: "Nome do Produto",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas et, rerum earum unde vitae voluptatum fuga omnis eum sunt rem, esse blanditiis cupiditate itaque, enim alias officia eveniet magnam."
    },
    {
      imagem: "https://res.cloudinary.com/printstore/image/upload/v1691427416/ind%C3%BAstria-gr%C3%A1fica.jpg",
      nome: "Nome do Produto",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas et, rerum earum unde vitae voluptatum fuga omnis eum sunt rem, esse blanditiis cupiditate itaque, enim alias officia eveniet magnam."
    },
    {
      imagem: "https://res.cloudinary.com/printstore/image/upload/v1691427416/ind%C3%BAstria-gr%C3%A1fica.jpg",
      nome: "Nome do Produto",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas et, rerum earum unde vitae voluptatum fuga omnis eum sunt rem, esse blanditiis cupiditate itaque, enim alias officia eveniet magnam."
    },
    {
      imagem: "https://res.cloudinary.com/printstore/image/upload/v1691427416/ind%C3%BAstria-gr%C3%A1fica.jpg",
      nome: "Nome do Produto",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas et, rerum earum unde vitae voluptatum fuga omnis eum sunt rem, esse blanditiis cupiditate itaque, enim alias officia eveniet magnam."
    },
    {
      imagem: "https://res.cloudinary.com/printstore/image/upload/v1691427416/ind%C3%BAstria-gr%C3%A1fica.jpg",
      nome: "Nome do Produto",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas et, rerum earum unde vitae voluptatum fuga omnis eum sunt rem, esse blanditiis cupiditate itaque, enim alias officia eveniet magnam."
    },
  ]
}
