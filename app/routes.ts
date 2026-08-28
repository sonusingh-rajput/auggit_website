import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("faq", "routes/faq.tsx"),
  route("usecase", "routes/usecase1.tsx"),
  route("usecase/:slug", "routes/usecase.$slug.tsx"),
  route("product/automation-suite", "routes/product-edms.tsx"),
  route("product/slaice", "routes/product-slaice.tsx"),
  route("partner", "routes/partner.tsx"),
  route("casestudy", "routes/case-studies.tsx"),
  route("casestudy/:slug", "routes/case-studies.$slug.tsx"),
  route("contact", "routes/contact.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;