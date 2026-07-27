import { a as require_react, o as __toESM } from "../index.js";
//#region app/ScrollExperience.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var revealGroups = [
	".trust-strip > *",
	".learning-system .section-heading > *",
	".step-grid .step-card",
	".course-panel-intro > *",
	".course-panel-details .detail-header > *",
	".course-panel-details .daily-title",
	".course-panel-details .daily-study li",
	".course-panel-details .course-disclaimer",
	".advantages-section .section-heading > *",
	".advantage-grid .advantage-card",
	".audience-section .audience-card",
	".teaching-section .teaching-copy > *",
	".teaching-section .board-main",
	".teaching-section .board-note",
	".faq-section .faq-title > *",
	".faq-section .faq-list details",
	".contact-section .contact-copy > *",
	".contact-section .wechat-card",
	".contact-section .address-card",
	"footer > *"
];
function ScrollExperience() {
	(0, import_react.useEffect)(() => {
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const revealedElements = /* @__PURE__ */ new Set();
		revealGroups.forEach((selector) => {
			Array.from(document.querySelectorAll(selector)).forEach((element, index) => {
				element.classList.add("reveal-item");
				element.style.setProperty("--reveal-delay", `${Math.min(index * 85, 425)}ms`);
				revealedElements.add(element);
			});
		});
		document.body.classList.add("scroll-reveal-ready");
		if (prefersReducedMotion || !("IntersectionObserver" in window)) {
			revealedElements.forEach((element) => element.classList.add("is-visible"));
			return () => {
				document.body.classList.remove("scroll-reveal-ready");
			};
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			});
		}, {
			threshold: .08,
			rootMargin: "0px 0px -8% 0px"
		});
		revealedElements.forEach((element) => observer.observe(element));
		return () => {
			observer.disconnect();
			document.body.classList.remove("scroll-reveal-ready");
			revealedElements.forEach((element) => {
				element.classList.remove("reveal-item", "is-visible");
				element.style.removeProperty("--reveal-delay");
			});
		};
	}, []);
	return null;
}
//#endregion
export { ScrollExperience as default };
