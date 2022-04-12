export class Quote {
  showDescription: boolean;
  constructor(public id: number, public category: string, public description: string,
     public author: string, public submitter: string, public uploadDate: Date,
      public upVote: number, public downVote: number, public isInspirational: boolean) {
    this.showDescription = false;
  }

}
