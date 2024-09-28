import { Component, OnInit } from '@angular/core';
import {HomeComponent} from "../../pages/home/home.component";
import {LoginComponent} from "../../pages/login/login.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  protected readonly HomeComponent = HomeComponent;
  protected readonly LoginComponent = LoginComponent;
}
