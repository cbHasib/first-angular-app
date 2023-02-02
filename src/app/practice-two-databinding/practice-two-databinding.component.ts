import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-two-databinding',
  templateUrl: './practice-two-databinding.component.html',
  styleUrls: ['./practice-two-databinding.component.css']
})
export class PracticeTwoDatabindingComponent {

  username: string= '';
  resetButtonDisable: boolean = false;

  handleReset(){
    this.username = ''
  }


}
