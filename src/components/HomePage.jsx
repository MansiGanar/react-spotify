import React, { Component } from "react";
import booksimg from "../assets/booksimg.jpg";
import { Card, Row, Col } from "react-bootstrap";

class HomePage extends Component {
  state = {
    data: null,
  };

  fetchMusic = async () => {
    let url =
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

    try {
      const response = await fetch(url);
      console.log("the fetch is done here");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({
          data: data,
        });
      } else {
      }
    } catch (error) {
      console.log(error);
      console.log("outside the try block");
    }
  };
  componentDidMount = async () => {
    this.fetchMusic();
    console.log("from inside the component did mount");
    // const getdata = async () => {
    //   let mydat = await this.fetchMusic();
    //   this.setState({
    //     data: mydat,
    //   });
    //   console.log(this.state.data);
    // };
    // this.getdata();
  };

  render() {
    return (
      <>
        <h3 className="col-11">Recently played</h3>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={booksimg} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

// const HomePage = () => {
//   return (
//     <>
//       {/* recently played part */}
//       <div className="recentlyplayed text-white">
//         <div className="d-flex ml-2 mt-4 row">
//           <h3 className="col-11">Recently played</h3>
//           <h5 className="col-1 d-none">SEE ALL</h5>
//         </div>

//         <div className="d-flex justify-content-between ml-4">
//           <div className="card music-card2">
//             <img
//               className="img-fluid align-self-center mt-3 pl-3 pr-3"
//               src="./assets/liked-songs-300.png"
//               alt="Card image cap"
//             />
//             <div className="card-body">
//               <h6>Liked Songs</h6>
//               <p className="card-text">400 songs</p>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

export default HomePage;
