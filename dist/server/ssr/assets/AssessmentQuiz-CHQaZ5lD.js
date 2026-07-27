import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/assessmentQuestions.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var questionBank = [
	{
		"id": "m01",
		"subject": "数学",
		"topic": "集合",
		"stem": "已知集合 A={1,2,3}，B={2,3,4}，则 A∩B 等于",
		"options": [
			"{1,4}",
			"{2,3}",
			"{1,2,3,4}",
			"∅"
		],
		"answer": 1,
		"explanation": "两个集合的公共元素是2和3，所以交集为{2,3}。"
	},
	{
		"id": "m02",
		"subject": "数学",
		"topic": "不等式",
		"stem": "不等式 |x-2|<3 的解集是",
		"options": [
			"x<-1",
			"x>5",
			"-1<x<5",
			"x<-1或x>5"
		],
		"answer": 2,
		"explanation": "由-3<x-2<3，得到-1<x<5。"
	},
	{
		"id": "m03",
		"subject": "数学",
		"topic": "函数",
		"stem": "已知 f(x)=2x²-3，则 f(-2) 的值为",
		"options": [
			"-11",
			"-5",
			"5",
			"11"
		],
		"answer": 2,
		"explanation": "f(-2)=2×(-2)²-3=8-3=5。"
	},
	{
		"id": "m04",
		"subject": "数学",
		"topic": "方程",
		"stem": "方程 x²-5x+6=0 的两个根是",
		"options": [
			"1和6",
			"2和3",
			"-2和-3",
			"-1和-6"
		],
		"answer": 1,
		"explanation": "x²-5x+6=(x-2)(x-3)，所以两根为2和3。"
	},
	{
		"id": "m05",
		"subject": "数学",
		"topic": "直线",
		"stem": "经过点(1,2)和(3,6)的直线斜率为",
		"options": [
			"1",
			"2",
			"3",
			"4"
		],
		"answer": 1,
		"explanation": "斜率k=(6-2)/(3-1)=2。"
	},
	{
		"id": "m06",
		"subject": "数学",
		"topic": "三角函数",
		"stem": "sin30°+cos60° 的值为",
		"options": [
			"0",
			"1/2",
			"1",
			"√3"
		],
		"answer": 2,
		"explanation": "sin30°=1/2，cos60°=1/2，两者相加为1。"
	},
	{
		"id": "m07",
		"subject": "数学",
		"topic": "等差数列",
		"stem": "等差数列首项为3，公差为2，则第6项为",
		"options": [
			"11",
			"12",
			"13",
			"15"
		],
		"answer": 2,
		"explanation": "a₆=a₁+5d=3+5×2=13。"
	},
	{
		"id": "m08",
		"subject": "数学",
		"topic": "等比数列",
		"stem": "等比数列2，6，18，…的第5项为",
		"options": [
			"54",
			"108",
			"162",
			"243"
		],
		"answer": 2,
		"explanation": "公比为3，第5项为2×3⁴=162。"
	},
	{
		"id": "m09",
		"subject": "数学",
		"topic": "向量",
		"stem": "已知向量 a=(2,-1)，b=(1,3)，则 a·b 等于",
		"options": [
			"-1",
			"1",
			"3",
			"5"
		],
		"answer": 0,
		"explanation": "a·b=2×1+(-1)×3=-1。"
	},
	{
		"id": "m10",
		"subject": "数学",
		"topic": "概率",
		"stem": "袋中有3个红球和2个蓝球，随机取出1个球，取到红球的概率为",
		"options": [
			"1/5",
			"2/5",
			"3/5",
			"4/5"
		],
		"answer": 2,
		"explanation": "共有5个球，其中3个是红球，概率为3/5。"
	},
	{
		"id": "c01",
		"subject": "语文",
		"topic": "字音",
		"stem": "下列词语中，加点字读音正确的一项是",
		"options": [
			"慰藉（jí）",
			"炽热（zhì）",
			"倔强（jué）",
			"潜力（qiǎn）"
		],
		"answer": 2,
		"explanation": "“倔强”的“倔”读jué；慰藉jiè、炽热chì、潜力qián。"
	},
	{
		"id": "c02",
		"subject": "语文",
		"topic": "字形",
		"stem": "下列词语中没有错别字的一项是",
		"options": [
			"再接再励",
			"迫不急待",
			"一筹莫展",
			"走头无路"
		],
		"answer": 2,
		"explanation": "正确写法是“一筹莫展”；其余应为再接再厉、迫不及待、走投无路。"
	},
	{
		"id": "c03",
		"subject": "语文",
		"topic": "成语",
		"stem": "下列句子中，成语使用恰当的一项是",
		"options": [
			"同学们在操场上排队，显得参差不齐、整整齐齐。",
			"经过反复练习，他解这类题已经得心应手。",
			"这篇短文内容空洞，却被老师称赞为妙手回春。",
			"面对简单问题，我们也要危言危行，故意夸大。"
		],
		"answer": 1,
		"explanation": "“得心应手”表示技艺纯熟，使用符合语境。"
	},
	{
		"id": "c04",
		"subject": "语文",
		"topic": "病句",
		"stem": "下列句子中没有语病的一项是",
		"options": [
			"通过这次复习，使我找到了薄弱环节。",
			"学校开展了以“诚信考试”为主题的教育活动。",
			"能否坚持练习，是提高成绩的关键。",
			"我们要防止类似问题不再发生。"
		],
		"answer": 1,
		"explanation": "B项结构完整；A缺少主语，C两面对一面，D否定不当。"
	},
	{
		"id": "c05",
		"subject": "语文",
		"topic": "标点",
		"stem": "下列句子中，标点符号使用正确的一项是",
		"options": [
			"他说，“今天先复习基础，明天再做综合题。”",
			"他说：“今天先复习基础，明天再做综合题。”",
			"他说：“今天先复习基础”，明天再做综合题。",
			"他说；“今天先复习基础，明天再做综合题。”"
		],
		"answer": 1,
		"explanation": "提示语在前，后用冒号，完整引用的话放在引号内。"
	},
	{
		"id": "c06",
		"subject": "语文",
		"topic": "文言实词",
		"stem": "“学而时习之，不亦说乎”中“说”的意思是",
		"options": [
			"说话",
			"劝说",
			"同“悦”，愉快",
			"解释"
		],
		"answer": 2,
		"explanation": "“说”通“悦”，表示内心感到愉快。"
	},
	{
		"id": "c07",
		"subject": "语文",
		"topic": "文言翻译",
		"stem": "“三人行，必有我师焉”的意思最准确的一项是",
		"options": [
			"三个人同行，其中一定有我的老师。",
			"多人同行，其中一定有值得我学习的人。",
			"只有三个人才能一起拜师。",
			"老师必须带着三名学生出行。"
		],
		"answer": 1,
		"explanation": "句子强调善于向身边的人学习，而不是实指三个人或正式老师。"
	},
	{
		"id": "c08",
		"subject": "语文",
		"topic": "现代文阅读",
		"stem": "阅读：小林每次整理错题，不只抄答案，还会写下错误原因，并在一周后重新完成。材料主要说明",
		"options": [
			"抄写答案比做题更重要",
			"错题数量越多越好",
			"有效复盘需要分析原因并再次检验",
			"一周只能复习一次"
		],
		"answer": 2,
		"explanation": "材料的重点是分析错误原因，并通过再次作答检验掌握情况。"
	},
	{
		"id": "c09",
		"subject": "语文",
		"topic": "诗歌鉴赏",
		"stem": "“雨后青山净，风来竹影斜”营造的意境最接近",
		"options": [
			"热烈喧闹",
			"清新宁静",
			"悲壮苍凉",
			"紧张急促"
		],
		"answer": 1,
		"explanation": "雨后青山与风中竹影共同营造清新、安静的画面。"
	},
	{
		"id": "c10",
		"subject": "语文",
		"topic": "写作审题",
		"stem": "以“在快节奏中学会慢下来”为材料，最合适的立意是",
		"options": [
			"做任何事都越慢越好",
			"完全拒绝现代生活",
			"在效率与思考之间保持平衡",
			"只要休息就一定成功"
		],
		"answer": 2,
		"explanation": "材料强调在快节奏中保留思考与沉淀，而非否定效率。"
	},
	{
		"id": "e01",
		"subject": "英语",
		"topic": "一般现在时",
		"stem": "She ___ to school by bus every day.",
		"options": [
			"go",
			"goes",
			"went",
			"going"
		],
		"answer": 1,
		"explanation": "主语She为第三人称单数，一般现在时谓语用goes。"
	},
	{
		"id": "e02",
		"subject": "英语",
		"topic": "固定搭配",
		"stem": "Tom is interested ___ computer programming.",
		"options": [
			"at",
			"in",
			"on",
			"for"
		],
		"answer": 1,
		"explanation": "be interested in是固定搭配，表示“对……感兴趣”。"
	},
	{
		"id": "e03",
		"subject": "英语",
		"topic": "现在完成时",
		"stem": "We ___ in Huizhou since 2022.",
		"options": [
			"live",
			"lived",
			"have lived",
			"are living"
		],
		"answer": 2,
		"explanation": "since 2022表示从过去持续到现在，使用现在完成时。"
	},
	{
		"id": "e04",
		"subject": "英语",
		"topic": "被动语态",
		"stem": "The classroom ___ every afternoon.",
		"options": [
			"cleans",
			"is cleaned",
			"cleaned",
			"is cleaning"
		],
		"answer": 1,
		"explanation": "教室是被打扫，且表示经常发生，用一般现在时的被动语态。"
	},
	{
		"id": "e05",
		"subject": "英语",
		"topic": "条件状语从句",
		"stem": "If it rains tomorrow, we ___ at home.",
		"options": [
			"stay",
			"stayed",
			"will stay",
			"have stayed"
		],
		"answer": 2,
		"explanation": "真实条件句遵循“主将从现”，主句用will stay。"
	},
	{
		"id": "e06",
		"subject": "英语",
		"topic": "There be句型",
		"stem": "There ___ two books and a pen on the desk.",
		"options": [
			"is",
			"are",
			"be",
			"has"
		],
		"answer": 1,
		"explanation": "就近主语two books为复数，所以用There are。"
	},
	{
		"id": "e07",
		"subject": "英语",
		"topic": "情景交际",
		"stem": "—Would you like to join our study group? —___",
		"options": [
			"Yes, I'd love to.",
			"Never mind.",
			"You're welcome.",
			"That's all right."
		],
		"answer": 0,
		"explanation": "接受邀请常用Yes, I’d love to。"
	},
	{
		"id": "e08",
		"subject": "英语",
		"topic": "词义理解",
		"stem": "You can keep the library book for two weeks. The word “keep” means",
		"options": [
			"buy",
			"borrow and hold",
			"write",
			"sell"
		],
		"answer": 1,
		"explanation": "这里keep表示借到后可以保留一段时间。"
	},
	{
		"id": "e09",
		"subject": "英语",
		"topic": "完形填空",
		"stem": "A healthy lifestyle includes eating well and ___ regularly.",
		"options": [
			"exercise",
			"exercising",
			"exercised",
			"to exercised"
		],
		"answer": 1,
		"explanation": "and连接并列结构，前面是eating，后面用exercising。"
	},
	{
		"id": "e10",
		"subject": "英语",
		"topic": "阅读主旨",
		"stem": "Read: Li Hua makes a weekly plan, finishes the hardest task first, and checks his progress every evening. What is the passage mainly about?",
		"options": [
			"How to manage study time",
			"How to cook dinner",
			"How to choose a school",
			"How to play sports"
		],
		"answer": 0,
		"explanation": "计划任务、安排先后和检查进度都属于学习时间管理。"
	}
];
//#endregion
//#region app/AssessmentQuiz.tsx
var import_jsx_runtime = require_jsx_runtime();
var subjects = [
	"数学",
	"语文",
	"英语"
];
function shuffle(items) {
	const result = [...items];
	for (let index = result.length - 1; index > 0; index -= 1) {
		const randomIndex = Math.floor(Math.random() * (index + 1));
		[result[index], result[randomIndex]] = [result[randomIndex], result[index]];
	}
	return result;
}
function createQuestionSet() {
	return subjects.flatMap((subject) => shuffle(questionBank.filter((question) => question.subject === subject)));
}
function getRecommendation(scores, total, profile) {
	const lowest = subjects.reduce((current, subject) => scores[subject] < scores[current] ? subject : current);
	if (profile.attendance === "online") return {
		title: "全科全程B班",
		label: "线上全科方案",
		match: total <= 20 ? 88 : 82,
		reason: "你目前无法稳定到校，建议先用直播与录播完成全科系统学习，再配合线上答疑。",
		nextStep: "重点关注" + lowest + "，咨询老师后再确定直播节奏与阶段任务。"
	};
	if (total <= 14) return {
		title: "全科全程A班",
		label: "线下系统打基础",
		match: 96,
		reason: "当前三科基础需要成体系地补齐，线下面授、直播、录播和课后答疑更适合持续推进。",
		nextStep: "先从" + lowest + "基础模块开始，建议预约到校完成一次更细的入学诊断。"
	};
	if (total <= 20) return {
		title: "全科全程A班",
		label: "线下分层提升",
		match: 92,
		reason: "你已经具备部分基础，但知识连接和题型应用仍需要老师带着梳理，适合线下分层学习。",
		nextStep: "把" + lowest + "作为第一补弱科目，同时保持另外两科的学习节奏。"
	};
	if (profile.examYear === "2028" || profile.weakSubject === "三科都需要") return {
		title: "全科全程A班",
		label: "线下长期规划",
		match: 88,
		reason: "你有较完整的备考时间，适合在线下课堂中稳定推进三科，并通过阶段复盘继续提升。",
		nextStep: "优先解决" + lowest + "短板，再进入综合题与限时训练。"
	};
	if (scores[lowest] <= 5) return {
		title: "全科全程A班",
		label: "线下重点补弱",
		match: 89,
		reason: "整体基础尚可，但" + lowest + "短板较明显，A班的分层教学更方便保持全科节奏并重点补弱。",
		nextStep: "建议携带最近一次试卷到校，让老师进一步判断" + lowest + "失分类型。"
	};
	return {
		title: "线下冲刺提升方案",
		label: "题型与速度强化",
		match: total >= 26 ? 82 : 85,
		reason: "三科基础较均衡，现阶段更适合通过线下限时训练、题型拆解和错题复盘提高稳定性。",
		nextStep: "建议预约一次到校测评，再根据目标院校确定冲刺强度。"
	};
}
function AssessmentQuiz() {
	const [phase, setPhase] = (0, import_react.useState)("intro");
	const [profile, setProfile] = (0, import_react.useState)({
		examYear: "",
		attendance: "",
		weakSubject: ""
	});
	const [questions, setQuestions] = (0, import_react.useState)([]);
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [result, setResult] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const currentQuestion = questions[currentIndex];
	const selectedOption = currentQuestion ? answers[currentQuestion.id] : void 0;
	const profileReady = Boolean(profile.examYear && profile.attendance && profile.weakSubject);
	const progress = (0, import_react.useMemo)(() => questions.length ? Math.round((currentIndex + 1) / questions.length * 100) : 0, [currentIndex, questions.length]);
	function beginQuiz() {
		setQuestions(createQuestionSet());
		setAnswers({});
		setCurrentIndex(0);
		setResult(null);
		setPhase("quiz");
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	function finishAssessment() {
		const scores = {
			数学: 0,
			语文: 0,
			英语: 0
		};
		for (const question of questions) if (answers[question.id] === question.answer) scores[question.subject] += 1;
		const total = scores.数学 + scores.语文 + scores.英语;
		setResult({
			scores,
			total,
			recommendation: getRecommendation(scores, total, profile)
		});
		setPhase("result");
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	function nextQuestion() {
		if (selectedOption === void 0) return;
		if (currentIndex === questions.length - 1) finishAssessment();
		else setCurrentIndex((index) => index + 1);
	}
	function restart() {
		setPhase("intro");
		setQuestions([]);
		setAnswers({});
		setCurrentIndex(0);
		setResult(null);
		setCopied(false);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	async function copyResult() {
		if (!result) return;
		const text = "考啦教育免费测评：数学" + result.scores.数学 + "/10，语文" + result.scores.语文 + "/10，英语" + result.scores.英语 + "/10，总分" + result.total + "/30。推荐" + result.recommendation.title + "，班型匹配度" + result.recommendation.match + "% 。";
		await navigator.clipboard.writeText(text);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1800);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "assessment-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "assessment-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "brand",
					href: "/kaola",
					"aria-label": "返回考啦教育",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "brand-mark",
						children: "考"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "brand-copy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "考啦教育" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "KAOLA EDUCATION" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "assessment-header-meta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "免费测评" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/kaola",
						children: "返回课程页"
					})]
				})]
			}),
			phase === "intro" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "assessment-intro",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "assessment-intro-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "assessment-kicker",
							children: "30 QUESTIONS · 3 SUBJECTS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
							"用30道题",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"看清你的",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "备考起点" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "语文、数学、英语各10题，题序随机。完成后获得三科基础分析和线下班型建议。" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "assessment-start-button",
							type: "button",
							onClick: () => setPhase("profile"),
							children: ["开始免费测评 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "→"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "预计用时8—12分钟 · 无需填写手机号" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "assessment-intro-board",
					"aria-label": "测评说明",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "assessment-board-number",
						children: "30"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "assessment-board-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "数学 10题" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "函数 · 数列 · 几何 · 概率" })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "语文 10题" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "基础知识 · 阅读 · 表达" })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "英语 10题" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "词汇语法 · 阅读 · 应用" })
							] })
						]
					})]
				})]
			}),
			phase === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "assessment-profile",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "assessment-stage-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "assessment-kicker",
								children: "BEFORE THE QUIZ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "不计分 · 用于匹配学习方式" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "先了解你的备考情况" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "profile-question-list",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), "计划参加哪一年考试？"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "profile-options",
								children: [
									"2027",
									"2028",
									"暂未确定"
								].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: profile.examYear === value ? "is-selected" : "",
									type: "button",
									onClick: () => setProfile((item) => ({
										...item,
										examYear: value
									})),
									children: value === "暂未确定" ? value : value + "年"
								}, value))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), "是否方便到惠州江北校区学习？"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "profile-options",
								children: [
									["offline", "可以长期线下"],
									["hybrid", "线下为主，偶尔线上"],
									["online", "目前只能线上"]
								].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: profile.attendance === value ? "is-selected" : "",
									type: "button",
									onClick: () => setProfile((item) => ({
										...item,
										attendance: value
									})),
									children: label
								}, value))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }), "目前感觉最需要提高哪一科？"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "profile-options",
								children: [
									"数学",
									"语文",
									"英语",
									"三科都需要"
								].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: profile.weakSubject === value ? "is-selected" : "",
									type: "button",
									onClick: () => setProfile((item) => ({
										...item,
										weakSubject: value
									})),
									children: value
								}, value))
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "assessment-stage-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setPhase("intro"),
							children: "返回"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "assessment-solid-button",
							disabled: !profileReady,
							type: "button",
							onClick: beginQuiz,
							children: ["进入答题 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "→"
							})]
						})]
					})
				]
			}),
			phase === "quiz" && currentQuestion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "assessment-quiz",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "quiz-progress",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentQuestion.subject }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
								String(currentIndex + 1).padStart(2, "0"),
								" / ",
								questions.length
							] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "quiz-progress-track",
								"aria-label": "答题进度" + progress + "%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: progress + "%" } })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [progress, "%"] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "quiz-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "quiz-card-meta",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentQuestion.topic }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "单项选择题" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: currentQuestion.stem }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "quiz-options",
								role: "radiogroup",
								"aria-label": "请选择答案",
								children: currentQuestion.options.map((option, optionIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: selectedOption === optionIndex ? "is-selected" : "",
									type: "button",
									role: "radio",
									"aria-checked": selectedOption === optionIndex,
									onClick: () => setAnswers((items) => ({
										...items,
										[currentQuestion.id]: optionIndex
									})),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String.fromCharCode(65 + optionIndex) }),
										option,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { "aria-hidden": "true" })
									]
								}, option))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "quiz-navigation",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: currentIndex === 0,
							type: "button",
							onClick: () => setCurrentIndex((index) => Math.max(0, index - 1)),
							children: "← 上一题"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "assessment-solid-button",
							disabled: selectedOption === void 0,
							type: "button",
							onClick: nextQuestion,
							children: [
								currentIndex === questions.length - 1 ? "提交测评" : "下一题",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "→"
								})
							]
						})]
					})
				]
			}),
			phase === "result" && result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "assessment-result",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "result-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "match-ring",
							style: { "--match-angle": result.recommendation.match * 3.6 + "deg" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [result.recommendation.match, "%"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "班型匹配度" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "assessment-kicker",
								children: "YOUR LEARNING PLAN"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "result-label",
								children: result.recommendation.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["推荐你选择", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: result.recommendation.title })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: result.recommendation.reason })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "result-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "score-panel",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "result-panel-title",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "三科得分" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [result.total, " / 30"] })]
							}), subjects.map((subject) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "subject-score",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: subject }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [result.scores[subject], " / 10"] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "subject-score-track",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: result.scores[subject] * 10 + "%" } })
								})]
							}, subject))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "next-step-panel",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NEXT STEP" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "下一步建议" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: result.recommendation.nextStep }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "result-actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "/kaola#contact",
										children: ["微信咨询老师 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: "↗"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: copyResult,
										children: copied ? "已复制测评结果" : "复制测评结果"
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "wrong-answer-review",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: ["查看错题与解析 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "＋"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [questions.filter((question) => answers[question.id] !== question.answer).map((question) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								question.subject,
								" · ",
								question.topic
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: question.stem }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"正确答案：",
								String.fromCharCode(65 + question.answer),
								" · ",
								question.options[question.answer]
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: question.explanation })
						] }, question.id)), questions.every((question) => answers[question.id] === question.answer) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "perfect-score",
							children: "全部答对，基础表现非常稳定。"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "result-footer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "本测评为原创基础诊断题，仅用于初步学习规划与课程建议，不代表正式考试成绩、录取概率或报考资格。" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: restart,
							children: "重新测评"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { AssessmentQuiz as default };
