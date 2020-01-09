export class TopicBlock {
    public id: number;
    public name: string;

    public constructor(topicBlockId: number = 0, name: string = '') {
        this.id = topicBlockId;
        this.name = name;

    }
}