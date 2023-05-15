import './notification.css'
import Succesicon from '../../src/pictures/logo1.png'
import Erroricon from '../../src/pictures/logo2.png'
import Warningicon from '../../src/pictures/logo3.png'
import Infoicon from '../../src/pictures/logo4.png'




const array={
    succes:{
        text:"Succes",
        image:Succesicon,
        class:"n-succes"

    },
    error:{
        text:"Error",
        image:Erroricon,
        class:'n-info'

    },
    warning:{
        text:"Warning",
        image:Warningicon,
        class:'n-warning'

    },
    info:{
        text:"Info",
        image:Infoicon,
        class:'n-info'

    }
}


export default function Notification(props){
    const item = array [props.type]
    return(

       <div className={`notification ${item.class}`}>
           <div className={`notification-img ${item.class}`}>
            <img src={item.image} alt="" />
           </div>

             <div className="notification-text">
                <h3>{item.text}</h3>
                <p>Order Placed Successfully. You can check order delivery status.</p>

             </div>

       </div>

    )
}