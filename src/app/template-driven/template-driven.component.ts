import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  submitted: any[] =[];

  onSubmit(form: any){
    console.log(form.value);
    this.submitted.push(form.value);
  }


}
