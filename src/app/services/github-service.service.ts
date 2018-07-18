import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { GithubResponse } from './github-response.interface';
import { Subject } from 'rxjs/Subject';
import { GithubUser } from './github-user.interface';

@Injectable()
export class GithubService {

  users$: Observable<GithubUser[]>;
  userCount$: Observable<number>;
  userError$: Observable<boolean>;
  private users: Subject<GithubUser[]> = new Subject<GithubUser[]>();
  private userCount: Subject<number> = new Subject<number>();
  private userError: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.users$ = this.users.asObservable();
    this.userCount$ = this.userCount.asObservable();
    this.userError$ = this.userError.asObservable();
  }

  getUsers(query: string) {
    this.userError.next(false);
    this.http.get<GithubResponse>('https://api.github.com/search/users', {
      params: {
        q: query
      }
    }).subscribe(
        (response: GithubResponse) => {
          this.users.next(response.items.slice(0, 10));
          this.userCount.next(response.total_count);
        },
        (error) => {
          console.error(error);
          // .error would kill the client subscription. Usually undesired.
          this.users.next(undefined);
          this.userCount.next(undefined);
          this.userError.next(true);
        }
      );
  }
}
