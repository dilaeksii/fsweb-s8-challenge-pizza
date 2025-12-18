import { useEffect, useState } from "react";
import Footer from "./formcomponents/Footer";
import Header from "./formcomponents/Header";
import Notes from "./formcomponents/Notes";
import PizzaForm from "./formcomponents/PizzaForm";
import Title from "./formcomponents/Title";
import { useHistory } from "react-router-dom";
import axios from "axios";

let initialErrors = {
  adsoyad: false,
  boyut: false,
  malzeme: false,
  hamur: false,
};

const errorMsg = {
  hamur: "Hamur kalınlığı için seçim yapmalısınız.",
  adsoyad: "Adınız ve soyadınız en az 3 karakterden oluşmalıdır.",
  malzeme: "Ek malzeme maksimum 10 minimum 4 adet ekleyebilirsiniz.",
};

let initialForm = {
  adsoyad: "",
  boyut: "",
  malzeme: [],
  hamur: "",
  text: "",
};

const OrderPage = ({setOrderData}) => {
  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const [fiyat, setFiyat] = useState(100);

  const history = useHistory();

  useEffect(() => {
    
    const adsoyad = form.adsoyad.trim().length > 3;
    const hamur = form.hamur !== "--Hamur Kalınlığı--" && form.hamur !== "";
    const malzeme = form.malzeme.length >= 4 && form.malzeme.length <= 10;

    setIsValid(adsoyad && hamur && malzeme);
  }, [form]);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    try {
    const response = await axios.post(
      "https://reqres.in/api/pizza",
      {
        adsoyad: form.adsoyad,
        boyut: form.boyut,
        hamur: form.hamur,
        malzeme: form.malzeme,
        text: form.text,
        fiyat: fiyat,
      },
      {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      }
    );
    setOrderData(response.data);
    console.log("API RESPONSE:", response.data);
    history.push("/success");
  } catch (error) {
    console.error("POST HATASI:", error);
  }
  };

  const handleOrderChange = (e) => {
    let { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "malzeme") {
      setForm((prev) => {
        const nextMalzeme = checked
          ? [...prev.malzeme, value]
          : prev.malzeme.filter((v) => v !== value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          malzeme: nextMalzeme.length < 4 || nextMalzeme.length > 10,
        }));
        setFiyat((prevFiyat) => (checked ? prevFiyat + 5 : prevFiyat - 5));
        return {
          ...prev,
          malzeme: nextMalzeme,
        };
      });
      return;
    }
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "adsoyad") {
      if (value.length > 3) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "hamur") {
      if (value !== "--Hamur Kalınlığı--") {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  return (
    <>
      <Header />
      <Title />
      <PizzaForm
        errorMsg={errorMsg}
        errors={errors}
        handleOrderChange={handleOrderChange}
      />
      <Notes handleOrderChange={handleOrderChange} />
      <Footer handleOrderSubmit={handleOrderSubmit} isValid={isValid} fiyat={fiyat}/>
    </>
  );
};

export default OrderPage;
