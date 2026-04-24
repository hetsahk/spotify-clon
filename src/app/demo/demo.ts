import { Component } from '@angular/core';
import { Card } from '../components/card/card';

@Component({
  selector: 'app-demo',
  imports: [Card],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
})
export class Demo {}
