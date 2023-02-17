import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sever-element',
  templateUrl: './sever-element.component.html',
  styleUrls: ['./sever-element.component.css'],
  encapsulation: ViewEncapsulation.None// Active and deactive the shadow DOM. 
})
export class SeverElementComponent implements OnInit {
  //proprerty than will can be used of global way (adding her the decorator "@input" ).
  // Beetwen parentheses we cab put a alias for our property  
 @Input('srvElement') element: { type: string , name: string , content: string};
  @Input() name: string;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges( changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

}
