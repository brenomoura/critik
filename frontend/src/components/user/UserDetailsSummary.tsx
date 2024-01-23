import { Card, Avatar, Text, Group, Center } from '@mantine/core';
import classes from './UserDetailsSummary.module.css';
import generateUser from '../../mock_data/generate_user';
import IUser from '../../types/userInterface';
import moment from 'moment';


interface UserSummaryProps {
    user: IUser
}

const UserDetailsSummaryDesktop = ({ user }: UserSummaryProps) => {
    return (
        <Card padding="xl" radius="xs" style={{ backgroundColor: 'transparent' }}>
            <Avatar
                src={user.avatar}
                size={150}
                radius={20}
                mx="auto"
                mt={30}
                className={classes.avatar}
            />
            <Text ta="center" fz="lg" fw={500} mt="sm">
                {user.username}
            </Text>
            <Text ta="center" fz="sm" c="dimmed">
                {user.ranking}
            </Text>
            <Text ta="center" fz="sm" fw={500} mt="sm" c="dimmed">
                Registered at
            </Text>
            <Text ta="center" fz="sm" fw={500}>
                {`${moment(user.registerDatetime).format('MMMM Do YYYY')}`}
            </Text>
            <Group mt="md" justify="center" gap={30}>
                <div>
                    <Text ta="center" fz="lg" fw={500}>
                        {user.reviewCount}
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                        Total Reviews
                    </Text>
                </div>
                <div>
                    <Text ta="center" fz="lg" fw={500}>
                        {user.postCount}
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                        Total Posts
                    </Text>
                </div>
            </Group>
        </Card>
    );
}

const UserDetailsSummaryPortable = ({ user }: UserSummaryProps) => {

    return (
        <Center>
            <Group mb={10}>
                <Avatar
                    src={user.avatar}
                    size={100}
                    radius="md"
                />
                <div>
                    <Group gap={30}>
                        <div>
                            <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                                {user.ranking}
                            </Text>
                            <Text fz="md" fw={500} className={classes.name}>
                                {user.username}
                            </Text>
                        </div>
                        <div>
                            <Text fz="xs" fw={700} c="dimmed">
                                Registered at
                            </Text>
                            <Text fz="xs" fw={500} className={classes.name}>
                                {`${moment(user.registerDatetime).format('MMMM Do YYYY')}`}
                            </Text>
                        </div>
                    </Group>

                    <Group mt="md" justify="center" gap={30}>
                        <div>
                            <Text ta="center" fz="lg" fw={500}>
                                {user.reviewCount}
                            </Text>
                            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                                Total Reviews
                            </Text>
                        </div>
                        <div>
                            <Text ta="center" fz="lg" fw={500}>
                                {user.postCount}
                            </Text>
                            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                                Total Posts
                            </Text>
                        </div>
                    </Group>
                </div>
            </Group>
        </Center>
    )
}

const UserDetailsSummary = ({ isPortable }: { isPortable: boolean | undefined }) => {
    const user = generateUser()

    const userDetailsSummaryProps: UserSummaryProps = {
        user: user,
    }
    const mainComponent = isPortable
        ? <UserDetailsSummaryPortable {...userDetailsSummaryProps} />
        : <UserDetailsSummaryDesktop {...userDetailsSummaryProps} />

    return mainComponent;
}

export default UserDetailsSummary;