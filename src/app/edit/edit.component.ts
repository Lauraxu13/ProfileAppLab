import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProfileService } from "../profile.service";
import { UserProfile } from "../user-profile";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  profile: UserProfile;
  //  ={
  //   name:"",
  //   contact:"",
  //   bio:""
  // }

  // inject service, inject router
  constructor(private router: Router, private profileService: ProfileService) {}

  onSubmit(): void {
    this.profileService.setUserProfile(this.profile);
    this.router.navigate(["profile"]);
  }

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }
}
