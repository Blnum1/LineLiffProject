import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IReportEmbedConfiguration, models } from 'powerbi-client';


@Component({
  selector: 'app-graph02',
  standalone: false,
  templateUrl: './graph02.html',
  styleUrl: './graph02.css',
})
export class Graph02 implements OnInit {
  pbiUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { 
    const rawUrl = 'https://app.powerbi.com/reportEmbed?reportId=7e6bb2cd-aee7-4d20-a5b4-fb68eba126a2&autoAuth=true&ctid=8c1832ea-a96d-413e-bf7d-9fe4d608e00b' +
    '&mobileVisuals=true' +
    '&navContentPaneEnabled=ture' +
    '&filterPaneEnabled=false' +
    '&pageName=ReportSection3004f68f5ea9aa975dab';
    this.pbiUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
