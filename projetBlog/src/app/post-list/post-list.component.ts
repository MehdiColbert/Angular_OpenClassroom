import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

@Input() myPost: Post;

@Input() title: string;
@Input() content: string;
@Input() loveIts: number = 0;
@Input() created_at: Date= new Date();;

  constructor() { }
  ngOnInit() {
  }

  addLike(){
    this.loveIts +=1;
  }

  dislike(){
    this.loveIts -=1;
  }

}

class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(){
    this.created_at = new Date();
    this.loveIts = 0;
  }

}
