import { Component, Renderer2, ElementRef, RendererFactory2 } from '@angular/core';
import { $ } from 'protractor';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Observable } from 'rxjs';
import { interval, Subscription } from 'rxjs';

interface Pos {
  x: number,
  y: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  subscription: Subscription;
  time: number = 10000;
  elementPositions: Pos[]=[];

  constructor(private renderer: Renderer2, private elem: ElementRef) {
  }
  ngAfterViewInit() {
    this.renderer.setStyle(document.querySelector('body'), 'overflow', 'hidden');
    this.setBlockPositions();
    const timer = interval(this.time);
    this.makeMove();
    this.subscription = timer.subscribe(x => {
      this.makeMove();
    })
  }

  makeMove() {
    let element = document.querySelectorAll("div.block");
    let i = 0;
    element.forEach(ele => {
      this.makeNewPositions(ele, i);
      this.renderer.setStyle(ele, 'top', this.elementPositions[i].x + '%');
      this.renderer.setStyle(ele, 'right', this.elementPositions[i].y + "%");
      i++;
    });
  }

  setBlockPositions() {
    let elements = document.querySelectorAll("div.block");
    elements.forEach(ele => {
      let x = Math.random() * 100;
      let y = Math.random() * 100;
      this.renderer.setStyle(ele, 'top', x + "%");
      this.renderer.setStyle(ele, 'right', y + "%");
      const pos:Pos = {
        x: x,
        y: y
      }
      this.elementPositions.push(pos);
    })
  }
 

  makeNewPositions(element, i) {
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);

    let distx = Math.abs(this.elementPositions[i].y - y);
    let disty = Math.abs(this.elementPositions[i].x - x);

    let greatest = distx > disty ? distx : disty;

    var speed = Math.ceil(greatest/.01);
    let time = speed;
    element.animate([
      {top: this.elementPositions[i].x + "%", right: this.elementPositions[i].y + "%"},
      { top: x + "%", right: y + "%"},
    ], {
        duration: time,
        easing: 'ease-in-out'
      });
    this.elementPositions[i].x = x;
    this.elementPositions[i].y = y;
  }
}

