import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { Observable } from 'rxjs';

export interface Lead {
  name: string;
  email: string;
  phone: number;
  address: string;
  picture?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  constructor(private firestore: Firestore, private storage: Storage) {}

  async addLead(lead: Lead, file?: File) {
    if (file) {
      const storageRef = ref(this.storage, `addleads/${file.name}`);
      await uploadBytes(storageRef, file);
      lead.picture = file.name; // store filename in Firestore
    }

    const leadsRef = collection(this.firestore, 'addleads');
    return addDoc(leadsRef, lead);
  }

  getLeads(): Observable<Lead[]> {
    const leadsRef = collection(this.firestore, 'addleads');
    return collectionData(leadsRef, { idField: 'id' }) as Observable<Lead[]>;
  }
}
