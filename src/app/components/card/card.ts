import { Component, input } from '@angular/core';

export type CardVariant = 'square' | 'circle' | 'horizontal';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  variant = input<CardVariant>('square');
  title = input.required<string>();
  subtitle = input<string>('');
  imageUrl = input<string>('');
}
