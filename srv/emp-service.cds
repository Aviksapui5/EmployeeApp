using {emp.db as model} from '../db/data-model';

service EmployeeDataAPIService {
    entity EmployeeSet as projection on model.Employees;
}
