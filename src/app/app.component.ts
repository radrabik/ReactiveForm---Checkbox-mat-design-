import { Component, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  form = this.fb.group({
    downloadsAllowed: [false, Validators.requiredTrue],
   });

  constructor(private fb: FormBuilder) { }

}
