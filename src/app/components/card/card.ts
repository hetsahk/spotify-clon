import { Component, computed, input } from '@angular/core';

export type CardVariant = 'square' | 'circle' | 'horizontal';

const CONTAINER_CLASSES: Record<CardVariant, string> = {
  square: 'flex-col gap-3 rounded-lg p-4',
  circle: 'flex-col items-center gap-3 rounded-lg p-4',
  horizontal: 'items-center gap-3 rounded-md p-2 pr-4',
};

const IMAGE_CLASSES: Record<CardVariant, string> = {
  square: 'aspect-square w-full rounded-md object-cover shadow-lg',
  circle: 'aspect-square w-full rounded-full object-cover shadow-lg',
  horizontal: 'h-12 w-12 flex-shrink-0 rounded-md object-cover',
};

const TEXT_WRAPPER_CLASSES: Record<CardVariant, string> = {
  square: 'gap-1',
  circle: 'w-full items-center gap-1 text-center',
  horizontal: 'min-w-0',
};

const TITLE_SIZE: Record<CardVariant, string> = {
  square: 'text-base',
  circle: 'text-base',
  horizontal: 'text-sm',
};

const SUBTITLE_SIZE: Record<CardVariant, string> = {
  square: 'text-sm',
  circle: 'text-sm',
  horizontal: 'text-xs',
};

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

  containerClass = computed(() => CONTAINER_CLASSES[this.variant()]);
  imageClass = computed(() => IMAGE_CLASSES[this.variant()]);
  textWrapperClass = computed(() => TEXT_WRAPPER_CLASSES[this.variant()]);
  titleSize = computed(() => TITLE_SIZE[this.variant()]);
  subtitleSize = computed(() => SUBTITLE_SIZE[this.variant()]);
}
