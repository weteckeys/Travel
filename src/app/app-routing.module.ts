import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./pages/plan/plan.module').then( m => m.PlanPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./pages/explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'discount',
    loadChildren: () => import('./pages/discount/discount.module').then( m => m.DiscountPageModule)
  },
  {
    path: 'place-detail',
    loadChildren: () => import('./pages/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
  },
  {
    path: 'trip-plan',
    loadChildren: () => import('./pages/trip-plan/trip-plan.module').then( m => m.TripPlanPageModule)
  },
  {
    path: 'hotel-map',
    loadChildren: () => import('./pages/hotel-map/hotel-map.module').then( m => m.HotelMapPageModule)
  },
  {
    path: 'add-plan',
    loadChildren: () => import('./pages/add-plan/add-plan.module').then( m => m.AddPlanPageModule)
  },
  {
    path: 'add-day-plan',
    loadChildren: () => import('./pages/add-day-plan/add-day-plan.module').then( m => m.AddDayPlanPageModule)
  },
  {
    path: 'add-hotel-flight',
    loadChildren: () => import('./pages/add-hotel-flight/add-hotel-flight.module').then( m => m.AddHotelFlightPageModule)
  },
  {
    path: 'card-list',
    loadChildren: () => import('./pages/card-list/card-list.module').then( m => m.CardListPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./pages/add-card/add-card.module').then( m => m.AddCardPageModule)
  },
  {
    path: 'change-timezone',
    loadChildren: () => import('./pages/change-timezone/change-timezone.module').then( m => m.ChangeTimezonePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'flights',
    loadChildren: () => import('./pages/flights/flights.module').then( m => m.FlightsPageModule)
  },
  {
    path: 'book-flight',
    loadChildren: () => import('./pages/book-flight/book-flight.module').then( m => m.BookFlightPageModule)
  },
  {
    path: 'add-activity',
    loadChildren: () => import('./pages/add-activity/add-activity.module').then( m => m.AddActivityPageModule)
  },
  {
    path: 'hotel-detail',
    loadChildren: () => import('./pages/hotel-detail/hotel-detail.module').then( m => m.HotelDetailPageModule)
  },
  {
    path: 'hotel-book',
    loadChildren: () => import('./pages/hotel-book/hotel-book.module').then( m => m.HotelBookPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
