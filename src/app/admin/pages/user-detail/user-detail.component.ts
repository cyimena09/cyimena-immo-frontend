import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../user/services/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {BookingService} from '../../../booking/services/booking/booking.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
  user: any = { };
  bookings;

  constructor(private userService: UserService,
              private bookingService: BookingService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookingsByUser();
  }

  getBookingsByUser(){
    return this.bookingService.getBookingsByUserId(this.id).subscribe(
      (data: any) => {
        this.bookings = data.content;
        this.user = this.bookings[0].user;
      });
  }

}
