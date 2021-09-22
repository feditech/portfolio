import {Header } from '../../components'
import './css/style.css'
function Home(){
    return(
        <div>
           <Header />
            <div className='homediv'>
            <div className='homepic'>
                <img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t1.6435-9/118170777_1804694903030807_3729370725282090938_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFZHjZS-X2vsb0HxG2YqbUNESMopIlwL9QRIyikiXAv1A8GTCrWhnGvGzj6Yr3amBBVQLQVf5iILjxesvXnA5H8&_nc_ohc=ZBMcDDOu-LIAX-veQ_O&_nc_ht=scontent.fkhi2-3.fna&oh=fe09bce761de1c86348b53526f14331b&oe=61718CC6" />
            </div>
            <div className='homedescription'>
                <h1>Fahad Sheikh</h1>
                <p>I am a professional React developer</p>
                <p>Active in market since 2021</p>
                <p>Starting my journey with the Help of Saylani❤</p>
            </div>
            </div>
        </div>
    )
}

export default Home;