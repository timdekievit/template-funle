import { Injectable } from '@angular/core';
import { BaseIntro, IBaseIntro } from '@funle/entities';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root',
})
export class PortalIntroService {
  api = this.apiService.for<BaseIntro, IBaseIntro>('intro');

  constructor(private apiService: ApiService) {}

  info: BaseIntro;

  check = () => this.api.get();
  getInfo = () => this.api.get('info');

  saveFirstStep = (intro: BaseIntro) => this.api.put('first', intro);
  saveSecondStep = (intro: BaseIntro) => this.api.put('second', intro);
  saveThirdStep = (intro: BaseIntro) => this.api.put('third', intro);
  saveFourthStep = (intro: BaseIntro) => this.api.put('fourth', intro);
  
  saveFifthStep = (cv: File) => this.api.put('fifth', this.createFormData(cv));

  complete = () => this.api.put('complete');

  private createFormData(cv: File): FormData {
    const formData = new FormData();
    formData.append('cv', cv, cv.name);
    return formData;
  }
}
