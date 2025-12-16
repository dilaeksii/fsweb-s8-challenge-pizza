import logo from "/images/iteration-1-images/logo.svg"


const Header = () => {
  return (
    <header className="form-header">
      <img src={logo} alt=""/>
      <nav>
        <a href="#">Anasayfa</a><span style={{color: "white"}}>-</span>
        <a href="#">Seçenekler</a><span style={{color: "white"}}>-</span>
        <a href="#">Sipariş Oluştur</a>
      </nav>
    </header>
  );
};

export default Header;
