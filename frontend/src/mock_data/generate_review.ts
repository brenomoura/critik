import { faker } from '@faker-js/faker';

interface UserReview {
    id: number,
    username: string,
    user_avatar_url: string,
    review: string,
    score: number,
    created_at: string,
    updated_at: string,
    photos_urls: string[],
    videos_urls: string[],
    answers: UserReviewAnswer[],
    likeCount: number,
    deslikeCount: number,
}

interface UserReviewAnswer {
    id: number,
    username: string,
    user_avatar_url: string,
    comment: string,
    created_at: string
}

const generateUserReview = (): UserReview => {
    const review: UserReview = {
        id: faker.number.int(),
        username: faker.internet.userName(),
        user_avatar_url: faker.image.url(),
        review: faker.lorem.text(),
        score: faker.number.int({ min: 1, max: 10 }),
        created_at: faker.date.past().toISOString(),
        updated_at: faker.date.recent().toISOString(),
        photos_urls: Array.from({ length: faker.number.int({ min: 0, max: 3 }) }, () => faker.image.url()),
        videos_urls: Array.from({ length: faker.number.int({ min: 0, max: 2 }) }, () => "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"),
        answers: Array.from({ length: faker.number.int({ min: 0, max: 5 }) }, () => generateUserReviewAnswer()),
        likeCount: faker.number.int({ min: 4, max: 500 }),
        deslikeCount: faker.number.int({ min: 4, max: 10 }),
    };

    return review;
};

const generateUserReviewAnswer = (): UserReviewAnswer => {
    return {
        id: faker.number.int(),
        username: faker.internet.userName(),
        user_avatar_url: faker.image.url(),
        comment: faker.lorem.sentence(),
        created_at: faker.date.recent().toISOString(),
    };
};


const generateMain = () => {
    const userReviews: UserReview[] = Array.from({ length: 10 }, generateUserReview);
    return userReviews
}

export default generateMain
