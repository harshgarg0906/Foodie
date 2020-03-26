import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
    imports:[
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        MatGridListModule
    ],
    exports:[
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        MatGridListModule
    ],
    declarations: []
})
export class MaterialModule{

}