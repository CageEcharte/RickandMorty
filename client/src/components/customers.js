import React, { Component } from 'react';
import './customers.css';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Radium from 'radium';
import EpisodeOne from './one.js'
import EpisodeTwo from './routes.js'
import EpisodeThree from './three.js'
import EpisodeFour from './four.js'
import EpisodeFive from './five.js'
import EpisodeSix from './six.js'
import EpisodeSeven from './seven.js'
import EpisodeEight from './eight.js'
import EpisodeNine from './nine.js'
import EpisodeTen from './ten.js'
import EpisodeEleven from './eleven.js'
import EpisodeTwelve from './twelve.js'
import EpisodeThirteen from './thirteen.js'
import EpisodeFourteen from './fourteen.js'
import EpisodeFifteen from './fifteen.js'
import EpisodeSixteen from './sixteen.js'
import EpisodeSeventeen from './seventeen.js'
import EpisodeEighteen from './eighteen.js'
import EpisodeNineteen from './nineteen.js'
import EpisodeTwenty from './twenty.js'
import EpisodetwentyOne from './twentyOne.js'
import EpisodetwentyTwo from './twentyTwo.js'
import EpisodetwentyThree from './twentyThree.js'
import EpisodetwentyFour from './twentyFour.js'
import EpisodetwentyFive from './twentyFive.js'
import EpisodetwentySix from './twentySix.js'
import EpisodetwentySeven from './twentySeven.js'
import EpisodetwentyEight from './twentyEight.js'
import EpisodetwentyNine from './twentyNine.js'
import Episodethirty from './thirty.js'
import EpisodethirtyOne from './thirtyOne.js'
import axios from 'axios';



class Customers extends Component {


