import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashComponent } from "./components/splash/splash.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SplashComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  showSplash: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showSplash = false;  
    }, 3000)
  }
}
