import {
  Component,
  OnInit,

} from '@angular/core';
import { AccountsService } from './accounts.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit {
onStatusChanged: any;
onAccountAdded($event: Event) {
throw new Error('Method not implemented.');
}
  accounts: { name: string, status: string,} [] = [];

  constructor (private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  }

