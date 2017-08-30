import { TaskModel } from './task.model';

export class NoteModel {
    constructor(
        public id: number,
        public name: string,
        public tasks: TaskModel[]
    ) {

    }
}