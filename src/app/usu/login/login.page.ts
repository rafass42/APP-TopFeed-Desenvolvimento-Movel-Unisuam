import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { IonRouterOutlet, LoadingController, ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular'
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin:User = {};
  private loading: any;
  
  
  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    public router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService) { 

      
  this.platform.backButton.subscribeWithPriority(-1, () => {
    if (!this.routerOutlet.canGoBack()) {
      App.exitApp();
    }
  });
    }

  ngOnInit() { }

  async login(){
    await this.presentLoading();

    
    try {
      await this.authService.login(this.userLogin);

      this.router.navigate(['feed'])  

    } catch (error) {
      console.error(error);

      this.presentToast(error.message);
    } finally {
      
      this.loading.dismiss();
    }

  }
  
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();

  }

  async presentToast(message: string){
    const toast = await this.toastCtrl.create({message,duration: 2000 });
    toast.present();
  }

 

}
