import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  visible = true;
  employe: any = [];
  constructor(private empService: EmpService) { }

  getemploye(){
    this.empService.getemp().subscribe((emp) => {
      this.employe = emp;
      console.log(this.employe);
    
  });
}
  ngOnInit() {
    this.getemploye();
  }

}
