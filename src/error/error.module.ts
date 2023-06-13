import { NgModule, ErrorHandler, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';

// import { SunSystemsErrorHandlerService } from './error-handler.service';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { SunSystemsErrorRoutingModule } from './error.routing';
// import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ErrorDialogPlaceholderComponent } from './dialog-placeholder/error-dialog-placeholder.component';
import { SunSystemsErrorState } from './error.state';
import { SohoComponentsModule } from 'ids-enterprise-ng';
// import { AccessDeniedComponent } from './access-denied/access-denied.component';

@NgModule({
  imports: [
    CommonModule,
    // SunSystemsErrorRoutingModule,
    SohoComponentsModule,
    NgxsModule.forFeature([SunSystemsErrorState]),
  ],
  declarations: [
    // PageNotFoundComponent,
    ErrorDialogPlaceholderComponent,
    // ErrorDialogComponent,
    // AccessDeniedComponent,
  ],
  exports: [ErrorDialogPlaceholderComponent],
  // providers: [SunSystemsErrorHandlerService],
})
export class SunSystemsErrorModule {
  /**
   * Static factory method to create the SunSystemsErrorsModule in the root
   * of the application.
   *
   * This forces the HTTP_INTERCEPTORS to be used by all HttpClientModules,
   * unless the module has been overridden.
   */
  public static forRoot(): ModuleWithProviders<SunSystemsErrorModule> {
    return {
      ngModule: SunSystemsErrorModule,
      providers: [
        // {
        //   provide: ErrorHandler,
        //   useClass: SunSystemsErrorHandlerService,
        // },
      ],
    };
  }
}
