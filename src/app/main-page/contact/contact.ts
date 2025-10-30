import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  contactData= {
    name:"",
    email: "",
    message: "",
  }

  onSubmit(ngForm: NgForm) {
    
    if(ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }
}
