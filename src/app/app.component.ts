import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// Module 20
export class AppComponent{
 now: Date = new Date()
}

//Module 19
// export class AppComponent {
//   arr = [1, 1, 2, 3, 5, 8, 13, 21];
//
//   objs = [
//     {name: 'Petya',
//       age:'15',
//       marks:[
//         {subj:'math', mark: 5},
//         {subj:'lang',mark: 5},
//         {subj:'chem',mark: 5},
//       ]},
//     {name: 'Vasya',
//       age:'12',
//       marks:[
//         {subj:'math', mark: 3},
//         {subj:'lang',mark: 4},
//         {subj:'chem',mark: 5},
//       ]}]
// }

//Module 15-18
// export class AppComponent{
//   bgToggle = true
// }

//Module 14
// export class AppComponent{
//   title = 'init'
// }

//Module 11-13
// export class AppComponent {
//   title = 'angular-basics';
//   img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzpExVyX0u7sbSBpSxVdui50mn1_slr9JXTw&usqp=CAU'
//
//   inputValue = ''
//
//   constructor() {
//     setTimeout(()=> {
//       console.log('Finish timeout')
//       this.img= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ZChWdThzVXo5Mp6SAv7sL67UqRzg_teuuA&usqp=CAU'
//     },3000)
//   }
//
//   onInput(event: any){
//     // console.log('event', event.target.value)
//     this.inputValue=(<HTMLInputElement>event.target).value
//   }
//
//   onBlur(sttr:string){
// this.inputValue=sttr
//   }
//
//   onClick () {
//     console.log('Click!')
//   }
// }
