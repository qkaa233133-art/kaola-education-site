import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/Galaxy.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Galaxy({ mouseRepulsion = true, mouseInteraction = true, density = 1.4, glowIntensity = .3, saturation = 1, hueShift = 120, twinkleIntensity = .3, rotationSpeed = .1, repulsionStrength = 2, autoCenterRepulsion = 0, starSpeed = .4, speed = 1 }) {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const context = canvas.getContext("2d");
		if (!context) return;
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const pointer = {
			x: 0,
			y: 0,
			active: false
		};
		let stars = [];
		let width = 0;
		let height = 0;
		let deviceScale = 1;
		let animationFrame = 0;
		let previousTime = performance.now();
		function createStars() {
			const count = Math.min(520, Math.max(150, Math.round(width * height * density / 5200)));
			stars = Array.from({ length: count }, (_, index) => {
				const radius = Math.pow(Math.random(), .72);
				return {
					angle: Math.random() * Math.PI * 2,
					radius,
					armOffset: index % 4 * Math.PI / 2 + (Math.random() - .5) * .62,
					depth: .24 + Math.random() * .76,
					size: .45 + Math.random() * 1.8,
					hue: (hueShift + Math.random() * 155 - 35 + 360) % 360,
					twinkle: Math.random() * Math.PI * 2
				};
			});
		}
		function resize() {
			const rect = canvas.getBoundingClientRect();
			width = Math.max(1, rect.width);
			height = Math.max(1, rect.height);
			deviceScale = Math.min(window.devicePixelRatio || 1, 1.75);
			canvas.width = Math.round(width * deviceScale);
			canvas.height = Math.round(height * deviceScale);
			context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
			pointer.x = width / 2;
			pointer.y = height / 2;
			createStars();
		}
		function onPointerMove(event) {
			if (!mouseInteraction) return;
			const rect = canvas.getBoundingClientRect();
			pointer.x = event.clientX - rect.left;
			pointer.y = event.clientY - rect.top;
			pointer.active = true;
		}
		function onPointerLeave() {
			pointer.active = false;
		}
		function draw(time) {
			const elapsed = Math.min(40, time - previousTime);
			previousTime = time;
			const motionScale = reducedMotion ? 0 : elapsed * .001 * speed;
			const centerX = width * .5;
			const centerY = height * .49;
			const shortSide = Math.min(width, height);
			context.clearRect(0, 0, width, height);
			const coreGlow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, shortSide * .48);
			coreGlow.addColorStop(0, "rgba(176, 33, 63, 0.10)");
			coreGlow.addColorStop(.28, "rgba(63, 28, 92, 0.065)");
			coreGlow.addColorStop(1, "rgba(4, 3, 10, 0)");
			context.fillStyle = coreGlow;
			context.fillRect(0, 0, width, height);
			stars.forEach((star) => {
				star.angle += motionScale * rotationSpeed * (.12 + (1 - star.radius) * .9) * (.8 + star.depth);
				star.depth += motionScale * starSpeed * .05;
				if (star.depth > 1) star.depth = .24;
				const spiral = star.angle + star.armOffset + star.radius * 5.8;
				const perspective = .45 + star.depth * .9;
				const radiusX = star.radius * width * .62 * perspective;
				const radiusY = star.radius * height * .42 * perspective;
				let x = centerX + Math.cos(spiral) * radiusX;
				let y = centerY + Math.sin(spiral) * radiusY;
				const autoPull = autoCenterRepulsion * .015;
				x += Math.cos(spiral) * autoPull * shortSide;
				y += Math.sin(spiral) * autoPull * shortSide;
				if (mouseRepulsion && pointer.active) {
					const deltaX = x - pointer.x;
					const deltaY = y - pointer.y;
					const distanceSquared = deltaX * deltaX + deltaY * deltaY;
					const influenceRadius = 155;
					if (distanceSquared > 0 && distanceSquared < influenceRadius * influenceRadius) {
						const distance = Math.sqrt(distanceSquared);
						const influence = 1 - distance / influenceRadius;
						const push = influence * influence * repulsionStrength * 17;
						x += deltaX / distance * push;
						y += deltaY / distance * push;
					}
				}
				if (x < -24 || x > width + 24 || y < -24 || y > height + 24) return;
				const twinkle = .7 + Math.sin(time * .0018 + star.twinkle) * twinkleIntensity * .55;
				const alpha = Math.min(.94, (.2 + star.depth * .72) * twinkle);
				const size = star.size * (.58 + star.depth * 1.15);
				const hue = star.hue;
				const sat = Math.min(100, 42 + saturation * 42);
				if (size > 1.25) {
					context.save();
					context.shadowBlur = 7 + glowIntensity * 15;
					context.shadowColor = `hsla(${hue}, ${sat}%, 68%, ${alpha})`;
					context.fillStyle = `hsla(${hue}, ${sat}%, 78%, ${alpha})`;
					context.beginPath();
					context.arc(x, y, size, 0, Math.PI * 2);
					context.fill();
					context.restore();
				} else {
					context.fillStyle = `hsla(${hue}, ${sat}%, 82%, ${alpha})`;
					context.fillRect(x, y, Math.max(.7, size), Math.max(.7, size));
				}
				if (star.depth > .88 && size > 1.2) {
					context.strokeStyle = `hsla(${hue}, ${sat}%, 72%, ${alpha * .42})`;
					context.lineWidth = .7;
					context.beginPath();
					context.moveTo(x - size * 5, y);
					context.lineTo(x + size * 5, y);
					context.moveTo(x, y - size * 5);
					context.lineTo(x, y + size * 5);
					context.stroke();
				}
			});
			if (!reducedMotion) animationFrame = window.requestAnimationFrame(draw);
		}
		resize();
		window.addEventListener("resize", resize);
		canvas.addEventListener("pointermove", onPointerMove);
		canvas.addEventListener("pointerleave", onPointerLeave);
		draw(performance.now());
		return () => {
			window.cancelAnimationFrame(animationFrame);
			window.removeEventListener("resize", resize);
			canvas.removeEventListener("pointermove", onPointerMove);
			canvas.removeEventListener("pointerleave", onPointerLeave);
		};
	}, [
		autoCenterRepulsion,
		density,
		glowIntensity,
		hueShift,
		mouseInteraction,
		mouseRepulsion,
		repulsionStrength,
		rotationSpeed,
		saturation,
		speed,
		starSpeed,
		twinkleIntensity
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		className: "galaxy-canvas",
		ref: canvasRef,
		"aria-hidden": "true"
	});
}
//#endregion
export { Galaxy as default };
