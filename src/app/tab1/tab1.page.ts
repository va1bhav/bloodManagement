import { Component } from '@angular/core';
import { PROFILE_ICON, REGISTERED_DONOR_LIST } from './tab1.model';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
	registeredDonorList = REGISTERED_DONOR_LIST;
	profileIcon = PROFILE_ICON;
	constructor() {}
}
