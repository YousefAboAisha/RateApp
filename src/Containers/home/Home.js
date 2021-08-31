import React from "react";
import classes from "./Home.module.css";
import PersonalCard from "../../Components/card/personalCard/personalCard";
import ContactForm from "../../Components/contactForm/contactForm";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import img1 from "../../Photos/yousef.jpg";
import img2 from "../../Photos/mohammed.jpg";
import img3 from "../../Photos/Abood.jpg";

const Home = () => {
  const cards = [
    {
      name: "يوسف",
      title: "Web Developer",
      src: img1,
    },
    {
      name: "عبد الرّحمن",
      title: "UI/UX Designer",
      src: img3,
    },
    {
      name: "محمد ",
      title: "Mobile Developer",
      src: img2,
    },
  ];

  return (
    <div className={classes.wrapper}>
      <div className={classes.img}>
        <div>
          <span>
            مرحباً بكم في نظام التقييم الالكتروني في جامعة الأزهر- غزة
          </span>
          <Nav.Link as={NavLink} to="/review/engineering">
            <i className="fas fa-arrow-right"></i>انتقل إلى صفحة التقييم
          </Nav.Link>
        </div>
      </div>

      <div className={classes.section1}>
        <h2
          className={classes.heading}
          style={{ color: "white", marginRight: "20px" }}
        >
          خدماتنا :{" "}
        </h2>
        <div className={classes.services}>
          <div className={classes.box}>
            <i className="fas fa-code-branch"></i>
            <p>
              عليه لعمل كتاب عينة. لقد نجت ليس فقط خمسة قرون ، ولكن أيضًا القفزة
              لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.
              عليه لعمل كتاب عينة. لقد نجت ليس فقط خمسة قرون ، ولكن أيضًا القفزة
              لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.
            </p>
          </div>
          <div className={classes.box}>
            <i className="fab fa-react"></i>{" "}
            <p>
              عليه لعمل كتاب عينة. لقد نجت ليس فقط خمسة قرون ، ولكن أيضًا القفزة
              لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.
              عليه لعمل كتاب عينة. لقد نجت ليس فقط خمسة قرون ، ولكن أيضًا القفزة
              لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.
            </p>
          </div>
          <div className={classes.box}>
            <i className="fas fa-user-shield"></i>{" "}
            <p>
              عليه لعمل كتاب عينة. لقد نجت ليس فقط خمسة قرون ، ولكن أيضًا القفزة
              لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.
              عليه لعمل كتاب عينة. لقد نجت ليس فقط خمسة قرون ، ولكن أيضًا القفزة
              لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.
            </p>
          </div>
        </div>
      </div>

      <div className={classes.section2}>
        <h2 className={classes.heading}>طاقم الفريق </h2>
        <div className={classes.cardsWrapper}>
          <div className={classes.section2}>
            <h3 style={{ fontFamily: '"Cairo", "sans-serif"' }}>
              نبذة مختصرة:
            </h3>
            <p>
              لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.
              كان Lorem Ipsum هو النص الوهمي القياسي في الصناعة منذ القرن الخامس
              عشر الميلادي ، عندما أخذت طابعة غير معروفة لوحًا من النوع وتدافعت
              عليه لعمل كتاب عينة. لقد نجت ليس فقط خمسة قرون ، ولكن أيضًا القفزة
              في التنضيد الإلكتروني ، وظلت دون تغيير جوهري. تم نشره في الستينيات
              من القرن الماضي مع إصدار أوراق Letraset التي تحتوي على مقاطع Lorem
              Ipsum ، ومؤخرًا مع برامج النشر المكتبي مثل Aldus PageMaker بما في
              ذلك إصدارات Lorem Ipsum. لوريم إيبسوم هو ببساطة نص شكلي يستخدم في
              صناعة الطباعة والتنضيد. كان Lorem Ipsum هو النص الوهمي القياسي في
              الصناعة منذ القرن الخامس عشر الميلادي ، عندما أخذت طابعة غير
              معروفة لوحًا من النوع وتدافعت عليه لعمل كتاب عينة. لقد نجت ليس فقط
              خمسة قرون ، ولكن أيضًا القفزة في التنضيد الإلكتروني ، وظلت دون
              تغيير جوهري. تم نشره في الستينيات من القرن الماضي مع إصدار أوراق
              Letraset التي تحتوي على مقاطع Lorem Ipsum ، ومؤخرًا مع برامج النشر
              المكتبي مثل Aldus PageMaker بما في ذلك إصدارات Lorem Ipsum.
            </p>
          </div>
          <div className={classes.cards}>
            {cards.map((card, index) => {
              return (
                <PersonalCard
                  name={card.name}
                  title={card.title}
                  key={index}
                  img={card.src}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className={classes.section3}>
        <h2 className={classes.heading}>تواصل معنا </h2>
        <ContactForm />
      </div>

      <div className={classes.section4}></div>
    </div>
  );
};

export default Home;
