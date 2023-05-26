import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Store} from "@ngrx/store";

@Injectable({providedIn: 'root'})

export class HttpInterceptorService implements HttpInterceptor {

  constructor(private store: Store, private jwtHelper: JwtHelperService) {
  }


  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    //Pentru endoints be
    if (req.url.includes('/login') || req.url.includes('/signup')) {

      return next.handle(req);

    }
    const modifiedReq = req.clone({

      setHeaders: {

        Authorization: `Bearer ${localStorage.getItem("token")}`,

      },

    });
    return next.handle(modifiedReq);

  }

}
