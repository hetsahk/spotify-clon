import { Component } from '@angular/core';
import { SpotifyLogo } from "../components/spotify-logo/spotify-logo";
import { NgIcon, provideIcons } from '@ng-icons/core';

import { solarHomeBold } from '@ng-icons/solar-icons/bold';
import { solarRoundArrowDownLinear,
         solarBellLinear,
         solarMagniferLinear,
         solarLibraryLinear,
         solarUsersGroupTwoRoundedLinear,
         solarAddCircleLinear,
         solarMaximizeLinear
                     } from '@ng-icons/solar-icons/linear';



@Component({
  selector: 'app-layout',
  imports: [SpotifyLogo, NgIcon],
  viewProviders: [
    provideIcons({ 
      solarHomeBold, 
      solarRoundArrowDownLinear,
      solarBellLinear,
      solarMagniferLinear,
      solarLibraryLinear,
      solarUsersGroupTwoRoundedLinear,
      solarAddCircleLinear,
      solarMaximizeLinear }),
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
