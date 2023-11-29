import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {
  public activo: boolean = false;
  public activo2: boolean = true;
  public enviar:boolean = false;
  selected: Date | null;
  ngOnInit(): void {

  }
  cerrarModal(){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Todos tus cambios se perderan",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        $('#cerrarModal').click();
      }
    })
  }

  enviarDatos(){
    Swal.fire({
      icon: 'success',
      title: 'Enviado Correctamente',
      text: 'Se enviaron correctamente los datos'
    });
    $('#cerrarModal').click();

  }
}
