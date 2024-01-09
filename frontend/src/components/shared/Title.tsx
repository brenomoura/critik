import { Center, Text } from "@mantine/core"

interface TitleProps {
    label: string;
}

const Title = ({ label }: TitleProps) => {
    return (
        <Center>
            <Text fw={700} size="xl">
                {label}
            </Text>
        </Center>
    )
}


export default Title