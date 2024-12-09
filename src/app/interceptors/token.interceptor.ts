import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('token');
    const headers: { [key: string]: string } = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = token;
    }

    const requestCopy = req.clone({ setHeaders: headers });
    return next(requestCopy);
};

  
    // if(token){
    //   const authHeaders = req.clone({headers: req.headers.set('Authorization', token)});
    //   return next(authHeaders)
    // }
    //   return next(req);
