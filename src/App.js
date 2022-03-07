
import './App.css';
import { HandleName, Photo, Profile } from './profile/Profile';
import img from './loup.jpg'
import PropTypes from "prop-types";

function App() {
  return (
    <div className="App">
        <>
        <HandleName />
        </>
      <div className="bigbox">
          <Profile  /> 
          <Photo>  <img src={img}  className="img"/> </Photo>
      </div>

    </div>
  );
}

Profile.PropTypes=PropTypes.string 


export default App;
