import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.css']
})
export class AdministracaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createUser(){
    alert("Usuario criado !");
  }
}
