// Reference taken from https://www.freecodecamp.org/news/react-projects-for-beginners-easy-ideas-with-code/

import "./App.css";
import Carousal from "./components/Carousal";
import Checklist from "./components/Checklist.jsx";
import {Routes, Route, Link, useLocation} from 'react-router-dom';

export default function App() {

	const images = [
        "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    ];

	const { pathname } = useLocation();

	return (
		<div>
			<ul className="navbar">
				<li><Link className={pathname === "/" ? "link active" : "link"} to="/">Home</Link></li>
				<li><Link className={pathname === "/carousal" ? "link active" : "link"} to="/carousal">Carousal</Link></li>
				<li><Link className={pathname === "/checklist" ? "link active" : "link"} to="/checklist">Checklist</Link></li>
			</ul>
			
			<Routes>
				<Route path="/carousal" element={<Carousal images={images}/>} />
				<Route path="/checklist" element={<Checklist/>} />
			</Routes>
		</div>
	);
}