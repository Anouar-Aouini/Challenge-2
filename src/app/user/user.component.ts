import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public name: string = "toto";
  public email: string = "toto@Fivepoints.fr";
  public address: string = "rue d\rue de la bourse lac2";
  public hobbies: string[] = ['Music', 'Movies', 'Sports'];
  public show: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onShow() {
    this.show = !this.show;
  }
  onDelete(i: number) {
    this.hobbies = this.hobbies.filter((el, ind) => ind !== i);
    console.log(this.hobbies)
  }
}
