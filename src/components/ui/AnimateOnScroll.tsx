"use client";

import type { ReactNode } from "react";
import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";

type AnimateOnScrollProps = {
	children: ReactNode;
	className?: string;
};

export default function AnimateOnScroll({ children, className }: AnimateOnScrollProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.disconnect();
						break;
					}
				}
			},
			{ threshold: 0.15 },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={[
				className,
				"transition-all duration-700 ease-out",
				isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
			]
				.filter(Boolean)
				.join(" ")}
		>
			{children}
		</div>
	);
}

type StaggerChildrenProps = {
	children: ReactNode;
	className?: string;
	stagger?: number;
};

export function StaggerChildren({ children, className, stagger = 0.08 }: StaggerChildrenProps) {
	const items = Children.toArray(children);

	return (
		<div className={className}>
			{items.map((child, index) => {
				if (!isValidElement(child)) return child;
				return cloneElement(child, {
					style: {
						...(child.props as { style?: Record<string, unknown> }).style,
						transitionDelay: `${index * stagger}s`,
					},
					className: [
						(child.props as { className?: string }).className,
						"transition-all duration-700 ease-out",
						"opacity-100 translate-y-0",
					]
						.filter(Boolean)
						.join(" "),
				});
			})}
		</div>
	);
}
