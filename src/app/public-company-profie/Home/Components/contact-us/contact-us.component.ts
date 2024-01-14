import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  formData: any = {};

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
  }

}
