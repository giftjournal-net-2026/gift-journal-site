module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/seasonal/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeasonalPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$seasonal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/seasonal.ts [app-rsc] (ecmascript)");
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$seasonal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seasonalGuides"].map((guide)=>({
            slug: guide.slug
        }));
}
async function generateMetadata({ params }) {
    const guide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$seasonal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSeasonalGuide"])((await params).slug);
    if (!guide) return {};
    return {
        title: `${guide.name} | GiftJournal`,
        description: guide.description,
        alternates: {
            canonical: `/seasonal/${guide.slug}`
        }
    };
}
async function SeasonalPage({ params }) {
    const guide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$seasonal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSeasonalGuide"])((await params).slug);
    if (!guide) return null;
    const related = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$seasonal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seasonalGuides"].filter((item)=>item.slug !== guide.slug).slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container breadcrumbs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/app/seasonal/[slug]/page.tsx",
                        lineNumber: 23,
                        columnNumber: 46
                    }, this),
                    " / ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/seasonal",
                        children: "Seasonal"
                    }, void 0, false, {
                        fileName: "[project]/app/seasonal/[slug]/page.tsx",
                        lineNumber: 23,
                        columnNumber: 75
                    }, this),
                    " / ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: guide.shortName
                    }, void 0, false, {
                        fileName: "[project]/app/seasonal/[slug]/page.tsx",
                        lineNumber: 23,
                        columnNumber: 116
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/seasonal/[slug]/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `seasonal-hero season-${guide.accent}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container seasonal-hero-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: guide.date
                                }, void 0, false, {
                                    fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: guide.name
                                }, void 0, false, {
                                    fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: guide.description
                                }, void 0, false, {
                                    fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/seasonal/[slug]/page.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        guide.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "seasonal-hero-image",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: `/images/${guide.image}`,
                                alt: guide.name,
                                fill: true,
                                priority: true,
                                sizes: "(max-width: 850px) 100vw, 50vw"
                            }, void 0, false, {
                                fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                lineNumber: 31,
                                columnNumber: 63
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/seasonal/[slug]/page.tsx",
                            lineNumber: 31,
                            columnNumber: 26
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "seasonal-art",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: guide.shortName
                            }, void 0, false, {
                                fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                lineNumber: 31,
                                columnNumber: 231
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/seasonal/[slug]/page.tsx",
                            lineNumber: 31,
                            columnNumber: 182
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/seasonal/[slug]/page.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/seasonal/[slug]/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "content-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content-narrow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lead",
                            children: guide.intro
                        }, void 0, false, {
                            fileName: "[project]/app/seasonal/[slug]/page.tsx",
                            lineNumber: 35,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "What to shop for"
                        }, void 0, false, {
                            fileName: "[project]/app/seasonal/[slug]/page.tsx",
                            lineNumber: 36,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: guide.ideas.map((idea)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: idea
                                }, idea, false, {
                                    fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 40
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/seasonal/[slug]/page.tsx",
                            lineNumber: 37,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "affiliate-ready",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "Coming soon"
                                }, void 0, false, {
                                    fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 42
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Curated recommendations"
                                }, void 0, false, {
                                    fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 86
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Verified product picks, retailer links and budget-friendly options will be added to this guide as each seasonal shopping window approaches."
                                }, void 0, false, {
                                    fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 118
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/seasonal/[slug]/page.tsx",
                            lineNumber: 38,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "disclosure",
                            children: "GiftJournal may earn a commission from qualifying purchases. Commercial recommendations are added only after product, merchant and link verification."
                        }, void 0, false, {
                            fileName: "[project]/app/seasonal/[slug]/page.tsx",
                            lineNumber: 39,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/seasonal/[slug]/page.tsx",
                    lineNumber: 34,
                    columnNumber: 44
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/seasonal/[slug]/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section soft",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "Plan ahead"
                                }, void 0, false, {
                                    fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 98
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "More seasonal guides"
                                }, void 0, false, {
                                    fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 141
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/seasonal/[slug]/page.tsx",
                            lineNumber: 41,
                            columnNumber: 68
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "seasonal-mini-grid",
                            children: related.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/seasonal/${item.slug}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 289
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.date
                                        }, void 0, false, {
                                            fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 317
                                        }, this)
                                    ]
                                }, item.slug, true, {
                                    fileName: "[project]/app/seasonal/[slug]/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 235
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/seasonal/[slug]/page.tsx",
                            lineNumber: 41,
                            columnNumber: 176
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/seasonal/[slug]/page.tsx",
                    lineNumber: 41,
                    columnNumber: 41
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/seasonal/[slug]/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/seasonal/[slug]/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/seasonal/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/seasonal/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/seasonal.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSeasonalGuide",
    ()=>getSeasonalGuide,
    "seasonalGuides",
    ()=>seasonalGuides
]);
const seasonalGuides = [
    {
        slug: 'halloween',
        name: 'Halloween Gifts',
        shortName: 'Halloween',
        date: 'October 31, 2026',
        month: 'October',
        description: 'Fun, clever and memorable Halloween gift ideas for parties, hosts, friends and family.',
        intro: 'Halloween is a great opportunity for playful gifting. We focus on useful, shareable and personality-driven ideas rather than disposable novelty items.',
        accent: 'spooky',
        priority: 'high',
        ideas: [
            'Halloween host gifts',
            'Halloween party gifts',
            'Gifts for Halloween lovers',
            'Halloween gifts for kids and adults'
        ]
    },
    {
        slug: 'thanksgiving',
        name: 'Thanksgiving Gifts',
        shortName: 'Thanksgiving',
        date: 'November 26, 2026',
        month: 'November',
        description: 'Thoughtful Thanksgiving host, hostess and Friendsgiving gift ideas for the people welcoming you to the table.',
        intro: 'Thanksgiving gifting is often about appreciation. Our guides will focus on host-friendly gifts that feel thoughtful without adding work for the person hosting.',
        accent: 'harvest',
        priority: 'high',
        ideas: [
            'Thanksgiving host gifts',
            'Friendsgiving gifts',
            'Gifts for family',
            'Thanksgiving table and entertaining gifts'
        ]
    },
    {
        slug: 'christmas',
        name: 'Christmas Gifts',
        shortName: 'Christmas',
        date: 'December 25, 2026',
        month: 'December',
        description: 'Christmas gift ideas for everyone on your list, from thoughtful budget picks to memorable splurges.',
        intro: 'Christmas is our biggest seasonal gift-shopping hub, connecting recipient guides, budget guides, personalized ideas and last-minute shopping advice.',
        accent: 'evergreen',
        image: 'christmas-gifts.jpg',
        priority: 'high',
        ideas: [
            'Gifts for her and him',
            'Gifts for family',
            'Gifts under $50',
            'Personalized and unique gifts'
        ]
    },
    {
        slug: 'new-year',
        name: 'New Year Gifts',
        shortName: 'New Year',
        date: 'December 31, 2026',
        month: 'December',
        description: 'Fresh New Year gift ideas for hosts, friends, couples and anyone starting a new chapter.',
        intro: 'New Year gifting can be celebratory, practical or personal. We will focus on gifts that fit dinners, parties, fresh starts and thoughtful resolutions.',
        accent: 'midnight',
        priority: 'medium',
        ideas: [
            'New Year host gifts',
            'Celebration gifts',
            'Fresh-start gifts',
            'Gifts for New Year gatherings'
        ]
    },
    {
        slug: 'valentines-day',
        name: "Valentine's Day Gifts",
        shortName: "Valentine's Day",
        date: 'February 14, 2027',
        month: 'February',
        description: 'Romantic and thoughtful Valentine’s Day gifts for wives, husbands, girlfriends, boyfriends and couples.',
        intro: 'Valentine’s gifting works best when it feels personal. We will organize ideas by relationship, budget and the kind of memory the gift can create.',
        accent: 'rose',
        priority: 'high',
        ideas: [
            'Gifts for wife',
            'Gifts for husband',
            'Gifts for girlfriend',
            'Gifts for boyfriend'
        ]
    },
    {
        slug: 'mothers-day',
        name: "Mother's Day Gifts",
        shortName: "Mother's Day",
        date: 'May 9, 2027',
        month: 'May',
        description: 'Meaningful Mother’s Day gift ideas for moms, grandmothers, mothers-in-law and new moms.',
        intro: 'Mother’s Day is about appreciation and personal connection. We will build practical, sentimental and personalized gift guides for different kinds of moms.',
        accent: 'blossom',
        priority: 'high',
        ideas: [
            'Gifts for mom',
            'Gifts for grandma',
            'Gifts for mother-in-law',
            'Gifts for new moms'
        ]
    },
    {
        slug: 'fathers-day',
        name: "Father's Day Gifts",
        shortName: "Father's Day",
        date: 'June 20, 2027',
        month: 'June',
        description: 'Useful and memorable Father’s Day gifts for dads, grandfathers, husbands and new fathers.',
        intro: 'The best Father’s Day gifts balance usefulness with personality. We will organize ideas around hobbies, lifestyles, budgets and relationships.',
        accent: 'blue',
        priority: 'high',
        ideas: [
            'Gifts for dad',
            'Gifts for grandpa',
            'Gifts for husband',
            'Gifts for new dads'
        ]
    }
];
function getSeasonalGuide(slug) {
    return seasonalGuides.find((guide)=>guide.slug === slug);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1cgs0mi._.js.map