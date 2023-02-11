import React from "react";
import Dashabord from "../../components/Dashabord";
import Header from "../../components/Header";

import "./styles.css";
import Grafico from './../../components/GraficoColumn/index';
import WordMap from "../../components/WordMap";

export default function Home() {
    return(
      <>
        <div className="body-home">
          <Header/>
          <Grafico/>
          <Dashabord/>
          <WordMap/>
        </div>
      </>
    )
}
