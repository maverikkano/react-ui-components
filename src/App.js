// Reference taken from https://www.freecodecamp.org/news/react-projects-for-beginners-easy-ideas-with-code/

import "./App.css";
import Accordian from "./components/Accordian.jsx";
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

	const faqs = [
		[
			"What does the free trial include?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia accusantium assumenda voluptate doloremque, odio error quidem, ad adipisci possimus, nam quisquam qui dolor veniam quis sequi! Tempore maiores molestiae odio."
		],
		[
			"How is my personal data used?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt reprehenderit a suscipit est architecto harum, voluptatibus tempore error modi repellendus accusantium perferendis incidunt impedit amet illum illo eveniet debitis."
		],
		[
			"How do I connect with the community?", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt porro numquam tempora ab at ea accusamus, ratione, vitae dolor in iste? Enim, sapiente officia. Nesciunt tempora hic quod quibusdam beatae."
		]
	];

	const { pathname } = useLocation();

	return (
		<div>
			<ul className="navbar">
				<li><Link className={pathname === "/" ? "link active" : "link"} to="/">Home</Link></li>
				<li><Link className={pathname === "/carousal" ? "link active" : "link"} to="/carousal">Carousal</Link></li>
				<li><Link className={pathname === "/checklist" ? "link active" : "link"} to="/checklist">Checklist</Link></li>
				<li><Link className={pathname === "/accordian" ? "link active" : "link"} to="/accordian">Accordian</Link></li>
			</ul>
			
			<Routes>
				<Route path="/carousal" element={<Carousal images={images}/>} />
				<Route path="/checklist" element={<Checklist/>} />
				<Route path="/accordian" element={<Accordian faqs={faqs} />} />
			</Routes>
		</div>
	);
}