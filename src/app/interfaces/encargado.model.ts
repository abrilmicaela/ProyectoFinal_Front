export interface User {
  id: number;
  nombre: string;
  apellidos: string;
  origen: string;
  destino: string;
  fecha: string;
  estado: Status;
  contacto: string;
}

export enum Status {
  'Pendiente de pago' = 'Pendiente de pago',
  'Aceptado' = 'Aceptado',
  'Cancelado' = 'Cancelado',
  'En revisión' = 'En revisión',
  'Pendiente de envío' = 'Pendiente de envío',
  'Enviado' = 'Enviado',
  'Entregado' = 'Entregado',
}

