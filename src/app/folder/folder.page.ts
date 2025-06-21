// src/app/folder/folder.page.ts
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent} from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

import { Storage } from '@ionic/storage-angular';
// import { StatusBar, Animation, Style } from '@capacitor/status-bar'; // Removido se não estiver usando diretamente aqui
// import { ArticlesComponent } from '../articles/articles.component'; // Removido, pois não é usado no folder.page.html

import { NewsPage } from '../news/news.page'; // Importe o componente NewsPage
import { ApiCommandoService } from '../api-commando.service';

register();

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  imports: [
    NewsPage, // Adicione NewsPage aqui
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonMenuButton
    // ArticlesComponent, // Remova esta linha se ArticlesComponent não for usado no folder.page.html
  ],
  standalone: true,
})
export class FolderPage implements OnInit {

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  public apiContent: any;

  constructor( private storage: ApiCommandoService) {
    
  }

  

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  /*async foodStrap(){
    this.apiService.testConnection().subscribe({
      next: (data: any) => {
        this.apiContent = data.response;
        console.log('Jogos ao vivo carregados:', this.apiContent);
      },
      error: (error) => {
        console.error('Erro ao buscar jogos ao vivo:', error);
        // Limpar a lista em caso de erro para mostrar a mensagem de 'vazio'
        this.apiContent = []; 
      }
    })
   try {
      // Use a API Key fornecida
      await this.storage.set("keyy", "Value");
      const response = await fetch("http://localhost:8080/api" );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.apiContent = data.message;
      console.log('Jogos ao vivo carregados:', this.apiContent);
      this.storage.get("keyy").then( res => console.log(res));
      
    } catch (e: any) {
      console.error("Erro ao carregar notícias:", e);
    }
  }*/

}
