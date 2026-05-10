import { Component } from '@angular/core';
import { SpotifyLogo } from '../components/spotify-logo/spotify-logo';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Card } from '../components/card/card';
import { RangeSlider } from '../components/range-slider/range-slider';

import { solarHomeBold,
         solarCatBold,
         solarTextCircleBold,
         solarSkipPreviousBold,
         solarPlayCircleBold,
         solarSkipNextBold
                     } from '@ng-icons/solar-icons/bold';
import { solarRoundArrowDownLinear,
         solarBellLinear,
         solarMagniferLinear,
         solarLibraryLinear,
         solarUsersGroupTwoRoundedLinear,
         solarAddCircleLinear,
         solarMaximizeLinear,
         solarList1Linear,
         solarCameraMinimalisticLinear,
         solarShuffleLinear,
         solarRepeatLinear,
         solarMicrophone2Linear,
         solarReorderLinear,
         solarDevicesLinear,
         solarVolumeLoudLinear,
         solarQuitPIPLinear,
         solarFullScreenLinear
                     } from '@ng-icons/solar-icons/linear';

type CardData = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

@Component({
  selector: 'app-layout',
  imports: [SpotifyLogo, NgIcon, Card],
  viewProviders: [
    provideIcons({
      solarHomeBold,
      solarRoundArrowDownLinear,
      solarBellLinear,
      solarMagniferLinear,
      solarLibraryLinear,
      solarUsersGroupTwoRoundedLinear,
      solarAddCircleLinear,
      solarMaximizeLinear,
      solarList1Linear,
      solarCameraMinimalisticLinear,
      solarCatBold,
      solarTextCircleBold,
      solarShuffleLinear,
      solarSkipPreviousBold,
      solarPlayCircleBold,
      solarSkipNextBold,
      solarRepeatLinear,
      solarMicrophone2Linear,
      solarReorderLinear,
      solarDevicesLinear,
      solarVolumeLoudLinear,
      solarQuitPIPLinear,
      solarFullScreenLinear
    }),
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
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
    { title: 'Bad Bunny', subtitle: 'Artist', imageUrl: 'https://picsum.photos/seed/badbunny/300' },
    { title: 'Duki', subtitle: 'Artist', imageUrl: 'https://picsum.photos/seed/duki/300' },
    { title: 'Nathy Peluso', subtitle: 'Artist', imageUrl: 'https://picsum.photos/seed/nathy/300' },
    { title: 'Rosalia', subtitle: 'Artist', imageUrl: 'https://picsum.photos/seed/rosalia/300' },
  ];
}
