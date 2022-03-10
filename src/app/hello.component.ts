import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 style="margin-left:20%">Welcome</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
