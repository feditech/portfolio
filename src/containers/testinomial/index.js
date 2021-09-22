import { Header } from '../../components'
import './css/style.css'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

function Testinomial() {
    return (
        <div>
            <Header />
            <div className="testinomialDiv">
                <h1>Testinomial</h1>

            <div className='testnomialcards'>
            <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image="https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-9/p206x206/239427775_2950552108594877_3384708953139299979_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=da31f3&_nc_eui2=AeGH9J3EVlMj4e42FthC5mFDEp8avzAXJRMSnxq_MBclE3gPND1fo5-0nahpi-1SjhxGTjQY5RRpaauJUa7fK6SE&_nc_ohc=VPhn6EM3I4wAX_y5dql&_nc_ht=scontent.fkhi2-2.fna&oh=c5e9a23ef37d828db110bcef9bf1281e&oe=61710526"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Aqeel Malik (CEO KJ Group)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Fahad Sheikh is very hardworking programmer.
                                                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image="https://scontent.fkhi2-2.fna.fbcdn.net/v/t31.18172-8/s206x206/15895986_1655509221413759_8762000625561797482_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=da31f3&_nc_eui2=AeGbYp4RjBXCQmb2TYSfxK0UjWG_oIndix-NYb-gid2LHww82H5rEQNYYMngUCThjbkLhnqAZFvGDh0-g2cqdQcI&_nc_ohc=lsVd52-uiL0AX9XmTnk&_nc_ht=scontent.fkhi2-2.fna&oh=feeb68a3f618c3f0477e3ba835c3ea15&oe=6171B2CA"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Syed Taimoor (Programmer)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Working with him is a great honour. He is best at what he does.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

            </div>


            </div>
        </div>
    )
}

export default Testinomial;