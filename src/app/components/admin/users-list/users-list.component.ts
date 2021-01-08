import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {User} from '../../../models/User';
import {BookingService} from '../../../services/booking/booking.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users;
  bookings;

  constructor(private userService: UserService, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getBookingByUser();
  }

  getUsers(){
    return this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data.content;
      });
  }

    onCreateUser(){
    let newUser = new User();
    newUser.firstName = "Emile";
    newUser.lastName = "Cyimena";
    this.userService.createUser(newUser).subscribe(
      () => {console.log("L'utilisateur a été créé !")}
    );
  }

  getBookingByUser(){
    return this.bookingService.getBookingsByUser().subscribe(
      (data: any) => {this.bookings = data.content; console.log(data)}
    )
  }

}
