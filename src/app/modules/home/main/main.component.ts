import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
//import { HighlightSliderComponent } from 'src/app/modules/home/highlight-slider/highlight-slider.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  public isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
