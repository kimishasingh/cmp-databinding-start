import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None // this makes the css available globally and not just to this component
  encapsulation: ViewEncapsulation.Emulated // this makes the css available just to this component
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input("srvElement") element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild("heading", {static: true}) header: ElementRef;
  @ContentChild("contentParagraph", {static: true}) paragraph: ElementRef;

  constructor() { 
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log('Text content' + this.header.nativeElement.textContent);
    console.log("Paragraph content: " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("doCheck called");
  }

  ngAfterContentInit() {
    console.log("afterContentInit called");
    console.log("Paragraph content: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("afterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("afterViewInit called");
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("afterViewChecked called");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called")
  }
}
