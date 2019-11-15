import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../user-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  //needs to declare the variables from the service
  profile: UserProfile;


  constructor( private service: ProfileService) { }
  onUpdate(){
    this.router.navigate(["edit"]);
  }

  ngOnInit() {
    //grabs info from service
    this.profile = this.service.getUserProfile();

  }

}
