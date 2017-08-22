
import { TaskModel } from './task.model';

export class ListModel {
    constructor(
        public id: number,
        public name: string,
        public tasks: TaskModel[]
    ) {

    }
}