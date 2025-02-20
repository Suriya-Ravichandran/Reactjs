import './Header.css';
import styles from './Header.module.css';

function Header(){
const myStyle={
    color:"red",
    backgroundColor:"lightblue",
    padding: "10px",
    fontFamily: "Sans-Serif"

}

    return <>
    {/* <h1 style={myStyle}>Hello Styleing</h1> */}
    <h1 className={styles.bigBlue}>Hello Styleing</h1>
    <p>Add a Little Styleing</p>
    </>
}

export default Header;