import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/CopyWechat.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var contacts = [{
	id: "Hue_Ge",
	name: "叶老师",
	tag: "主推荐",
	image: "/wechat-ye.jpg",
	alt: "叶老师微信二维码",
	featured: true
}, {
	id: "Rvi659",
	name: "备用咨询",
	tag: "备用微信",
	image: "/wechat-backup.jpg",
	alt: "备用微信 Rvi659 二维码",
	featured: false
}];
var consultationRemark = "高职高考咨询";
function CopyWechat() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [closing, setClosing] = (0, import_react.useState)(false);
	const [copiedId, setCopiedId] = (0, import_react.useState)("");
	const [remarkCopied, setRemarkCopied] = (0, import_react.useState)(false);
	const [modalOrigin, setModalOrigin] = (0, import_react.useState)({
		x: "50vw",
		y: "50vh"
	});
	const dialogRef = (0, import_react.useRef)(null);
	const closeButtonRef = (0, import_react.useRef)(null);
	const closeTimerRef = (0, import_react.useRef)(null);
	function openModal(clientX, clientY, trigger) {
		let x = clientX ?? 0;
		let y = clientY ?? 0;
		if ((!x || !y) && trigger) {
			const rect = trigger.getBoundingClientRect();
			x = rect.left + rect.width / 2;
			y = rect.top + rect.height / 2;
		}
		setModalOrigin({
			x: x ? `${x}px` : "50vw",
			y: y ? `${y}px` : "50vh"
		});
		setClosing(false);
		setOpen(true);
	}
	function closeModal() {
		if (!open || closing) return;
		setClosing(true);
		if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
		closeTimerRef.current = window.setTimeout(() => {
			setOpen(false);
			setClosing(false);
			closeTimerRef.current = null;
		}, 440);
	}
	(0, import_react.useEffect)(() => {
		function openFromPageLink(event) {
			const target = event.target;
			if (!(target instanceof Element)) return;
			const trigger = target.closest("a[href=\"#contact\"]");
			if (!trigger) return;
			event.preventDefault();
			openModal(event.clientX, event.clientY, trigger);
		}
		document.addEventListener("click", openFromPageLink);
		return () => document.removeEventListener("click", openFromPageLink);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const previousOverflow = document.body.style.overflow;
		const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus();
		function handleKeyDown(event) {
			if (event.key === "Escape") {
				closeModal();
				return;
			}
			if (event.key !== "Tab" || !dialogRef.current) return;
			const focusable = Array.from(dialogRef.current.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex=\"-1\"])"));
			if (focusable.length === 0) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener("keydown", handleKeyDown);
			previousFocus?.focus();
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
		};
	}, []);
	async function copyWechat(id) {
		try {
			await navigator.clipboard.writeText(id);
			setCopiedId(id);
			window.setTimeout(() => setCopiedId(""), 1800);
		} catch {
			setCopiedId("");
		}
	}
	async function copyRemark() {
		try {
			await navigator.clipboard.writeText(consultationRemark);
			setRemarkCopied(true);
			window.setTimeout(() => setRemarkCopied(false), 1800);
		} catch {
			setRemarkCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "wechat-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "wechat-label",
				children: "微信咨询"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wechat-prompt",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "扫码或复制微信号" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "点击唤起咨询方式" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"默认推荐添加 ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hue_Ge" }),
						"，如暂未通过，可添加备用微信。"
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "open-wechat-button",
				type: "button",
				onClick: (event) => openModal(event.clientX, event.clientY, event.currentTarget),
				"aria-haspopup": "dialog",
				children: ["查看微信二维码", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: "↗"
				})]
			})
		]
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `wechat-modal-backdrop${closing ? " is-closing" : ""}`,
		style: {
			"--wechat-origin-x": modalOrigin.x,
			"--wechat-origin-y": modalOrigin.y
		},
		onMouseDown: (event) => {
			if (event.target === event.currentTarget) closeModal();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wechat-modal",
			ref: dialogRef,
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "wechat-modal-title",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "wechat-modal-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WECHAT CONSULTATION" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "wechat-modal-title",
							children: "选择微信 开始咨询"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "建议优先添加主推荐微信，便于老师更快响应。" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "wechat-remark",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "添加好友时请备注" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: consultationRemark }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: copyRemark,
									"aria-label": `复制微信备注 ${consultationRemark}`,
									children: remarkCopied ? "已复制 ✓" : "复制备注"
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "wechat-modal-close",
						ref: closeButtonRef,
						type: "button",
						onClick: closeModal,
						"aria-label": "关闭微信咨询弹窗",
						children: "×"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wechat-option-grid",
					children: contacts.map((contact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `contact-option${contact.featured ? " featured" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "contact-option-heading",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contact.tag }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: contact.name })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "contact-qr-link",
								href: contact.image,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": `查看${contact.name}完整微信二维码`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									className: "contact-qr-image",
									src: contact.image,
									alt: contact.alt
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "点击二维码查看原图" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "contact-id-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "微信号" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: contact.id })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => copyWechat(contact.id),
									"aria-label": `复制微信号 ${contact.id}`,
									children: copiedId === contact.id ? "已复制 ✓" : "复制微信号"
								})]
							})
						]
					}, contact.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "wechat-modal-note",
					"aria-live": "polite",
					children: copiedId ? `微信号 ${copiedId} 已复制，可打开微信添加好友` : "电脑端可直接扫码，手机端可点击二维码查看原图后保存。"
				})
			]
		})
	}) : null] });
}
//#endregion
export { CopyWechat as default };
