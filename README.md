``` typescript

src/
├── components/
│   ├── home/
│   │   components/
│       │   ├── ProfileHeader.tsx
│       │   ├── AboutSection.tsx
│       │   ├── PostList.tsx
│       │   └── PostItem.tsx
│   │   ├── hooks/
│   │   ├── service.ts
│   │   └── types.ts (import dari global bisa juga)
│   project/
│       ├── components/
│       │   └── ProjectsPage.tsx
│       ├── service.ts
│       └── types.ts
│   ├── blog/
│   │   ├── components/
│   │   │   ├── BlogList.tsx
│   │   │   └── BlogCard.tsx
│   │   ├── service.ts
│   │   └── types.ts
│   ├── about/
        ├── components/
        │   ├── AvatarSection.tsx
        │   ├── InfoSection.tsx
        │   ├── SkillsSection.tsx
        │   ├── ExperienceSection.tsx
        │   ├── EducationSection.tsx
        │   └── CertificatesSection.tsx
        ├── hooks/
        │   └── useAboutData.ts (optional kalau fetch API)
        ├── service.ts
        ├── types.ts
├── app/
│   ├── page.tsx
│   ├── blog/
│       └── page.tsx
│   └── projects/
│       └── page.tsx
│   └── about/
│       └── page.tsx
├── components/ # button, input, layout global
└── types/

```