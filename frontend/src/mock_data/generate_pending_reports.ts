import { faker } from '@faker-js/faker';
import IPendingReportItem from '../types/pendingReportItemInterface';


const generatePendingReport = (): IPendingReportItem => {
    const pendingReport: IPendingReportItem = {
        id: faker.number.int(),
        avatar: faker.image.url(),
        description: faker.lorem.text(),
        name: faker.commerce.product(),
        category: faker.commerce.department(),
        media: [
            ...Array.from({ length: faker.number.int({ min: 0, max: 3 }) }, () => faker.image.url()),
            ...Array.from({ length: faker.number.int({ min: 0, max: 1 }) }, () => "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4") // each video must have their own id
        ]
    };

    return pendingReport;
};


const generatePendingReports = () => {
    const pendingReports: IPendingReportItem[] = Array.from({ length: 10 }, generatePendingReport);
    return pendingReports
}

export default generatePendingReports
