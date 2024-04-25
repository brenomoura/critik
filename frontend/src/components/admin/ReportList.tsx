
import {
    Center,
    Stack,
    Text,
    Grid,
    Avatar,
    SimpleGrid,
    em,
    Card,
    Button,
    Pagination,
    Tooltip,
} from "@mantine/core"
import { Check, X } from "@phosphor-icons/react"
import { useMediaQuery } from "@mantine/hooks"
import classes from './PendingProductList.module.css';
import { useContext, useEffect, useState } from "react"
import MediaModal from "../shared/modal/MediaModal"
import { ReportModalFormContext } from "../../helper/context"
import IPendingReportItem from "../../types/pendingReportItemInterface";
import generatePendingReports from "../../mock_data/generate_pending_reports";
import ApprovalReportFormModal from "../form/modal/ApprovalReportFormModal";
import DeclineReportFormModal from "../form/modal/DeclineReportFormModal";


interface ReportViewProps {
    isPortable: boolean | undefined
    report: IPendingReportItem
}

interface GridViewProps {
    report: IPendingReportItem,
}

interface PendingReportProps {
    pendingReport: IPendingReportItem
}

interface PendingReportAvatarProps {
    avatar: string,
    size: number,
    mediaUrls: string[]
}


const ApprovalSectionComponent = ({ pendingReport }: PendingReportProps) => {
    const {
        setDeclineModalOpened,
        setApproveModalOpened,
        setSelectedPendingReport
    } = useContext(ReportModalFormContext)
    return (
        <>
            <Center>
                <Button.Group>
                    <div>
                        <Button
                            variant="transparent"
                            color="green"
                            leftSection={<Check weight="bold" size={34} />}
                            onClick={() => {
                                setSelectedPendingReport(pendingReport)
                                setApproveModalOpened(true)
                            }}
                        />
                    </div>
                    <div>
                        <Button
                            variant="transparent"
                            color="red"
                            leftSection={<X weight="bold" size={34} />}
                            onClick={() => {
                                setSelectedPendingReport(pendingReport)
                                setDeclineModalOpened(true)
                            }}
                        />
                    </div>
                </Button.Group>
            </Center>
        </>
    )
}

const PendingReportAvatar = ({ avatar, size, mediaUrls }: PendingReportAvatarProps) => {
    const [mediaModalOpened, setMediaModalOpened] = useState<true | false>(false);

    return (
        <>
            <Tooltip position="top" label="Click to see more pictures">
                <Avatar
                    src={avatar}
                    size={size}
                    radius="xl"
                    mr="xs"
                    onClick={() => setMediaModalOpened(true)}
                    style={{ cursor: "pointer" }}
                />
            </Tooltip>
            <MediaModal opened={mediaModalOpened} setOpened={setMediaModalOpened} mediaUrls={mediaUrls} initialSlideIndex={0} />
        </>
    )
}


const DesktopGridView = ({ report }: GridViewProps) => {
    return (
        <Grid align="center" >
            <Grid.Col span="auto">
                <Center>
                    <PendingReportAvatar avatar={report.avatar} size={150} mediaUrls={report.media} />
                </Center>
            </Grid.Col>
            <Grid.Col span={6}>
                <Stack gap={0}>
                    <Text fz="xl">
                        {report.name}
                    </Text>
                    <Text fz="sm" c="dimmed" fw={500}>
                        {report.category}
                    </Text>
                    <Text fz="sm">
                        {report.description}
                    </Text>
                </Stack>
            </Grid.Col>
            <Grid.Col span="auto">
                <ApprovalSectionComponent pendingReport={report} />
            </Grid.Col>
        </Grid>
    )
}

const PortableGridView = ({ report }: GridViewProps) => {
    const isMobile = useMediaQuery(`(max-width: ${em(500)})`);

    const avatarComponent = (
        <Center>
            <PendingReportAvatar avatar={report.avatar} size={110} mediaUrls={report.media} />
        </Center>
    )

    const portableView = () => {
        return (
            isMobile
                ? null
                : <SimpleGrid cols={2}>
                    {avatarComponent}
                    <ApprovalSectionComponent pendingReport={report} />
                </SimpleGrid>

        )
    }

    const mobileView = () => {
        return (
            isMobile
                ? <Stack>
                    <Center>
                        {avatarComponent}
                    </Center>
                    <ApprovalSectionComponent pendingReport={report} />
                </Stack>
                : null

        )
    }


    return (
        <Stack>
            {mobileView()}
            {portableView()}
            <Stack gap={0} mx={10} mb={10}>
                <Text fz="xl">
                    {report.name}
                </Text>
                <Text fz="sm" c="dimmed" fw={500}>
                    {report.category}
                </Text>
                <Text fz="sm">
                    {report.description}
                </Text>
            </Stack>
        </Stack>
    );
}

const PendingReportView = ({ report, isPortable }: ReportViewProps) => {

    return (
        <>
            {isPortable
                ? <PortableGridView report={report} />
                : <DesktopGridView report={report} />
            }
        </>
    )
}


const ReportList = () => {
    const [activePage, setPage] = useState(1);
    const isPortable = useMediaQuery(`(max-width: ${em(970)})`);

    const [declineModalOpened, setDeclineModalOpened] = useState<true | false>(false);
    const [approveModalOpened, setApproveModalOpened] = useState<true | false>(false);
    const [pendingReportList, setPendingReportList] = useState<IPendingReportItem[]>([]);
    const [selectedPendingReport, setSelectedPendingReport] = useState<IPendingReportItem | null>(null)
    
    useEffect(() => {
        const pendingReportList = generatePendingReports()
        setPendingReportList(pendingReportList)
    }, [activePage])
    return (
        <ReportModalFormContext.Provider value={{ setDeclineModalOpened, setApproveModalOpened, setSelectedPendingReport }}>
            {pendingReportList.map((report) => {
                return (
                    <Card withBorder className={classes.card} m={10} key={report.id}>
                        <PendingReportView report={report} isPortable={isPortable} />
                    </Card>
                )
            })}
            <Center>
                <Pagination total={pendingReportList.length} value={activePage} onChange={setPage} mt="sm" />
            </Center>
            {
                selectedPendingReport 
                ? <ApprovalReportFormModal opened={approveModalOpened} setOpened={setApproveModalOpened} approvedReport={selectedPendingReport} />
                : null
            }
            {
                selectedPendingReport
                ? <DeclineReportFormModal opened={declineModalOpened} setOpened={setDeclineModalOpened} declinedReport={selectedPendingReport} />
                : null
            }
        </ReportModalFormContext.Provider>
    )
}

export default ReportList