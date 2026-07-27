import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/LaserFlowLayer.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function LaserFlowLayer() {
	const layerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const pointer = {
			x: window.innerWidth * .58,
			y: window.innerHeight * .35
		};
		const current = { ...pointer };
		let frame = 0;
		function followPointer(event) {
			if (event.pointerType && event.pointerType !== "mouse") return;
			pointer.x = event.clientX;
			pointer.y = event.clientY;
		}
		function resetPointer(event) {
			if (event.relatedTarget !== null) return;
			pointer.x = window.innerWidth * .58;
			pointer.y = window.innerHeight * .35;
		}
		function animate() {
			current.x += (pointer.x - current.x) * .075;
			current.y += (pointer.y - current.y) * .075;
			layerRef.current?.style.setProperty("--laser-x", `${current.x}px`);
			layerRef.current?.style.setProperty("--laser-y", `${current.y}px`);
			frame = window.requestAnimationFrame(animate);
		}
		window.addEventListener("pointermove", followPointer, { passive: true });
		window.addEventListener("pointerout", resetPointer);
		frame = window.requestAnimationFrame(animate);
		return () => {
			window.removeEventListener("pointermove", followPointer);
			window.removeEventListener("pointerout", resetPointer);
			window.cancelAnimationFrame(frame);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "laser-flow-layer",
		ref: layerRef,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "laser-flow-glow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "laser-wisp wisp-one" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "laser-wisp wisp-two" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "laser-wisp wisp-three" })
		]
	});
}
//#endregion
export { LaserFlowLayer as default };
