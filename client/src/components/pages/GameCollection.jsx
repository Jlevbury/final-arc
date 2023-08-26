import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { pageTitle } from "../../helper";

import PageHeading from "../PageHeading";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx/index.jsx";
import Spacing from "../Spacing";

export default function Page() {
	const params = useParams();
	pageTitle("Game collection");
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			{/* Start Page Heading Section */}
			<PageHeading
				title='Game INFORMATION TO BE UPDATED'
				bgSrc='/images/blog_details_hero_bg.jpeg'
				pageLinkText={params.blogDetailsId}
			/>
			{/* End Page Heading Section */}

			{/* Start Blog Details */}
			<Spacing
				lg='150'
				md='80'
			/>
			<Div className='container'>
				<Div className='row'>
					<Div className='col-lg-8'>
						{/* Start Details Post Content */}
						<Div className='cs-post cs-style2'>
							<Div className='cs-post_thumb cs-radius_15'>
								<img
									src='/images/post_5.jpeg'
									alt='Post'
									className='w-100 cs-radius_15'
								/>
							</Div>
							<Div className='cs-post_info'>
								<Div className='cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font'>
									<span className='cs-posted_by'>24 August 2023</span>
									<Link
										to='/blog'
										className='cs-post_avatar'
									>
										Tech
									</Link>
								</Div>
								<h2 className='cs-post_title'>RAWG Gaming Collection</h2>
								<p>
									Elit scelerisque mauris pellentesque pulvinar pellentesque
									habitant morbi tristique. Tortor posuere ac ut consequat
									semper viverra nam libero justo. Mauris commodo quis imperdiet
									massa tincidunt nunc pulvinar sapien et. Aliquam purus sit
									amet luctus venenatis lectus magna fringilla urna. Purus sit
									amet luctus venenatis lectus. Nunc aliquet bibendum enim
									facilisis. Pretium viverra suspendisse potenti nullam ac
									tortor vitae.
								</p>
								<blockquote className='cs-primary_font'>
									I am too drunk to taste this chicken
									<small>Colonel Sanders</small>
								</blockquote>
								<p>PLACEHOLDER FOR CONTENT</p>
								<Div className='row'>
									<Div className='col-md-6'>
										<img
											src='/images/blog_details_img_1.jpeg'
											alt='Game Details'
											className='cs-radius_15 w-100'
										/>
										<Div className='cs-height_45 cs-height_lg_45' />
									</Div>
									<Div className='col-md-6'>
										<img
											src='/images/blog_details_img_2.jpeg'
											alt='Game  Details'
											className='cs-radius_15 w-100'
										/>
										<Div className='cs-height_45 cs-height_lg_45' />
									</Div>
								</Div>
								<h3>Look!Another PlaceHolder</h3>
								<p>
									we denounce with righteous indignation and dislike men who are
									so beguiled and demoralized by the charms of pleasure of the
									moment, so blinded by desire, that they cannot foresee the
									pain and trouble that are bound to ensue; and equal blame
									belongs to those who fail in their duty through weakness of
									will, which is the same as saying through shrinking from toil
									and pain. These cases are perfectly simple and easy to
									distinguish. In a free hour, when our power of choice is
									untrammelled and when nothing prevents our being able to do
									what we like best, every pleasure is to be welcomed and every
									pain avoided. But in certain circumstances.
								</p>
								<p>
									So, blinded by desire, that they cannot foresee the pain and
									trouble that are bound to ensue; and equal blame belongs to
									those who fail in their duty through weakness of will, which
									is the same as saying through shrinking from toil and pain.
									These cases are perfectly simple and easy to distinguish. In a
									free hour, when our power of choice is untrammelled and when
									nothing prevents our being able to do what we like best, every
									pleasure is to be welcomed and every pain avoided. But in
									certain amount of people.
								</p>
							</Div>
						</Div>
						{/* End Details Post Content */}
					</Div>
				</Div>
			</Div>
			<Spacing
				lg='150'
				md='80'
			/>
		</>
	);
}
