import React from "react";

import Image from "next/image";
import nigeria from "@/app/assets/images/landing-page/nigeria.svg";
import uganda from "@/app/assets/images/landing-page/uganda.svg";
import togo from "@/app/assets/images/landing-page/togo.svg";
import sirerra from "@/app/assets/images/landing-page/sirerra-leone.svg";
import cotedovire from "@/app/assets/images/landing-page/cotedovire.svg";
import burkina from "@/app/assets/images/landing-page/burkina.svg";
import cameroon from "@/app/assets/images/landing-page/cameroon.svg";
import senegal from "@/app/assets/images/landing-page/senegal.svg";
import cabo from "@/app/assets/images/landing-page/cabo.svg";
import algeria from "@/app/assets/images/landing-page/algeria.svg";
import "./globe.css";

const RotatingGlobe = () => {
	return (
		<div className=" ipad-view relative lg:mt-0 overflow-hidden  h-full w-full z-10  ">
			<div className="sphere overflow-hidden">
				<div className="w-16 h-8 lg:w-20 lg:h-10 circle dots">
					<Image
						src={uganda}
						alt="hero1"
						width={100}
						height={50}
						style={{ objectFit: "contain" }}
						priority
					/>
				</div>
				<div className="w-16 h-8 lg:w-20 lg:h-10 circle dots2">
					<Image
						src={togo}
						alt="hero1"
						width={100}
						height={50}
						style={{ objectFit: "contain" }}
						priority
					/>
				</div>
				<div className="w-16 h-8 lg:w-20 lg:h-10 circle dots3">
					<Image
						src={cotedovire}
						alt="hero1"
						width={100}
						height={50}
						style={{ objectFit: "contain" }}
						priority
					/>
				</div>
				<div className="w-16 h-8 lg:w-20 lg:h-10 circle dots4">
					<Image
						src={sirerra}
						alt="hero1"
						width={100}
						height={50}
						style={{ objectFit: "contain" }}
						priority
					/>
				</div>
				<div className="w-16 h-8 lg:w-20 lg:h-10 circle dots5">
					<Image
						src={nigeria}
						alt="hero1"
						width={100}
						height={50}
						style={{ objectFit: "contain" }}
						priority
					/>
				</div>
				<div className="w-16 h-8 lg:w-20 lg:h-10 circle dots6">
					<Image
						src={cameroon}
						alt="hero1"
						width={100}
						height={50}
						style={{ objectFit: "contain" }}
						priority
					/>
				</div>
				<div className="w-16 h-8 lg:w-20 lg:h-10 circle dots7">
					<Image
						src={burkina}
						alt="hero1"
						width={100}
						height={50}
						style={{ objectFit: "contain" }}
						priority
					/>
				</div>
				<div className="w-16 h-8 lg:w-20 lg:h-10 circle dots8">
					<Image
						src={senegal}
						alt="hero1"
						width={100}
						height={50}
						style={{ objectFit: "contain" }}
						priority
					/>
				</div>
				<div className="w-16 h-8 lg:w-20 lg:h-10 circle dots9">
					<Image
						src={cabo}
						alt="hero1"
						width={100}
						height={50}
						style={{ objectFit: "contain" }}
						priority
					/>
				</div>
				<div className="w-16 h-8 lg:w-20 lg:h-10 circle dots10">
					<Image
						src={algeria}
						alt="hero1"
						width={100}
						height={50}
						style={{ objectFit: "contain" }}
						priority
					/>
				</div>
			</div>
			<div className="w-full h-full absolute moving-stripes overflow-hidden ">
				<svg
					className="absolute paths dash1"
					viewBox="0 0 1100 1100"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M334.326 882.433C286.784 840.832 249.565 788.747 225.608 730.292C201.651 671.837 191.612 608.613 196.284 545.613C200.956 482.612 220.21 421.56 252.528 367.279C284.845 312.997 329.339 266.972 382.497 232.838C435.656 198.704 496.022 177.396 558.828 170.597C621.635 163.798 685.162 171.694 744.393 193.661C803.625 215.629 856.938 251.066 900.123 297.174C943.307 343.282 975.181 398.799 993.227 459.34"
						stroke="orange"
						strokeWidth="3"
					></path>
					<path
						d="M1004.79 648.64C1013.37 664.833 1015.93 679.803 1012.64 693.203C1009.34 706.602 1000.18 718.513 985.151 728.551C955.073 748.642 902.782 760.368 833.826 762.389C764.893 764.409 681.994 756.653 594.053 739.949C506.113 723.245 416.474 698.228 334.785 667.593C253.093 636.957 182.462 601.867 130.485 566.107C104.497 548.227 83.6757 530.526 68.4327 513.478C53.1864 496.426 43.5431 480.052 39.8701 464.829C36.2015 449.624 38.5536 435.84 46.684 423.775C54.8252 411.694 68.7879 401.296 88.4086 392.947C127.656 376.246 187.89 368.446 262.665 370.429"
						stroke="blue"
						strokeWidth="3"
					></path>
					<path
						d="M744.537 203.285C799.611 142.519 849.675 104 888.524 92.3818C907.933 86.5773 924.054 87.6324 936.552 95.1925C949.055 102.756 958.037 116.891 963.03 137.469C973.02 178.646 966.532 243.539 944.284 324.159C922.042 404.757 885.047 497.461 837.876 590.785C790.707 684.108 735.44 773.941 678.925 849.156C622.405 924.378 567.139 981.646 519.979 1013.9C496.398 1030.02 475.396 1039.52 457.537 1042.34C439.696 1045.16 425.016 1041.31 413.989 1030.79C402.942 1020.24 395.739 1003.16 392.55 980.179C389.362 957.207 390.194 928.403 395.163 894.489"
						stroke="#050505"
						strokeWidth="3"
					></path>
					<path
						d="M838.407 907.01C820.956 952.118 791.357 980.223 752.688 988.55C713.993 996.883 667.503 985.135 617.98 954.392C568.464 923.652 517.759 875.063 471.093 813.609C424.428 752.157 383.499 680.076 352.52 604.785C321.541 529.492 301.636 453.721 294.846 385.27C288.056 316.813 294.634 258.189 313.854 215.404C333.065 172.639 364.201 147.259 404.047 141.774C443.925 136.285 491.182 150.907 540.967 184.251"
						stroke="gray"
						strokeWidth="3"
					></path>
				</svg>
			</div>
		</div>
	);
};

export default RotatingGlobe;