    constructor(props) {
      super(props);

      this.state = {
        character: [],
        episodesTwo: [],
        loading: false,

      };
    }


async componentDidMount() {
  const firstRequest = await axios.get('https://rickandmortyapi.com/api/episode/');
  const secondRequest = await axios.get('https://rickandmortyapi.com/api/episode/?page=2');


  this.setState({
    character: firstRequest.data,
    episodesTwo: secondRequest.data,
  });
}




render() {

const {loading, character, episodesTwo} = this.state;


var el  = document.getElementsByClassName('changeTwo');

el.onclick = function() {
    console.log("YOO");
};



var names;
var namesTwo;
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
var ten;
var eleven;
var twelve;
var thirteen;
var fourteen;
var fifteen;
var sixteen;
var seventeen;
var eighteen;
var nineteen;
var twenty;
var twentyOne;
var twentyTwo;
var twentyThree;
var twentyFour;
var twentyFive;
var twentySix;
var twentySeven;
var twentyEight;
var twentyNine;
var thirty;
var thirtyOne;
var content = [ ];
var contentTwo = [ ];

if (loading) {
 return <p>Loading ... </p>;
}

if(character.results){
  for(var i = 0; i < character.results.length; i++){
    names = character.results[i].name;
    content.push(names);

  }
}

  if(episodesTwo.results){
    for(var j = 0; j < episodesTwo.results.length; j++){
      namesTwo = episodesTwo.results[j].name;
      contentTwo.push(namesTwo);
    }
  }
  console.log(episodesTwo.results);

  one = content[0];
  two = content[1];
  three = content[2];
  four = content[3];
  five = content[4];
  six = content[5];
  seven = content[6];
  eight = content[7];
  nine = content[8];
  ten = content[9];
  eleven = content[10];
  twelve = content[11];
  thirteen = content[12];
  fourteen = content[13];
  fifteen = content[14];
  sixteen = content[15];
  seventeen = content[16];
  eighteen = content[17];
  nineteen = content[18];
  twenty = content[19];
  twentyOne = contentTwo[0];
  twentyTwo = contentTwo[1];
  twentyThree = contentTwo[2];
  twentyFour = contentTwo[3];
  twentyFive = contentTwo[4];
  twentySix = contentTwo[5];
  twentySeven = contentTwo[6];
  twentyEight = contentTwo[7];
  twentyNine = contentTwo[8];
  thirty = contentTwo[9];
  thirtyOne = contentTwo[10];

console.log(content);

//uyou see what we did here. i got the epusodes now i need you to figure out how to make them clickable and then render
//the characters data

const BasicExample = () => (

  <Router>
    <div>
      <ul class="episodes">
      <li class="sodesTitle">
      <p> Episodes: </p>
      </li>

      <li class="geez" >
          1.) <Link className="change" to="/one"> {one}</Link>
        </li>
        <li class="geez">
       2.) <Link className="change" to="/two">{two}</Link>
     </li>
     <li class="geez">
       3.) <Link className="change" to="/three">{three}</Link>
     </li>
     <li class="geez">
       4.) <Link className="change" to="/four">{four}</Link>
     </li>
     <li class="geez">
      5.) <Link className="change" to="/five">{five}</Link>
     </li>
     <li class="geez">
      6.) <Link className="change" to="/six">{six}</Link>
     </li>
     <li class="geez">
       7.) <Link className="change" to="/seven">{seven}</Link>
     </li>
     <li class="geez">
      8.) <Link className="change" to="/eight">{eight}</Link>
     </li>
     <li class="geez">
      9.) <Link className="change" to="/nine">{nine}</Link>
     </li>
     <li class="geez">
      10.) <Link className="change" to="/ten">{ten}</Link>
     </li>
     <li class="geez">
      11.) <Link className="change" to="/eleven">{eleven}</Link>
     </li>
     <li class="geez">
      12.) <Link className="change" to="/twelve">{twelve}</Link>
     </li>
     <li class="geez">
      13.) <Link className="change" to="/thirteen">{thirteen}</Link>
     </li>
     <li class="geez">
      14.) <Link className="change" to="/fourteen">{fourteen}</Link>
     </li>
     <li class="geez">
      15.) <Link className="change" to="/fifteen">{fifteen}</Link>
     </li>
     <li class="geez">
      16.) <Link className="change" to="/sixteen">{sixteen}</Link>
     </li>
     <li class="geez">
      17.) <Link className="change" to="/seventeen">{seventeen}</Link>
     </li>
     <li class="geez">
      18.) <Link className="change" to="/eighteen">{eighteen}</Link>
     </li>
     <li class="geez">
      19.)  <Link className="change" to="/nineteen">{nineteen}</Link>
     </li>
     <li class="geez">
      20.) <Link className="change" to="/twenty">{twenty}</Link>
     </li>
     <li class="geez">
      21.) <Link className="change" to="/twentyone">{twentyOne}</Link>
     </li>
     <li class="geez">
      22.) <Link className="change" to="/twentytwo">{twentyTwo}</Link>
     </li>
     <li class="geez">
      23.) <Link className="change" to="/twentythree">{twentyThree}</Link>
     </li>
     <li class="geez">
      24.) <Link className="change" to="/twentyfour">{twentyFour}</Link>
     </li>
     <li class="geez">
      25.) <Link className="change" to="/twentyfive">{twentyFive}</Link>
     </li>
     <li class="geez">
      26.) <Link className="change" to="/twentysix">{twentySix}</Link>
     </li>
     <li class="geez">
      27.) <Link className="change" to="/twentyseven">{twentySeven}</Link>
     </li>
     <li class="geez">
      28.) <Link className="change" to="/twentyeight">{twentyEight}</Link>
     </li>
     <li class="geez">
      29.) <Link className="change" to="/twentynine">{twentyNine}</Link>
     </li>
     <li class="geez">
      30.) <Link className="change" to="/thirty">{thirty}</Link>
     </li>
     <li class="geez">
      31.) <Link className="change" to="/thirtyone">{thirtyOne}</Link>
     </li>


      </ul>
     <p class="man">
      <Route exact path="/" component={EpisodeOne} />
      </p>
      <p class="man">
      <Route exact path="/one" component={EpisodeOne} />
      </p>
      <p class="man">
      <Route exact path="/two" component={EpisodeTwo} />
      </p>
      <p class="man">
      <Route exact path="/three" component={EpisodeThree} />
      </p>
      <p class="man">
      <Route exact path="/four" component={EpisodeFour} />
      </p>
      <p class="man">
      <Route exact path="/five" component={EpisodeFive} />
      </p>
      <p class="man">
      <Route exact path="/six" component={EpisodeSix} />
      </p>
      <p class="man">
      <Route exact path="/seven" component={EpisodeSeven} />
      </p>
      <p class="man">
      <Route exact path="/eight" component={EpisodeEight} />
      </p>
      <p class="man">
      <Route exact path="/nine" component={EpisodeNine} />
      </p>
      <p class="man">
      <Route exact path="/ten" component={EpisodeTen} />
      </p>
      <p class="man">
      <Route exact path="/eleven" component={EpisodeEleven} />
      </p>
      <p class="man">
      <Route exact path="/twelve" component={EpisodeTwelve} />
      </p>
      <p class="man">
      <Route exact path="/thirteen" component={EpisodeThirteen} />
      </p>
      <p class="man">
      <Route exact path="/fourteen" component={EpisodeFourteen} />
      </p>
      <p class="man">
      <Route exact path="/fifteen" component={EpisodeFifteen} />
      </p>
      <p class="man">
      <Route exact path="/sixteen" component={EpisodeSixteen} />
      </p>
      <p class="man">
      <Route exact path="/seventeen" component={EpisodeSeventeen} />
      </p>
      <p class="man">
      <Route exact path="/seventeen" component={EpisodeSeventeen} />
      </p>
      <p class="man">
      <Route exact path="/eighteen" component={EpisodeEighteen} />
      </p>
      <p class="man">
      <Route exact path="/nineteen" component={EpisodeNineteen} />
      </p>
      <p class="man">
      <Route exact path="/twenty" component={EpisodeTwenty} />
      </p>
      <p class="man">
      <Route exact path="/twentyone" component={EpisodetwentyOne} />
      </p>
      <p class="man">
      <Route exact path="/twentytwo" component={EpisodetwentyTwo} />
      </p>
      <p class="man">
      <Route exact path="/twentythree" component={EpisodetwentyThree} />
      </p>
      <p class="man">
      <Route exact path="/twentyfour" component={EpisodetwentyFour} />
      </p>
      <p class="man">
      <Route exact path="/twentyfive" component={EpisodetwentyFive} />
      </p>
      <p class="man">
      <Route exact path="/twentysix" component={EpisodetwentySix} />
      </p>
      <p class="man">
      <Route exact path="/twentyseven" component={EpisodetwentySeven} />
      </p>
      <p class="man">
      <Route exact path="/twentyeight" component={EpisodetwentyEight} />
      </p>
      <p class="man">
      <Route exact path="/twentynine" component={EpisodetwentyNine} />
      </p>
      <p class="man">
      <Route exact path="/thirty" component={Episodethirty} />
      </p>
      <p class="man">
      <Route exact path="/thirtyone" component={EpisodethirtyOne} />
      </p>


    </div>
  </Router>

);

const Home = () => (

  <div>
    <h2>Home</h2>
  </div>
);



    return (
      <div>
 <p class="charTitle"> Characters: </p>
    <p class="episodes">
      <BasicExample />

      </p>

<div className="footer">
<ul className="sigName"> <li className="sigBy"> Created By: </li> <li className="marg"> <a className="sig" href="https://carlosecharte.com/"> Carlos Echarte </a>  </li> </ul> <ul className="sigName"> <li className="sigBy"> Api Source:  </li> <li className="marg">
<a className="sig" href="https://rickandmortyapi.com/"> rickandmortyapi.com </a> </li>
</ul>
</div>

 </div>
    );


  }
}

export default Customers;
