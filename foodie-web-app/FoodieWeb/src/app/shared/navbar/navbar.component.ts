import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
   @Output() valuseChange=new EventEmitter();
  ngOnInit(): void {
  }

  onClick()
  {
    console.log('in the click function')
    this.router.navigate(['/auth'])
  }
  onClose()
  {
    console.log('in the close')
    this.valuseChange.emit();
  }
}
