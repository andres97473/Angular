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

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(this.users);
  }
}
