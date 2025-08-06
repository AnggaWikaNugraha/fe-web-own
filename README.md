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
│   ├── post/
│   ├── blog/
│   │   ├── components/
│   │   │   ├── BlogList.tsx
│   │   │   └── BlogCard.tsx
│   │   ├── service.ts
│   │   └── types.ts
├── app/
│   ├── page.tsx
│   ├── blog/
│       └── page.tsx
│   ├── post/
│   └── projects/
├── components/ # button, input, layout global
└── types/

```