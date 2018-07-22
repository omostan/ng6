import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter',
        [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger('50ms',
          animate('550ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)' })))
        ], { optional: true }),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class PostsComponent implements OnInit {

  posts: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.dataService.getPosts().subscribe(
      data => {
        // console.log('posts from data service: ', data)
        this.posts = data;
      },
      err => console.error(err),
      () => console.log('done fetching post data!')
    );
  }
}
