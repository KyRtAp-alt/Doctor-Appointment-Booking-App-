import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMenuNew(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document
      .querySelector('.header-hamburger-menu')!
      .classList.toggle('active');
    document.querySelector('.header-close-menu')!.classList.toggle('active');
  }
}
