import { MajhiServiceService } from './majhi-service.service';
import { ExampleService } from './example-test/example.service';
import { GithumFollowersService } from './service/githum-followers.service';
import { AppErrorHandler } from './common/error-handler.error';
import {ErrorHandler} from'@angular/core';
import { PostServiceService } from './service/post-service.service';
import { NgModelTwoWayBindingDemoComponent } from './event-binding/ngModel-twoway-binding.component';
import { TwoWayTemplateBindingComponent } from './event-binding/two-way-binding.component';
import { TemplateVariableComponent } from './event-binding/template-variable.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { AttrBindingComponent } from './attr-binding/attr-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { NgClassBindingComponent } from './ng-class-binding/ng-class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { NgStyleBindingComponent } from './ng-style-binding/ng-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InbuildPipesComponent } from './inbuild-pipes/inbuild-pipes.component';
import { CustomPipesPipe } from './custom-pipes.pipe';
import { StucturalDirectivesComponent } from './stuctural-directives/stuctural-directives.component';
import { CustomDrectiveDirective } from './custom-drective.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { SeparationConcernComponent } from './separation-concern/separation-concern.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ChnagePasswordComponent } from './chnage-password/chnage-password.component';
import { OptimisticComponent } from './optimistic/optimistic.component';
import { HomeComponent } from './home/home.component';
import { FollowersComponent } from './followers/followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { ExampleTestComponent } from './example-test/example-test.component';
import { MajhaComponentComponent } from './majha-component/majha-component.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { ClassBindingExampleComponent } from './class-binding-example/class-binding-example.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    PropBindingComponent,
    AttrBindingComponent,
    ClassBindingComponent,
    NgClassBindingComponent,
    StyleBindingComponent,
    NgStyleBindingComponent,
    EventBindingComponent,
    TemplateVariableComponent,
    TwoWayTemplateBindingComponent,
    NgModelTwoWayBindingDemoComponent,
    InbuildPipesComponent,
    CustomPipesPipe,
    StucturalDirectivesComponent,
    CustomDrectiveDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ServiceComponentComponent,
    SeparationConcernComponent,
    FormArrayComponent,
    FormBuilderComponent,
    ChnagePasswordComponent,
    OptimisticComponent,
    HomeComponent,
    FollowersComponent,
    NavbarComponent,
    NotFoundComponent,
    GitHubProfileComponent,
    ExampleTestComponent,
    MajhaComponentComponent,
    InputBoxComponent,
    ClassBindingExampleComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'followers/:id/:username',
        component:GitHubProfileComponent
      },
      {
        path:'followers',
        component:FollowersComponent
      },
      {
        path:'post',
        component:OptimisticComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])
    
  ],
  providers: [
    PostServiceService,
    MajhiServiceService,
    {provide:ErrorHandler,useClass:AppErrorHandler},
    GithumFollowersService,
    
    ExampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
