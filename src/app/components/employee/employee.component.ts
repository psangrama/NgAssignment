import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { IEmployeeModel } from 'src/models/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  public isEditClicked = false;
  public employees: IEmployeeModel[];
  public salaryHighlighter:string;
  public cellTextDynamicColor: string;
  public searchedEmployee: string;

  constructor(public employeeService: EmployeeService) {
    this.employees = [];
    this.salaryHighlighter = "";
    this.cellTextDynamicColor = ""
    this.searchedEmployee = '';
  }
  public AddStock() {
    this.employees.push(
      {
        employeeID: 1,
        firstName: 'Sangram',
        lastName: 'Pattanayak',
        salary: 6000,
        dOB: new Date('1888-03-29T00:00:00'),
        email: 'sangram@mysite.com',
      }
    );
  }

  ngOnInit(): void {
    this.employees = this.employeeService.getStocks();// .slice(0,3); - slice is used like bunch of rows from an actual rows.
    //   [{
    //     employeeID: 1,
    //     firstName: 'Sangram',
    //     lastName: 'Pattanayak',
    //     salary: 6000,
    //     dOB: new Date('1888-03-29T00:00:00'),
    //     email: 'sangram@mysite.com',
    //   },
    //   {
    //     employeeID: 2,
    //     firstName: 'Arun',
    //     lastName: 'Mohanty',
    //     salary: 8000,
    //     dOB: new Date('1983-11-16T00:00:00'),
    //     email: 'arun@mysite.com',
    //   },
    //   {
    //     employeeID: 3,
    //     firstName: 'Ashok',
    //     lastName: 'Chakravarthi',
    //     salary: 9000,
    //     dOB: new Date('1991-10-18T00:00:00'),
    //     email: 'ashok@mysite.com',
    //   },
    // ];
  }


  public EditEmployee(empId: any = 0) {
    console.log(empId)
    this.isEditClicked = true;
  }

  public UpdateEmployee() {
    this.isEditClicked = false;
  }
  public CancelUpdate(){
    this.isEditClicked = false;
  }
  
  public HasHigherSalary(salary: number){
  if(salary > 6000){
      this.salaryHighlighter =  "";
    }

  }



}