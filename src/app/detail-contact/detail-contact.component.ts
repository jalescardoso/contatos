import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.scss']
})
export class DetailContactComponent implements OnInit {

  constructor(public contactService: ContactService, private router: Router) { }

  ngOnInit() {
    if(!this.contactService.contact) this.router.navigate([`contacts`]);
  }

}
