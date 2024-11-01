import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
  });

  profileDatas: any[] = [];


  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
    this.profileDatas.push(this.profileForm.value);
    this.profileForm.reset();
  }

}
