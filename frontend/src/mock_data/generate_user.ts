import { faker } from '@faker-js/faker';

interface User {
    id: number,
    username: string,
    avatar: string,
    registerDatetime: string,
    reviewCount: number,
    postCount: number,
    ranking: string,
    // reviews: UserReview[],
    // posts: UserPost[]
}

interface UserReview {
    id: number,
    review: string,
    user_rating: number,
    created_at: string,
    updated_at: string,
    photos_urls: string[],
    videos_urls: string[],
    likeCount: number,
    deslikeCount: number,
}

interface UserPost {
    id: number,
    content: string,
    created_at: string,
    updated_at: string,
    likeCount: number,
    deslikeCount: number,
}


const generateUserReview = (): UserReview => {
    const userReview: UserReview = {
        id: faker.number.int(),
        review: faker.lorem.text(),
        user_rating: faker.number.int({ min: 1, max: 10 }),
        created_at: faker.date.past().toISOString(),
        updated_at: faker.date.recent().toISOString(),
        photos_urls: Array.from({ length: faker.number.int({ min: 0, max: 3 }) }, () => faker.image.url()),
        videos_urls: Array.from({ length: faker.number.int({ min: 0, max: 2 }) }, () => "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"),
        likeCount: faker.number.int({ min: 4, max: 500 }),
        deslikeCount: faker.number.int({ min: 4, max: 10 }),
    };

    return userReview;
};

const generatePost = (): UserPost => {
    const userPost: UserPost = {
        id: faker.number.int(),
        content: faker.lorem.text(),
        created_at: faker.date.past().toISOString(),
        updated_at: faker.date.recent().toISOString(),
        likeCount: faker.number.int({ min: 4, max: 500 }),
        deslikeCount: faker.number.int({ min: 4, max: 10 }),
    };
    return userPost;
};


const generateUser = (): User => {
    return {
        id: faker.number.int(),
        username: faker.internet.userName(),
        avatar: faker.image.url(),
        registerDatetime: faker.date.past().toISOString(),
        reviewCount: faker.number.int({ min: 1, max: 10 }),
        postCount: faker.number.int({ min: 1, max: 10 }),
        ranking: faker.lorem.word(),
        // reviews: Array.from({ length: faker.number.int({ min: 3, max: 10 }) }, () => generateUserReview()),
        // posts: Array.from({ length: faker.number.int({ min: 4, max: 15 }) }, () => generatePost()),
    };
};


export default generateUser
