import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  //Two property than will run the event executers (EventEmmiter).
  // The decorator "Output" with yours "alias" let the serverCraeated and bluePrintCreated accessible out of component of origin her.
  @Output('svCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  //newServerName = '';
 // newServerContent = '';

 // ViewChild in property
 @ViewChild('serverContentInput') serverContentInput: ElementRef/* Inside of parentheses will be passe the name
 place the  local reference than was created in template HTML this component*/

  constructor() { }

  ngOnInit(): void {
  
  }

   //This method "Emit" given an value for the EventEmitter of property serverCreated.
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
      });
      
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value ,
      serverContent: this.serverContentInput.nativeElement.value = "lorem ipsum",
      });
      
  }
  
}

