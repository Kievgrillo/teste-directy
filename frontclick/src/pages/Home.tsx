import moment from 'moment';
import ButtonClick from '../components/ButtonClick/ButtonClick';
import {useState} from 'react';


const Home = (props:any) => {

        const [clickOne, setClickOne] = useState(""); 
        const [clickTwo, setClickTwo] = useState("");

        const handleClick = () => {
            if (clickOne === ""){
                setClickOne(moment().format("YYYY-MM-DDTHH:mm:ss.SSS"));
            } else {
                setClickTwo(moment().format("YYYY-MM-DDTHH:mm:ss.SSS"));
            }
        }
        
        return (
            <div className='home'> 
                <ButtonClick click={handleClick}/>
                <ul>
                    <li>{clickOne}</li>
                    <li>{clickTwo}</li>
                </ul>
                <span> Resultado: { clickTwo ? moment(clickTwo).diff(moment(clickOne)) : 0} </span>
            </div>
        )
}

export default Home