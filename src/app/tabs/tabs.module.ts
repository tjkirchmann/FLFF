import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../profile/profile.module#ProfilePageModule',
                    }
                ]
            },
            {
                path: 'play',
                children: [
                    {
                        path: '',
                        loadChildren: '../play/play.module#PlayPageModule',
                    }
                ]
            },
            {
                path: 'leaderboard',
                children: [
                    {
                        path: '',
                        loadChildren: '../leaderboard/leaderboard.module#LeaderboardPageModule',
                    }
                ]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/profile',
        pathMatch: 'full',
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
