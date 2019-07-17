import { Injectable } from '@angular/core';
import { Http } from '@angular/Http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: Http) { }

  private posts: any[];
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  NewPost: any[];
  Get() {
    return this.http.get(this.url);
  };


  Create(form) {
    return this.http.post(this.url, form.value);
  };


  Update(post, form) {

    return this.http.put(this.url + '/' + post.id,form.value);
  };

  Delete(post) {

    return this.http.delete(this.url + '/' + post.id);
  }

}//End class
