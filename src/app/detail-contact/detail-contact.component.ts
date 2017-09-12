import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service.service';
@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent implements OnInit {

  constructor(public contactService: ContactService) { }

  ngOnInit() {

  }

}
