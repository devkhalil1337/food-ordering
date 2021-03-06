import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input("selectedTab") selectedTab : string
  @Output("OnChangeSelectedTab") OnChangeSelectedTab = new EventEmitter();
  constructor(private _activatedRoute: ActivatedRoute, private router: Router) {
   }

  ngOnInit(): void {
  }


  onSelectedTab(route:string){
    this.router.navigate(['user/'+route]);
    this.OnChangeSelectedTab.emit(route);
  }


}
