import { createGlobalStyle } from 'styled-components';
import Component from "./Components";
import ShowPhoto from "./ShowPhoto";
import Photo from "../src/img/photo.JPG";


const GlobalStyle = createGlobalStyle`
   body{
      background-color: #c6c6c6;
   }

   .App {
   width: 900px;
   min-height:500px;
   font-family: sans-serif;
   text-align: left;
   display: grid;
   grid-template-columns: 3fr 1fr;
   margin:50px auto;
   box-shadow: 2px 2px 12px 2px #000;
   padding:5px;
   background-color: #fff;
   }

   .Img {
   width: 200px;
   height: 200px;
   }

   img {
   width: 100%;
   }
`;

function App() {
   return (
      <div className="App">
         <GlobalStyle />
         <div>
            <Component text="П.І.Б.: " value="Ліра Артем Володимирович" />
            <Component text="телефон: " value="+38(097)914-94-44" />
            <Component text="email: " value="9149444@gmail.com" />
            <Component text="місто проживання: " value="Запоріжжя" />
            <Component
               text="навички: "
               value="Займаюсь вивченням HTML, CSS, JavaScript, React"
            />
         </div>
         <ShowPhoto photo={Photo} className="Img" />
      </div>
   );
}

export default App;
