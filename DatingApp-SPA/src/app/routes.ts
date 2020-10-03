import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessageComponent } from './message/message.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent},
            { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            { path: 'messages', component: MessageComponent},
            { path: 'lists', component: ListsComponent}            
        ]
    },    
    // { path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
    // { path: 'messages', component: MessageComponent, canActivate: [AuthGuard]},
    // { path: 'lists', component: ListsComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];