import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICardUser } from '../../../shared/components/cards/card-user/card-user.metadata';
import { USERS_DATA } from '../../../data/constants/user.const';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  public id: number;
  public users: ICardUser[] = USERS_DATA;
  public currentUser?: ICardUser;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.currentUser = this.users.find((user) => user.id === +this.id);
    //console.log(this.currentUser);
  }

  ngOnInit(): void {
    // console.log(this.users);
  }
}
