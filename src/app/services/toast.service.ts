import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private messageService: MessageService
  ) { }

  /**
   *
   * @param severity success, info, warn, error
   * @param summary
   * @param detail
   */
  show(severity:string, summary: string, detail?: string) {
    this.messageService.add({ severity, summary, detail});
  }
}
