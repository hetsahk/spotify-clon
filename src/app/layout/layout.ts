import { Component } from '@angular/core';
import { SpotifyLogo } from "../components/spotify-logo/spotify-logo";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Card } from '../components/card/card';

import { solarHomeBold } from '@ng-icons/solar-icons/bold';
import { solarRoundArrowDownLinear,
         solarBellLinear,
         solarMagniferLinear,
         solarLibraryLinear,
         solarUsersGroupTwoRoundedLinear,
         solarAddCircleLinear,
         solarMaximizeLinear,
         solarList1Linear
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
      solarList1Linear }),
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
}
