import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { TestService } from '../test.service';

@Component({
  selector: 'fp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  profile$: Observable<any>;
  testForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(100), this.dupaValidator]),
    email: new FormControl({
      value: '',
      disabled: true
    }, {
      validators: Validators.email
    })
  })

  constructor(private testService: TestService) {
    this.profile$ = this.testService.getProfile().pipe(
      share()
    )
    console.log(testService.data);
  }

  ngOnInit(): void {
    this.testForm.controls.username.statusChanges.subscribe(val => {
     if(val!== 'VALID') {
      this.testForm.controls.email.disable()
     } else {
      this.testForm.controls.email.enable()
     }
    })
  }

  handleSubmit() {
    if (this.testForm.valid) {
      console.log(this.testForm.getRawValue())
    }

  }

  dupaValidator(control: FormControl): ValidationErrors | null {
    return control.value.includes('dupa') ? { dupaError: true } : null
  }

}
