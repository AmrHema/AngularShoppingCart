import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { PostService } from 'src/app/Services/post.service';


@Component({
  selector: 'httpMethodeGet',
  templateUrl: './http-methode.component.html',
  styleUrls: ['./http-methode.component.css']
})
export class HttpMethodeComponent implements OnInit {

  constructor(private services: PostService) { }
  ngOnInit() {
    this.services.Get().subscribe(data => {
      this.posts = data.json();
    });
  }

  form = new FormGroup({
    userId: new FormControl(),
    id: new FormControl(),
    title: new FormControl(),
    body: new FormControl(),
  })

  posts: any[];
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  NewPost: any[];

  get userId() { return this.form.get('userId'); }
  get id() { return this.form.get('id'); }
  get title() { return this.form.get('title'); }
  get body() { return this.form.get('body'); }




  CreatePost(form) {
    this.NewPost = form.value;
    this.services.Create(this.NewPost ).subscribe(data => {
      // this.posts.push(this.NewPost);
      this.posts.splice(0, 0, this.NewPost);
    });
  };
  OldPost; updatedPost;

  UpdatePost(post, form) {
    this.OldPost = post;
    this.services.Update(post, form.value).subscribe(data => {
      let index = this.posts.indexOf(post);
      this.posts[index] =form.value;
    });
  };

  DeletePost(post) {

    this.services.Delete(post).subscribe(data => {
      let index = this.posts.indexOf(post);
      this.posts.splice(this.posts[index], 1);
      alert('Deleted Succeded');
    });
  }

}// End class
