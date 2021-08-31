import React, { useEffect, useState } from "react";
import classes from "./medical.module.css";
import Card from "../../../Components/card/card/card";
import axios from "axios";
import Spinner from "../../../Components/Ui/spinner/spinner";
const Medical = (props) => {
  const cards = [
    {
      src: "",
      name: "إلياس جان إرتين",
      section: "الطب البشرى - قسم عام",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1626",
    },
    {
      src: "",
      name: "صبحي إسماعيل سكيك",
      section: "الطب البشرى - قسم عام",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1604",
    },
    {
      src: "",
      name: "إلياس جان إرتين",
      section: "عصمت عبد الرحمن أبو عساكر",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=1619",
    },
    {
      src: "",
      name: "محمد رياض زغبر",
      section: "الطب البشرى - قسم عام",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=13121",
    },
    {
      src: "",
      name: "هاني أحمد اللأنقر",
      section: "الطب البشرى - قسم عام",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=13230",
    },
    {
      src: "",
      name: "داليا طلعت الوحيدي",
      section: "الطب البشرى - قسم عام",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=13043",
    },
  ];

  const [fetchedCards, setFetchedCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://rate-app-e4c05-default-rtdb.firebaseio.com/Cards3.json")
      .then((res) => {
        console.log("[Res.data]: ", res.data);
        const arr = [];
        for (let key in res.data) {
          arr.push(res.data[key]);
        }
        setFetchedCards(...arr);
        setLoading(false);
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
                likes={elem.likes}
                dislikes={elem.dislikes}
                site={elem.site}
                id={index}
                db="Cards3/-Mi5Mi32ixOm_5l-ONpA"
              />
            </div>
          );
        })}
      </div>
    );
  }

  return <div>{insideCards}</div>;
};

export default Medical;
