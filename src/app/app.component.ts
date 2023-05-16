import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import html2canvas from 'html2canvas';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cv-generator';
/*  @ViewChild('content', { static: false }) el!: ElementRef<HTMLImageElement>;
  @ViewChild('contentTwo', { static: false }) el2!: ElementRef<HTMLImageElement>;*/
  constructor(
  ) {
  }
  @ViewChild('content', { static: false }) el!: ElementRef<HTMLSelectElement>;
  element: any;

  ngOnInit(){
    this.element = document.getElementById('content');
  }

  generatePDF(){
    console.log(this.element)
  let resume = window.open(this.element, '_blank');
    const close = () => {
      setTimeout(() => {
        resume?.close();
      }, 1000)
    }
  resume?.focus();
  resume?.print();
  close()



  }





}
