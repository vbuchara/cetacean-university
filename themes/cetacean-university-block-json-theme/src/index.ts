import "./styles/index.scss";
import 'react-loading-skeleton/dist/skeleton.css';

// Our modules / classes
import MobileMenu from "@src/classes/MobileMenu";
import HeroSlider from "@src/classes/HeroSlider";
import GMap from "@src/classes/GoogleMap";
import LiveSearch from "@src/classes/LiveSearch";
import MyNotes from "@src/classes/MyNotes";
import Likes from "@src/classes/Likes";

// Instantiate a new object using our modules/classes
new MobileMenu();
new HeroSlider();
new GMap();
new LiveSearch();
new MyNotes();
new Likes();