"use client";

import React, { useEffect, useRef, useState } from "react";

type OtpInputProps = {
	length?: number; // we have 6 digits by default
	onChange?: (code: string) => void;
	onComplete?: (code: string) => void;
	error?: string | null; // for error message
	isVerifying?: boolean; // verify button clicked
	className?: string;
};

export default function OtpInput({ length = 6, onChange, onComplete, error, isVerifying = false, className = "" }: OtpInputProps) {
	const [values, setValues] = useState<string[]>(Array(length).fill(""));
	const [active, setActive] = useState<number>(0);
	const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

	useEffect(() => {
		inputsRef.current[0]?.focus();
	}, []);

	useEffect(() => {
		const code = values.join("");
		onChange?.(code);
		if (values.every((v) => v !== "")) {
			onComplete?.(code);
		}
	}, [values, onChange, onComplete]);

	const setChar = (idx: number, ch: string) => {
		if (!/^[0-9]?$/.test(ch)) return;
		const copy = [...values];
		copy[idx] = ch;
		setValues(copy);
		if (ch && idx < length - 1) {
			inputsRef.current[idx + 1]?.focus();
			setActive(idx + 1);
		}
	};

	const onKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Backspace") {
			if (values[idx]) {
				setChar(idx, "");
			} else if (idx > 0) {
				inputsRef.current[idx - 1]?.focus();
				setActive(idx - 1);
			}
		}
		if (e.key === "ArrowLeft" && idx > 0) {
			inputsRef.current[idx - 1]?.focus();
			setActive(idx - 1);
		}
		if (e.key === "ArrowRight" && idx < length - 1) {
			inputsRef.current[idx + 1]?.focus();
			setActive(idx + 1);
		}
	};

	const activeBlue = "#018FFF";
	const errorRed = "#FF2121";
	const successGreen = "#00C896";

	return (
		<div className={`w-full flex items-center justify-between gap-[22px] ${className}`}>
			{Array.from({ length }).map((_, i) => {
				const isActive = active === i;
				const hasVal = values[i] !== "";
				const allFilled = values.every((v) => v !== "");
				const allEmpty = values.every((v) => v === "");
				const showError = !allEmpty && !!error;
				const bottomShadow = showError
					? `0 8px 0 0 ${errorRed}`
					: allFilled
					? `0 8px 0 0 ${successGreen}`
					: isActive || hasVal
					? `0 8px 0 0 ${activeBlue}`
					: "none";
				return (
					<input
						key={i}
						ref={(el) => {
							inputsRef.current[i] = el;
						}}
						value={values[i]}
						onChange={(e) => setChar(i, e.target.value.slice(-1))}
						onKeyDown={(e) => onKeyDown(i, e)}
						onFocus={() => setActive(i)}
						inputMode="numeric"
						pattern="[0-9]*"
						maxLength={1}
						className="w-[84px] h-[80px] rounded-[25px] text-center text-[24px] font-[700] text-[#000] outline-none bg-[#D9EEFF]"
						style={{
							border: "none",
							boxShadow: bottomShadow,
						}}
					/>
				);
			})}
		</div>
	);
}

//  resend timer hook + button
export function ResendOtpButton({
	seconds = 30,
	onResend,
	startKey,
	disabledBeforeStart = false,
	onCountdownEnd,
}: {
	seconds?: number;
	onResend: () => void;
	startKey?: number | null;
	disabledBeforeStart?: boolean;
	onCountdownEnd?: () => void;
}) {
	// Defer countdown until explicitly started by startKey
	const [remaining, setRemaining] = useState(0);
	const [started, setStarted] = useState(!disabledBeforeStart);

	useEffect(() => {
		if (remaining <= 0) return;
		const id = setInterval(() => setRemaining((s) => s - 1), 1000);
		return () => clearInterval(id);
	}, [remaining]);

	useEffect(() => {
		if (startKey) {
			setStarted(true);
			setRemaining(seconds);
		}
	}, [startKey, seconds]);

	const start = () => {
		setStarted(true);
		setRemaining(seconds);
	};
	const clickable = started && remaining === 0;

	//  re-enabling verify button after countdown
	useEffect(() => {
		if (started && remaining === 0) {
			onCountdownEnd?.();
		}
	}, [remaining, started, onCountdownEnd]);

	return (
		<button
			type="button"
			disabled={!clickable}
			onClick={() => {
				onResend(); 
				start();
			}}
			className={`h-[58px] w-full rounded-[10px] border ${
				clickable ? "border-[#0B76FF] text-[#0B76FF] bg-white hover:bg-[#F5F9FF]" : "border-[#737373] text-[#737373] bg-white"
			} text-[16px] font-[700] transition-colors`}
		>
			{clickable ? "Resend OTP" : started && remaining > 0 ? `Resend OTP in ${remaining}s` : "Resend OTP"}
		</button>
	);
}

