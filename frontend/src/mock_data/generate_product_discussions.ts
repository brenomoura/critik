import { faker } from '@faker-js/faker';

interface IProductDiscussion {
    id: number,
    userAvatarUrl: string,
    username: string,
    userId: number,
    createdAt: string,
    updatedAt: string,
    content: string,
    likeCount: number,
    deslikeCount: number,
}


const generateDiscussion = (): IProductDiscussion => {
    const review: IProductDiscussion = {
        id: faker.number.int(),
        userId: faker.number.int(),
        username: faker.internet.userName(),
        userAvatarUrl: faker.image.url(),
        likeCount: faker.number.int({ min: 12, max: 143 }),
        deslikeCount: faker.number.int({ min: 1, max: 14 }),
        content: faker.lorem.text(),
        createdAt: faker.date.recent().toISOString(),
        updatedAt: faker.date.recent().toISOString(),
    };

    return review;
};


const generateProductDiscussions = () => {
    const messages: IProductDiscussion[] = Array.from({ length: 10 }, generateDiscussion);
    return {
        id: faker.number.int(),
        discussion_name: faker.lorem.sentence(),
        messages: messages
    }
}

export default generateProductDiscussions
