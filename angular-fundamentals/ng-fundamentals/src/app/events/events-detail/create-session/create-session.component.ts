import { map } from 'rxjs/operators';
import { element } from 'protractor';
import { ISession } from './../../shared/event.session';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '../../../../../node_modules/@angular/forms';
import { restrictedWords } from '../../shared/restricted-words.validator';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', [Validators.required]);
    this.presenter = new FormControl('', [Validators.required]);
    this.duration = new FormControl('', [Validators.required]);
    this.level = new FormControl('', [Validators.required]);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(["foo", "bar"])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  saveSession(newSessionFormValues): void {
    let session: ISession = {
      id: undefined,
      name: newSessionFormValues.name,
      presenter: newSessionFormValues.presenter,
      duration: +newSessionFormValues.duration,
      level: newSessionFormValues.level,
      abstract: newSessionFormValues.abstract,
      voters: []
    };

    console.log(session);
  }
}
