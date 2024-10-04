import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GrowtonAngularFormsApp';

  evtClick(locuserDetails : any){

    console.log(locuserDetails); // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvIMP

    // console.log(locuserDetails.controls);
    // console.log(locuserDetails.controls['userName'].value);
    // console.log(locuserDetails.controls['userEmail'].value);
    // console.log(locuserDetails.controls['userComments'].value);

    

  }
}
