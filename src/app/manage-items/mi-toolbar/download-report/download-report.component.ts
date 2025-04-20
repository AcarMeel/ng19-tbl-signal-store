import { Component, input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-download-report',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './download-report.component.html',
  styleUrl: './download-report.component.scss'
})
export class DownloadReportComponent {
  buttonText = input<string>();
  buttonIconName = input<string>();
}
