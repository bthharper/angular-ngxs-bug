import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ErrorDialogPlaceholderComponent } from './error/dialog-placeholder/error-dialog-placeholder.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ErrorDialogPlaceholderComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <error-dialog-placeholder></error-dialog-placeholder>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
