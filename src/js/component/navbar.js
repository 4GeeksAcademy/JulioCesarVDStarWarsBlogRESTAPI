import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { FaTrash } from "react-icons/fa6";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);


	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0">
					<div className="logo-container">
						<img
							className="starWarsPic"
							src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png"
							alt="Star Wars Logo"
						/>
					</div>
				</span>
			</Link>
			<div className="btn-group">
				<button className="btn btn-primary btn dropdown-toggle p-2 me-5" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
					Favourites<span className="badge text-bg-secondary ms-1">{store.favourites.length}</span>
				</button>
				<ul className="dropdown-menu">
					{store.favourites?.map((favourites, index) => (
						<li className="ms-2" key={index}>
							{favourites}
							<button className="btn closing-btn mb-2" onClick={() => actions.handleDeleteFav(index)}><FaTrash /></button>
						</li>
					))}
					{store.favourites?.length <= 0 && <li className="noAddedFavs ms-2 text-danger">No favs yet!</li>}
				</ul>
			</div>
		</nav>
	);
};