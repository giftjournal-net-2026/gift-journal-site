module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticlePage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/articles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$affiliate$2f$AffiliateDisclosure$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/affiliate/AffiliateDisclosure.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$affiliate$2f$ProductRecommendations$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/affiliate/ProductRecommendations.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["articles"].map((a)=>({
            slug: a.slug
        }));
}
function generateMetadata({ params }) {
    return params.then(({ slug })=>{
        const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArticle"])(slug);
        if (!a) return {};
        return {
            title: a.title,
            description: a.excerpt,
            alternates: {
                canonical: `/blog/${a.slug}`
            },
            openGraph: {
                type: 'article',
                title: a.title,
                description: a.excerpt
            }
        };
    });
}
async function ArticlePage({ params }) {
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArticle"])((await params).slug);
    if (!a) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "article",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-narrow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "eyebrow",
                    children: a.category
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.tsx",
                    lineNumber: 4,
                    columnNumber: 210
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: a.title
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.tsx",
                    lineNumber: 4,
                    columnNumber: 255
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "lead",
                    children: a.excerpt
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.tsx",
                    lineNumber: 4,
                    columnNumber: 273
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "date",
                    children: "Published September 15, 2026"
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.tsx",
                    lineNumber: 4,
                    columnNumber: 308
                }, this),
                a.sections.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: s.heading
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                lineNumber: 4,
                                columnNumber: 404
                            }, this),
                            s.paragraphs.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: p
                                }, p, false, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 4,
                                    columnNumber: 445
                                }, this))
                        ]
                    }, s.heading, true, {
                        fileName: "[project]/app/blog/[slug]/page.tsx",
                        lineNumber: 4,
                        columnNumber: 379
                    }, this)),
                a.commercialGuide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$affiliate$2f$ProductRecommendations$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductRecommendations"], {
                    products: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsForGuide"])(a.commercialGuide),
                    heading: "Our Halloween gift picks",
                    intro: "These are the products we researched for this guide. Product details and prices are snapshots and may change at the retailer."
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.tsx",
                    lineNumber: 4,
                    columnNumber: 499
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$affiliate$2f$AffiliateDisclosure$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AffiliateDisclosure"], {}, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.tsx",
                    lineNumber: 4,
                    columnNumber: 745
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "back",
                    children: "← Back to GiftJournal"
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.tsx",
                    lineNumber: 4,
                    columnNumber: 768
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.tsx",
            lineNumber: 4,
            columnNumber: 178
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/blog/[slug]/page.tsx",
        lineNumber: 4,
        columnNumber: 149
    }, this);
}
}),
"[project]/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/affiliate/AffiliateDisclosure.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AffiliateDisclosure",
    ()=>AffiliateDisclosure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function AffiliateDisclosure() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "disclosure affiliate-disclosure",
        "aria-label": "Affiliate disclosure",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Affiliate disclosure:"
            }, void 0, false, {
                fileName: "[project]/components/affiliate/AffiliateDisclosure.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            " GiftJournal may earn a commission from qualifying purchases made through links on this page. This does not increase your purchase price."
        ]
    }, void 0, true, {
        fileName: "[project]/components/affiliate/AffiliateDisclosure.tsx",
        lineNumber: 3,
        columnNumber: 5
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
"[project]/data/articles.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "articles",
    ()=>articles,
    "getArticle",
    ()=>getArticle
]);
const articles = [
    {
        slug: 'how-to-choose-a-gift-they-will-love',
        title: 'How to Choose a Gift They’ll Actually Love',
        excerpt: 'A simple framework for choosing a thoughtful gift without guessing blindly.',
        date: '2026-09-15',
        category: 'Gift Guides',
        sections: [
            {
                heading: 'Start with the person, not the product',
                paragraphs: [
                    'The best gift searches begin with the recipient. Think about what they use every day, what they talk about often, and what they would enjoy but may not buy for themselves.',
                    'A useful gift can be practical, personal, or simply delightful. The strongest choices usually connect with at least one real interest or habit.'
                ]
            },
            {
                heading: 'Choose a clear gift direction',
                paragraphs: [
                    'Narrow the search to a theme such as self-care, home, hobbies, food and drink, style, technology, or experiences. A focused direction makes comparison easier.'
                ]
            },
            {
                heading: 'Compare before you buy',
                paragraphs: [
                    'Before adding an affiliate recommendation to GiftJournal, we will verify the product, merchant, destination, price information and availability. Never rely on an unverified claim.'
                ]
            }
        ]
    },
    {
        slug: 'best-gift-ideas-for-hard-to-shop-for-people',
        title: 'Gift Ideas for Someone Who Is Hard to Shop For',
        excerpt: 'A practical approach to finding memorable gifts for people who seem to have everything.',
        date: '2026-09-15',
        category: 'Gift Guides',
        sections: [
            {
                heading: 'Look for experiences and personal meaning',
                paragraphs: [
                    'When ordinary products are unlikely to surprise someone, consider gifts connected to memories, hobbies, rituals or shared experiences.'
                ]
            },
            {
                heading: 'Think beyond the obvious',
                paragraphs: [
                    'Unexpected presentation, personalization and niche interests can turn a familiar gift category into something that feels much more considered.'
                ]
            }
        ]
    },
    {
        slug: 'christmas-gifts-under-50',
        title: 'Christmas Gifts Under $50',
        excerpt: 'A guide to finding attractive Christmas gifts without stretching the budget.',
        date: '2026-09-15',
        category: 'Christmas',
        sections: [
            {
                heading: 'Make the budget work harder',
                paragraphs: [
                    'A lower price does not have to mean a generic gift. Look for useful details, attractive materials, thoughtful presentation and products that solve a small everyday problem.'
                ]
            },
            {
                heading: 'Shop with a shortlist',
                paragraphs: [
                    'Start with the recipient and choose two or three gift categories before comparing products. This keeps the search focused and makes it easier to recognize a genuinely good option.'
                ]
            }
        ]
    },
    {
        slug: 'best-halloween-gifts-2026',
        title: 'Best Halloween Gifts for 2026: 8 Fun Picks for Adults, Hosts and Horror Fans',
        excerpt: 'A carefully researched Halloween gift shortlist for people who love spooky decor, horror movies, themed food, reading and unusual finds.',
        date: '2026-09-15',
        category: 'Halloween Gifts',
        commercialGuide: 'best-halloween-gifts-2026',
        sections: [
            {
                heading: 'What makes a good Halloween gift?',
                paragraphs: [
                    'The best Halloween gifts feel specific to the person rather than simply covered in orange and black. For hosts, that might mean a conversation-starting decoration. For movie fans, a gift that turns a favorite genre into an activity can be more memorable than another piece of seasonal decor.',
                    'We focused this first shortlist on distinctive gifts with clear use cases and verified retailer pages. Prices and availability can change, so check the retailer before purchasing.'
                ]
            },
            {
                heading: 'Choose the gift around their kind of Halloween',
                paragraphs: [
                    'For horror fans, look for movie-night, reading or collecting gifts. For hosts, decorative pieces can work well because they become part of the celebration. For younger readers, choose age-appropriate spooky stories rather than assuming every Halloween gift should be scary.',
                    'If you are shopping close to Halloween, check delivery estimates before ordering. Seasonal inventory can change quickly.'
                ]
            }
        ]
    }
];
function getArticle(slug) {
    return articles.find((a)=>a.slug === slug);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1kneurk._.js.map