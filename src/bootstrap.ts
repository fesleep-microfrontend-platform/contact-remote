import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Contact } from './app/pages/contact/contact';

bootstrapApplication(Contact, appConfig).catch((err) => console.error(err));
