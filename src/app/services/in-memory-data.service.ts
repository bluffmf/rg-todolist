import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ListModel } from './../models/list.model';
import { TaskModel } from './../models/task.model';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 0,  name: 'Zero' },
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];

    const LISTS = [
        new ListModel(
            1,
            'Complete the test task for Ruby Garage', 
            [
                new TaskModel('Buy a milk', true),
                new TaskModel('Buy a car', true),
                new TaskModel('Go to Ruby Garage', false)      
            ]
        ),
        new ListModel(
            2,
            'second', 
            [
                new TaskModel('Crush a plane', false),
                new TaskModel('Find the truth', true)
            ]
        )
    ];

    return {heroes, LISTS};
  }
}