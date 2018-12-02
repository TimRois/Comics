import { Injectable } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor() { }

  form = new FormGroup({
      
    $key :new FormControl(null),
    fullName : new FormControl('',Validators.required),
    email  :new FormControl('',[Validators.email,Validators.required]),
    mobile :new FormControl('',[Validators.required, Validators.minLength(8)]),
    location :new FormControl('')

  });

}
