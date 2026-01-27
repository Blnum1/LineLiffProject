import { Component, signal, OnInit } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('LiffWeb');
async ngOnInit() {
    // try {
    //   await liff.init({ liffId: '2008982328-pUap0EHW' });

    //   if (!liff.isLoggedIn()) {
    //     liff.login();
    //   } else {
    //     console.log('LIFF Ready!');
    //   }
    // } catch (error) {
    //   console.error('LIFF Init Error', error);
    // }
  }

}
