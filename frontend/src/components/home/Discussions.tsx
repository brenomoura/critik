import { Avatar, Badge, Box, Divider, Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import React from "react"


interface IProductDiscussion {
    id: number,
    topic_title: string,
    product_avatar: string,
    topic_content_shortened: string,
    product_name: string,
    topic_creator_username: string
    topic_posts_count: number,
    last_post_datetime: string
}


const Discussions = () => {
    const discussions: IProductDiscussion[] = [
        {
            "id": 21358,
            "topic_title": "Ut eum at eaque earum doloremque aut voluptatem laboriosam.",
            "product_avatar": "https://picsum.photos/200/300",
            "topic_content_shortened": "Ut ex velit nam dignissimos odio.",
            "product_name": "Tasty Granite Chicken",
            "topic_creator_username": "Jermain92",
            "topic_posts_count": 7825,
            "last_post_datetime": "2024-05-17T18:28:48.917Z"
        },
        {
            "id": 16054,
            "topic_title": "Sapiente voluptatem enim exercitationem nulla.",
            "product_avatar": "https://picsum.photos/200/300",
            "topic_content_shortened": "At rerum voluptatem minus. Vel perspiciatis quo laboriosam illum. Deleniti nulla sint quia est distinctio fuga alias sint aut. Quae veniam repellendus corrupti suscipit non ut maiores. Aut incidunt dolores debitis eum molestiae at ipsam placeat.\n \rUt soluta iure est minus sed sint in. Fugit ut et. Aliquid vel enim molestias accusantium repellendus quam autem ut. Atque sed accusamus ex earum saepe dignissimos neque.\n \rEst distinctio excepturi consequatur architecto ut sunt officiis qui. Vel et et vero ad doloribus velit. Non reprehenderit delectus alias maxime dicta aut et. Numquam praesentium consectetur dolore est quaerat suscipit. Beatae enim est aspernatur corrupti voluptas.",
            "product_name": "Awesome Plastic Fish",
            "topic_creator_username": "Hailey20",
            "topic_posts_count": 20857,
            "last_post_datetime": "2082-02-07T02:13:27.345Z"
        },
        {
            "id": 75655,
            "topic_title": "Consequuntur quia quod minima fugiat.",
            "product_avatar": "https://picsum.photos/200/300",
            "topic_content_shortened": "Unde nihil qui blanditiis debitis necessitatibus.",
            "product_name": "Unbranded Wooden Pizza",
            "topic_creator_username": "Alexa95",
            "topic_posts_count": 49122,
            "last_post_datetime": "2091-06-15T19:07:12.163Z"
        },
        {
            "id": 94236,
            "topic_title": "Est est ad.",
            "product_avatar": "https://picsum.photos/200/300",
            "topic_content_shortened": "vitae",
            "product_name": "Intelligent Concrete Chips",
            "topic_creator_username": "Duncan_Labadie",
            "topic_posts_count": 37314,
            "last_post_datetime": "2008-10-03T02:32:41.562Z"
        },
        {
            "id": 6917,
            "topic_title": "Aliquid rerum non ullam possimus velit placeat id.",
            "product_avatar": "https://picsum.photos/200/300",
            "topic_content_shortened": "In sit velit sint. Repudiandae cupiditate deserunt distinctio ipsum molestiae inventore sed. Eaque et harum sit. Est blanditiis incidunt dolorem eum error sequi.",
            "product_name": "Handmade Soft Shirt",
            "topic_creator_username": "Shad_Durgan",
            "topic_posts_count": 8017,
            "last_post_datetime": "2065-01-25T01:58:11.859Z"
        }
    ]
    return (
        <div>
            <Paper sx={{ bgcolor: "#2b3137" }}>
                <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }} color="white">
                    Discussions
                </Typography>
                <Divider variant="middle" />
                <List sx={{ width: '100%' }}>
                    {discussions.map((productDiscussion, index) => {
                        return <React.Fragment>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={productDiscussion.product_avatar}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography
                                            color="white"
                                        >
                                            {productDiscussion.product_name}
                                        </Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="div"
                                                variant="body2"
                                                color="white"
                                            >
                                                <Box sx={{ display: 'inline', fontWeight: 'bold' }}>{productDiscussion.topic_title}</Box>
                                                {` — ${productDiscussion.topic_content_shortened}`.substring(0, 150) + "..."}
                                            </Typography>
                                            <Typography
                                                color="gray"
                                            >
                                                <Box sx={{ fontSize: 10 }}>{`Last message at ${productDiscussion.last_post_datetime}`}</Box>
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                                <ListItemIcon sx={{ color: 'white', marginLeft: 'auto', display: 'flex', alignItems: 'center', minHeight: 80 }}>
                                    <Badge badgeContent={productDiscussion.topic_posts_count} color="success" max={9999}>
                                        <ChatBubbleOutlineIcon sx={{ width: 30, height: 30 }} />
                                    </Badge>
                                </ListItemIcon>
                            </ListItem>
                            {index !== discussions.length - 1 && <Divider variant="inset" component="li" />}
                        </React.Fragment>
                    })}
                </List>
            </Paper>
        </div >
    )
}

export default Discussions