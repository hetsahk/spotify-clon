import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Card } from '../components/card/card';
import { SpotifyLogo } from '../components/spotify-logo/spotify-logo';

import { solarHeartLinear } from '@ng-icons/solar-icons/linear';
import {
  solarHeartBold,
  solarPauseBold,
  solarPlayBold,
  solarPlayCircleBold,
  solarRepeatBold,
  solarShuffleBold,
  solarSkipNextBold,
  solarSkipPreviousBold,
  solarVolumeLoudBold,
} from '@ng-icons/solar-icons/bold';
import { solarHeartBroken } from '@ng-icons/solar-icons/broken';
import { solarHeartDuotone } from '@ng-icons/solar-icons/duotone';
import { solarHeartBoldDuotone } from '@ng-icons/solar-icons/bold-duotone';
import { solarHeart } from '@ng-icons/solar-icons/outline';

type CardData = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

@Component({
  selector: 'app-demo',
  imports: [Card, NgIcon, SpotifyLogo],
  viewProviders: [
    provideIcons({
      solarHeartLinear,
      solarHeartBold,
      solarHeartBroken,
      solarHeartDuotone,
      solarHeartBoldDuotone,
      solarHeart,
      solarPauseBold,
      solarPlayBold,
      solarPlayCircleBold,
      solarRepeatBold,
      solarShuffleBold,
      solarSkipNextBold,
      solarSkipPreviousBold,
      solarVolumeLoudBold,
    }),
  ],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
})
export class Demo {
  readonly squareCards: CardData[] = [
    {
      title: 'Maria Becerra',
      subtitle: 'With TINI, TULI...',
      imageUrl: 'https://picsum.photos/seed/maria/300',
    },
    {
      title: 'Top 50 Argentina',
      subtitle: 'Los hits más escuchados',
      imageUrl: 'https://picsum.photos/seed/top50ar/300',
    },
    {
      title: 'Cumbia 420',
      subtitle: 'L-Gante, Damas Gratis...',
      imageUrl: 'https://picsum.photos/seed/cumbia/300',
    },
    {
      title: 'Rock Nacional',
      subtitle: 'Soda, Los Redondos...',
      imageUrl: 'https://picsum.photos/seed/rocknac/300',
    },
    {
      title: 'Maria Becerra',
      subtitle: 'With TINI, TULI...',
      imageUrl: 'https://picsum.photos/seed/maria/300',
    },
    {
      title: 'Top 50 Argentina',
      subtitle: 'Los hits más escuchados',
      imageUrl: 'https://picsum.photos/seed/top50ar/300',
    },
    {
      title: 'Cumbia 420',
      subtitle: 'L-Gante, Damas Gratis...',
      imageUrl: 'https://picsum.photos/seed/cumbia/300',
    },
  ];

  readonly circleCards: CardData[] = [
    { title: 'Bad Bunny', subtitle: 'Artist', imageUrl: 'https://picsum.photos/seed/badbunny/300' },
    { title: 'Duki', subtitle: 'Artist', imageUrl: 'https://picsum.photos/seed/duki/300' },
    { title: 'Nathy Peluso', subtitle: 'Artist', imageUrl: 'https://picsum.photos/seed/nathy/300' },
    { title: 'Rosalia', subtitle: 'Artist', imageUrl: 'https://picsum.photos/seed/rosalia/300' },
  ];

  readonly horizontalCards: CardData[] = [
    {
      title: 'Liked Songs',
      subtitle: 'Playlist • 297 songs',
      imageUrl: 'https://picsum.photos/seed/liked/100',
    },
    {
      title: 'Discover Weekly',
      subtitle: 'Playlist • Spotify',
      imageUrl: 'https://picsum.photos/seed/discover/100',
    },
    {
      title: 'Daily Mix 1',
      subtitle: 'Playlist • Made for you',
      imageUrl: 'https://picsum.photos/seed/daily1/100',
    },
    {
      title: 'Release Radar',
      subtitle: 'Playlist • Spotify',
      imageUrl: 'https://picsum.photos/seed/radar/100',
    },
  ];
}
