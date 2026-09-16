module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/[...slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GuidePage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$gifts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/gifts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$guideContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/guideContent.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GiftCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GiftCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$affiliate$2f$ProductRecommendations$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/affiliate/ProductRecommendations.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$gifts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["giftGuides"].map((g)=>({
            slug: g.slug.split('/')
        }));
}
async function generateMetadata({ params }) {
    const g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$gifts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGuide"])((await params).slug.join('/'));
    if (!g) return {};
    return {
        title: g.title,
        description: g.description,
        alternates: {
            canonical: `/${g.slug}`
        },
        openGraph: {
            title: g.title,
            description: g.description,
            images: [
                {
                    url: `/images/${g.image}`,
                    width: 1920,
                    height: 1080,
                    alt: g.title
                }
            ]
        }
    };
}
async function GuidePage({ params }) {
    const g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$gifts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGuide"])((await params).slug.join('/'));
    if (!g) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$guideContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGuideContent"])(g.slug);
    const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsForGuide"])(g.slug);
    const related = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$gifts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["giftGuides"].filter((x)=>x.slug !== g.slug && x.category === g.category).slice(0, 4);
    const breadcrumbs = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: g.category,
            href: g.category === 'Christmas' ? '/christmas-gifts' : '/gifts-for-women'
        },
        {
            label: g.title,
            href: `/${g.slug}`
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "breadcrumbs container",
                "aria-label": "Breadcrumb",
                children: breadcrumbs.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: " / "
                            }, void 0, false, {
                                fileName: "[project]/app/[...slug]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 27
                            }, this),
                            index === breadcrumbs.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/app/[...slug]/page.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/app/[...slug]/page.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.href, true, {
                        fileName: "[project]/app/[...slug]/page.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/[...slug]/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "guide-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "guide-hero-image",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: `/images/${g.image}`,
                                alt: g.title,
                                fill: true,
                                priority: true,
                                sizes: "(max-width: 900px) 100vw, 1180px"
                            }, void 0, false, {
                                fileName: "[project]/app/[...slug]/page.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/[...slug]/page.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "guide-overlay",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: [
                                        g.category,
                                        " Gift Guide"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[...slug]/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: g.title
                                }, void 0, false, {
                                    fileName: "[project]/app/[...slug]/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: g.description
                                }, void 0, false, {
                                    fileName: "[project]/app/[...slug]/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[...slug]/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[...slug]/page.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[...slug]/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "content-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content-narrow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lead",
                            children: content.intro
                        }, void 0, false, {
                            fileName: "[project]/app/[...slug]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "quick-nav",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "On this guide"
                                }, void 0, false, {
                                    fileName: "[project]/app/[...slug]/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        content.sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
                                                children: section.heading
                                            }, section.heading, false, {
                                                fileName: "[project]/app/[...slug]/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#faq",
                                            children: "FAQs"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[...slug]/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[...slug]/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[...slug]/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        content.sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: section.heading
                                    }, void 0, false, {
                                        fileName: "[project]/app/[...slug]/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    section.paragraphs.map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: paragraph
                                        }, paragraph, false, {
                                            fileName: "[project]/app/[...slug]/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 54
                                        }, this)),
                                    section.bullets && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: section.bullets.map((bullet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: bullet
                                            }, bullet, false, {
                                                fileName: "[project]/app/[...slug]/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 52
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[...slug]/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, section.heading, true, {
                                fileName: "[project]/app/[...slug]/page.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$affiliate$2f$ProductRecommendations$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductRecommendations"], {
                            products: products,
                            heading: `Recommended gifts for ${g.title.replace(/^Gifts? for /, '').replace(/^Christmas Gifts for /, '')}`
                        }, void 0, false, {
                            fileName: "[project]/app/[...slug]/page.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "affiliate-ready",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "Shopping note"
                                }, void 0, false, {
                                    fileName: "[project]/app/[...slug]/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "When you are ready to compare products"
                                }, void 0, false, {
                                    fileName: "[project]/app/[...slug]/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "GiftJournal will add product recommendations only when the product, retailer, destination link and important commercial details can be verified. Prices and availability can change, so always confirm the final details at the retailer before buying."
                                }, void 0, false, {
                                    fileName: "[project]/app/[...slug]/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[...slug]/page.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "faq",
                            className: "faq",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "Questions"
                                }, void 0, false, {
                                    fileName: "[project]/app/[...slug]/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Frequently asked questions"
                                }, void 0, false, {
                                    fileName: "[project]/app/[...slug]/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                content.faqs.map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                children: faq.question
                                            }, void 0, false, {
                                                fileName: "[project]/app/[...slug]/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: faq.answer
                                            }, void 0, false, {
                                                fileName: "[project]/app/[...slug]/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, faq.question, true, {
                                        fileName: "[project]/app/[...slug]/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[...slug]/page.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "disclosure",
                            children: "GiftJournal may earn a commission from qualifying purchases. Commercial product recommendations are added only after product, merchant and link verification."
                        }, void 0, false, {
                            fileName: "[project]/app/[...slug]/page.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[...slug]/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[...slug]/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            related.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section soft",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "Keep exploring"
                                }, void 0, false, {
                                    fileName: "[project]/app/[...slug]/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Related gift guides"
                                }, void 0, false, {
                                    fileName: "[project]/app/[...slug]/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[...slug]/page.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "guide-grid",
                            children: related.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GiftCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GiftCard"], {
                                    guide: x
                                }, x.slug, false, {
                                    fileName: "[project]/app/[...slug]/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 35
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/[...slug]/page.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[...slug]/page.tsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[...slug]/page.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container back",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: "← Back to GiftJournal"
                }, void 0, false, {
                    fileName: "[project]/app/[...slug]/page.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[...slug]/page.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[...slug]/page.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[...slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[...slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/GiftCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GiftCard",
    ()=>GiftCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
function GiftCard({ guide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        className: "guide-card",
        href: `/${guide.slug}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "guide-image",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: `/images/${guide.image}`,
                    alt: "",
                    fill: true,
                    sizes: "(max-width: 800px) 100vw, 33vw"
                }, void 0, false, {
                    fileName: "[project]/components/GiftCard.tsx",
                    lineNumber: 2,
                    columnNumber: 142
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/GiftCard.tsx",
                lineNumber: 2,
                columnNumber: 113
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "guide-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: guide.category
                    }, void 0, false, {
                        fileName: "[project]/components/GiftCard.tsx",
                        lineNumber: 2,
                        columnNumber: 267
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: guide.title
                    }, void 0, false, {
                        fileName: "[project]/components/GiftCard.tsx",
                        lineNumber: 2,
                        columnNumber: 296
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: guide.description
                    }, void 0, false, {
                        fileName: "[project]/components/GiftCard.tsx",
                        lineNumber: 2,
                        columnNumber: 318
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Explore guide →"
                    }, void 0, false, {
                        fileName: "[project]/components/GiftCard.tsx",
                        lineNumber: 2,
                        columnNumber: 344
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GiftCard.tsx",
                lineNumber: 2,
                columnNumber: 239
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/GiftCard.tsx",
        lineNumber: 2,
        columnNumber: 60
    }, this);
}
}),
"[project]/components/affiliate/ProductCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function ProductCard({ product }) {
    const destination = product.affiliateUrl || product.productUrl;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "product-card",
        children: [
            product.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "product-badge",
                children: product.badge
            }, void 0, false, {
                fileName: "[project]/components/affiliate/ProductCard.tsx",
                lineNumber: 9,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "product-card-copy",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: product.retailer
                    }, void 0, false, {
                        fileName: "[project]/components/affiliate/ProductCard.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/components/affiliate/ProductCard.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: product.description
                    }, void 0, false, {
                        fileName: "[project]/components/affiliate/ProductCard.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/affiliate/ProductCard.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "product-card-meta",
                children: [
                    product.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: product.price
                    }, void 0, false, {
                        fileName: "[project]/components/affiliate/ProductCard.tsx",
                        lineNumber: 16,
                        columnNumber: 27
                    }, this),
                    typeof product.rating === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-label": `Rated ${product.rating} out of 5`,
                        children: [
                            "★ ",
                            product.rating.toFixed(1),
                            product.reviewCount ? ` (${product.reviewCount.toLocaleString()})` : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/affiliate/ProductCard.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: destination,
                        target: "_blank",
                        rel: `${product.affiliateUrl ? "sponsored nofollow " : ""}noopener`,
                        children: "View product →"
                    }, void 0, false, {
                        fileName: "[project]/components/affiliate/ProductCard.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/affiliate/ProductCard.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/affiliate/ProductCard.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/affiliate/ProductRecommendations.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductRecommendations",
    ()=>ProductRecommendations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$affiliate$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/affiliate/ProductCard.tsx [app-rsc] (ecmascript)");
;
;
function ProductRecommendations({ products, heading = 'Our gift picks', intro = 'We compare products only after checking the retailer, product details and destination link.' }) {
    if (!products.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "product-section",
        "aria-labelledby": "product-picks-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "eyebrow",
                children: "Editor’s picks"
            }, void 0, false, {
                fileName: "[project]/components/affiliate/ProductRecommendations.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "product-picks-heading",
                children: heading
            }, void 0, false, {
                fileName: "[project]/components/affiliate/ProductRecommendations.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: intro
            }, void 0, false, {
                fileName: "[project]/components/affiliate/ProductRecommendations.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "product-grid",
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$affiliate$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductCard"], {
                        product: product
                    }, product.id, false, {
                        fileName: "[project]/components/affiliate/ProductRecommendations.tsx",
                        lineNumber: 21,
                        columnNumber: 36
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/affiliate/ProductRecommendations.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "product-disclosure",
                children: "GiftJournal may earn a commission when you buy through qualifying links. Prices and availability can change; check the retailer before purchasing."
            }, void 0, false, {
                fileName: "[project]/components/affiliate/ProductRecommendations.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/affiliate/ProductRecommendations.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/gifts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGuide",
    ()=>getGuide,
    "giftGuides",
    ()=>giftGuides
]);
const giftGuides = [
    [
        'christmas-gifts',
        'Christmas Gifts',
        'Thoughtful Christmas gift ideas for every kind of recipient.',
        'christmas-gifts.jpg',
        'Christmas'
    ],
    [
        'christmas-gifts-for-her',
        'Christmas Gifts for Her',
        'Elegant and thoughtful Christmas gift inspiration for women.',
        'christmas-gifts-for-her.jpg',
        'Christmas'
    ],
    [
        'christmas-gifts-for-him',
        'Christmas Gifts for Him',
        'Refined Christmas gift inspiration for men with different tastes and interests.',
        'christmas-gifts-for-him.jpg',
        'Christmas'
    ],
    [
        'christmas-gifts-for-mom',
        'Christmas Gifts for Mom',
        'Warm, personal and useful Christmas gift ideas for Mom.',
        'christmas-gifts-for-mom.jpg',
        'Christmas'
    ],
    [
        'christmas-gifts-for-dad',
        'Christmas Gifts for Dad',
        'Practical and premium Christmas gift inspiration for Dad.',
        'christmas-gifts-for-dad.jpg',
        'Christmas'
    ],
    [
        'christmas-gifts-for-someone-who-has-everything',
        'Christmas Gifts for Someone Who Has Everything',
        'Unusual, memorable and conversation-starting Christmas gift ideas.',
        'christmas-gifts-for-someone-who-has-everything.jpg',
        'Christmas'
    ],
    [
        'christmas-gifts-under-50',
        'Christmas Gifts Under $50',
        'Great-looking Christmas gift ideas for a modest budget.',
        'christmas-gifts-under-50.jpg',
        'Christmas'
    ],
    [
        'unique-christmas-gifts',
        'Unique Christmas Gifts',
        'Unexpected Christmas gifts for people who are hard to shop for.',
        'unique-christmas-gifts.jpg',
        'Christmas'
    ],
    [
        'personalized-christmas-gifts',
        'Personalized Christmas Gifts',
        'Personal touches that can make a Christmas gift feel more meaningful.',
        'personalized-christmas-gift.jpg',
        'Christmas'
    ],
    [
        'gifts-for-women',
        'Gifts for Women',
        'A practical, stylish guide to choosing gifts women will genuinely enjoy.',
        'gifts-for-women.jpg',
        'Evergreen'
    ],
    [
        'gifts-for-men',
        'Gifts for Men',
        'Gift inspiration for men across hobbies, lifestyle and everyday interests.',
        'gifts-for-men.jpg',
        'Evergreen'
    ],
    [
        'gifts-for-wife',
        'Gifts for Wife',
        'Thoughtful gift inspiration for celebrating your wife.',
        'gifts-for-wife.jpg',
        'Evergreen'
    ],
    [
        'gifts-for-husband',
        'Gifts for Husband',
        'Useful, personal and refined gift ideas for your husband.',
        'gifts-for-husband.jpg',
        'Evergreen'
    ],
    [
        'gifts-for-girlfriend',
        'Gifts for Girlfriend',
        'Romantic and thoughtful gift inspiration for your girlfriend.',
        'gifts-for-girlfriend.jpg',
        'Evergreen'
    ],
    [
        'gifts-for-boyfriend',
        'Gifts for Boyfriend',
        'Gift ideas for a boyfriend that feel personal without being predictable.',
        'gifts-for-boyfriend.jpg',
        'Evergreen'
    ],
    [
        'gifts-for-sister',
        'Gifts for Sister',
        'Fun, useful and meaningful gifts for your sister.',
        'gifts-for-sister.jpg',
        'Evergreen'
    ],
    [
        'gifts-for-brother',
        'Gifts for Brother',
        'Gift inspiration for brothers with different personalities and interests.',
        'gifts-for-brother.jpg',
        'Evergreen'
    ],
    [
        'gifts-for-best-friend',
        'Gifts for Best Friend',
        'Warm and memorable gift ideas for your closest friend.',
        'gifts-for-best-friend.jpg',
        'Evergreen'
    ],
    [
        'gifts-for-coworkers',
        'Gifts for Coworkers',
        'Tasteful gift ideas that work well for colleagues and office settings.',
        'gifts-for-coworkers.jpg',
        'Evergreen'
    ],
    [
        'birthday-gift-ideas',
        'Birthday Gift Ideas',
        'A practical collection of birthday gift inspiration for different people and budgets.',
        'birthday-gifts-ideas.jpg',
        'Evergreen'
    ],
    [
        'anniversary-gifts',
        'Anniversary Gifts',
        'Elegant anniversary gift inspiration for meaningful celebrations.',
        'anniversary-gifts.jpg',
        'Evergreen'
    ]
].map(([slug, title, description, image, category])=>({
        slug,
        title,
        description,
        image,
        category: category
    }));
function getGuide(slug) {
    return giftGuides.find((guide)=>guide.slug === slug);
}
}),
"[project]/data/guideContent.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGuideContent",
    ()=>getGuideContent
]);
const evergreen = {
    'gifts-for-women': {
        intro: 'The best gifts for women feel considered rather than complicated. Start with her routines, interests and the little luxuries she enjoys, then narrow the search to something useful, beautiful or genuinely personal.',
        sections: [
            {
                heading: 'Start with her everyday life',
                paragraphs: [
                    'Think about what she reaches for every day, how she spends her free time and what she has mentioned wanting to try. Those clues usually produce better ideas than shopping from a generic list.'
                ]
            },
            {
                heading: 'Gift directions worth exploring',
                paragraphs: [
                    'Self-care, style, home, hobbies, food, travel and practical upgrades can all make strong starting points. Choose the direction that best matches her personality and current interests.'
                ],
                bullets: [
                    'Something that improves an everyday routine',
                    'A small luxury she would enjoy but may not buy herself',
                    'A hobby-related gift that shows you know what she likes',
                    'A personalized or sentimental option when the relationship calls for it'
                ]
            },
            {
                heading: 'Before you buy',
                paragraphs: [
                    'Check dimensions, materials, compatibility, delivery timing, return terms and the retailer’s current product information before purchasing.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What makes a good gift for a woman?',
                answer: 'A good gift reflects the recipient rather than a stereotype. Her interests, habits, style and the reason you are giving the gift are the most useful clues.'
            },
            {
                question: 'How do I choose when I do not know her preferences well?',
                answer: 'Favor broadly useful, well-designed items or experiences and avoid highly personal sizing, fragrance or style choices unless you know what she prefers.'
            }
        ]
    },
    'gifts-for-men': {
        intro: 'Great gifts for men do not have to be complicated. The strongest choices usually connect to a hobby, routine, personal interest or a small upgrade he will actually use.',
        sections: [
            {
                heading: 'Shop around his interests',
                paragraphs: [
                    'Start with the activities he already enjoys: cooking, fitness, travel, technology, outdoors, coffee, style, reading or relaxing at home.'
                ]
            },
            {
                heading: 'Useful can still feel special',
                paragraphs: [
                    'Look for thoughtful upgrades rather than novelty for novelty’s sake. A well-chosen everyday item can feel more personal when it solves a real problem or fits naturally into his routine.'
                ],
                bullets: [
                    'Hobby and interest-based gifts',
                    'Everyday upgrades',
                    'Travel and organization ideas',
                    'Relaxation and home gifts'
                ]
            },
            {
                heading: 'Keep the final choice practical',
                paragraphs: [
                    'Confirm compatibility, sizing, materials, delivery timing and return policies before ordering.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What are safe gift categories for men?',
                answer: 'Hobby-related gifts, useful everyday upgrades, travel accessories, home comforts and items connected to an established interest are reliable starting points.'
            },
            {
                question: 'How can I make a practical gift feel more personal?',
                answer: 'Choose something that clearly connects to his routine or interest, and consider presentation or a short handwritten note.'
            }
        ]
    },
    'gifts-for-wife': {
        intro: 'A memorable gift for your wife is usually less about price and more about showing that you notice her. Think about her current interests, routines and the moments you share together.',
        sections: [
            {
                heading: 'Think about what she would choose for herself',
                paragraphs: [
                    'Notice what she has been enjoying lately and what she keeps postponing. A gift can be a useful upgrade, a personal treat or something that creates time together.'
                ]
            },
            {
                heading: 'Choose meaning over pressure',
                paragraphs: [
                    'For anniversaries and milestones, a sentimental or experience-led idea can work especially well. For everyday occasions, useful little luxuries may feel more natural.'
                ]
            },
            {
                heading: 'A simple final check',
                paragraphs: [
                    'Ask yourself whether the gift feels connected to her, rather than simply connected to the occasion. That final test can eliminate many generic options.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What is a thoughtful gift for a wife?',
                answer: 'Look for something that reflects her interests, a shared memory, a current need or a small luxury she would genuinely enjoy.'
            },
            {
                question: 'Should a gift for a wife be romantic?',
                answer: 'It can be, but it does not have to be. Thoughtfulness comes from relevance and attention to her preferences.'
            }
        ]
    },
    'gifts-for-husband': {
        intro: 'The easiest way to choose a gift for your husband is to start with what he actually does, not with a generic list of gifts for men.',
        sections: [
            {
                heading: 'Use his routines as clues',
                paragraphs: [
                    'Look at his hobbies, weekend habits, work setup, travel routines and the things he repeatedly uses. A thoughtful upgrade can be more successful than a novelty item.'
                ]
            },
            {
                heading: 'Make it personal without overthinking it',
                paragraphs: [
                    'A gift connected to a shared experience or a long-standing interest can feel meaningful without being overly sentimental.'
                ]
            },
            {
                heading: 'Check the practical details',
                paragraphs: [
                    'For electronics, accessories and equipment, verify compatibility. For clothing and wearable items, check sizing and return terms.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What makes a good husband gift?',
                answer: 'Choose something that connects to his interests, routines or a shared memory and that he is likely to use or enjoy.'
            },
            {
                question: 'What if he buys everything himself?',
                answer: 'Consider an experience, a personalized item or a thoughtful upgrade that he would appreciate but has not prioritized.'
            }
        ]
    },
    'gifts-for-girlfriend': {
        intro: 'Gifts for a girlfriend are strongest when they feel specific to the relationship. Use what you know about her interests, style, routines and shared memories as your starting point.',
        sections: [
            {
                heading: 'Notice the small clues',
                paragraphs: [
                    'Pay attention to things she has admired, mentioned, saved or enjoyed recently. Those details can turn a broad search into a much more personal choice.'
                ]
            },
            {
                heading: 'Match the gift to the relationship',
                paragraphs: [
                    'A new relationship may call for something light and thoughtful, while a long-term relationship can support a more sentimental or personalized choice.'
                ]
            },
            {
                heading: 'Presentation matters',
                paragraphs: [
                    'A simple gift can feel much more considered with thoughtful wrapping and a short note that explains why you chose it.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What is a thoughtful gift for a girlfriend?',
                answer: 'Choose something connected to her interests, a shared memory or a small luxury that suits her personality.'
            },
            {
                question: 'How do I avoid giving a generic romantic gift?',
                answer: 'Use specific clues about her preferences and choose the category before choosing the product.'
            }
        ]
    },
    'gifts-for-boyfriend': {
        intro: 'A good gift for a boyfriend should feel like it was chosen for him. Start with his hobbies, routines and interests, then look for something useful, enjoyable or memorable.',
        sections: [
            {
                heading: 'Start with what he already enjoys',
                paragraphs: [
                    'Gaming, fitness, cooking, travel, music, technology, coffee, outdoors and personal style can all provide useful directions when they match his real interests.'
                ]
            },
            {
                heading: 'Choose an upgrade or a new experience',
                paragraphs: [
                    'If he already owns the basics, look for an improved version of something he uses or choose an experience you can enjoy together.'
                ]
            },
            {
                heading: 'Avoid guessing on technical details',
                paragraphs: [
                    'For technology and equipment, verify model compatibility and current specifications before purchasing.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What makes a boyfriend gift feel personal?',
                answer: 'A strong gift reflects something he actually likes or a memory you share rather than relying only on a generic romantic theme.'
            },
            {
                question: 'What if he is difficult to shop for?',
                answer: 'Use his existing hobbies and routines as clues, or choose a shared experience when products are hard to narrow down.'
            }
        ]
    },
    'gifts-for-sister': {
        intro: 'Whether your sister loves beauty, books, travel, home comforts or a particular hobby, the best gift starts with what makes her different from everyone else.',
        sections: [
            {
                heading: 'Shop for her personality',
                paragraphs: [
                    'Think about her current interests and the things she reaches for most. A gift that fits her life will usually beat something chosen only because it is popular.'
                ]
            },
            {
                heading: 'Consider useful treats',
                paragraphs: [
                    'Small upgrades, personalized details and everyday luxuries can make excellent sister gifts without needing to be extravagant.'
                ]
            },
            {
                heading: 'When in doubt, make it shared',
                paragraphs: [
                    'An activity, meal or experience can be a memorable option when you want the gift itself to create another good memory.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What is a thoughtful gift for a sister?',
                answer: 'Choose something that matches her interests, daily routines or a shared memory, with personalization when it feels natural.'
            },
            {
                question: 'Are experience gifts good for sisters?',
                answer: 'Yes. Shared experiences can be especially meaningful when you want the gift to become a memory rather than another object.'
            }
        ]
    },
    'gifts-for-brother': {
        intro: 'The best gifts for a brother are usually grounded in what he actually enjoys. Hobbies, practical routines and long-running interests are your best clues.',
        sections: [
            {
                heading: 'Follow the hobby',
                paragraphs: [
                    'Start with the activities he spends time and money on already. A carefully chosen accessory or upgrade can be more useful than an unrelated novelty.'
                ]
            },
            {
                heading: 'Useful does not mean boring',
                paragraphs: [
                    'A well-designed everyday item can be a great gift when it solves a small problem or improves something he already does.'
                ]
            },
            {
                heading: 'Keep compatibility in mind',
                paragraphs: [
                    'For equipment, electronics and accessories, confirm models, sizes and compatibility before buying.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What should I buy for a brother who has everything?',
                answer: 'Consider an experience, a personalized item or an upgrade connected to an established hobby or routine.'
            },
            {
                question: 'How can I choose a gift without knowing his style?',
                answer: 'Focus on function and established interests rather than highly style-dependent items.'
            }
        ]
    },
    'gifts-for-best-friend': {
        intro: 'A great best-friend gift can be funny, useful, sentimental or simply something that says you know them well. Shared memories and inside knowledge are your advantage.',
        sections: [
            {
                heading: 'Use your shared history',
                paragraphs: [
                    'Think about trips, jokes, favorite places, hobbies and conversations you have had. These details can lead to ideas that feel impossible to make generic.'
                ]
            },
            {
                heading: 'Pick the feeling first',
                paragraphs: [
                    'Decide whether you want the gift to feel useful, playful, nostalgic, relaxing or celebratory. Then choose the category and product.'
                ]
            },
            {
                heading: 'Do not underestimate a small gesture',
                paragraphs: [
                    'A modest gift with a personal note can be more memorable than an expensive item with no connection to the friendship.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What makes a best-friend gift special?',
                answer: 'Personal context is the key. Shared memories, inside jokes and known interests can make even a simple gift feel unique.'
            },
            {
                question: 'Should best-friend gifts be expensive?',
                answer: 'No. Relevance and thoughtfulness matter more than a high price.'
            }
        ]
    },
    'gifts-for-coworkers': {
        intro: 'Coworker gifts work best when they are useful, tasteful and appropriate for the relationship and workplace. When in doubt, choose broadly appealing items rather than highly personal ones.',
        sections: [
            {
                heading: 'Keep workplace context in mind',
                paragraphs: [
                    'Consider company culture, your relationship with the recipient and any workplace gift policies before choosing a gift.'
                ]
            },
            {
                heading: 'Useful and easy to appreciate',
                paragraphs: [
                    'Desk accessories, coffee and tea items, food gifts, notebooks and small home or lifestyle items can provide useful starting points.'
                ]
            },
            {
                heading: 'For group gifting',
                paragraphs: [
                    'Set a clear budget and choose something easy to distribute or enjoy. Avoid assumptions about personal tastes, sizes or sensitive preferences.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What is a safe coworker gift?',
                answer: 'Useful, tasteful and broadly appealing items are generally easier choices than highly personal gifts.'
            },
            {
                question: 'Should I check company policy?',
                answer: 'Yes. Some workplaces have limits or rules around gifts, especially between managers and direct reports.'
            }
        ]
    },
    'birthday-gift-ideas': {
        intro: 'Birthday shopping becomes easier when you start with the person, their interests and your budget. Use the occasion as a filter, not as the only source of inspiration.',
        sections: [
            {
                heading: 'Choose the recipient before the product',
                paragraphs: [
                    'A birthday gift for a parent, partner, friend or coworker will naturally have different expectations. Define the relationship first.'
                ]
            },
            {
                heading: 'Use a budget deliberately',
                paragraphs: [
                    'Set your comfortable budget before browsing. Then compare ideas within that range rather than letting individual products reset your expectations.'
                ]
            },
            {
                heading: 'Make the moment count',
                paragraphs: [
                    'Presentation, timing and a personal message can make an ordinary gift feel much more intentional.'
                ]
            }
        ],
        faqs: [
            {
                question: 'How do I choose a birthday gift?',
                answer: 'Start with the recipient, then narrow by interests, relationship, occasion and budget before comparing specific products.'
            },
            {
                question: 'What if I need a last-minute birthday gift?',
                answer: 'Prioritize options with clear delivery information or readily available local pickup, and verify availability before purchasing.'
            }
        ]
    },
    'anniversary-gifts': {
        intro: 'Anniversary gifts are an opportunity to celebrate the relationship itself. Shared memories, meaningful milestones and things you can enjoy together are useful starting points.',
        sections: [
            {
                heading: 'Start with your story',
                paragraphs: [
                    'Think about an important place, date, trip, hobby or moment you share. Personal context can guide the entire gift search.'
                ]
            },
            {
                heading: 'Choose the right level of sentiment',
                paragraphs: [
                    'Some couples prefer practical gifts, while others enjoy keepsakes or experiences. Match the gift to your relationship rather than following a rule blindly.'
                ]
            },
            {
                heading: 'Plan the presentation',
                paragraphs: [
                    'A handwritten note, thoughtful wrapping or a planned moment around the gift can add meaning without adding unnecessary cost.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What makes a good anniversary gift?',
                answer: 'A good anniversary gift connects to your relationship, shared memories, interests or the experience you want to create together.'
            },
            {
                question: 'Are experience gifts good anniversary gifts?',
                answer: 'They can be excellent when the experience matches both people and gives you time to enjoy something together.'
            }
        ]
    }
};
const christmas = {
    'christmas-gifts': {
        intro: 'Christmas shopping is easier when you organize ideas by recipient, budget and the kind of gift you want to give. This guide helps you narrow the search before comparing products.',
        sections: [
            {
                heading: 'Build your Christmas list first',
                paragraphs: [
                    'Group recipients by relationship and note a comfortable budget for each. This prevents one difficult-to-shop-for person from taking over the entire shopping plan.'
                ]
            },
            {
                heading: 'Choose a gift direction',
                paragraphs: [
                    'Use interests, routines, experiences and useful upgrades as your starting points. For larger lists, repeatable gift categories can also save time.'
                ]
            },
            {
                heading: 'Check the details before ordering',
                paragraphs: [
                    'Christmas delivery deadlines can change quickly. Verify current delivery dates, stock, returns and the seller’s information before purchasing.'
                ]
            }
        ],
        faqs: [
            {
                question: 'How early should I shop for Christmas gifts?',
                answer: 'Earlier is generally safer, especially for personalized items, international delivery or gifts that may sell out. Always check the current delivery estimate.'
            },
            {
                question: 'How do I shop for many people efficiently?',
                answer: 'Create a recipient list with budgets, choose a few gift categories and compare products within each category instead of browsing without a plan.'
            }
        ]
    },
    'christmas-gifts-for-her': {
        intro: 'Christmas gifts for her should begin with the individual woman you are shopping for. Her interests, routines and personal style are more useful than a generic holiday checklist.',
        sections: [
            {
                heading: 'Think beyond generic Christmas themes',
                paragraphs: [
                    'Start with hobbies, home life, self-care, style, travel, food or other interests she already enjoys.'
                ]
            },
            {
                heading: 'Choose a gift she will use after Christmas',
                paragraphs: [
                    'The most useful choices often fit naturally into her routine rather than being tied only to the holiday.'
                ]
            },
            {
                heading: 'Check timing and returns',
                paragraphs: [
                    'Verify delivery estimates, personalization lead times and return policies before placing an order.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What makes a Christmas gift for her thoughtful?',
                answer: 'Relevance is the strongest signal. Choose something connected to her interests, routine, style or a shared memory.'
            },
            {
                question: 'What if she is difficult to shop for?',
                answer: 'Look for a small luxury, a hobby-related gift, an experience or a personalized option based on something you know she values.'
            }
        ]
    },
    'christmas-gifts-for-him': {
        intro: 'Christmas gifts for him become easier when you shop around real interests and routines. Hobbies, useful upgrades and shared experiences can all provide strong directions.',
        sections: [
            {
                heading: 'Start with his interests',
                paragraphs: [
                    'Consider hobbies, fitness, cooking, travel, technology, outdoors, music, coffee or other established interests.'
                ]
            },
            {
                heading: 'Prefer useful upgrades',
                paragraphs: [
                    'If he already owns the basics, look for a better version of something he uses or an accessory that fits his existing routine.'
                ]
            },
            {
                heading: 'Avoid technical guesses',
                paragraphs: [
                    'For electronics and equipment, verify model compatibility, current specifications and return terms.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What are good Christmas gift categories for men?',
                answer: 'Hobby-related gifts, everyday upgrades, travel accessories, home comforts and experiences are useful starting categories.'
            },
            {
                question: 'What if he has everything?',
                answer: 'Consider personalization, an experience or a thoughtful upgrade connected to something he already enjoys.'
            }
        ]
    },
    'christmas-gifts-for-mom': {
        intro: 'Christmas gifts for Mom can be practical, sentimental, relaxing or simply fun. The strongest choices usually reflect what she enjoys now rather than only her role in the family.',
        sections: [
            {
                heading: 'Shop for Mom as a person',
                paragraphs: [
                    'Think about her hobbies, routines, favorite ways to relax and things she has been interested in lately.'
                ]
            },
            {
                heading: 'Personal beats predictable',
                paragraphs: [
                    'A personalized detail, shared memory or gift connected to an actual interest can make a familiar category feel more meaningful.'
                ]
            },
            {
                heading: 'Give yourself time',
                paragraphs: [
                    'Personalized gifts and items with seasonal delivery demand may need extra lead time, so check the current delivery information before ordering.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What makes a Christmas gift for Mom thoughtful?',
                answer: 'Choose something connected to her interests, routines, memories or a small luxury she would genuinely enjoy.'
            },
            {
                question: 'Should I choose something sentimental?',
                answer: 'If sentiment suits your relationship, yes. But a useful gift can be equally thoughtful when it reflects what she actually needs or enjoys.'
            }
        ]
    },
    'christmas-gifts-for-dad': {
        intro: 'Christmas gifts for Dad are easier to choose when you focus on what he actually does and enjoys. Practical upgrades and hobby-related ideas are often strong starting points.',
        sections: [
            {
                heading: 'Follow his routine',
                paragraphs: [
                    'Look at his hobbies, weekend activities, travel habits, home projects and the everyday items he uses repeatedly.'
                ]
            },
            {
                heading: 'Upgrade something he already likes',
                paragraphs: [
                    'An improved tool, accessory or comfort item can feel thoughtful because it connects to something already part of his life.'
                ]
            },
            {
                heading: 'Check specifications',
                paragraphs: [
                    'For equipment, tools and technology, confirm compatibility and current specifications before purchasing.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What is a good Christmas gift for Dad?',
                answer: 'A hobby-related gift, useful upgrade, experience or personalized item can work well when it matches his actual interests.'
            },
            {
                question: 'What if Dad buys everything himself?',
                answer: 'Look for experiences, personalization or a small upgrade that adds convenience or enjoyment to something he already does.'
            }
        ]
    },
    'christmas-gifts-for-someone-who-has-everything': {
        intro: 'Shopping for someone who seems to have everything calls for a different strategy. Instead of searching for another obvious product, look for personal meaning, experiences, useful upgrades or something they would not think to buy themselves.',
        sections: [
            {
                heading: 'Change the question',
                paragraphs: [
                    'Rather than asking what they do not own, ask what they enjoy, what they value and what could make an existing routine better.'
                ]
            },
            {
                heading: 'Consider experiences and personalization',
                paragraphs: [
                    'Experiences, custom details and memory-based gifts can feel more distinctive than another standard product.'
                ]
            },
            {
                heading: 'Look for the small gap',
                paragraphs: [
                    'A niche accessory, a useful upgrade or a beautifully made version of something they already use can be surprisingly effective.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What do you buy for someone who has everything?',
                answer: 'Consider an experience, personalized gift, thoughtful upgrade or something connected to a niche interest rather than another obvious item.'
            },
            {
                question: 'Are personalized gifts a good option?',
                answer: 'They can be, particularly when the personalization has a genuine connection to the recipient.'
            }
        ]
    },
    'christmas-gifts-under-50': {
        intro: 'A $50 budget can still produce thoughtful Christmas gifts. The key is to choose a clear category, compare quality and avoid letting the price alone determine the perceived value.',
        sections: [
            {
                heading: 'Make the budget work harder',
                paragraphs: [
                    'Look for useful details, good materials, attractive presentation and products that solve a small everyday problem.'
                ]
            },
            {
                heading: 'Shop by recipient first',
                paragraphs: [
                    'Start with the person and then apply the $50 ceiling. This produces more relevant ideas than browsing every inexpensive product category.'
                ]
            },
            {
                heading: 'Verify the final price',
                paragraphs: [
                    'Product prices, promotions, shipping and taxes can change. Always confirm the current total at the retailer before purchasing.'
                ]
            }
        ],
        faqs: [
            {
                question: 'Can you find a good Christmas gift under $50?',
                answer: 'Yes. A thoughtful choice does not require a high price; relevance, usefulness and presentation often matter more.'
            },
            {
                question: 'Does under $50 include shipping?',
                answer: 'Not necessarily. Check the retailer’s current price, shipping and tax information before treating a product as within budget.'
            }
        ]
    },
    'unique-christmas-gifts': {
        intro: 'Unique Christmas gifts do not have to be strange or impractical. The best unusual gifts often come from niche interests, personalization, experiences or a fresh take on something useful.',
        sections: [
            {
                heading: 'Look outside the obvious categories',
                paragraphs: [
                    'Start with a recipient’s less obvious interests, collections, routines or curiosities. Those details can reveal better options than broad gift lists.'
                ]
            },
            {
                heading: 'Unexpected does not mean unusable',
                paragraphs: [
                    'Aim for something distinctive that still has a clear reason to exist in the recipient’s life.'
                ]
            },
            {
                heading: 'Check the details carefully',
                paragraphs: [
                    'Niche and personalized products can have different delivery times and return policies, so verify those details before ordering.'
                ]
            }
        ],
        faqs: [
            {
                question: 'What makes a Christmas gift unique?',
                answer: 'A strong unique gift feels specific to the recipient through an unusual interest, personalization, experience or distinctive design.'
            },
            {
                question: 'Are unique gifts always expensive?',
                answer: 'No. Originality can come from relevance and presentation rather than price.'
            }
        ]
    },
    'personalized-christmas-gifts': {
        intro: 'Personalized Christmas gifts can feel especially thoughtful when the customization has meaning. The goal is not simply adding a name; it is choosing something that connects the recipient to the gift.',
        sections: [
            {
                heading: 'Choose the right kind of personalization',
                paragraphs: [
                    'Names, dates, initials, photographs and custom messages can all work, but the best choice depends on the relationship and the item.'
                ]
            },
            {
                heading: 'Order earlier than usual',
                paragraphs: [
                    'Personalized products may require additional production time. Check the current processing and delivery estimate before ordering.'
                ]
            },
            {
                heading: 'Double-check every detail',
                paragraphs: [
                    'Review spelling, dates, initials, sizing and personalization previews carefully before submitting the order.'
                ]
            }
        ],
        faqs: [
            {
                question: 'Are personalized Christmas gifts worth it?',
                answer: 'They can be especially meaningful when the customization has a genuine connection to the recipient or your shared history.'
            },
            {
                question: 'How early should I order a personalized gift?',
                answer: 'Check the current production and delivery estimate and allow extra time for seasonal demand.'
            }
        ]
    }
};
const budgetFallback = {
    intro: 'A thoughtful gift starts with the person, occasion and feeling you want the gift to create. Use this guide to narrow the direction before comparing individual products.',
    sections: [
        {
            heading: 'Start with the recipient',
            paragraphs: [
                'Think about what the person enjoys, uses often and has mentioned recently. These clues are more reliable than generic popularity.'
            ]
        },
        {
            heading: 'Choose a clear direction',
            paragraphs: [
                'Narrow the search to interests, routines, experiences or useful upgrades so you can compare options meaningfully.'
            ]
        },
        {
            heading: 'Verify before purchasing',
            paragraphs: [
                'Check the retailer’s current product details, price, availability, delivery estimate and return policy before ordering.'
            ]
        }
    ],
    faqs: [
        {
            question: 'How should I choose a thoughtful gift?',
            answer: 'Start with the recipient and narrow by interests, occasion, relationship and budget before comparing products.'
        },
        {
            question: 'What should I verify before buying online?',
            answer: 'Check current price, availability, delivery timing, product specifications, seller information and return terms.'
        }
    ]
};
function getGuideContent(slug) {
    return evergreen[slug] ?? christmas[slug] ?? budgetFallback;
}
}),
"[project]/data/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Verified product data for commercial GiftJournal content.
 *
 * IMPORTANT:
 * - productUrl values are normal retailer URLs until GiftJournal has an approved
 *   affiliate relationship and tracking IDs.
 * - Prices/reviews are snapshots checked during editorial research and can change.
 * - Never invent affiliate URLs, prices, ratings, review counts, or availability.
 */ __turbopack_context__.s([
    "getProductsForGuide",
    ()=>getProductsForGuide,
    "giftProducts",
    ()=>giftProducts
]);
const giftProducts = [
    {
        id: 'ug-garden-ghosts',
        name: 'Garden Ghosts — Set of 3',
        description: 'Hand-carved natural-stone ghost sculptures made by independent makers in New Hampshire.',
        retailer: 'Uncommon Goods',
        productUrl: 'https://www.uncommongoods.com/product/garden-ghosts-set-of-3',
        price: '$48',
        rating: 4.78,
        reviewCount: 40,
        badge: 'Best for hosts',
        bestFor: 'best-halloween-gifts-2026',
        priceCheckedOn: '2026-09-15'
    },
    {
        id: 'ug-horror-movies-chart',
        name: '100 Horror Movies Scratch-Off Chart',
        description: 'An interactive poster for movie fans who want to work through a century of horror favorites.',
        retailer: 'Uncommon Goods',
        productUrl: 'https://www.uncommongoods.com/product/100-horror-movies-scratch-off-chart',
        price: '$25',
        rating: 4.71,
        reviewCount: 7,
        badge: 'Best for movie fans',
        bestFor: 'best-halloween-gifts-2026',
        priceCheckedOn: '2026-09-15'
    },
    {
        id: 'ug-cocktails-crypt',
        name: 'Cocktails from the Crypt: Horror Film Libations',
        description: 'A horror-movie cocktail book with 60 themed recipes, film pairings, trivia and mocktail options.',
        retailer: 'Uncommon Goods',
        productUrl: 'https://www.uncommongoods.com/product/cocktails-from-the-crypt-horror-film-libations',
        price: '$24',
        rating: 5,
        reviewCount: 3,
        badge: 'Best for adults',
        bestFor: 'best-halloween-gifts-2026',
        priceCheckedOn: '2026-09-15'
    },
    {
        id: 'ug-death-for-dinner',
        name: 'Death for Dinner Horror Movie Cookbook',
        description: 'A horror-inspired cookbook with 60 plant-based comfort-food recipes and movie-themed twists.',
        retailer: 'Uncommon Goods',
        productUrl: 'https://www.uncommongoods.com/product/death-for-dinner-horror-movie-cookbook',
        price: '$25',
        badge: 'Best for foodies',
        bestFor: 'best-halloween-gifts-2026',
        priceCheckedOn: '2026-09-15'
    },
    {
        id: 'ug-frights-at-night',
        name: 'Frights to Tell at Night Scary Story Collection',
        description: 'Two illustrated horror anthologies for brave young readers ages 8–12, with different fright levels.',
        retailer: 'Uncommon Goods',
        productUrl: 'https://www.uncommongoods.com/product/frights-to-tell-at-night-scary-story-collection',
        price: '$25',
        badge: 'Best for young readers',
        bestFor: 'best-halloween-gifts-2026',
        priceCheckedOn: '2026-09-15'
    },
    {
        id: 'ug-bat-on-branch',
        name: 'Bat on a Branch',
        description: 'A handcrafted steel bat sculpture designed as a distinctive outdoor or garden decoration.',
        retailer: 'Uncommon Goods',
        productUrl: 'https://www.uncommongoods.com/product/bat-on-a-branch',
        price: '$50',
        rating: 4.9,
        reviewCount: 130,
        badge: 'Most distinctive',
        bestFor: 'best-halloween-gifts-2026',
        priceCheckedOn: '2026-09-15'
    },
    {
        id: 'ug-tarot-necklace',
        name: 'Tiny Tarot Deck Necklace',
        description: 'A brass necklace containing 22 miniature Major Arcana cards, designed for tarot fans.',
        retailer: 'Uncommon Goods',
        productUrl: 'https://www.uncommongoods.com/product/tiny-tarot-deck-necklace',
        price: '$60',
        rating: 4.62,
        reviewCount: 77,
        badge: 'Best for tarot fans',
        bestFor: 'best-halloween-gifts-2026',
        priceCheckedOn: '2026-09-15'
    },
    {
        id: 'ug-scare-mail',
        name: 'Scare Mail: 24 Letter Horror Subscription',
        description: 'A year-long horror mystery delivered through 24 handcrafted letters and eerie extras.',
        retailer: 'Uncommon Goods',
        productUrl: 'https://www.uncommongoods.com/product/scare-mail-24-letter-horror-subscription',
        price: '$125',
        badge: 'Best splurge',
        bestFor: 'best-halloween-gifts-2026',
        priceCheckedOn: '2026-09-15'
    }
];
function getProductsForGuide(slug) {
    return giftProducts.filter((product)=>product.bestFor === slug);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__070adlc._.js.map