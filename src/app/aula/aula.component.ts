import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  standalone: true,
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {
  salaId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.salaId = this.route.snapshot.paramMap.get('salaId');

  }
}
