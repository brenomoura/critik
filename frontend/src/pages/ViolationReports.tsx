import { Container } from "@mantine/core"
import ReportList from "../components/admin/ReportList"
import SearchBar from "../components/shared/SearchBar"

const ViolationReports = () => {
    return (
        <div>
            <SearchBar />
            <Container>
                <ReportList />
            </Container>
        </div>
    )
}

export default ViolationReports