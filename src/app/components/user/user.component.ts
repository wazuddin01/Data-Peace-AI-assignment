import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.SingleUser()
  }

}
