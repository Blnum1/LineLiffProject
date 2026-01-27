import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-graph01',
  standalone: false,
  templateUrl: './graph01.html',
  styleUrl: './graph01.css',
})
export class Graph01 implements OnInit {
  @ViewChild('pbiFrame') pbiFrame!: ElementRef; // อ้างอิงถึง iframe ใน html
  pbiUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { 
    // ใช้ URL เดิมที่คุณโหลดขึ้น (อันนี้ชัวร์สุด)
    const rawUrl = 'https://app.powerbi.com/reportEmbed?reportId=7e6bb2cd-aee7-4d20-a5b4-fb68eba126a2'+
                   '&autoAuth=true'+
                   '&ctid=8c1832ea-a96d-413e-bf7d-9fe4d608e00b' +
                   '&mobileVisuals=false'+
                   '&navContentPaneEnabled=ture'+
                   '&filterPaneEnabled=false';
    this.pbiUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  changePage(pageName: string) {
    const iframe = this.pbiFrame.nativeElement as HTMLIFrameElement;
    
    const message = {
      action: "setPage",
      pageName: pageName
    };

    if (iframe.contentWindow) {
      iframe.contentWindow.postMessage(JSON.stringify(message), "https://app.powerbi.com");
      console.log('Sending switch page command to:', pageName);
    }
  }
}