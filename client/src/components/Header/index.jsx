import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.scss";

import Div from "../Div";
import DropDown from "./DropDown";

export default function Header({ variant }) {
	const [isSticky, setIsSticky] = useState(false);
	const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
	const [mobileToggle, setMobileToggle] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 0) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		});
	}, []);

	return (
		<>
			<header
				className={`cs-site_header cs-style1 text-uppercase ${
					variant ? variant : ""
				} cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
			>
				<Div className='cs-main_header'>
					<Div className='container'>
						<Div className='cs-main_header_in'>
							<Div className='cs-main_header_left'>
								<Link
									className='cs-site_branding'
									to='/'
								>
									<img
										src='../../../public/logo2.svg'
										alt='Logo'
									/>
								</Link>
							</Div>
							<Div className='cs-main_header_center'>
								<Div className='cs-nav cs-primary_font cs-medium'>
									<ul
										className='cs-nav_list'
										style={{ display: `${mobileToggle ? "block" : "none"}` }}
									>
										<li className='menu-item-has-children'>
											<NavLink
												to='/'
												onClick={() => setMobileToggle(false)}
											>
												Home
											</NavLink>
											<DropDown>
												<ul>
													<li>
														<Link
															to='/'
															onClick={() => setMobileToggle(false)}
														>
															Main Home
														</Link>
													</li>
													<li>
														<Link
															to='/emulator'
															onClick={() => setMobileToggle(false)}
														>
															Emu JS
														</Link>
													</li>
													<li>
														<Link
															to='/gamecollection'
															onClick={() => setMobileToggle(false)}
														>
															RAWG
														</Link>
													</li>
													<li>
														<Link
															to='/thirdpage'
															onClick={() => setMobileToggle(false)}
														>
															Third Item
														</Link>
													</li>
												</ul>
											</DropDown>
										</li>
										<li>
											<NavLink
												to='/signup'
												onClick={() => setMobileToggle(false)}
											>
												Login / Register
											</NavLink>
										</li>
										<li className='menu-item-has-children'>
											<Link
												to='/'
												onClick={() => setMobileToggle(false)}
											>
												Pages
											</Link>
											<DropDown>
												<ul>
													<li>
														<Link
															to='/teampage'
															onClick={() => setMobileToggle(false)}
														>
															Our Team
														</Link>
													</li>
													<li>
														<Link
															to='/FaqPage'
															onClick={() => setMobileToggle(false)}
														>
															FAQ
														</Link>
													</li>
												</ul>
											</DropDown>
										</li>
									</ul>
									<span
										className={
											mobileToggle
												? "cs-munu_toggle cs-toggle_active"
												: "cs-munu_toggle"
										}
										onClick={() => setMobileToggle(!mobileToggle)}
									>
										<span></span>
									</span>
								</Div>
							</Div>
							<Div className='cs-main_header_right'>
								<Div className='cs-toolbox'>
									<span
										className='cs-icon_btn'
										onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
									>
										<span className='cs-icon_btn_in'>
											<span />
											<span />
											<span />
											<span />
										</span>
									</span>
								</Div>
							</Div>
						</Div>
					</Div>
				</Div>
			</header>

			<Div
				className={
					sideHeaderToggle ? "cs-side_header active" : "cs-side_header"
				}
			>
				<button
					className='cs-close'
					onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
				/>
				<Div
					className='cs-side_header_overlay'
					onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
				/>
				<Div className='cs-side_header_in'>
					<Div className='cs-side_header_shape' />
					<Link
						className='cs-site_branding'
						to='/'
					>
						<img
							src='/logo.svg'
							alt='Logo'
						/>
					</Link>
					<Div className='cs-side_header_box'>
						<h2 className='cs-side_header_heading'>
							PLACEHOLDER FOR LOGIN AND <br />
							REGISTRATION
						</h2>
					</Div>
					<Div className='cs-side_header_box'>
						<Div class='form-outline'>
							<input
								type='username'
								id='Username'
								className='form-control'
							/>
							<label
								className='form-label'
								htmlFor='Username'
							>
								Username
								{/* <input
									type='email'
									id='Email'
									className='form-control'
								/> */}
								{/* <label
									className='form-label'
									htmlFor='Email'
								> */}
								<input
									type='password'
									id='Password'
									className='form-control'
								/>
								<label
									className='form-label'
									htmlFor='Password'
								>
									Password input
								</label>
							</label>
							{/* </label> */}
						</Div>
					</Div>
					<Div className='cs-side_header_box'></Div>
				</Div>
			</Div>
		</>
	);
}
