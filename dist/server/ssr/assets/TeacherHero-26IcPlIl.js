import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/SpecularButton.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var PROXIMITY = 250;
function SpecularButton({ href, children, className = "" }) {
	const buttonRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		function updateShine(event) {
			if (event.pointerType && event.pointerType !== "mouse") return;
			const button = buttonRef.current;
			if (!button) return;
			const rect = button.getBoundingClientRect();
			const distanceX = Math.max(rect.left - event.clientX, 0, event.clientX - rect.right);
			const distanceY = Math.max(rect.top - event.clientY, 0, event.clientY - rect.bottom);
			const visibility = Math.max(0, 1 - Math.hypot(distanceX, distanceY) / PROXIMITY);
			button.style.setProperty("--specular-x", `${event.clientX - rect.left}px`);
			button.style.setProperty("--specular-y", `${event.clientY - rect.top}px`);
			button.style.setProperty("--specular-opacity", visibility.toFixed(3));
		}
		function clearShine() {
			buttonRef.current?.style.setProperty("--specular-opacity", "0");
		}
		window.addEventListener("pointermove", updateShine, { passive: true });
		window.addEventListener("blur", clearShine);
		return () => {
			window.removeEventListener("pointermove", updateShine);
			window.removeEventListener("blur", clearShine);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: `specular-button ${className}`.trim(),
		ref: buttonRef,
		href,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "specular-button-content",
			children
		})
	});
}
//#endregion
//#region app/TeacherHero.tsx
var teachers = [
	{
		name: "叶鸿发",
		subject: "数学主讲 · 教研导师",
		image: "/teacher-ye-hongfa.jpg",
		imageClass: "portrait-ye",
		headline: [
			"把数学难点，",
			"拆成可以",
			"拿到的分"
		],
		profile: "数学教育专业。2024年获评惠州市优秀教育工作者；2022年参与编写“十四五”职业教育创新教材，任《数学》基础模块上下册副主编；主编高职高考校本教材《广东省3+证书考试数学》。长期深耕高职高考数学一线教学与教研，授课风格鲜明，注重突破难点与高效提分。多次指导中职师生参赛，斩获多项省、市级竞赛奖项。",
		facts: [
			"2024 惠州市优秀教育工作者",
			"“十四五”教材副主编",
			"高职高考校本教材主编"
		],
		quote: "拆清思路，突破难点，让每一步训练都指向得分。"
	},
	{
		name: "赖茜颖",
		subject: "英语主讲 · 分层教学导师",
		image: "/teacher-lai-qianying.jpg",
		imageClass: "portrait-lai",
		headline: [
			"先夯实基础",
			"再把方法",
			"练成能力"
		],
		profile: "全日制本科，专注中职英语与高职高考英语备考，精准把握考情、考点与命题方向。教学注重基础夯实、题型拆解与提分技巧训练，擅长分层教学和学习方法指导，课堂高效务实，重视互动与方法总结。2026年所带学生获得高职高考年级英语单科第一，取得145/150分，并帮助多名学生实现显著提分，深受学生信赖。",
		facts: [
			"英语单科 145 / 150",
			"考情与题型精准拆解",
			"分层教学与方法指导"
		],
		quote: "把知识落实到方法，再把方法稳定成分数。"
	},
	{
		name: "张懿",
		subject: "语文主讲 · 题型教研导师",
		image: "/teacher-zhang-yi.jpg",
		imageClass: "portrait-zhang",
		headline: [
			"读懂题目，",
			"也写出",
			"有分量的答案"
		],
		profile: "汉语言文学类全日制本科科班出身，拥有多年高职高考语文一线授课经验，获评优秀教师，参与编撰高职语文校本教材，多次指导学生征文获得市、校奖项。帮助基础薄弱学生在短期内普遍提分40+，历届学生最高分120分。深耕“3+证书”领域，善于题型拆解与答题技巧总结，授课深入浅出、注重分层适配，广受学生认可。",
		facts: [
			"基础薄弱学生提分 40+",
			"历届学生最高 120 分",
			"高职语文校本教材参编"
		],
		quote: "纵横千里独行客，何惧前路雨潇潇。"
	}
];
var ROTATION_MS = 5e3;
function TeacherHero() {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const teacher = teachers[activeIndex];
	(0, import_react.useEffect)(() => {
		const timer = window.setTimeout(() => {
			setActiveIndex((current) => (current + 1) % teachers.length);
		}, ROTATION_MS);
		return () => window.clearTimeout(timer);
	}, [activeIndex]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "faculty-hero",
		"aria-label": "考啦教育优秀师资",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "faculty-background-word",
				"aria-hidden": "true",
				children: "MENTORS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "faculty-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "faculty-kicker",
						children: "考啦教育 · 高职高考教学团队"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: teacher.headline.map((line, index) => index === teacher.headline.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: line }, line) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line }, line)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faculty-name-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: teacher.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: teacher.subject })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faculty-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpecularButton, {
							className: "faculty-primary-action",
							href: "#contact",
							children: ["微信咨询", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "→"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "faculty-secondary-action",
							href: "#course",
							children: "全科全程A班 ¥4,980"
						})]
					})
				]
			}, `copy-${teacher.name}`),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "faculty-portrait-stage",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "faculty-portrait-halo",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: `faculty-portrait ${teacher.imageClass}`,
					src: teacher.image,
					alt: `${teacher.name}老师`
				})]
			}, `image-${teacher.name}`),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "faculty-profile-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faculty-profile-topline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TEACHER PROFILE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
							"0",
							activeIndex + 1,
							" / 0",
							teachers.length
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faculty-profile-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "主讲教师" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: teacher.name })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: teacher.subject.split(" · ")[0] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "faculty-biography",
						children: teacher.profile
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "faculty-facts",
						children: teacher.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: fact }, fact))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [
						"“",
						teacher.quote,
						"”"
					] })
				]
			}, `profile-${teacher.name}`),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "faculty-switcher",
				"aria-label": "切换教师",
				children: teachers.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: index === activeIndex ? "active" : "",
					type: "button",
					onClick: () => setActiveIndex(index),
					"aria-pressed": index === activeIndex,
					"aria-label": `查看${item.name}老师介绍`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: "",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["0", index + 1] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: item.subject.split(" · ")[0] })
					] })]
				}, item.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "faculty-status-bar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "考啦教育 · 惠州" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: teacher.subject }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faculty-auto-status",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "5S AUTO PLAY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { "aria-hidden": "true" }, `progress-${activeIndex}`)]
					})
				]
			})
		]
	});
}
//#endregion
export { TeacherHero as default };
