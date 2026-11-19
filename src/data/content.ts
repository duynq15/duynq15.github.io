export type Locale = 'en' | 'vi' | 'ja';

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  href?: string;
  linkLabel?: string;
  image?: string;
  imageAlt?: string;
  specs?: Array<{ label: string; value: string }>;
  span: 'wide' | 'narrow' | 'half';
  surface: 'visual' | 'tinted' | 'dark';
}

export interface PrincipleItem {
  index: string;
  title: string;
  body: string;
}

export interface StackCategory {
  id: string;
  label: string;
  summary: string;
  items: string[];
}

export interface TimelineEntry {
  period: string;
  role: string;
  org: string;
  highlights: string[];
}

export interface SiteContent {
  langAttr: string;
  metaTitle: string;
  nav: {
    work: string;
    approach: string;
    background: string;
    contact: string;
    primaryCta: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    portraitAlt: string;
  };
  metrics: Array<{
    value: string;
    label: string;
  }>;
  work: {
    eyebrow: string;
    heading: string;
    projects: ProjectItem[];
    privateNote: string;
  };
  approach: {
    heading: string;
    principles: PrincipleItem[];
  };
  background: {
    heading: string;
    stackHeading: string;
    experienceHeading: string;
    educationHeading: string;
    stackCategories: StackCategory[];
    experience: TimelineEntry[];
    education: {
      school: string;
      degree: string;
      period: string;
      thesisTitle: string;
      thesisDetail: string;
    };
  };
  contact: {
    heading: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    copyEmail: string;
    copiedEmail: string;
  };
  footer: {
    credit: string;
  };
}

