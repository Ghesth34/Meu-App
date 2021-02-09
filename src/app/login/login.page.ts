import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 formGroup : FormGroup;
  
  
  constructor(private formB : FormBuilder,
    private navCrt : NavController,  
    private menuCrt : MenuController ){

        this.menuCrt.enable(false);
    this.iniciarForm();
  }

  ngOnInit() {
  }
 logar(){
   
  console.log("Login com sucesso!");
  console.log(this.formGroup.value);
  this.navCrt.navigateRoot(["/home"]);
 }
  iniciarForm(){

    this.formGroup = this.formB.group({
      username : ["", [Validators.required,Validators.email]],
      password : ["",Validators.required]

    })


    }
  }
 

