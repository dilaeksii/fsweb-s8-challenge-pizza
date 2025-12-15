const OrderPizzaHeader = () => {
  return (
    <header className="form-header">
      <h1 className="header-title">Teknolojik Yemekler</h1>
      <nav>
        <a href="#">Anasayfa</a><span style={{color: "white"}}>-</span>
        <a href="#">Seçenekler</a><span style={{color: "white"}}>-</span>
        <a href="#">Sipariş Oluştur</a>
      </nav>
    </header>
  );
};

export default OrderPizzaHeader;
