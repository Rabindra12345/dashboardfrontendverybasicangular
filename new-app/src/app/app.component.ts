import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { InputEvent } from '@angular/core';
import './app.component.css';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';
  formData = {
    name: '',
    description: '',
    price: '',
    image: null
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onFileChanged(event: any) {
    this.formData.image = event.target.files && event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('description', this.formData.description);
    formData.append('price', this.formData.price);
    if(this.formData.image)
      formData.append('image', this.formData.image);

    this.http.post('http://localhost:7089/api/products', formData).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      });
  }
}
