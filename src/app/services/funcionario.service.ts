import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Funcionario } from '../Models/Funcionarios';
import { Response } from '../Models/Response';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {
  
  private apiUrl = `${environment.ApiUrl}/Funcionario`

  constructor(private http: HttpClient) { }

  GetFuncionarios(): Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }

  CreateFuncionario(funcionario: Funcionario): Observable<Response<Funcionario[]>> {
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocorreu um erro:', error);
    return throwError('Ocorreu um erro. Por favor, tente novamente mais tarde.');
  }
}