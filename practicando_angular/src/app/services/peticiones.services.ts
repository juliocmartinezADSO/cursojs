import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PeticionesServices {
    public url: string;
    constructor(
        public _http: HttpClient
    ) {
        this.url = "https://reqres.in/"
    }

    getUser(userId: any): Observable<any> {
        return this._http.get(this.url + 'api/users/' + userId)

    }

}