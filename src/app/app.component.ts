import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

interface AppState {
  message: string;
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message$: Observable<string>;
  post: Observable<Post>;

  text: string; // for input val

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
    this.post = this.store.select('post');
  }

  // message functions
  spanishMessage(): void {
    this.store.dispatch({type: 'SPANISH'});
  }

  frenchMessage(): void {
    this.store.dispatch({type: 'FRENCH'});
  }

  // post functions
  editText(): void {
    this.store.dispatch( new PostActions.EditText(this.text) );
  }

  resetPost(): void {
    this.store.dispatch( new PostActions.Reset() );
  }

  upvote(): void {
    this.store.dispatch( new PostActions.Upvote() );
  }

  downvote(): void {
    this.store.dispatch( new PostActions.Downvote() );
  }
}
