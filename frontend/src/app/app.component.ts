import {Component, OnDestroy} from '@angular/core';
import {UserService} from "./services/user.service";
import {User} from "./models/user.model";
import {Observable, Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users$: Observable<User[]>;
  form: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
  ) {
    this.users$ = this.userService.getUsers();
    this.form = fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      age: ['', Validators.required],
    })
  }

  reset(event: Event) {
    event.preventDefault();
    this.form.reset();
  }
  add() {
    console.log(this.form.value);
    this.userService.createUser(this.form.value).subscribe( () => {
      this.users$ = this.userService.getUsers();
      this.form.reset();
    })
  }
}
