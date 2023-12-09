import { Pipe, PipeTransform } from '@angular/core';
import { IEmployeeModel } from 'src/models/Employee';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: IEmployeeModel[], searchedEmployee: string): IEmployeeModel[] {
    if(employees.length === 0 || searchedEmployee === ''){
      return employees;
    }

    const result: IEmployeeModel[] = []

    for (const employee of employees) {
      if(employee.firstName.toLocaleLowerCase().match(searchedEmployee.toLocaleLowerCase())){
        result.push(employee);
      }
    }
    return result;
  }
}
