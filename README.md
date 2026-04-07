# 📝 Block Editor - Notion-Style Collaborative Editor

> **실시간 협업이 가능한 블록 기반 에디터**  
> Next.js 14, TypeScript로 구현한 Notion 클론 프로젝트

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://block-stack-client.vercel.app/)

## ✨ 주요 기능

### 🎯 핵심 기능
- ✅ **블록 기반 에디터** - Notion처럼 자유로운 콘텐츠 편집
- ✅ **Slash 커맨드** - `/` 입력으로 블록 타입 변경
- ✅ **Drag & Drop** - 마우스로 블록 순서 변경
- ✅ **자동 저장** - Debounced 저장으로 네트워크 효율화
- ✅ **Optimistic UI** - 즉각적인 사용자 경험

### 📦 블록 타입
- **텍스트** - 기본 텍스트 블록
- **제목** - H1, H2, H3 헤딩
- **리스트** - 불릿, 숫자, 체크박스
- **코드** - 코드 스니펫

### 🛠️ 기술적 특징
- **TypeScript** - 타입 안전성
- **Repository 패턴** - 데이터 소스 추상화 (Mock/LocalStorage)
- **Keyboard Shortcuts** - Enter, Backspace, Arrow Keys

## 🚀 빠른 시작

### 사전 요구사항
- Node.js 18+
- npm 또는 yarn

### 설치
```bash
# 1. 레포지토리 클론
git clone https://github.com/YOUR_USERNAME/block-editor.git
cd block-editor

# 2. 의존성 설치
npm install


# 4. 개발 서버 실행
npm run dev
# 5. http://localhost:3000 접속
```


## 🏗️ 프로젝트 구조
```
src/
├── app/                    # Next.js App Router
├── components/
│   └── editor/            # 에디터 컴포넌트
│       ├── BlockEditor.tsx
│       ├── Block.tsx
│       └── CommandMenu.tsx
├── hooks/
│   └── useBlockEditor.ts  # 블록 상태 관리
├── lib/
│   ├── repositories/      # 데이터 접근 레이어
│   └── mock/             # Mock 데이터
└── types/
    └── block.ts          # TypeScript 타입
```

## 🎨 기술 스택

### Frontend
- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 스타일링
- **@dnd-kit** - Drag & Drop

### DevOps
- **Vercel** - 배포 및 호스팅


## 🧪 테스트 시나리오

### 단일 사용자
1. 텍스트 입력 → 자동 저장
2. Enter → 새 블록 생성
3. Backspace → 빈 블록 삭제
4. `/` → 커맨드 메뉴
5. Drag & Drop → 순서 변경
