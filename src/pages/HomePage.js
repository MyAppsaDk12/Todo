import React from "react";
import Header from "../components/Header";

export default function HomePage() {
    const link = {
        home: '/',
        todo: '/todo'
    }
    return <>
    
    <Header title={'Главная'}  link={link}/>
    <div className="content">
      <h1>Это мое тестовое задание</h1>
      <h2>Изначально мы находимся на главной странице сайта </h2>
      <h2>Используйте шапку сайта для перемещения по страничкам</h2>
      <h3>С уважением React-Developer Агайдар Диас</h3>
      </div>
    </>;
}