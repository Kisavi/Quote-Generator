export class Quote {
    showDescription: boolean;
    constructor(public id: number, public category: string, public description: string, public author: string, public submitter: string) {
        this.showDescription = false;
  }

  // id!: number;
//     // category!: string;
//     // description!: string;
//     // author!: string;
//     // submitter!: string;
}
