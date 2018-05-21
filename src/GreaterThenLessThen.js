class GreaterThenLessThen {

    constructor(array){
        this._smaller = Infinity;
        this._greater = -Infinity;
        this.currentArray = array;
        this.avaliate(array);
    }

    avaliate(array){
        this._currentArray.forEach((num) => {
            if (num < this._smaller) this._smaller = num;
            if (num > this._greater) this._greater = num;
        })
    }

    get maior() {
        return this._greater;
    }

    set maior(v) {
        this._greater = v;
    }

    get menor(){
        return this._smaller;
    }
    
    set menor(v) {
        this._smaller = v;
    }

    get currentArray() {
        return this._currentArray;
    }

    set currentArray(v) {
        this._currentArray = v;
    }
}