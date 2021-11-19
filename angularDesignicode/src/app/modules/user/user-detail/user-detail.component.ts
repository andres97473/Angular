import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICardUser } from '../../../shared/components/cards/card-user/card-user.metadata';
import { USERS_DATA } from '../../../data/constants/user.const';
import { UserService } from '../../../data/services/api/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  public id: number;
  //public users: ICardUser[] = USERS_DATA;
  public currentUser?: ICardUser;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.id = this.route.snapshot.params['id'];
    //this.currentUser = this.users.find((user) => user.id === +this.id);
    //console.log(this.currentUser);
  }

  ngOnInit(): void {
    // console.log(this.users);
    this.userService.getUserById(this.id).subscribe((r: any) => {
      this.currentUser = r;
      //console.log(this.currentUser);
    });
  }
}
