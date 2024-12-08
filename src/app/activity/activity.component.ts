import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  imports: [],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {

  // public generarActivity(lugar: string, monitor: string, act: string){
  //   const activity: string = "<tr><td>"+this.fechaRandom()+"</td>"+"<td>"+lugar+"</td><td>"+monitor+"</td><td>"+act+"</td>";
  //   return activity;
  // }

  public fechaRandom(){
    let fecha: string;
    const fechaInicio: Date = new Date("2024-01-01");
    const fechaFin: Date = new Date("2024-12-31");
    const inicioMs = fechaInicio.getTime();
    const finMs = fechaFin.getTime();
    const fechaRandomMs: Date = new Date(inicioMs + Math.random() * (finMs - inicioMs));
    
    
    return fecha = this.formatearFecha(fechaRandomMs);
  }

  public formatearFecha(fecha: Date): string {
    const dia = fecha.getDate().toString().padStart(2, '0'); // Día con dos dígitos
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Mes con dos dígitos
    const anio = fecha.getFullYear().toString().slice(-2); // Últimos dos dígitos del año
    const hora = fecha.getHours().toString().padStart(2, '0'); // Hora con dos dígitos
    const minutos = fecha.getMinutes().toString().padStart(2, '0'); // Minutos con dos dígitos

    return `${dia}/${mes}/${anio} ${hora}:${minutos}`;
}
}
