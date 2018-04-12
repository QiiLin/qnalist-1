import { Component, OnInit } from '@angular/core';

import { Adal5Service } from 'adal-angular5';
import { adal } from 'adal-angular';

 const config: adal.Config = {                           
   tenant: 'Ontariogov.onmicrosoft.com',                      
   clientId: '76130e6b-3f33-4ab3-8578-ca6c943d7ca9'    
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private service: Adal5Service) {      
    this.service.init(config);                      
  }    
  ngOnInit(){
    // Handle callback if this is a redirect from Azure
    this.service.handleWindowCallback();

    // Check if the user is authenticated. If not, call the login() method
     if (!this.service.userInfo.authenticated) {
       this.service.login();
     }
  }

  // Logout Method
  public logout() {
    this.service.logOut();
  }
}
