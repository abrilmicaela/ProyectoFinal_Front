import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
const token = localStorage.getItem('token')
if(token){
  const authHeaders = req.clone({headers: req.headers.set('Authorization', token)});
  return next(authHeaders)
}
  return next(req);
};
