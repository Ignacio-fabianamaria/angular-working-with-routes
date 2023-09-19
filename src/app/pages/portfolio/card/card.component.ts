import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private navigation:Router) {}

  ngOnInit(): void {
    setInterval(()=> {
      this.navigation.navigate(['/'])
    }, 5000)
  }

}