export const SITE_CONTENT: Record<Locale, SiteContent> = {
  en: {
    langAttr: 'en',
    metaTitle: 'Nguyễn Quang Duy | AI Applications Engineer',
    nav: {
      work: 'Work',
      approach: 'Approach',
      background: 'Background',
      contact: 'Contact',
      primaryCta: 'Send email',
    },
    hero: {
      eyebrow: 'AI Applications Engineer',
      headlineLine1: 'Shipping applied AI',
      headlineLine2: 'for real production.',
      subtext:
        'I build privacy-first AI systems with tool-calling, RAG, and OCR for local governments, businesses, and real users.',
      primaryCta: 'Send email',
      secondaryCta: 'View GitHub',
      portraitAlt: 'Portrait of Nguyễn Quang Duy, AI Applications Engineer',
    },
    metrics: [
      {
        value: '1,131',
        label: 'Commits shipped across 21 repositories',
      },
      {
        value: '3,321',
        label: 'Vietnamese communes extracted and verified',
      },
      {
        value: '412',
        label: 'Households (1,586 residents) piloted on Làng Số',
      },
    ],
    work: {
      eyebrow: 'Selected Work',
      heading: 'Production systems and open repositories',
      privateNote: 'Internal deployment',
      projects: [
        {
          id: 'langso',
          title: 'Làng Số: Smart Village Platform',
          summary:
            'Eleven-module digital governance platform with household registries, digital parcel maps, multi-channel notices, surveys, and cited semantic search backed by Row-Level Security.',
          impact: 'Piloted in Xuân Trạch with 412 households and 1,586 residents.',
          stack: ['FastAPI', 'PostgreSQL', 'PostGIS', 'pgvector', 'React 19', 'Docker'],
          href: 'https://langso.xaphuongvietnam.vn',
          linkLabel: 'Open live app',
          image: '/images/project-langso.jpg',
          imageAlt: 'Isometric dark topographic map representing the Làng Số digital village platform',
          span: 'wide',
          surface: 'visual',
        },
        {
          id: 'digitization',
          title: 'Digitization Hub',
          summary:
            'Multimedia archive pipeline covering audio extraction, Vietnamese speech-to-text, document OCR, Zalo chat parsing, full-text search, and multi-provider quota routing.',
          impact: 'Collection-level RBAC with complete asset lifecycle audit logs.',
          specs: [
            { label: 'Speech', value: 'faster-whisper Vietnamese STT' },
            { label: 'OCR', value: 'PaddleOCR + VietOCR' },
            { label: 'Chat', value: 'Zalo screenshot thread parser' },
            { label: 'Governance', value: 'Collection RBAC + quota limits' },
          ],
          stack: ['Python', 'faster-whisper', 'PaddleOCR', 'VietOCR', 'Laravel'],
          span: 'narrow',
          surface: 'tinted',
        },
        {
          id: 'commune-data',
          title: 'Vietnam Commune Data Pipeline',
          summary:
            'National data collection pipeline combining deterministic rules with local Ollama extraction to verify administrative codes, coordinates, and source citations before handover.',
          impact: 'Covered 34 provinces and 3,321 communes with automated validation.',
          stack: ['Python', 'Ollama', 'SQLite', 'YAML'],
          href: 'https://github.com/duynq15/khai-thac-du-lieu',
          linkLabel: 'View repository',
          image: '/images/project-data.jpg',
          imageAlt: 'Cyan geometric verification lattice representing the Vietnam commune data pipeline',
          span: 'narrow',
          surface: 'visual',
        },
        {
          id: 'ai-video',
          title: 'AI Video Studio',
          summary:
            'Monorepo with three short-video applications turning articles and briefs into 9:16 videos through structured scripting, local Vietnamese TTS, and programmatic motion.',
          impact: 'End-to-end automated rendering with Remotion, HyperFrames, and GSAP.',
          stack: ['TypeScript', 'Remotion', 'HyperFrames', 'GSAP', 'Local TTS'],
          href: 'https://github.com/duynq15/ai-video-studio',
          linkLabel: 'View repository',
          image: '/images/project-aivideo.jpg',
          imageAlt: 'Three vertical 9:16 glass frames with cyan audio waveforms representing AI Video Studio',
          span: 'wide',
          surface: 'visual',
        },
        {
          id: 'pos-saas',
          title: 'POS Shop SaaS',
          summary:
            'Multi-store retail and inventory platform with isolated per-shop SQLite databases, seven user roles, server-side cost protection, VietQR payments, and unit conversions.',
          impact: 'Runs offline in local stores with 135 production commits.',
          stack: ['Node.js', 'SQLite', 'VietQR', 'Docker'],
          href: 'https://github.com/duynq15/pos-shop-saas',
          linkLabel: 'View repository',
          span: 'half',
          surface: 'dark',
        },
        {
          id: 'giapha',
          title: 'Gia phả Auto (HUST Thesis)',
          summary:
            'Genealogy modeled as a relational graph handling complex family edges, rule-based NLG biographies, algorithmic SVG family trees, and an eight-step Word and PDF book export pipeline.',
          impact: 'Hanoi University of Science and Technology graduation thesis.',
          stack: ['Python', 'FastAPI', 'Laravel', 'SVG', 'python-docx'],
          span: 'half',
          surface: 'tinted',
        },
      ],
    },
    approach: {
      heading: 'How I build AI systems',
      principles: [
        {
          index: '01',
          title: 'Numbers must be traceable',
          body: 'Models never write raw SQL or invent figures. The model selects a typed tool, the API queries real data, and every answer links back to verifiable records.',
        },
        {
          index: '02',
          title: 'Never trade personal data',
          body: 'Self-hosted models come first. Personally identifiable data is blocked from cloud endpoints, enforced with role-based access and PostgreSQL Row-Level Security.',
        },
        {
          index: '03',
          title: 'Production is the bar',
          body: 'A notebook demo is only the beginning. Every system is scoped for deployment, quota limits, automated testing, real operators, and measurable outcomes.',
        },
      ],
    },
    background: {
      heading: 'Capabilities and background',
      stackHeading: 'Technical stack',
      experienceHeading: 'Experience',
      educationHeading: 'Education',
      stackCategories: [
        {
          id: 'ai',
          label: 'AI & LLM',
          summary: 'Applied inference, retrieval, guardrails, and Vietnamese multimodal pipelines.',
          items: [
            'Tool-calling & function calling',
            'RAG with pgvector & bge-m3',
            'Self-hosted LLMs (Ollama, Qwen, Gemma)',
            'Multi-provider AI gateway & fallback',
            'faster-whisper Vietnamese STT',
            'PaddleOCR & VietOCR',
            'PII guardrails & cost logging',
            'Agentic workflows & MCP',
          ],
        },
        {
          id: 'backend',
          label: 'Backend',
          summary: 'Reliable APIs, relational schemas, multi-tenant isolation, and background jobs.',
          items: [
            'Python & FastAPI',
            'PHP & Laravel',
            'Node.js & REST / OpenAPI',
            'PostgreSQL & PostGIS',
            'Row-Level Security & RBAC',
            'Redis, Celery & ARQ',
            'SQLite multi-tenant architecture',
            'API test automation & alerting',
          ],
        },
        {
          id: 'frontend',
          label: 'Frontend',
          summary: 'Fast, responsive interfaces built for everyday administrative and retail operators.',
          items: [
            'React 19 & TypeScript',
            'Vue 3 & Inertia',
            'Tailwind CSS',
            'shadcn/ui',
            'Vite',
            'Remotion & GSAP motion',
            'Responsive & accessible UI',
            'SVG data visualization',
          ],
        },
        {
          id: 'data',
          label: 'Data & Ops',
          summary: 'Verifiable extraction pipelines, containerized deployments, and automated CI.',
          items: [
            'pandas & SQL',
            'Deterministic + LLM extraction',
            'Data validation pipelines',
            'Docker & Docker Compose',
            'GitHub Actions CI/CD',
            'Linux, Nginx & Caddy',
            'Observability & quality evals',
            'VietQR & external APIs',
          ],
        },
      ],
      experience: [
        {
          period: '12/2024 to Present',
          role: 'Software & AI Applications Engineer',
          org: 'Sáng Kiến Hưng Gia JSC · Hanoi',
          highlights: [
            'Own architecture, backend, frontend, and deployment across civic digital platforms including Làng Số and Digitization Hub.',
            'Designed a shared multi-model AI gateway orchestrating Ollama, Claude, and Gemini with fallback routing, latency logging, and PII blocking.',
            'Built tool-calling civic assistants and automated API test suites with scheduled runs and Slack, Telegram, and Zalo alerts.',
          ],
        },
        {
          period: '2026 to Present',
          role: 'Independent Software & AI Product Builder',
          org: 'Personal Products & Advisory · Hanoi',
          highlights: [
            'Built and shipped POS Shop SaaS for local retail businesses with offline-ready per-store SQLite isolation and VietQR integration.',
            'Created AI Video Studio to automate 9:16 editorial short-form video creation using local Vietnamese TTS and Remotion.',
          ],
        },
      ],
      education: {
        school: 'Hanoi University of Science and Technology (HUST)',
        degree: 'B.Eng. in Information Technology, Vietnam-Japan Program (HEDSPI)',
        period: '2020 to 2025',
        thesisTitle: 'Automated Genealogy System for Vietnamese Families',
        thesisDetail:
          'Modeled family structures as relational graphs with integrity checks, rule-based NLG biography generation, SVG tree layout, and an eight-step Word/PDF publishing pipeline.',
      },
    },
    contact: {
      heading: 'Open to AI Applications Engineer roles',
      body: 'Based in Hanoi and ready for teams building practical, privacy-aware AI products across Vietnam, Japan, or remote.',
      primaryCta: 'Send email',
      secondaryCta: 'View GitHub',
      copyEmail: 'Copy email',
      copiedEmail: 'Email copied',
    },
    footer: {
      credit: 'Nguyễn Quang Duy · Hanoi, Vietnam',
    },
  },
  vi: {
    langAttr: 'vi',
    metaTitle: 'Nguyễn Quang Duy | Kỹ sư AI Ứng dụng',
    nav: {
      work: 'Dự án',
      approach: 'Nguyên tắc',
      background: 'Kinh nghiệm',
      contact: 'Liên hệ',
      primaryCta: 'Gửi email',
    },
    hero: {
      eyebrow: 'AI Applications Engineer',
      headlineLine1: 'Xây dựng sản phẩm AI',
      headlineLine2: 'vận hành trong thực tế.',
      subtext:
        'Xây dựng sản phẩm AI bảo vệ dữ liệu với tool-calling, RAG và OCR cho doanh nghiệp và chính quyền cơ sở.',
      primaryCta: 'Gửi email',
      secondaryCta: 'Xem GitHub',
      portraitAlt: 'Chân dung Nguyễn Quang Duy, Kỹ sư AI Ứng dụng',
    },
    metrics: [
      {
        value: '1.131',
        label: 'Commit trên 21 repository cá nhân và dự án',
      },
      {
        value: '3.321',
        label: 'Xã/phường Việt Nam được thu thập và kiểm chứng',
      },
      {
        value: '412',
        label: 'Hộ dân (1.586 nhân khẩu) thí điểm trên Làng Số',
      },
    ],
    work: {
      eyebrow: 'Dự án tiêu biểu',
      heading: 'Sản phẩm vận hành và mã nguồn mở',
      privateNote: 'Triển khai nội bộ',
      projects: [
        {
          id: 'langso',
          title: 'Làng Số: Nền tảng Thôn Thông Minh',
          summary:
            'Nền tảng quản trị số gồm 11 mô-đun cho thôn và tổ dân phố: hộ khẩu, bản đồ số, thông báo đa kênh, khảo sát, trợ lý AI tìm kiếm ngữ nghĩa có trích dẫn nguồn và Row-Level Security.',
          impact: 'Thí điểm thực tế tại Thôn Xuân Trạch với 412 hộ và 1.586 nhân khẩu.',
          stack: ['FastAPI', 'PostgreSQL', 'PostGIS', 'pgvector', 'React 19', 'Docker'],
          href: 'https://langso.xaphuongvietnam.vn',
          linkLabel: 'Mở sản phẩm',
          image: '/images/project-langso.jpg',
          imageAlt: 'Bản đồ địa hình số tối giản đại diện cho nền tảng Làng Số',
          span: 'wide',
          surface: 'visual',
        },
        {
          id: 'digitization',
          title: 'Digitization Hub',
          summary:
            'Hệ thống số hóa tư liệu audio, ảnh và video: tách tiếng, STT tiếng Việt, OCR tài liệu, bóc tách ảnh chụp chat Zalo, tìm kiếm toàn văn và điều phối hạn mức nhiều provider AI.',
          impact: 'Phân quyền RBAC theo bộ sưu tập kèm nhật ký vòng đời tư liệu.',
          specs: [
            { label: 'Âm thanh', value: 'faster-whisper STT tiếng Việt' },
            { label: 'Tài liệu', value: 'PaddleOCR + VietOCR' },
            { label: 'Zalo', value: 'Tách tin nhắn và gán người gửi' },
            { label: 'Quản trị', value: 'RBAC theo bộ sưu tập + hạn mức AI' },
          ],
          stack: ['Python', 'faster-whisper', 'PaddleOCR', 'VietOCR', 'Laravel'],
          span: 'narrow',
          surface: 'tinted',
        },
        {
          id: 'commune-data',
          title: 'Khai thác dữ liệu Xã Phường',
          summary:
            'Pipeline thu thập dữ liệu toàn quốc kết hợp quy tắc tất định với LLM nội bộ (Ollama), kiểm chứng tự động mã ĐVHC, tọa độ lãnh thổ và trích dẫn nguồn trước khi bàn giao.',
          impact: 'Hoàn thiện dữ liệu cho 34 tỉnh/thành và 3.321 xã/phường.',
          stack: ['Python', 'Ollama', 'SQLite', 'YAML'],
          href: 'https://github.com/duynq15/khai-thac-du-lieu',
          linkLabel: 'Xem mã nguồn',
          image: '/images/project-data.jpg',
          imageAlt: 'Lưới kiểm chứng dữ liệu địa lý đại diện cho pipeline Xã Phường Việt Nam',
          span: 'narrow',
          surface: 'visual',
        },
        {
          id: 'ai-video',
          title: 'AI Video Studio',
          summary:
            'Monorepo gồm 3 ứng dụng tạo video ngắn 9:16 từ bài báo và văn bản: sinh kịch bản, lồng tiếng TTS tiếng Việt chạy local và dựng chuyển động bằng Remotion, HyperFrames và GSAP.',
          impact: 'Tự động hóa trọn quy trình dựng video ngắn và kiểm soát chất lượng đầu ra.',
          stack: ['TypeScript', 'Remotion', 'HyperFrames', 'GSAP', 'Local TTS'],
          href: 'https://github.com/duynq15/ai-video-studio',
          linkLabel: 'Xem mã nguồn',
          image: '/images/project-aivideo.jpg',
          imageAlt: 'Ba khung hình dọc 9:16 cùng sóng âm cyan đại diện cho AI Video Studio',
          span: 'wide',
          surface: 'visual',
        },
        {
          id: 'pos-saas',
          title: 'POS Shop SaaS',
          summary:
            'Phần mềm bán hàng và quản lý kho đa cửa hàng theo kiến trúc đa tenant tách SQLite riêng từng cửa hàng, 7 vai trò, ẩn giá vốn phía server, VietQR chuẩn NAPAS và quy đổi đơn vị.',
          impact: 'Chạy offline tại cửa hàng với 135 commit phục vụ hộ kinh doanh thật.',
          stack: ['Node.js', 'SQLite', 'VietQR', 'Docker'],
          href: 'https://github.com/duynq15/pos-shop-saas',
          linkLabel: 'Xem mã nguồn',
          span: 'half',
          surface: 'dark',
        },
        {
          id: 'giapha',
          title: 'Gia phả Auto (Đồ án tốt nghiệp HUST)',
          summary:
            'Mô hình hóa phả hệ bằng đồ thị quan hệ, kiểm tra toàn vẹn dữ liệu, sinh tiểu sử bằng rule-based NLG, dựng phả đồ SVG tự động và pipeline 8 bước xuất sách Word/PDF.',
          impact: 'Đồ án tốt nghiệp Đại học Bách khoa Hà Nội, chuyên ngành CNTT Việt-Nhật.',
          stack: ['Python', 'FastAPI', 'Laravel', 'SVG', 'python-docx'],
          span: 'half',
          surface: 'tinted',
        },
      ],
    },
    approach: {
      heading: 'Cách mình làm sản phẩm AI',
      principles: [
        {
          index: '01',
          title: 'Số liệu phải truy vết được',
          body: 'Mô hình không tự viết SQL hay bịa con số. AI chọn công cụ có kiểu rõ ràng, API truy vấn dữ liệu thật và trả về nguồn để kiểm chứng.',
        },
        {
          index: '02',
          title: 'Không đánh đổi dữ liệu cá nhân',
          body: 'Ưu tiên mô hình tự host, chặn dữ liệu nhạy cảm (PII) ra đám mây, bảo vệ bằng phân quyền theo vai trò và Row-Level Security ở tầng cơ sở dữ liệu.',
        },
        {
          index: '03',
          title: 'Chạy thật mới tính',
          body: 'Prototype chỉ là điểm khởi đầu. Hệ thống phải đi trọn từ đặc tả, giới hạn chi phí, kiểm thử tự động đến vận hành ổn định cho người dùng thật.',
        },
      ],
    },
    background: {
      heading: 'Năng lực và quá trình',
      stackHeading: 'Công nghệ sử dụng',
      experienceHeading: 'Kinh nghiệm làm việc',
      educationHeading: 'Học vấn',
      stackCategories: [
        {
          id: 'ai',
          label: 'AI & LLM',
          summary: 'Suy luận ứng dụng, truy xuất ngữ nghĩa, lớp bảo vệ PII và xử lý đa phương tiện tiếng Việt.',
          items: [
            'Tool-calling & function calling',
            'RAG với pgvector & bge-m3',
            'Self-host LLM (Ollama, Qwen, Gemma)',
            'AI gateway đa mô hình & fallback',
            'faster-whisper STT tiếng Việt',
            'PaddleOCR & VietOCR',
            'PII guardrails & log chi phí',
            'Agent workflow & MCP',
          ],
        },
        {
          id: 'backend',
          label: 'Backend',
          summary: 'API ổn định, mô hình dữ liệu quan hệ, phân quyền chặt và hàng đợi xử lý nền.',
          items: [
            'Python & FastAPI',
            'PHP & Laravel',
            'Node.js & REST / OpenAPI',
            'PostgreSQL & PostGIS',
            'Row-Level Security & RBAC',
            'Redis, Celery & ARQ',
            'Kiến trúc đa tenant SQLite',
            'Automation test API & cảnh báo',
          ],
        },
        {
          id: 'frontend',
          label: 'Frontend',
          summary: 'Giao diện rõ ràng, phản hồi nhanh cho cán bộ cơ sở và chủ cửa hàng sử dụng hàng ngày.',
          items: [
            'React 19 & TypeScript',
            'Vue 3 & Inertia',
            'Tailwind CSS',
            'shadcn/ui',
            'Vite',
            'Remotion & GSAP',
            'Giao diện responsive & dễ tiếp cận',
            'Trực quan hóa SVG',
          ],
        },
        {
          id: 'data',
          label: 'Dữ liệu & Ops',
          summary: 'Pipeline trích xuất có bước kiểm chứng, triển khai Docker và tự động hóa CI.',
          items: [
            'pandas & SQL',
            'Trích xuất quy tắc kết hợp LLM',
            'Pipeline kiểm chứng dữ liệu',
            'Docker & Docker Compose',
            'GitHub Actions CI/CD',
            'Linux, Nginx & Caddy',
            'Giám sát & đánh giá chất lượng',
            'Tích hợp VietQR & API ngoài',
          ],
        },
      ],
      experience: [
        {
          period: '12/2024 đến nay',
          role: 'Kỹ sư phát triển phần mềm & AI',
          org: 'Công ty Cổ phần Sáng Kiến Hưng Gia · Hà Nội',
          highlights: [
            'Phụ trách từ đặc tả, kiến trúc, backend, frontend đến triển khai vận hành cho Làng Số, Kinh tế cộng đồng và Digitization Hub.',
            'Thiết kế AI gateway dùng chung điều phối Ollama tự host, Claude và Gemini, có fallback tự động, ghi log độ trễ và chặn PII.',
            'Phát triển trợ lý AI theo hướng tool-calling và hệ thống automation test API gửi cảnh báo qua Slack, Telegram và Zalo.',
          ],
        },
        {
          period: '2026 đến nay',
          role: 'Phát triển sản phẩm phần mềm & AI độc lập',
          org: 'Sản phẩm cá nhân & Tư vấn · Hà Nội',
          highlights: [
            'Xây dựng POS Shop SaaS phục vụ hộ kinh doanh với cơ sở dữ liệu tách biệt cho từng cửa hàng và thanh toán VietQR.',
            'Phát triển AI Video Studio tự động hóa quy trình dựng video ngắn 9:16 bằng TTS tiếng Việt local và Remotion.',
          ],
        },
      ],
      education: {
        school: 'Đại học Bách khoa Hà Nội (HUST)',
        degree: 'Kỹ sư Công nghệ thông tin, Chương trình Việt-Nhật (HEDSPI)',
        period: '2020 đến 2025',
        thesisTitle: 'Thiết kế hệ thống tự động hóa gia phả cho thành viên dòng họ',
        thesisDetail:
          'Mô hình hóa phả hệ dạng đồ thị quan hệ, kiểm tra toàn vẹn dữ liệu, sinh tiểu sử bằng rule-based NLG, dựng phả đồ SVG và xuất bản sách Word/PDF 8 bước.',
      },
    },
    contact: {
      heading: 'Sẵn sàng cho vị trí AI Applications Engineer',
      body: 'Làm việc tại Hà Nội, sẵn sàng đồng hành cùng đội ngũ xây dựng sản phẩm AI thực chiến, an toàn dữ liệu tại Việt Nam, Nhật Bản hoặc làm việc từ xa.',
      primaryCta: 'Gửi email',
      secondaryCta: 'Xem GitHub',
      copyEmail: 'Sao chép email',
      copiedEmail: 'Đã sao chép email',
    },
    footer: {
      credit: 'Nguyễn Quang Duy · Hà Nội, Việt Nam',
    },
  },
  ja: {
    langAttr: 'ja',
    metaTitle: 'Nguyễn Quang Duy | AIアプリケーションエンジニア',
    nav: {
      work: '実績',
      approach: '開発方針',
      background: '経歴',
      contact: '連絡先',
      primaryCta: 'メールを送る',
    },
    hero: {
      eyebrow: 'AI Applications Engineer',
      headlineLine1: '本番運用で機能する',
      headlineLine2: '実用AI製品を設計・開発。',
      subtext:
        'ツール呼び出し、RAG、OCRを軸に、個人情報保護と本番運用に耐える実用AI製品を開発しています。',
      primaryCta: 'メールを送る',
      secondaryCta: 'GitHubを見る',
      portraitAlt: 'AIアプリケーションエンジニア Nguyễn Quang Duy のポートレート',
    },
    metrics: [
      {
        value: '1,131',
        label: '21リポジトリにわたるコミット数',
      },
      {
        value: '3,321',
        label: '収集・検証したベトナム行政区データ',
      },
      {
        value: '412',
        label: 'Làng Số 実証実験の対象世帯（1,586名）',
      },
    ],
    work: {
      eyebrow: '主なプロジェクト',
      heading: '本番運用システムと公開リポジトリ',
      privateNote: '非公開・実運用システム',
      projects: [
        {
          id: 'langso',
          title: 'Làng Số: スマートビレッジ基盤',
          summary:
            '世帯・住民台帳、デジタル地図、多チャネル通知、アンケート、根拠付きセマンティック検索を備えた11モジュールの地域行政基盤。Row-Level Securityで厳格にアクセス制御。',
          impact: 'スアンチャック村の412世帯・1,586名を対象に実証運用。',
          stack: ['FastAPI', 'PostgreSQL', 'PostGIS', 'pgvector', 'React 19', 'Docker'],
          href: 'https://langso.xaphuongvietnam.vn',
          linkLabel: '公開環境を開く',
          image: '/images/project-langso.jpg',
          imageAlt: 'Làng Số スマートビレッジ基盤を表現したダークネイビーの地形マップ',
          span: 'wide',
          surface: 'visual',
        },
        {
          id: 'digitization',
          title: 'Digitization Hub',
          summary:
            '音声抽出、ベトナム語STT、OCR、Zaloチャット画像解析、全文検索を統合した資料デジタル化基盤。複数AIプロバイダーのクォータと資産ライフサイクルを一元管理。',
          impact: 'コレクション単位のRBACと監査ログを標準装備。',
          specs: [
            { label: '音声', value: 'faster-whisper ベトナム語STT' },
            { label: '文字認識', value: 'PaddleOCR + VietOCR' },
            { label: 'Zalo', value: 'チャット画像の発話・送信者抽出' },
            { label: '統制', value: 'コレクションRBAC + クォータ管理' },
          ],
          stack: ['Python', 'faster-whisper', 'PaddleOCR', 'VietOCR', 'Laravel'],
          span: 'narrow',
          surface: 'tinted',
        },
        {
          id: 'commune-data',
          title: 'ベトナム自治体データ基盤',
          summary:
            '決定論的ルールとローカルOllama抽出を組み合わせ、行政コード・座標・出典引用を自動検証して納品する全国データ収集パイプライン。',
          impact: '34省・3,321行政区のデータを検証済みで整備。',
          stack: ['Python', 'Ollama', 'SQLite', 'YAML'],
          href: 'https://github.com/duynq15/khai-thac-du-lieu',
          linkLabel: 'リポジトリを見る',
          image: '/images/project-data.jpg',
          imageAlt: 'ベトナム自治体データの検証パイプラインを表現した幾何学格子',
          span: 'narrow',
          surface: 'visual',
        },
        {
          id: 'ai-video',
          title: 'AI Video Studio',
          summary:
            '記事やテキストから台本作成、ローカルベトナム語TTS、Remotion・HyperFrames・GSAPによる9:16ショート動画生成までを自動化する3アプリのモノレポ。',
          impact: '制作からレンダリングまで一貫した品質管理を実現。',
          stack: ['TypeScript', 'Remotion', 'HyperFrames', 'GSAP', 'Local TTS'],
          href: 'https://github.com/duynq15/ai-video-studio',
          linkLabel: 'リポジトリを見る',
          image: '/images/project-aivideo.jpg',
          imageAlt: '9:16動画フレームと音声波形を表現したAI Video Studioのビジュアル',
          span: 'wide',
          surface: 'visual',
        },
        {
          id: 'pos-saas',
          title: 'POS Shop SaaS',
          summary:
            '店舗別SQLite分離によるマルチテナントPOS・在庫管理SaaS。7ロール権限、サーバー側での原価秘匿、VietQR決済、単位換算、オフライン稼働に対応。',
          impact: '135コミットを積み上げ、実店舗向けに稼働。',
          stack: ['Node.js', 'SQLite', 'VietQR', 'Docker'],
          href: 'https://github.com/duynq15/pos-shop-saas',
          linkLabel: 'リポジトリを見る',
          span: 'half',
          surface: 'dark',
        },
        {
          id: 'giapha',
          title: 'Gia phả Auto（ハノイ工科大学 卒業論文）',
          summary:
            '家系図を関係グラフとしてモデル化し、整合性検証、ルールベースNLGによる略歴生成、SVG家系図描画、8段階のWord/PDF書籍出力パイプラインを構築。',
          impact: 'ハノイ工科大学 越日ITプログラム（HEDSPI）卒業研究。',
          stack: ['Python', 'FastAPI', 'Laravel', 'SVG', 'python-docx'],
          span: 'half',
          surface: 'tinted',
        },
      ],
    },
    approach: {
      heading: 'AI開発の3原則',
      principles: [
        {
          index: '01',
          title: '数値を必ず追跡可能にする',
          body: 'モデルにSQLを書かせたり数値を推測させたりしません。型定義されたツールをAIが選び、APIが実データを取得して根拠とともに返します。',
        },
        {
          index: '02',
          title: '個人情報をクラウドに渡さない',
          body: 'セルフホストモデルを優先し、PIIのクラウド送信を遮断。ロールベースアクセス制御とPostgreSQLのRow-Level Securityで保護します。',
        },
        {
          index: '03',
          title: '本番稼働を完成基準にする',
          body: 'プロトタイプは出発点にすぎません。要件定義、コスト制御、自動テスト、実ユーザー運用と効果測定までを一貫して設計します。',
        },
      ],
    },
    background: {
      heading: '技術領域と経歴',
      stackHeading: '技術スタック',
      experienceHeading: '職務経歴',
      educationHeading: '学歴',
      stackCategories: [
        {
          id: 'ai',
          label: 'AI・LLM',
          summary: 'ツール呼び出し、検索拡張生成、PII保護、ベトナム語マルチモーダル処理。',
          items: [
            'Tool-calling / Function calling',
            'RAG (pgvector, bge-m3)',
            'セルフホストLLM (Ollama, Qwen, Gemma)',
            'マルチプロバイダーAIゲートウェイ',
            'faster-whisper ベトナム語STT',
            'PaddleOCR / VietOCR',
            'PIIガードレール・コスト監視',
            'エージェント開発・MCP',
          ],
        },
        {
          id: 'backend',
          label: 'バックエンド',
          summary: '堅牢なAPI設計、マルチテナント分離、権限管理、非同期ジョブ基盤。',
          items: [
            'Python / FastAPI',
            'PHP / Laravel',
            'Node.js / REST・OpenAPI',
            'PostgreSQL / PostGIS',
            'Row-Level Security / RBAC',
            'Redis / Celery / ARQ',
            'SQLiteマルチテナント設計',
            'API自動テスト・通知基盤',
          ],
        },
        {
          id: 'frontend',
          label: 'フロントエンド',
          summary: '現場の担当者や店舗スタッフが迷わず使えるレスポンシブUI。',
          items: [
            'React 19 / TypeScript',
            'Vue 3 / Inertia',
            'Tailwind CSS',
            'shadcn/ui',
            'Vite',
            'Remotion / GSAP',
            'アクセシビリティ配慮設計',
            'SVGデータ可視化',
          ],
        },
        {
          id: 'data',
          label: 'データ・運用',
          summary: '検証付き抽出パイプライン、コンテナ運用、CI/CD自動化。',
          items: [
            'pandas / SQL',
            'ルール＋LLMハイブリッド抽出',
            '自動データ検証パイプライン',
            'Docker / Docker Compose',
            'GitHub Actions CI/CD',
            'Linux / Nginx / Caddy',
            'ログ監視・品質評価',
            'VietQR・外部API連携',
          ],
        },
      ],
      experience: [
        {
          period: '2024年12月 〜 現在',
          role: 'ソフトウェア・AIエンジニア',
          org: 'Sáng Kiến Hưng Gia JSC · ハノイ',
          highlights: [
            'Làng Số、Digitization Hubなど地域DX製品の要件定義、設計、バックエンド・フロントエンド開発、本番運用を一貫担当。',
            'セルフホストOllama、Claude、Geminiを統合制御するAIゲートウェイを構築し、フォールバック・遅延監視・PII遮断を実装。',
            'ツール呼び出し型の地域AIアシスタントおよびSlack・Telegram・Zalo通知付きAPI自動テスト基盤を開発。',
          ],
        },
        {
          period: '2026年 〜 現在',
          role: '独立プロダクト開発・AIエンジニア',
          org: '個人開発・技術支援 · ハノイ',
          highlights: [
            '小規模店舗向けにオフライン対応のマルチテナントPOSシステム（POS Shop SaaS）を開発・提供。',
            'ローカルTTSとRemotionを活用した9:16ショート動画自動生成基盤（AI Video Studio）を構築。',
          ],
        },
      ],
      education: {
        school: 'ハノイ工科大学（HUST）',
        degree: '情報技術学士 越日ITプログラム（HEDSPI）',
        period: '2020年 〜 2025年',
        thesisTitle: 'ベトナム家系図の自動生成・出版システム設計',
        thesisDetail:
          '関係グラフによる家系モデル、整合性チェック、ルールベースNLGによる略歴生成、SVG描画、8段階のWord/PDF書籍出力を実装。',
      },
    },
    contact: {
      heading: 'AI Applications Engineer として参画可能',
      body: 'ハノイを拠点に、ベトナム・日本・リモート環境で実用性とデータ保護を両立するAIプロダクト開発に貢献します。',
      primaryCta: 'メールを送る',
      secondaryCta: 'GitHubを見る',
      copyEmail: 'メールをコピー',
      copiedEmail: 'コピーしました',
    },
    footer: {
      credit: 'Nguyễn Quang Duy · Hanoi, Vietnam',
    },
  },
};

export const EMAIL_ADDRESS = 'quangduy15hp07@gmail.com';
export const GITHUB_URL = 'https://github.com/duynq15';
export const LANGSO_URL = 'https://langso.xaphuongvietnam.vn';
