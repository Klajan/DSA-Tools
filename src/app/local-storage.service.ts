import { Injectable } from '@angular/core';

interface Callback {
  (): object | null;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private _registered: Map<string, Callback> = new Map<string, Callback>();

  private readonly INTERVAL = 15000; //set repeat to 15s
  private intervalID: NodeJS.Timer | null = null;

  constructor() { }

  private startInterval() {
    if (this.intervalID === null) {
      this.intervalID = setInterval(this.saveRegistered.bind(this), this.INTERVAL);
    }
  }

  private stopInterval() {
    if (this.intervalID !== null) {
      clearInterval(this.intervalID);
    }
  }

  private async saveItem(key: string, object: object | null) {
    console.debug(object);
    if (object === null) return;
    let jsonString = JSON.stringify(object);
    localStorage.setItem(key, jsonString);
  }

  async getItem(key: string): Promise<object | null> {
    let jsonString = localStorage.getItem(key);
    return jsonString !== null ? JSON.parse(jsonString) : null;
  }

  async registerOverwrite(key: string, callbackFunc: Callback) {
    this._registered.set(key, callbackFunc);
    this.saveItem(key, callbackFunc());
    if (this._registered.size === 1) {
      this.startInterval();
    }
  }

  async unregister(key: string) {
    this._registered.delete(key);
    if (this._registered.size === 0) {
      this.stopInterval();
    }
  }

  async register(key: string, callbackFunc: Callback): Promise<object | null> {
    let out = this.getItem(key)
      .then((obj) => {
        if (obj === null) this.saveItem(key, callbackFunc());
        return obj;
      });
    this._registered.set(key, callbackFunc)
    if (this._registered.size === 1) {
      this.startInterval();
    }
    return out;
  }

  private async saveRegistered() {
    async function runCallback(param: Callback): Promise<object | null> {
      return param();
    }
    this._registered.forEach((value, key) => {
      runCallback(value).then((object) => {
        this.saveItem(key, object);
      });
    });
  }

  private async removeUnregistered() {
    let size = localStorage.length;
    for (let index = 0; index < localStorage.length; index++) {
      let key = localStorage.key(index);
      if (key !== null && !this._registered.has(key)) {
        localStorage.removeItem(key);
      }
    }
  }

}
