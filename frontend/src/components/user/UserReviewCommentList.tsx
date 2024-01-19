import {
    Group,
    Paper,
    Text,
    Grid,
    Stack,
    Button,
    Tooltip
} from "@mantine/core";
import { Siren } from '@phosphor-icons/react'
import moment from "moment";
import { useState } from "react";
import StyledLink from "../shared/StyledLink";
import ReportFormModal from "../form/modal/ReportFormModal";



// The same interface from the API
interface UserReviewCommentProps {
    id: number,
    createdAt: string,
    comment: string,
    productId: number,
    productName: string,
}

interface UserReviewComment {
    id: number,
    product_id: number,
    created_at: string,
    comment: string,
    product_name: string
}

interface UserReviewCommentListProps {
    userReviewComments: UserReviewComment[]
}

const UserReviewComment = ({ id, createdAt, comment, productId, productName }: UserReviewCommentProps) => {
    const [reportModalOpened, setReportModalOpened] = useState<true | false>(false);

    return (
        <div>
            <Paper withBorder style={{ padding: "var(--mantine-spacing-lg) var(--mantine-spacing-xl)" }} m={15}>
                <Stack justify="flex-end">
                    <Grid>
                        <Grid.Col span="auto">
                            <StyledLink to={`/product/${productId}/#${id}`}>
                                <Group>
                                    <div>
                                        <Text size="sm" fw={700}>
                                            {productName}
                                        </Text>

                                        <Tooltip label={`${moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}`} position="right">
                                            <Text size="xs" c="dimmed">
                                                {`${moment(createdAt).fromNow()}`}
                                            </Text>
                                        </Tooltip>
                                    </div>
                                </Group>
                                <Text pt="sm" size="sm" style={{ whiteSpace: "pre-line" }}>
                                    {comment}
                                </Text>
                            </StyledLink>
                        </Grid.Col>
                    </Grid>
                    <Group justify="end">
                        <Button variant="transparent" color="gray" leftSection={<Siren />} onClick={() => setReportModalOpened(true)}>
                            <Text size="xs" c="dimmed">
                                Report
                            </Text>
                        </Button>
                    </Group>
                </Stack>
            </Paper>
            <ReportFormModal opened={reportModalOpened} setOpened={setReportModalOpened} />
        </div>
    );
}

const UserReviewCommentList = ({ userReviewComments }: UserReviewCommentListProps) => {
    return (
        <>
            {userReviewComments.map(userReviewComment => (
                <UserReviewComment
                    key={userReviewComment.id}
                    id={userReviewComment.id}
                    productId={userReviewComment.product_id}
                    productName={userReviewComment.product_name}
                    comment={userReviewComment.comment}
                    createdAt={userReviewComment.created_at}
                />
            ))}
        </>
    )
}

export default UserReviewCommentList