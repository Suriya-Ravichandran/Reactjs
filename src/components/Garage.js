import Car from "./Car";
import Apple from "./Apple";

function Garage(){

    const isDoorOpened =true;
    // const brand='Ferrari';
    // const color='Black';

    const carInfo={brand: "Ferrari",color: "Black"}
    // const carInfo= {}
    const appleInfo ={type:"Fuji", color:"Red"}

    const carlist=[
        {brand:"BMW",color:"Red"},
        {brand:"Ford",color:"Green"},
        {brand:"Tesla",color:"Black"},
    ]

    const numberList=[
        1,2,3,4,5,6
    ]

    return(
        <>
            <h1>Who Lives inside my Garage ?</h1>
            {/* <Car brand={brand} color={'black'}/> */}
            {carInfo.brand !== undefined && carInfo.color !== undefined ?
            <Car carInfo={carInfo}/>:null}
            <Apple appleInfo={appleInfo}/>
            {isDoorOpened ?<h2>Garage Door is opened</h2>: <h2>Garage Door is Closed</h2>}

            <ul>
               {carlist.map((carInfo)=> <li key={carInfo.brand}> <Car carInfo={carInfo}/></li>) }
            </ul>

            <ul>
                {numberList.map((e,index)=> <p key={index}>{e}</p>)}
            </ul>
        </>
    )
}

export default Garage;