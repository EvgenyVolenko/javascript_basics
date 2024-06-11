import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';

function CardItem(props) {
    return (
        <>
            <Box sx={{ maxWidth: 275 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        ID задачи - {props.id}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        {props.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        onClick={() => { props.delTodoFunc(props.id) }}
                        startIcon={<DeleteIcon />}>У
                        далить задание
                    </Button>
                </CardActions>
            </Box>
        </>
    );
}

export { CardItem };