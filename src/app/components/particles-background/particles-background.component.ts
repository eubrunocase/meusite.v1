import { Component, OnInit, signal } from '@angular/core';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { IOptions, RecursivePartial } from '@tsparticles/engine';
import { loadTrianglesPreset } from '@tsparticles/preset-triangles';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-particles-background',
  standalone: true,
  imports: [NgxParticlesModule, LoadingSpinnerComponent],
  templateUrl: './particles-background.component.html',
  styleUrl: './particles-background.component.scss',
})
export class ParticlesBackgroundComponent implements OnInit {
  id = 'tsParticles';
  particlesLoaded = signal(false);

  particleOptions = signal<RecursivePartial<IOptions>>({
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: 'bubble',
        },
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 1,
          size: 5,
        },
      },
    },
    particles: {
      color: {
        value: '#40C634',
      },
      links: {
        color: '#40C634',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1.5,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        random: false,
        speed: 1,
        straight: true,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: {
          min: 0.5,
          max: 0.8,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: {
          min: 1,
          max: 3,
        },
      },
      interactivity: {
        detectsOn: 'canvas',
      },
    },
    preset: 'triangles',
    detectRetina: true,
    fullScreen: true,
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 50,
            },
          },
        },
      },
    ],
  });

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      await loadTrianglesPreset(engine);
    });
  }
}
