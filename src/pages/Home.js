import React, { useState } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import Banner from "../components/Banner";
import CustomAppBar from "../components/CustomAppbar";
import MusicModal from "../components/MusicModal";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Dream Shaper
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [
  {
    id: 1,
    title: "시든 꽃에 물을 주듯",
    content: "존박[원곡:박혜원]",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzETJQovAC77MU4DJBsMCPp12fZZDyFz24KA&usqp=CAU",
  },
  {
    id: 2,
    title: "사랑했나봐",
    content: "츄[원곡:윤도현]",
    imageUrl:
      "https://file.mk.co.kr/meet/neds/2022/08/image_readtop_2022_715474_16603105725136714.jpg",
  },
  {
    id: 3,
    title: "야생화",
    content: "성시경[원곡:박효신]",
    imageUrl:
      "https://pbs.twimg.com/media/DM-dQWDVwAELilQ?format=jpg&name=large",
  },
  {
    id: 4,
    title: "헤어지자 말해요",
    content: "박효신[원곡:박재정]",
    imageUrl:
      "https://image.newsis.com/2022/09/23/NISI20220923_0001092329_web.jpg",
  },
  {
    id: 5,
    title: "홍연",
    content: "임재범[원곡:안예은]",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/ko/thumb/a/a6/%EC%9E%84%EC%9E%AC%EB%B2%94_-_Desire_To_Fly.jpg/220px-%EC%9E%84%EC%9E%AC%EB%B2%94_-_Desire_To_Fly.jpg",
  },
  {
    id: 6,
    title: "후라이의 꿈",
    content: "윈터[원곡:악동뮤지션]",
    imageUrl:
      "https://i.namu.wiki/i/NsjIx65YXSY8UCwx-H3CGIFlNo0yCq89f7gds2DMCW-vceM-iLnBl4bNd2S6RSlshkHLoKrvh8GSTQb6mi1CGA.gif",
  },
  {
    id: 7,
    title: "미친 소리",
    content: "아이유[원곡:이예준]",
    imageUrl:
      "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_org.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90",
  },
  {
    id: 8,
    title: "Hype Boy",
    content: "BTS[원곡:NewJeans]",
    imageUrl:
      "https://phinf.wevpstatic.net/MjAyMzA2MDhfMjQg/MDAxNjg2MTk2MTYyODM2.EgV83AZbuwc7Qjrr4vePZrzVsTe8Jfgwc0-zNva7VGwg.cv6E8v5v6iiUMFRvs7qLmSS_DS4sreD99BKjeJ20CQkg.JPEG/36cd6bce-48f4-4a58-bb63-3781ca79669a.jpeg?type=w670",
  },
  {
    id: 9,
    title: "비상",
    content: "이하이[원곡:임재범]",
    imageUrl: "https://img.marieclairekorea.com/2020/08/mck_5f46ddb84ea9e.jpg",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태를 관리
  const [currentMusic, setCurrentMusic] = useState(null); // 현재 재생 중인 음악 정보를 저장

  const openModal = (music) => {
    setCurrentMusic(music); // 현재 재생 중인 음악 정보 설정
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentMusic(null); // 모달 닫을 때 현재 음악 정보 초기화
    setIsModalOpen(false);
  };

  return (
    <>
      <CustomAppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
          }}
        >
          <Container maxWidth="lg">
            <Banner />
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Typography gutterBottom variant="h4" component="h2">
            CoverMusic List
          </Typography>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={card.imageUrl}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5 overline"
                      component="h2"
                    >
                      {card.title}
                    </Typography>
                    <Typography>{card.content}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => openModal(card)}>
                      Play
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* 모달 컴포넌트 */}
        <MusicModal open={isModalOpen} handleClose={closeModal} currentMusic={currentMusic} />
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom></Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </>
  );
}
