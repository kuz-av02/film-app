import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { VscStarFull } from "react-icons/vsc";
import * as Style from "./index.styled";
const Film: React.FC<MovieList> = (props) => {
  return (
    <Style.MovieCard>

      <Link href={`/films/${props.id}`}>
        <Style.Figure>
          <Style.Img src={props.medium_cover_image} alt="The Northman movie poster"/>
        </Style.Figure>
      </Link>

      <Style.TitleWrapper>
        <Link href={`/films/${props.id}`}>
          <Style.CardTitle>{props.title}</Style.CardTitle>
        </Link>

        <Style.TitleWrapperTime>{props.year}</Style.TitleWrapperTime>
      </Style.TitleWrapper>

      <Style.CardMeta >
        <Style.Badge>HD</Style.Badge>

        <Style.Duration>
          <VscStarFull/>

          <Style.TitleWrapperTime>{props.runtime}</Style.TitleWrapperTime>
        </Style.Duration>

        <Style.Rating>
          <VscStarFull/>

          <data>8.5</data>
        </Style.Rating>
      </Style.CardMeta>

    </Style.MovieCard>
  );
};

export default Film;
