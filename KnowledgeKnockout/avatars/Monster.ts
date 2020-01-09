export class Monster {
    public id: number;
    public userId: number;
    public level: number;
    public topicBlockId: string;
    public imageSrc: string;
    public constructor(monsterId: number = 0, userId: number = 0, level: number = 0, topicBlockId: string = '', imageSrc: string = '') {
        this.id = monsterId;
        this.userId = userId;
        this.level = level;
        this.topicBlockId = topicBlockId;
        this.imageSrc = imageSrc;

    }
}