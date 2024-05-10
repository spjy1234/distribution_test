import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = '/api/user';

  constructor(private http: HttpClient) {
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }
}
