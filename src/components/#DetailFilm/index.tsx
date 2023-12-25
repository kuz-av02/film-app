import * as Style from "./index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscDesktopDownload, VscStarFull } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";

import { AiTwotoneLike } from "react-icons/ai";

import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
import Loader from "../Loader";
import Comments from "./Comments";
const Details = () => {
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || ""
  );

  if (isLoading) {
    return <Loader />;
  }

  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });

  return (
    <Style.Details>
      <Style.BackgroundImage
        src={filmRetrieve?.data.movie.background_image_original}
      ></Style.BackgroundImage>
      <Style.Content>
        <Style.ContentTitle>
          <Link href={"/"}>Films / {filmRetrieve?.data.movie.title}</Link>
        </Style.ContentTitle>

        <Style.Data>
          <Style.Image>
            <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image}
            ></Style.Img>
            
          </Style.Image>

          <Style.Description>
            <Style.Title>{filmRetrieve?.data.movie.title + " " + filmRetrieve?.data.movie.year + " " + filmRetrieve?.data.movie.language}</Style.Title>
            <Style.Genres>{genresList}</Style.Genres>

            
            
            <Style.Title>Description</Style.Title>

            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full}
            </Style.DescriptionFull>
            <Style.Statistic>
              <StatisticItem
                icon={<VscStarFull />}
                text={filmRetrieve?.data.movie.rating}
              ></StatisticItem>
              <StatisticItem
                icon={<AiTwotoneLike />}
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
              <StatisticItem
                icon={<BiTimeFive />}
                text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
              <StatisticItem
                icon={<VscDesktopDownload />}
                text={filmRetrieve?.data.movie.download_count}
              ></StatisticItem>
            </Style.Statistic>
          </Style.Description>
          <Style.Buttons>
            <Style.Button>
              <Style.DownloadButton href={filmRetrieve?.data.movie.url}>
                Download
              </Style.DownloadButton>
            </Style.Button>
            <Style.Button>
              <Style.WatchButton href={filmRetrieve?.data.movie.url}>
                Watch Now
              </Style.WatchButton>
            </Style.Button>
          </Style.Buttons>
        </Style.Data>

    

        {filmRetrieve != undefined && (
            <>
              <Style.CommentsTitle>
                Comments
              </Style.CommentsTitle>
              <Comments PersonKey={filmRetrieve.data.movie.id}/>
            </>

        )}
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
