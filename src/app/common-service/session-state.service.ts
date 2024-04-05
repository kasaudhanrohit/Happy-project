import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
interface StateData {
  key: string,
  value: any
}

@Injectable({
  providedIn: 'root'
})
export class SessionStateService {
  private staticStateMap: Map<string, any>;
  private _stateSubject: Subject<StateData>;

  constructor() {
    this.staticStateMap = new Map<string, any>();
    this._stateSubject = new Subject<StateData>();
  }


  set(key, value, broadcast = false) {
    this.staticStateMap.set(key, value);
    if (broadcast) {
      this._stateSubject.next({ key, value });
    }
  }

  setAll(values: Object, broadcast = false) {
    Object.entries(values).forEach((item) => {
      this.set(item[0], item[1], broadcast);
    });
  }

  get(key, defaultValue?: any): any {
    return this.staticStateMap.get(key) || defaultValue;
  }

  on<T>(key: string): Observable<T> {
    return this._stateSubject.asObservable()
      .pipe(filter(event => event.key == key))
      .pipe(map(event => event.value as T));
  }

}
