import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.page.html',
  styleUrls: ['./contact-me.page.scss'],
})
export class ContactMePage implements OnInit {
 myForm!:FormGroup
 formBuilder!: FormBuilder;
  element: any;


  constructor() {
    // this.myForm = this.formBuilder.group({
    //   email: [
    //     '', Validators.compose([    //multiple validators
    //         Validators.email,       //match email
    //         Validators.required     //non-emtpy
    //         ])
    //   ],
    //   otherField: ['']
    // })
   }

  ngOnInit() {
  }

  onTextInput(event:any){
    event.target.getInputElement().then((textArea: HTMLTextAreaElement) => { console.log(textArea.textLength + " : " + textArea.value); textArea.scroll({top: textArea.scrollHeight}); }); 
     let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
    textArea.style.height = 'auto';
    if (textArea.scrollHeight < 100) {
      textArea.style.height = textArea.scrollHeight + "px";
      textArea.style.overflowY = 'hidden';
    } else {
      textArea.style.height = "800px";
      textArea.style.overflowY = 'auto';
    }
  }

}
