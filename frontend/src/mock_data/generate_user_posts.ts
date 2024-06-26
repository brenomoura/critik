import { faker } from '@faker-js/faker';

interface IProductDiscussion {
    id: number,
    userAvatarUrl: string,
    username: string,
    createdAt: string,
    updatedAt: string,
    content: string,
    likeCount: number,
    deslikeCount: number,
    topicTitle: string,
    productId: number
    discussionId: number
}


const generateDiscussion = (): IProductDiscussion => {
    const review: IProductDiscussion = {
        id: faker.number.int(),
        productId: faker.number.int(),
        discussionId: faker.number.int(),
        topicTitle: faker.lorem.sentences(),
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


const generateUsersPosts = () => {
    const messages: IProductDiscussion[] = Array.from({ length: 10 }, generateDiscussion);
    return messages
}

export default generateUsersPosts
