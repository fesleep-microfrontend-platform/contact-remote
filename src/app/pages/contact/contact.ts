import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { UiButtonComponent, UiInputComponent } from '@fesleep-microfrontend-platform/ui-design-system';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, FormsModule, UiButtonComponent, UiInputComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  name = '';
  email = '';
  subject = '';
  message = '';

  onSubmit(): void {
    // TODO: send form (e.g. API call)
  }
}
