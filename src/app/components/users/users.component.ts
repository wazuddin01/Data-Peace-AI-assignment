import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Users } from '../../models/user'
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[]
  displayedColumns: string[] = [
    'id', 'First Name', 'Last Name',
    'age', 'Company', 'Email', 'Website',
    'Zip', 'City', 'State'];

  dataSource: MatTableDataSource<Users>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.fetchUser()
      .subscribe(users => {
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim()
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewProfile(user) {
    this.userService.setUser(user)
    this.router.navigate([`/user/${user.id}`])
  }
  open(link) {
    window.open(link)
  }
}
