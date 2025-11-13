import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadService, Lead } from '../services/lead.service';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent implements OnInit {
  leadForm!: FormGroup;
  selectedFile?: File;
  selectedFileName: string = '';
  uploading: boolean = false;

  constructor(private fb: FormBuilder, private leadService: LeadService) {}

  ngOnInit(): void {
    this.leadForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      picture: ['']
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.selectedFileName = file.name;
      this.leadForm.patchValue({ picture: file });
    }
  }

  async submitLead() {
    if (this.leadForm.invalid) return;

    const lead: Lead = {
      name: this.leadForm.value.name,
      email: this.leadForm.value.email,
      phone: this.leadForm.value.phone,
      address: this.leadForm.value.address
    };

    try {
      this.uploading = true;
      await this.leadService.addLead(lead, this.selectedFile);
      alert('Lead saved successfully!');
      this.leadForm.reset();
      this.selectedFile = undefined;
      this.selectedFileName = '';
    } catch (error) {
      console.error('Error saving lead:', error);
      alert('Error saving lead. Check console.');
    } finally {
      this.uploading = false;
    }
  }
}
  