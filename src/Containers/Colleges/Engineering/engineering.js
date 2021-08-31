import React, { useEffect, useState } from "react";
import classes from "./engineering.module.css";
import Card from "../../../Components/card/card/card";
import axios from "axios";
import Spinner from "../../../Components/Ui/spinner/spinner";
const Engineering = () => {
  const cards = [
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "إيهاب صلاح الدين زقوت",
      section: "تكنولوجيا المعلومات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2603",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "سامي سليم أبو ناصر",
      section: "تكنولوجيا المعلومات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2602",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "إياد سليم البيوك",
      section: "تكنولوجيا المعلومات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2319",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "أحمد يحيى محمود",
      section: "تكنولوجيا المعلومات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2317",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "عادل عزمي أحمد",
      section: "تكنولوجيا المعلومات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2611",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "عبد الباسط رجب المصري",
      section: "تكنولوجيا المعلومات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2320",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "ناصر مصباح المصري",
      section: "تكنولوجيا المعلومات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2412",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "يوسف شفيق ابو سلطان",
      section: "تكنولوجيا المعلومات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2630",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "معمر جميل اليازجي",
      section: "هندسة البرمجيات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2512",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "يوسف نبيل أبو شعبان",
      section: "هندسة البرمجيات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2624",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "عبد الله موسى ريحان",
      section: "هندسة البرمجيات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2416",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "ماهر جبر شامية",
      section: "هندسة البرمجيات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2413",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "مصعب مصطفى عياد",
      section: "هندسة البرمجيات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2603",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "إيمان سعد عاشور",
      section: "هندسة الطاقة المتجددة وهندسة الحاسوب والاتصالات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=13290",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "تامر كمال أبو فول",
      section: "هندسة الطاقة المتجددة وهندسة الحاسوب والاتصالات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2640",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "علي سعيد عوض",
      section: "هندسة الطاقة المتجددة وهندسة الحاسوب والاتصالات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2612",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "فوزي عبد العزيز أبو جراد",
      section: "هندسة الطاقة المتجددة وهندسة الحاسوب والاتصالات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2904",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "مصطفى حسن أبو نصر",
      section: "هندسة الطاقة المتجددة وهندسة الحاسوب والاتصالات",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2717",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "أحمد عبد الرؤوف عيسى",
      section: "هندسة الميكاترونكس وهندسة المعدات الطبية",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2719",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "أيمن محمد عياد",
      section: "هندسة الميكاترونكس وهندسة المعدات الطبية",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2903",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "مازن رياض أبو عمرو",
      section: "هندسة الميكاترونكس والمعدات الطبية",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2718",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "محمد عمر عقل",
      section: "هندسة الميكاترونكس والمعدات الطبية",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=8833",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__480.jpg",
      name: "نشأت رمضان نعيم",
      section: "هندسة الميكاترونكس والمعدات الطبية",
      info: "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
      likes: 0,
      dislikes: 0,
      site: "http://www.alazhar.edu.ps/per/intro.aspx?id_no=2902",
    },
  ];

  const [fetchedCards, setFetchedCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://rate-app-e4c05-default-rtdb.firebaseio.com/Cards.json")
      .then((res) => {
        // console.log(res.data);
        const arr = [];
        for (let key in res.data) {
          arr.push(res.data[key]);
        }
        setFetchedCards(...arr);
        // console.log(...arr);
        // console.log(fetchedCards);
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
                db="Cards/-MhOP_ogrIA34kPjyzWj"
              />
            </div>
          );
        })}
      </div>
    );
  }

  return <div>{insideCards}</div>;
};

export default Engineering;
