import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'cssClasses';
  exampleForm: any;
  behaviorSubject = new BehaviorSubject<number>(0);


  constructor(private fb: FormBuilder) {
    this.exampleForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(60)]]
    });



    //implementing the Behaviour Subject ok 
     // Add subscribers
     this.behaviorSubject.subscribe((value) => {
      console.log('Subscriber 1:', value);
    });

    // Emit a new value
    this.behaviorSubject.next(1);

    // Subscriber 2 subscribes
    this.behaviorSubject.subscribe((value) => {
      console.log('Subscriber 2:', value);
    });

    // Emit another new value
    this.behaviorSubject.next(2);

    this.behaviorSubject.next(3);

    this.behaviorSubject.subscribe((value) => {
      console.log('Subscriber 3:', value);
    });

    this.behaviorSubject.next(4);

    // Emit data
  }

  get nameControl() {
    return this.exampleForm.get('name');
  }

  get emailControl() {
    return this.exampleForm.get('email');
  }

  get ageControl() {
    return this.exampleForm.get('age');
  }


}
