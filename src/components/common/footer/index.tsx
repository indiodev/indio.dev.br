import { Logo } from '../logo';

export function Footer(): React.ReactElement {
	return (
		<footer className="w-full bg-dark-light py-5">
			<section className="container flex items-center justify-between flex-col-reverse md:flex-row gap-4">
				<div className="flex flex-1 gap-2 items-center">
					<Logo className="w-8 h-8" />
					<span>Copyright © indiodev · 2024</span>
				</div>

				<ul className="flex items-center justify-center gap-4">
					<li>
						<a
							href="https://github.com/indiodev"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={38}
								height={38}
								fill="none"
							>
								<path
									fill="#fff"
									d="M19 0c10.494 0 19 8.507 19 19s-8.506 19-19 19S0 29.493 0 19 8.506 0 19 0Z"
								/>
								<path
									fill="#171717"
									d="M10.707 26.106h3.557V14.247h-3.557v11.859Zm13.86-12.27c-1.727 0-3.272.631-4.367 2.023v-1.65h-3.571v11.897h3.57v-6.434c0-1.36 1.246-2.686 2.806-2.686s1.946 1.326 1.946 2.653v6.466h3.557v-6.73c0-4.676-2.213-5.538-3.941-5.538Zm-12.098-.774a1.782 1.782 0 1 0-.002-3.563 1.782 1.782 0 0 0 .002 3.563Z"
								/>
							</svg>
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/_indiodev"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={40}
								height={39}
								fill="none"
							>
								<path
									fill="#fff"
									fillRule="evenodd"
									d="M20.067.403C9.137.403.285 9.256.285 20.186c0 8.753 5.663 16.147 13.526 18.768.99.173 1.36-.42 1.36-.94 0-.47-.024-2.027-.024-3.684-4.97.915-6.257-1.212-6.652-2.324-.223-.57-1.187-2.325-2.028-2.795-.692-.37-1.681-1.285-.025-1.31 1.558-.025 2.67 1.434 3.042 2.027 1.78 2.993 4.624 2.152 5.761 1.633.174-1.286.693-2.152 1.262-2.646-4.402-.495-9.001-2.201-9.001-9.768 0-2.151.766-3.932 2.027-5.316-.198-.495-.89-2.523.198-5.243 0 0 1.657-.519 5.44 2.028a18.355 18.355 0 0 1 4.946-.668c1.681 0 3.363.223 4.945.668 3.784-2.572 5.44-2.028 5.44-2.028 1.089 2.72.396 4.748.198 5.243 1.262 1.384 2.028 3.14 2.028 5.316 0 7.592-4.624 9.273-9.026 9.768.717.618 1.336 1.805 1.336 3.66 0 2.645-.025 4.772-.025 5.44 0 .519.37 1.137 1.36.94 7.814-2.622 13.477-10.04 13.477-18.77C39.85 9.256 30.997.404 20.067.404Z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</li>
				</ul>
			</section>
		</footer>
	);
}
