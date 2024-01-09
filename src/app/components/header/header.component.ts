import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navigation = signal([
    {
      name: 'Sobre',
      anchor: 'about',
    },
    {
      name: 'Habilidades',
      anchor: 'skills',
    },
    {
      name: 'Projetos',
      anchor: 'projects',
    },
    {
      name: 'Contato',
      anchor: 'contact',
    },
  ]);

  goTo(anchor: string) {
    const element = document.querySelector(`#${anchor}`);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
