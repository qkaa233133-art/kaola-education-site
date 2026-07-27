import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/GooeyClickEffects.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var PARTICLE_COUNT = 13;
var MIN_DISTANCE = 10;
var MAX_DISTANCE = 90;
var BASE_DURATION = 600;
var TIME_VARIANCE = 500;
var COLORS = [
	"#a91825",
	"#d66b73",
	"#b69664",
	"#f1ddd2"
];
var CLICKABLE_SELECTOR = "a[href], button:not([disabled]), summary, [role=\"button\"]";
function GooeyClickEffects() {
	const layerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
		function spawnBurst(event) {
			if (reducedMotion.matches) return;
			const target = event.target;
			if (!(target instanceof Element)) return;
			const clickable = target.closest(CLICKABLE_SELECTOR);
			if (!clickable || !layerRef.current) return;
			let originX = event.clientX;
			let originY = event.clientY;
			if (originX === 0 && originY === 0) {
				const rect = clickable.getBoundingClientRect();
				originX = rect.left + rect.width / 2;
				originY = rect.top + rect.height / 2;
			}
			const burst = document.createElement("span");
			burst.className = "gooey-particle-burst";
			burst.style.left = `${originX}px`;
			burst.style.top = `${originY}px`;
			const core = document.createElement("i");
			core.className = "gooey-particle-core";
			burst.appendChild(core);
			let longestAnimation = 0;
			for (let index = 0; index < PARTICLE_COUNT; index += 1) {
				const particle = document.createElement("i");
				const angle = Math.PI * 2 * index / PARTICLE_COUNT + (Math.random() - .5) * .45;
				const distance = MIN_DISTANCE + Math.random() * (MAX_DISTANCE - MIN_DISTANCE);
				const duration = BASE_DURATION + Math.random() * TIME_VARIANCE;
				const delay = Math.random() * 65;
				const size = 4 + Math.random() * 7;
				particle.className = "gooey-particle";
				particle.style.setProperty("--particle-x", `${Math.cos(angle) * distance}px`);
				particle.style.setProperty("--particle-y", `${Math.sin(angle) * distance}px`);
				particle.style.setProperty("--particle-size", `${size}px`);
				particle.style.setProperty("--particle-color", COLORS[index % COLORS.length]);
				particle.style.setProperty("--particle-duration", `${duration}ms`);
				particle.style.setProperty("--particle-delay", `${delay}ms`);
				particle.style.setProperty("--particle-scale", `${.65 + Math.random() * .75}`);
				longestAnimation = Math.max(longestAnimation, duration + delay);
				burst.appendChild(particle);
			}
			layerRef.current.appendChild(burst);
			window.setTimeout(() => burst.remove(), longestAnimation + 120);
		}
		document.addEventListener("click", spawnBurst, true);
		return () => document.removeEventListener("click", spawnBurst, true);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "gooey-effect-layer",
		ref: layerRef,
		"aria-hidden": "true"
	});
}
//#endregion
export { GooeyClickEffects as default };
