import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonImg } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ApiCommandoService } from '../api-commando.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonInput,
    IonButton,
    IonItem,
    IonLabel,
    FormsModule,
    IonImg,
  ]
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  private router: Router = inject(Router);
  public apiContent: any;

  constructor(private storage: ApiCommandoService, private toastController: ToastController) { }

  ngOnInit() { }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  async login() {
    // Verificamos se os campos não estão vazios
    if (!this.email || !this.password) {
      console.error('Email e senha são obrigatórios.');

      return;
    }

    console.log('Tentando fazer login com:', this.email);

    await this.compLogin(this.email, this.password);
  }

  async compLogin(logInEmail: string, logInSenha: string) {
    const bodye = JSON.stringify({ email: logInEmail, pswrd: logInSenha });
    console.log(bodye);
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodye,
      });

      if (!response.ok) {
        throw new Error(`Erro da API: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      await this.storage.set("token", data.token);
      await this.storage.set("master", data.master);
      console.log(data.message);
      if( data.message != null ){
        const toast = await this.toastController.create({
        message: data.message,
        duration: 1500,
        position: 'bottom',
        color: 'danger',
      });

      toast.present();
      }

      const value = await this.storage.get("token");
      console.log("Valor do token no storage:", value);

    } catch (e: any) {
      console.error("Erro ao conectar à API:", e.message || e);
    }
  }



}
