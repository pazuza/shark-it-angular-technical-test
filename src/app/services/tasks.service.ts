import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public constructor(protected http: HttpClient) { }

  public getTasks(): Observable<any> {
    return this.http.get('../../assets/mock/tasks.json').pipe(
      catchError((err) => {
        return throwError(() => new Error(err));
      })
    );
  }
}
