import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user.interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users!: IUser[]
  totalItems!: number;
  totalPage!: number;
  currentPage: number = 1;
  limit: number = 5;
  rowsPerPageOptions = [5, 10, 20, 30, 40];

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getUserList(this.currentPage, this.limit);
  }

  getUserList(current: number, limit?: number) {
    this.userService.getList(current, limit).subscribe({
      next: (resp) => {

        this.users = resp.results;
        this.totalItems = resp.total;
        this.totalPage = resp.totalPages;
        this.currentPage = resp.current;

      }, error: (err) => {

      }
    })
  }

  paginate(event: any) {
    this.getUserList(event.page + 1, event.rows);
  }
}
