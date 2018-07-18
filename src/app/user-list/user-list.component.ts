import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { GithubUser } from '../services/github-user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {

  @Input() users: GithubUser[];

}
