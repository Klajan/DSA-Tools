import { Subject } from 'rxjs';

export class BaseValueStore {
    protected _notifyValuesChanged = new Subject<void>();
    public get notifyValuesChanged() { return this._notifyValuesChanged.asObservable(); }
    private set notifyValuesChanged(value) { }
    protected hasChanged: boolean = true; //used to prevent unnessescary saving to persistence
    protected valuesChanged() {
        this.hasChanged = true;
        this._notifyValuesChanged.next();
    }
}
