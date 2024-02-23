import styles from "./styles/header.module.scss";


const Header = ({menu,setMenu}) => {
  return (
      <header className={styles["header"]}>
        <>ChatApp</>
        <span className={styles["menu"]} onClick={()=>setMenu(!menu)}></span>
      </header>
    
  );
};
export default Header;
