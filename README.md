# SRD Edu Corporation — Corporate Website (Version 1.0)

> **"RESEARCH | EDUCATION | PLACEMENT"**  
> *The Complete Educational Services Partner*  
> *Empowering Institutions. Enriching Lives.*

A modern, responsive, static multi-page corporate website for **SRD Edu Corporation**, engineered using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Brand Identity & Design System

The visual design is derived directly from the official SRD Edu Corporation logo:
- **Primary Brand**: Deep Burgundy (`#4A1525` / `#330B17`)
- **Accent Color**: Radiant Amber Gold (`#F5C64D` / `#DCA42C`)
- **Backgrounds**: Soft Warm Off-White (`#F8F7F5`) & Pure White (`#FFFFFF`)
- **Typography**: Headings in **Poppins** + Body and interface elements in **Inter**
- **Emblem Symbolism**: Combines a **Fountain Pen Nib** (academic inquiry, documentation rigor, research) and a **Blazing Torch** (knowledge, guidance, vision).

---

## 2. Sitemap & Route Architecture

| Route | Page Name | Description |
|---|---|---|
| `/` | **Corporate Homepage** | 15-section corporate landing page with interactive slide showcase, service tabs, approach framework, portfolio, and CTAs |
| `/about` | **About SRD** | Company overview, vision & mission, 6-step approach, and business ecosystem |
| `/services` | **Master Services Directory** | Overview of all 11 services (5 primary detailed verticals + 6 corporate divisions) |
| `/services/global-placement` | **Global Placement Services** | Campus recruitment, employability assessments, employer connections, and regulatory notices |
| `/services/branding-marketing` | **Institution Branding & Marketing** | 9-discipline suite covering prospectus design, digital ads, and enquiry call centre management |
| `/services/hr-management` | **HR Management Services** | Academic faculty, leadership, principal search, and institutional staffing solutions |
| `/services/skill-opportunities` | **Skill Opportunities (Vertical View)** | Curated global skill development programs and campus lab integrations |
| `/services/documentation-legal` | **Documentation & Legal Services** | Affiliation dossiers, regulatory coordination, safety certifications, and audit readiness |
| `/skill-opportunities` | **Global Skill Opportunities Hub** | Comprehensive program directory, training formats, and student/campus pathways |
| `/industries` | **Industries We Serve** | Tailored solutions for Schools, Colleges, Universities, Coaching Centers, and Corporates |
| `/portfolio` | **Institutional Portfolio** | Verified engagement highlights across placement drives, branding, and documentation |
| `/resources` | **Resources & Insights** | Educational articles, compliance guides, corporate brochures, and announcements |
| `/careers` | **Careers & Recruitment Portals** | Dedicated pathways for job seekers and institutional employers |
| `/contact` | **Contact & Enquiries** | Corporate directory, verified contact channels, and service-specific consultation forms |
| `/privacy-policy` | **Privacy Policy** | Corporate governance and institutional data protection commitments |
| `/terms` | **Terms & Conditions** | Professional standards, scope of services, and regulatory non-guarantee disclosures |
| `/sitemap.xml` | **Dynamic XML Sitemap** | SEO-optimized automated sitemap for search engine indexing |

---

## 3. Technology Stack

- **Framework**: Next.js 16.4+ (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 4 with custom `@theme` brand tokens
- **Icons**: Lucide React + custom inline brand SVGs
- **Fonts**: `next/font/google` (Poppins & Inter) with zero cumulative layout shift (CLS)
- **Deployment Target**: Vercel, Netlify, or any static/Node hosting environment

---

## 4. Setup & Local Development Commands

### Prerequisites
- Node.js (v18.18.0 or newer; tested on Node v24)
- npm (v9.0.0 or newer)

### Installation & Run
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production (Static site generation)
npm run build

# 4. Preview production build locally
npm run start
```
The application will run locally at: `http://localhost:3000`

---

## 5. Architectural Integrity & Version Roadmap

### Version 1.0 (Current Status: Fully Implemented)
- Complete responsive static architecture across all desktop, tablet, and mobile viewports.
- Centralized TypeScript data files in `src/data/` for clean content updates without code refactoring.
- Frontend form validation with transparent notices indicating static preview status.
- Strict compliance with non-guarantee disclosures for international placement and statutory approvals.

### Version 2.0 (Planned)
- Headless CMS or dynamic database integration for live articles, testimonials, and brochure downloads.
- Server-side email delivery and CRM webhook sync for consultation forms.
- Admin dashboard for managing job listings and skill course schedules.

### Version 3.0 & 4.0 (Future Ecosystem)
- Digital candidate registration, resume parsing, and employer job-matching portal.
- Interactive course directory with enrollment management and training partner portals.
