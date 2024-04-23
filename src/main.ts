import { importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), provideProtractorTestingSupport(), provideRouter(routeConfig), importProvidersFrom(TuiRootModule)],
}).catch((err) => console.error(err));
