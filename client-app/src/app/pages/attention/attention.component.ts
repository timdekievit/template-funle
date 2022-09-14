import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'funle-portal-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.scss']
})
export class AttentionComponent implements OnInit {

  assignments: any;
  message404Title = 'Hier zou het staan';
  messageErrorTitle = 'Er is iets fout gegaan';
  messageTitle = '';
  nothingFound = true;
  somethingWentWrong = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:5000/api/assignments').subscribe(res => {
      console.log(res);
      this.assignments = res;
    });
  }

  toPage(page: string) {
    this.router.navigate([page]);
  }

}
