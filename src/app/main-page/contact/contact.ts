import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  mailTest = false;
  messageSent = false;
  formSubmitted = false;

  http = inject(HttpClient)
  
  contactData= {
    name:"",
    email: "",
    message: "",
    privacy: false,
  }

  post = {
    endPoint: 'https://portfolio.malte-schuette.eu/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.formSubmitted = false;
            ngForm.resetForm();
            this.showSuccessMessage();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.showSuccessMessage();
    }
  }

  showSuccessMessage() {
    this.messageSent = true;
    setTimeout(() => this.messageSent = false, 5000);
  }
}
