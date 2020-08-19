import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();

  constructor() {}

  submitPost(form: NgForm) {
    let newPost: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    form.reset();
    // removes text from form after submit^^^
    this.submitted.emit(newPost);
  }

  // submitPost(form: NgForm) {
  //   this.submitted.emit(form.value)
  //   };
  // }

  ngOnInit(): void {}
}
