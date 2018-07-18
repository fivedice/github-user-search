import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { GithubService } from '../services/github-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  search() {
    if (!this.searchForm.invalid) {
      this.githubService.getUsers(this.searchForm.controls['name'].value);
    }
  }

}
