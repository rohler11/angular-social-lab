import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: "I'm dying",
      thought: 'Somebody help me',
    },
    {
      title: 'Hey gamers',
      thought: 'Anyone else lonely?',
    },
    {
      title: 'Meme lord',
      thought: 'Check out this new meme',
    },
  ];

  showForm: boolean = false;

  constructor() {}

  onSubmit(posts: Post) {
    this.posts.unshift(posts);
  }

  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {}
}
