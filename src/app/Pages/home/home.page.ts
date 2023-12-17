import { Component } from '@angular/core';
import { ListTasksService } from '../../list-tasks.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate;
  allTasks = [];
  showAddButton = true;
  constructor(
    private taskSer: ListTasksService,
    private alertController: AlertController,
    private router: Router, // Inject the Router
    private userservice: UserService, // Inject the Service

private fb :AuthService


  ) {}

  toggleBtn() {
    this.showAddButton = !this.showAddButton;
  }

  addNewTask(txtValue) {
    let newTask = {
      checked: false,
      text: txtValue,
      date: new Date(),
    };
    this.taskSer.addTask(newTask).subscribe({
      next: (response) => {
        console.log(response);
        this.getTasks();
        this.toggleBtn();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  async presentAlert(idDocument) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Etes vous sur de vouloir supprimer ce task ?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: () => {
            this.taskSer.deleteTask(idDocument).subscribe({
              next: (response) => {
                this.getTasks();
              },
              error: (err) => {
                console.log(err);
              },
            });
          },
        },
      ],
    });

    await alert.present();
  }

  changeCheckedValue(checkedValue, idDocument) {
    checkedValue = !checkedValue;
    this.taskSer.updateTask(checkedValue, idDocument).subscribe({
      next: (response) => {
        this.getTasks();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getTasks() {
    this.allTasks = [];
    this.taskSer.getAllTasks().subscribe({
      next: (response) => {
        console.log(response);
        for (const key in response) {
          // let o = {
          //   id: key,
          //   text: response[key].text,
          //   checked: response[key].checked,
          //   date: response[key].date,
          // };
          // this.allTasks.push(o);
          this.allTasks.push({ id: key, ...response[key] });
        }
        console.log(this.allTasks);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit() {
    this.currentDate = new Date();
    this.getTasks();
  }
  logout() {
    // Perform any logout logic here
this.fb.signout().then(res=>{
  this.router.navigate(['/home']);
})
    // Navigate to the login page

  }
  getCurrentUser(): string | null {
    const user = this.userservice.getCurrentUser();
    return user ? user.username : null;
  }
}
