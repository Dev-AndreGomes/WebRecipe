import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

export const AppConfig = {
  apiUrl: 'https://api.spoonacular.com/recipes/complexSearch',
  apiKey: '8af4de3f87f64f409bd8bede8c4a4d73'
};