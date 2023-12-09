import { Injectable } from '@angular/core';
import { IEmployeeModel } from 'src/models/Employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor() { 

  }

  public getStocks():IEmployeeModel[]{
    return [
      {
        employeeID: 1,
        firstName: 'Sangram',
        lastName: 'Pattanayak',
        salary: 6000,
        dOB: new Date('1888-03-29T00:00:00'),
        email: 'sangram@mysite.com',
      },
      {
        employeeID: 2,
        firstName: 'Arun',
        lastName: 'Mohanty',
        salary: 8000,
        dOB: new Date('1983-11-16T00:00:00'),
        email: 'arun@mysite.com',
      },
      {
        employeeID: 3,
        firstName: 'Ashok',
        lastName: 'Chakravarthi',
        salary: 9000,
        dOB: new Date('1991-10-18T00:00:00'),
        email: 'ashok@mysite.com',
      },
      {
        employeeID: 4,
        firstName: 'Ashutosh',
        lastName: 'Singh',
        salary: 9300,
        dOB: new Date('1891-12-10T00:00:00'),
        email: 'ashutosh@mysite.com',
      },
      {
        employeeID: 5,
        firstName: 'Santosh',
        lastName: 'Rawoor',
        salary: 9340,
        dOB: new Date('1994-09-19T00:00:00'),
        email: 'santosh@mysite.com',
      },
      {
        employeeID: 6,
        firstName: 'Nitin',
        lastName: 'Shah',
        salary: 10001,
        dOB: new Date('1991-07-15T00:00:00'),
        email: 'nitin@mysite.com',
      },
    ];
  }

}
