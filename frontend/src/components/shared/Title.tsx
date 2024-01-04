import { Center, Text } from "@mantine/core"

interface TitleProps {
    label: string;
    isMobile: boolean;
}

const Title: React.FC<TitleProps> = ({ label, isMobile }) => {
    if (isMobile) {
        return null
    }
    return (
        <Center>
            <Text fw={700} size="xl">
                {label}
            </Text>
        </Center>
    )
}


export default Title