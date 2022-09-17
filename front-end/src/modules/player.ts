export class Player {
    name: string;
    score: number;
    id: number;

    constructor(_name: string, _id: number) {
        this.name = _name;
        this.score = 0;
        this.id = _id;
    }
}