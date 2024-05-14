// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import background from "../images/home-background.png";
// import ImgSilder from "./ImgSilder";
// import Viewer from "./Viewer";
// import NewDisney from "./NewDisney";
// import Originals from "./Originals";
// import Recommends from "./Recommends";
// import Trending from "./Trending";

// import { useDispatch, useSelector } from "react-redux";
// import db from "../firebase"; // Import db từ firebase
// import { setMovies } from "../features/movie/movieSlice";
// import { selectUserName } from "../features/user/userSlice";
// import {
//   doc,
//   onSnapshot,
//   updateDoc,
//   setDoc,
//   deleteDoc,
//   query,
//   where,
//   orderBy,
//   limit,
//   collection,
// } from "firebase/firestore";
// function Home(props) {
//   const dispatch = useDispatch();
//   const userName = useSelector(selectUserName);
//   let recommends = [];
//   let newDisneys = [];
//   let originals = [];
//   let trending = [];

//   useEffect(() => {
//     onSnapshot(collection(db, "movies"), (snapshot) => {
//       snapshot.docs.map((doc) => {
//         console.log(recommends);
//         switch (doc.data().type) {
//           case "recommend":
//             recommends = [...recommends, { id: doc.id, ...doc.data() }];
//             break;

//           case "new":
//             newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
//             break;

//           case "original":
//             originals = [...originals, { id: doc.id, ...doc.data() }];
//             break;

//           case "trending":
//             trending = [...trending, { id: doc.id, ...doc.data() }];
//             break;
//         }
//       });

//       dispatch(
//         setMovies({
//           recommend: recommends,
//           newDisney: newDisneys,
//           original: originals,
//           trending: trending,
//         })
//       );
//     });
//   }, [userName]);

//   return (
//     <Container>
//       <ImgSilder />
//       <Viewer />
//       <Recommends />
//       <NewDisney />
//       <Originals />
//       <Trending />
//     </Container>
//   );
// }

// const Container = styled.main`
//   position: relative;
//   min-height: calc(100vh - 250px);
//   overflow-x: hidden;
//   display: block;
//   top: 72px;
//   padding: 0 calc(3.5vw + 5px);

//   &:after {
//     background: url(${background}) center center / cover no-repeat fixed;
//     content: "";
//     position: absolute;
//     inset: 0px;
//     opacity: 1;
//     z-index: -1;
//   }
// `;

// export default Home;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background from "../images/home-background.png";
import ImgSilder from "./ImgSilder";
import Viewer from "./Viewer";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";

import { useDispatch, useSelector } from "react-redux";
import db from "../firebase"; // Import db từ firebase
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, onSnapshot } from "firebase/firestore";

function Home(props) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "movies"), (snapshot) => {
      let recommends = [];
      let newDisneys = [];
      let originals = [];
      let trending = [];

      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });

    return () => {
      unsub(); // Hủy đăng ký listener khi component unmount
    };
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSilder />
      <Viewer />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url(${background}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
