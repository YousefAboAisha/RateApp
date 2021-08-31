import React, { useEffect, useState } from "react";
import classes from "./pharmacy.module.css";
import Card from "../../../Components/card/card/card";
import axios from "axios";
import Spinner from "../../../Components/Ui/spinner/spinner";

const Pharmacy = () => {
  const cards = [
    {
      src: "",
      name: "رياض كمال مبروك القدرة",
      section: "الصيدلانيات والصيدلة الصناعية",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1120",
    },
    {
      src: "",
      name: "عصام محمد حسين أبو شمالة",
      section: "الصيدلانيات والصيدلة الصناعية",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1153",
    },
    {
      src: "",
      name: " محمد حسين محمود طالب",
      section: "الصيدلانيات والصيدلة الصناعية",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1150",
    },
    {
      src: "",
      name: "هند محمد علي أبو عمارة",
      section: "الصيدلانيات والصيدلة الصناعية",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1127",
    },
    {
      src: "",
      name: "أسامة محمد سليمان أبو محسن",
      section: "الكيمياء الصيدلانية والعقاقير",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1138",
    },
    {
      src: "",
      name: "إيهاب مصطفى عبد الحميد المصري",
      section: "الكيمياء الصيدلانية والعقاقير",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1113",
    },
    {
      src: "",
      name: "جهاد حسن عرقات أحمد",
      section: "الكيمياء الصيدلانية والعقاقير",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1109",
    },
    {
      src: "",
      name: "كنعان محمود عبد الله الوحيدي",
      section: "الكيمياء الصيدلانية والعقاقير",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1119",
    },
    {
      src: "",
      name: "مازن عوني يوسف السقا",
      section: "الكيمياء الصيدلانية والعقاقير",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1103",
    },
    {
      src: "",
      name: "محمد عادل صالح الغصين",
      section: "الكيمياء الصيدلانية والعقاقير",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1128",
    },
    {
      src: "",
      name: "مي عبد الرحمن العبد رمضان",
      section: "الكيمياء الصيدلانية والعقاقير",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1117",
    },
    {
      src: "",
      name: "جميل علي جميل مهنا",
      section: "علم الادوية والعلوم الطبية",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=8112",
    },
    {
      src: "",
      name: "محمد قاسم سعيد شبير",
      section: "علم الادوية والعلوم الطبية",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1111",
    },
    {
      src: "",
      name: "محمد محمود عبد الرحمن طه",
      section: "علم الادوية والعلوم الطبية",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1151",
    },
    {
      src: "",
      name: "محمود حسين محمود طالب",
      section: "علم الادوية والعلوم الطبية",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1107",
    },
    {
      src: "",
      name: "هلا زكريا ابراهيم الاغا",
      section: "علم الادوية والعلوم الطبية",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1110",
    },
  ];

  const [fetchedCards, setFetchedCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://rate-app-e4c05-default-rtdb.firebaseio.com/Cards2.json")
      .then((res) => {
        console.log("[Res.data]: ", res.data);
        const arr = [];
        for (let key in res.data) {
          arr.push(res.data[key]);
        }
        setFetchedCards(...arr);
        setLoading(false);
        console.log("[...arr]: ", ...arr);
        console.log("[FetchedCards]: ", fetchedCards);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [fetchedCards]);

  let insideCards = (
    <div className={classes.wrapper}>
      <Spinner />
    </div>
  );

  console.log("[Fetched Cards]: ", fetchedCards);

  if (!loading) {
    insideCards = (
      <div className={classes.wrapper}>
        {fetchedCards.map((elem, index) => {
          return (
            <div className={classes.card} key={index}>
              <Card
                img={elem.src}
                name={elem.name}
                section={elem.section}
                info={elem.info}
                likes={elem.likes}
                dislikes={elem.dislikes}
                site={elem.site}
                id={index}
                db="Cards2/-Mi1bwhCGl0CxYcImGGv"
              />
            </div>
          );
        })}
      </div>
    );
  }

  return <div>{insideCards}</div>;
};

export default Pharmacy;
