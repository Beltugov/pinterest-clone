import React, { useState } from "react";
import "./Title.scss";
import Modal from "../../container/Modal/Modal";
import { ModalType } from "../../types/modal";
import MyButton from "../../components/MyButton/MyButton";
import Logo from "../../assets/Logo.png";
import Fullpage from "../../components/Fullpage/Fullpage";
import Carousel from "../../container/Carousel/Carousel";
import din1 from "../../assets/title/din2.jpg";
import din2 from "../../assets/title/din3.jpg";
import din3 from "../../assets/title/din4.jpg";
import din4 from "../../assets/title/din5.jpg";
import decor1 from "../../assets/title/decor2.jpg";
import decor2 from "../../assets/title/decor3.jpg";
import decor3 from "../../assets/title/decor4.jpg";
import decor4 from "../../assets/title/decor5.jpg";
import search from "../../assets/search.svg";

const Title = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>("registration");

  return (
    <div className="title-page">
      <div className="title-page__main">
        <Fullpage transition={0.8}>
          <section className="section-1 section">
            <div className="section-1-header">
              <div className="section-1-header__logo">
                <img src={Logo} alt="Logo" width={30} />
                <span className="site-name">Pinterest</span>
              </div>
              <div className="section-1-header__auth-btn">
                <MyButton
                  className="simple-btn red"
                  onClick={() => {
                    setModalActive(true);
                    setModalType("login");
                  }}
                >
                  Войти
                </MyButton>
                <MyButton
                  className="simple-btn grey"
                  onClick={() => {
                    setModalActive(true);
                    setModalType("registration");
                  }}
                >
                  Регистрация
                </MyButton>
              </div>
            </div>
            <Carousel />
          </section>
          <section className="section-2 section">
            <div className="block">
              <div className="block-image" onClick={() => setModalActive(true)}>
                <div className="block-image__text">
                  <img src={search} alt="search" width={24} /> простые блюда на
                  ужин
                </div>
                <div className="block-image__item">
                  <img src={din1} alt="img" />
                </div>
                <div className="block-image__item">
                  <img src={din2} alt="img" />
                </div>
                <div className="block-image__item">
                  <img src={din3} alt="img" />
                </div>
                <div className="block-image__item">
                  <img src={din4} alt="img" />
                </div>
              </div>
              <div className="block-text">
                <h1 className="block-text__title">Найдите идею</h1>
                <p className="block-text__content">
                  Что еще вы хотите опробовать? Придумайте запрос на
                  интересующую тему, например «простые блюда на ужин», и
                  просмотрите результаты.
                </p>
                <MyButton
                  className={"simple-btn block-text__btn"}
                  onClick={() => setModalActive(true)}
                >
                  Посмотреть
                </MyButton>
              </div>
            </div>
          </section>
          <section className="section-3 section">
            <div className="block">
              <div className="block-text">
                <h1 className="block-text__title">
                  Сохраняйте понравившиеся идеи
                </h1>
                <p className="block-text__content">
                  Сохраняйте понравившиеся идеи, чтобы вернуться к ним в
                  будущем.
                </p>
                <MyButton
                  className={"simple-btn block-text__btn"}
                  onClick={() => setModalActive(true)}
                >
                  Посмотреть
                </MyButton>
              </div>
              <div className="block-image" onClick={() => setModalActive(true)}>
                <div className="block-image__text">
                  <img src={search} alt="search" width={24} /> идеи интерьера
                </div>
                <div className="block-image__item">
                  <img src={decor1} alt="img" />
                </div>
                <div className="block-image__item">
                  <img src={decor2} alt="img" />
                </div>
                <div className="block-image__item">
                  <img src={decor3} alt="img" />
                </div>
                <div className="block-image__item">
                  <img src={decor4} alt="img" />
                </div>
              </div>
            </div>
          </section>
          <section className="section-4 section">
            <div className="block">
              <div className="block-text">
                <h1 className="block-text__title">
                  Зарегистрируйтесь, чтобы находить больше идей
                </h1>
              </div>
              <div className="block-modal">
                <Modal
                  type={modalType}
                  setModalActive={setModalActive}
                  setType={setModalType}
                />
              </div>
            </div>
          </section>
        </Fullpage>
      </div>
      {modalActive && (
        <Modal
          type={modalType}
          setModalActive={setModalActive}
          setType={setModalType}
        />
      )}
    </div>
  );
};

export default Title;
