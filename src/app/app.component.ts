import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import {formStructure} from 'src/app/form.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public http:HttpClient){}
  title = 'dynamicForm';
  form!: FormGroup;
  formStructure: any; // Store the JSON data in an array

  ngOnInit() {
    // this.http.get('http://localhost:8000/data').subscribe((res:any)=>{
    //   this.formStructure=res
    // })
    this.formStructure=[
      {
        "type": "text",
        "label": "Name",
        "name": "name",
        "placeholder": "Enter your name",
        "required": true
      },
      {
        "type": "email",
        "label": "Email",
        "name": "email",
        "placeholder": "Enter your email",
        "required": true
      },
      {
        "type": "select",
        "label": "Country",
        "name": "country",
        "options": ["USA", "Canada", "Mexico"],
        "required": true
      }
    ]
    console.log('formmmm..: ',this.formStructure);
    
    this.createForm();
  }

  createForm() {
    const group: any = {};

    this.formStructure.forEach((field:any) => {
      console.log('bform: ',field)
      const { name, required } = field;
      console.log('aform: ',field)
      const validators = required ? Validators.required : null;
      console.log('validators: ',validators)
      group[name] = new FormControl('', validators);
      console.log('grp: ',group)
    });

    this.form = new FormGroup(group);
  }

  submitForm() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      // Handle form validation errors
    }
  }
}
