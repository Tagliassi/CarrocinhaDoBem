import { Component, HostListener } from '@angular/core';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  isDropdownOpen = false;

  toggleDropdown(force?: boolean) {
    if (typeof force !== 'undefined') {
      this.isDropdownOpen = force;
    } else {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.toggleDropdown(false);
    }
  }
}
