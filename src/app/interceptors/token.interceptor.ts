import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('token')|| "";
    const requestCopy = req.clone({
        setHeaders: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    });
    return next(requestCopy);
  };
    // if(token){
    //   const authHeaders = req.clone({headers: req.headers.set('Authorization', token)});
    //   return next(authHeaders)
    // }
    //   return next(req);
