import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MastersService } from '@app/content/service/masters.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LangCreateComponent } from './lang-create/lang-create.component';

@Component({
  selector: 'app-lang-list',
  templateUrl: './lang-list.component.html',
  styleUrls: ['./lang-list.component.scss']
})
export class LangListComponent implements OnInit {
  breadcrumb = [{label:'Home',route:'/dashboard'},{label:'Language List',active:true}];
  langList:any;
  constructor(private service : MastersService,private router :Router,private modelService:NgbModal) { }

  ngOnInit(): void { 
    this.service.refreshNeeded.subscribe(()=>{
      this.languageList();
    }) 
    this.languageList();
  }

  languageList(){
    this.service.getLanguageList().subscribe(res =>{
      this.langList= res;
    })
  }
  addLanguageModal(){
  this.modelService.open(LangCreateComponent,{centered:true});
  }


}
