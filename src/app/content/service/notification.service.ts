import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  showSuccess(message:any){
    Swal.fire({
      title:'Success',
      text:message,
      type:"success",
      toast:true,
      position:'top-end',
      showConfirmButton:false,
      timer:3000
    })
  }

  showError(message:any){
    Swal.fire({
      title:'Oops!',
      text:message,
      type:'error',
      toast:true,
      position:'top-end',
      showConfirmButton:false,
      timer:3000
    })
  }

  showConfirmation(){
    Swal.fire({
      title:"Are you sure?",
      text:"Want to delete this item",
      type:"warning",
      confirmButtonClass:"btn btn-success ml-1",
      cancelButtonClass:"btn btn-danger mr-1",
      confirmButtonText:"Yes, delete it!",
      cancelButtonText:"No, cancel!",
      showCancelButton:true,
      focusCancel:true,
      reverseButtons:true
    })
  }
}
