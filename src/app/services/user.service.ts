import { Injectable } from '@angular/core';
import { IUser, IUserPagination } from '../interface/user.interfaces';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlApi = 'http://localhost:3000'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getList(current: number, limit: number = 10) {
    return this.httpClient.get<IUserPagination>(`${this.urlApi}/users/page?current=${current}&limit=${limit}`);
  }

  save(address: IUser) {
    return this.httpClient.post(`${ this.urlApi }/users`, address).pipe(
      map((response: any) => response as IUser)
    )
  }

}
