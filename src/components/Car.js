function Car(props){
    // const{brand,color}=props
    const {carInfo}=props
    const{brand,color}=carInfo
    const text=`hi i am ${color} ${brand} car`;
    return(
        <div>
        <h2>{text}</h2>
        </div>
    );
}

export default Car;