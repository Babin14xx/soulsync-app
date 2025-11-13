import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { Observable } from 'rxjs';

export interface Lead {
  name: string;
  email: string;
  phone: number;
  address: string;
  picture?: string; // will store download URL
}

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  constructor(private firestore: Firestore, private storage: Storage) {}

  async addLead(lead: Lead, file?: File) {
    if (file) {
      const storageRef = ref(this.storage, `addleads/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      // Get real download URL
      lead.picture = await getDownloadURL(storageRef);
    }

    const leadsRef = collection(this.firestore, 'addleads');
    const docRef = await addDoc(leadsRef, lead);
    console.log('Lead saved with ID:', docRef.id);
    return docRef;
  }

  getLeads(): Observable<Lead[]> {
    const leadsRef = collection(this.firestore, 'addleads');
    return collectionData(leadsRef, { idField: 'id' }) as Observable<Lead[]>;
  }
}
