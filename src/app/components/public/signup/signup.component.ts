import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/User';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }


  createUser(){
    let newUser = new User();
    newUser.firstName = "Emile";
    newUser.lastName = "Cyimena";
    this.userService.createUser(newUser).subscribe();
  }

}
