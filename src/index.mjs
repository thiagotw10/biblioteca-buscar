import * as axios from "axios";
import { Observable } from "rxjs";

export default class Buscar {
  constructor(url) {
    this.url = url;
  }

  postValue(dados) {
    let observable = new Observable((observer) => {
      axios
        .post(this.url, dados[0])
        .then(function (response) {
          observer.next(response);
        })
        .catch(function (error) {
          observer.next(error.response);
        });
    });

    return observable;
  }

  getValue() {
    let observable = new Observable((observer) => {
      axios
        .get(this.url)
        .then(function (response) {
          observer.next(response);
        })
        .catch(function (error) {
          observer.next(error.response);
        })
        .then(function () {});
    });

    return observable;
  }
}
