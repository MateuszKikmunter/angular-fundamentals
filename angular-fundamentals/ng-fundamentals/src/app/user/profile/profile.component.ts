import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
  <div class="container">
  <h1>Edit your profile</h1>
  <hr>
  <div class="col-mdg-6">
  <h3>Edit progile goes here</h3>
  <br/>
  <br/>
  <button type="submit" class="btn btn-primary">Save</button>
  <button type="button" class="btn btn-default">Cancel</button>
  </div>
  </div>
  `
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
