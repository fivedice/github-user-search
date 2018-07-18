import { GithubUser } from './github-user.interface';

export interface GithubResponse {
  total_count: number;
  incomplete_results?: boolean;
  items: Array<GithubUser>;
}
