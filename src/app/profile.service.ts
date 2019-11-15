import { Injectable } from "@angular/core";
import { UserProfile } from './user-profile';


@Injectable({
  providedIn: "root"
})
export class ProfileService {
profile: UserProfile = {
    name: "Laura Xu",
    contact: "laura@gmail.com",
    bio: "will eat cheese anywhere"
  };

 constructor() {}

 //take service data and puts it where it is imported
  getUserProfile():UserProfile{
    return this.profile;
  }

  //takes new info from component and puts new info into service
  setUserProfile(newInfo:UserProfile){
    this.profile =newInfo;
  }




 
  }





