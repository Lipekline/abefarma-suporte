import { Injectable } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FcmService {

    constructor(private firebase: FirebaseX,
        private afs: AngularFirestore,
        private platform: Platform) { }

    async getToken() {
        let token: string;

        if (this.platform.is('android')) {
            token = await this.firebase.getToken();
        }

        if (this.platform.is('ios')) {
            token = await this.firebase.getToken();
            await this.firebase.grantPermission();
        }

        this.saveToken(token);
    }

    private saveToken(token: any) {
        if (!token) return;

        console.log(token);
        const devicesRef = this.afs.collection('devices');

        const data = {
            token,
            userId: 'Luizeta'
        };

        return devicesRef.doc(token).set(data);
    }

    onNotifications() {
        return this.firebase.onMessageReceived();
    }
}