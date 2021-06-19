import { Ibook } from './../shared/interface/book';
import { Component, OnInit , ViewChild,NgModule} from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import {
  FormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-add-book',
  template: `<!--suppress ALL -->
  <div class="container">
<form novalidate
      (ngSubmit)="onSubmit()"
      #f="ngForm">
	<fieldset ngModelGroup="title">
		<div class="form-group"
		     [ngClass]="{'has-danger': title.invalid && (title.dirty || title.touched),'has-success': title.valid && (title.dirty || title.touched)}">
			<input type="text"
			       class="form-control"
			       name="title"
			       [(ngModel)]="model.title"
			       required
			       #title="ngModel" placeholder="title">
			<div class="form-control-feedback"
			     *ngIf="title.errors && (title.dirty || title.touched)">
				<p *ngIf="title.errors.required">Title is required</p>
			</div>
		</div>
	</fieldset>
  <div class="form-group"
		     [ngClass]="{
        'has-danger': price.invalid && (price.dirty || price.touched),
        'has-success': price.valid && (price.dirty || price.touched)
   }">
			<input type="number"
			       class="form-control"
			       name="price"
			       [(ngModel)]="model.price"
			       required
			       #price="ngModel" placeholder="price">
			<div class="form-control-feedback"
			     *ngIf="price.errors && (price.dirty || price.touched)">
				<p *ngIf="price.errors.required">price is required</p>
			</div>
		</div>

    <div class="form-group"
		     [ngClass]="{
        'has-danger': cover.invalid && (cover.dirty || cover.touched),
        'has-success': cover.valid && (cover.dirty || cover.touched)
   }">
			<input type="text"
			       class="form-control"
			       name="cover"
			       [(ngModel)]="model.cover"
			       required
			       #cover="ngModel" placeholder="cover">
			<div class="form-control-feedback"
			     *ngIf="cover.errors && (cover.dirty || cover.touched)">
				<p *ngIf="cover.errors.required">cover is required</p>
			</div>
		</div>


    <div class="form-group"
		     [ngClass]="{
        'has-danger': descripton.invalid && (descripton.dirty || descripton.touched),
        'has-success': descripton.valid && (descripton.dirty || descripton.touched)
   }">
			<input type="text"
			       class="form-control"
			       name="descripton"
			       [(ngModel)]="model.descripton"
			       required
			       #descripton="ngModel" placeholder="descripton">
			<div class="form-control-feedback"
			     *ngIf="descripton.errors && (descripton.dirty || descripton.touched)">
				<p *ngIf="descripton.errors.required">description is required</p>
			</div>
		</div>
	<button type="submit"
	        class="btn btn-primary"
	        [disabled]="f.invalid">Submit
	</button>

</form>
</div>
`,
  styleUrls: ['./add-book.component.scss']
})





export class AddBookComponent implements OnInit {
  @ViewChild('f') form: any;
  model : Ibook = new Ibook(0 ,  "" , "" ,  "" ,  "");
  constructor(private _bookService:ApiService) { }

  ngOnInit() {
  }
  submitted = false;

  onSubmit() {


    console.log(this.model)
  if(this._bookService.addBook(this.model)){
    this.form.reset();
console.log("added")
  }}
}
