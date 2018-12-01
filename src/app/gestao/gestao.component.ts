import { Component, OnInit } from '@angular/core';
import { GestaoService } from '../services/gestao.service';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.css']
})
export class GestaoComponent implements OnInit {

  constructor( private gestaoService:GestaoService) { }

  ngOnInit() {
  }

}
