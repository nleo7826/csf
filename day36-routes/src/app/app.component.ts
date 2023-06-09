import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day36';

  constructor(private router: Router) {
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToElephant() {
    this.router.navigate(['/elephant']);
  }

  goToTrex() {
    this.router.navigate(['/trex']);
  }
}
