import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad:number = 0;
  tengo:string = 'USD';
  quiero:string = 'EUR';
  total:number = 0;

  monedas:string[] = ['USD','ARG', 'EUR', 'LIBRA', 'REAL'];
  constructor() { }

  ngOnInit(): void {
  }

  convertir(){

switch(this.tengo){

  case 'USD':
    if(this.quiero === 'USD'){this.total = this.cantidad};
    if(this.quiero==='ARG'){this.total=this.cantidad*92.78};
    if(this.quiero==='EUR'){this.total=this.cantidad*0.83};
    if(this.quiero==='LIBRA'){this.total=this.cantidad*0.72};
    if(this.quiero==='REAL'){this.total=this.cantidad*5.59};
  break;
  case 'ARG':
    if(this.quiero === 'ARG'){this.total = this.cantidad};
    if(this.quiero==='USD'){this.total=this.cantidad*0.011};
    if(this.quiero==='EUR'){this.total=this.cantidad*0.0090};
    if(this.quiero==='LIBRA'){this.total=this.cantidad*0.0078};
    if(this.quiero==='REAL'){this.total=this.cantidad*0.060};
  break;
  case 'EUR':
    if(this.quiero === 'EUR'){this.total = this.cantidad};
    if(this.quiero==='ARG'){this.total=this.cantidad*111.19};
    if(this.quiero==='USD'){this.total=this.cantidad*1.20};
    if(this.quiero==='LIBRA'){this.total=this.cantidad*0.87};
    if(this.quiero==='REAL'){this.total=this.cantidad*6.73};
  break;
  case 'LIBRA':
    if(this.quiero === 'LIBRA'){this.total = this.cantidad};
    if(this.quiero==='ARG'){this.total=this.cantidad*128.34};
    if(this.quiero==='EUR'){this.total=this.cantidad*1.15};
    if(this.quiero==='USD'){this.total=this.cantidad*1.38};
    if(this.quiero==='REAL'){this.total=this.cantidad*7.77};
  break;
  case 'REAL':
    if(this.quiero === 'REAL'){this.total = this.cantidad};
    if(this.quiero==='ARG'){this.total=this.cantidad*16.61};
    if(this.quiero==='EUR'){this.total=this.cantidad*0.15};
    if(this.quiero==='LIBRA'){this.total=this.cantidad*0.13};
    if(this.quiero==='USD'){this.total=this.cantidad*0.18};
  break;
}

  }

}
