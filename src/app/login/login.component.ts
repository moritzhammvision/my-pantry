import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = 'moritz.hamm@vc-g.de';
  password: string = '';

  login() {
    // findSportTeams(sportId: number) {
    //   this.activeteamlist.length = 0;
    //   fetch('http://localhost:1337/api/sports/' + sportId + '?populate=*', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       for (const event of data.data.attributes.teams.data) {
    //         this.activeteamlist.push({
    //           id: event.id,
    //           name: event.attributes.name,
    //           gender: event.attributes.gender,
    //           agegroup: event.attributes.agegroup,
    //         });
    //       }
    //       this.teamDataSource.data = this.activeteamlist;
    //     });
    // }
    console.log();
  }
}
