import { Component, OnInit } from '@angular/core';

// import { IpcRenderer, Remote } from "electron";
declare var ipcRenderer: any;
declare var remote: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'proyecto-lavadero';

  ngOnInit(): void {
    console.log('TESTING<>>>>>>>');

    ipcRenderer.on('ping-pong-reply', (event, arg) => {
      console.log(arg); // prints "pong"
    });
    ipcRenderer.send('ping-pong-message', 'ping');
  }

}
