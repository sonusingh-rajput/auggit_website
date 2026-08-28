import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("faq", "routes/faq.tsx"),
  route("resources", "routes/caseStudy.tsx"),
  route("usecase", "routes/usecase.tsx"),
  route("/product/automation-suite", "routes/product-edms.tsx"),
  route("product/slaice", "routes/product-slaice.tsx"),
  route("partner", "routes/partner.tsx"),
  route("casestudy", "routes/CaseStudy.tsx"),
  route("faq/edms", "routes/faq-edms.tsx"),
  route("faq/slaice", "routes/faq-slaice.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;