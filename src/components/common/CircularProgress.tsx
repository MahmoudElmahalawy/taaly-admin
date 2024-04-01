import React from "react";

interface CircularProgressProps {
	percentage: number;
	strokeWidth?: number;
	size?: number;
	progressColor?: string;
	remainingColor?: string;
	children?: React.ReactNode;
}

const CircularProgress = ({
	percentage,
	strokeWidth = 8,
	size = 200,
	progressColor = "#4caf50",
	remainingColor = "#e6e6e6",
	children,
}: CircularProgressProps) => {
	const radius = (size - strokeWidth) / 2;
	const circumference = radius * 2 * Math.PI;
	const offset = circumference - (percentage / 100) * circumference;

	return (
		<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				stroke={remainingColor}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				fill="none"
			/>
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				stroke={progressColor}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				fill="none"
				strokeDasharray={circumference}
				strokeDashoffset={offset}
				transform={`rotate(-90 ${size / 2} ${size / 2})`}
			/>
			{children && (
				<foreignObject x={0} y={0} width={size} height={size}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: size,
							height: size,
							textAlign: "center",
							fontSize: "20px",
							fontWeight: "bold",
						}}
					>
						{children}
					</div>
				</foreignObject>
			)}
		</svg>
	);
};

export default CircularProgress;
