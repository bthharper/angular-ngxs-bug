import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, PlatformLocation } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { NgxsModule } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

export const getBaseHref = (platformLocation: PlatformLocation): string => {
  return platformLocation.getBaseHrefFromDOM();
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    RouterModule,
    CommonModule,
    NgxsModule.forRoot([], {
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false,
      },
      executionStrategy: undefined,
      compatibility: {
        strictContentSecurityPolicy: true,
      },
    }),
    NgxsLoggerPluginModule.forRoot({
      collapsed: false,
      disabled: environment.production,
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    SohoComponentsModule,
    AppRoutingModule,
    SunSystemsCoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
