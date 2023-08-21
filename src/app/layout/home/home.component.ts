import { Component, HostListener, OnInit } from '@angular/core';
import { visibility, flyInOut, expand } from '../../animations/app-animations';
import { ThemeService } from '../../../themes/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host:{
    '[@flyInOut]':'true',
    'style':'display : block;'
  },
  animations:[flyInOut(), expand(), visibility()]
})
export class HomeComponent implements OnInit{
  
  
  constructor(private themeService: ThemeService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  
  toggle() {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }
  
}