import { Component, OnInit, EventEmitter, Output} from '@angular/core';

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
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

   //this method "Emit" given an value for the EventEmitter of property serverCreated.
  onAddServer() {
   
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
      });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
      });
  }
  
}

