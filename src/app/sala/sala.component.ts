import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Sala } from '../models/sala';
import { SalaService } from '../services/sala.service';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  displayedColumns: string[] = ['id','sala', 'disciplina', 'assunto' ];
  dataSource: Sala[] = [];

  constructor(private salaService: SalaService, private router: Router) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.salaService.getAll().subscribe(response => {
      this.dataSource = response;
    });
  }

  goSalaItem() {
    this.router.navigate(['sala/new']).then();
  }


  entrar(id) {
<<<<<<< HEAD
    this.router.navigate([`sala/${id}`]).then();
=======

>>>>>>> 365acc673db325b234e23e52daf0fa5e40539d58
  }
}
