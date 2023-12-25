'use client'

import Link from 'next/link';
// import Image from "next/image";
import * as Style from "./index.styled";
// import img from '../../../../public/img.png'
// import Link from "next/link";
import bg from '../../../../public/hero-bg.jpg'

const PreviewBox = () => {
    return (
        <>
        <Style.Hero>
            <Style.BG src='https://codewithsadee.github.io/filmlane/assets/images/hero-bg.jpg' alt='bg'/>
        <Style.Container>

          <Style.HeroContent>

            <Style.HeroSubtitle>Filmlane</Style.HeroSubtitle>

            <Style.HeroTitle>
              Unlimited <Style.Strong>Movie</Style.Strong>, TVs Shows, & More.
            </Style.HeroTitle>

            <Style.MetaWrapper className="meta-wrapper">

              <div className="badge-wrapper">
                <div className="badge badge-fill">PG 18</div>

                <div className="badge badge-outline">HD</div>
              </div>

              <div className="ganre-wrapper">
                <a href="#">Romance,</a>

                <a href="#">Drama</a>
              </div>

              <div className="date-time">

                <div>
                  {/* <ion-icon name="calendar-outline"></ion-icon> */}

                  <time dateTime="2022">2022</time>
                </div>

                <div>
                  {/* <ion-icon name="time-outline"></ion-icon> */}

                  <time dateTime="PT128M">128 min</time>
                </div>

              </div>

            </Style.MetaWrapper>

            <Style.Btn href='/films'>
              {/* <ion-icon name="play"></ion-icon> */}

              <span>Watch now</span>
            </Style.Btn>

          </Style.HeroContent>

        </Style.Container>
      </Style.Hero>
           
        </>
    )
}

export default PreviewBox;