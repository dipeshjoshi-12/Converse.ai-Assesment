import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizza-app';
  images = ['../assets/thin crust.jpg', '../assets/thick crust.jpg'];

  imagePath = "../assets/Blank circle.svg";
  showIngredients:boolean=false;

  addBase(control:any){
    if(control.outerText==="Thin Crust Base"){
      this.showIngredients=true;
      this.imagePath = "../assets/thin crust.svg";
    }
    else if(control.outerText==="Thick Crust Base"){
      this.showIngredients=true;
      this.imagePath = "../assets/thick crust.svg";
    }
  }

  reset(event:any){
    this.showIngredients=false;
    this.imagePath = "../assets/Blank circle.svg";
  }
  
  onDrop(event: CdkDragDrop<string[]>) {
    console.log("hello");
    console.log(moveItemInArray);
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

  }
}
