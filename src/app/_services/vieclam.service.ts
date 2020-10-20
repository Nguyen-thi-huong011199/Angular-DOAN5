import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const baseUrl = environment.apiUrl + "Vieclams/";

@Injectable({
  providedIn: 'root'
})

export class ViecLamService {
    constructor(
        private _http: HttpClient
    ) { }

    getAll() {
        return this._http
            .get<any>(baseUrl);
    }

    getTimLoai(id, key) {
        let params = new HttpParams()
        .set("id", id)
        .set("key", key);

        return this._http
            .get<any>(baseUrl + "tim-loai", { params: params });
    }

    getLoai(id, limit) {
        let params = new HttpParams()
        .set("id", id)
        .set("limit", limit);

        return this._http
            .get<any>(baseUrl + "get-loai", { params: params });
    }

    getTheoId(id) {
        return this._http
            .get<any>(baseUrl + id);
    }
}