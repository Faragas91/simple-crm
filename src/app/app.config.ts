import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideNativeDateAdapter(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-d2328","appId":"1:848401370279:web:19c4a848178b3cd1ca1f82","storageBucket":"simple-crm-d2328.firebasestorage.app","apiKey":"AIzaSyCTYr6U1W2NBtuf8GxNXlYPicGGl5dXuDk","authDomain":"simple-crm-d2328.firebaseapp.com","messagingSenderId":"848401370279"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
