const Title = () => {
  return (
    <div className="maintitle" style={{backgroundColor: "#FAF7F2"}}>
      <nav>
        <a href="/">Anasayfa</a><span style={{color: "white"}}>-</span>
        <a href="#">Seçenekler</a><span style={{color: "white"}}>-</span>
        <a href="/order">Sipariş Oluştur</a>
      </nav>
      <h3>Position Absolute Acı Pizza</h3>
      <div className="main-price">
        <p style={{fontWeight: "bold"}}>85.50₺</p>
        <p className="food-rating" style={{color: "#5F5F5F"}}>4.9</p><span style={{color: "#5F5F5F"}} className="rate">(200)</span>
      </div>
      <p className="description">Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
        diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, 
        genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir..Küçük bir 
        pizzaya bazen pizzetta denir.
      </p>
    </div>
  );
};

export default Title;
