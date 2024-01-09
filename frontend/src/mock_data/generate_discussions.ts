import { faker } from '@faker-js/faker';

interface IProductDiscussion {
    id: number,
    topic_title: string,
    product_avatar: string,
    topic_content_shortened: string,
    product_name: string,
    topic_creator_username: string
    topic_creator_user_avatar: string,
    topic_creation_datetime: string,
    topic_posts_count: number,
    last_post_datetime: string
    last_post_username: string
    last_post_user_avatar: string
}


const generateDiscussion = (): IProductDiscussion => {
    const review: IProductDiscussion = {
        id: faker.number.int(),
        topic_title: faker.lorem.sentence(),
        product_avatar: faker.image.url(),
        product_name: faker.commerce.product(),
        topic_content_shortened: faker.lorem.text(),
        topic_creator_username: faker.internet.userName(),
        topic_creator_user_avatar: faker.image.url(),
        topic_posts_count: faker.number.int({ min: 1, max: 143 }),
        topic_creation_datetime: faker.date.past().toISOString(),
        last_post_datetime: faker.date.recent().toISOString(),
        last_post_username: faker.internet.userName(),
        last_post_user_avatar: faker.image.url(),
    };

    return review;
};


const generateDiscussions = () => {
    const userReviews: IProductDiscussion[] = Array.from({ length: 10 }, generateDiscussion);
    return userReviews
}

export default generateDiscussions
