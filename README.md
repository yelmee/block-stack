# block-stack
블록 기반 에디터 구조와 실시간 저장 흐름을 직접 구현한 토이 프로젝트입니다.

## 💡 Motivation

- 협업 편집기 구조 학습
- operation 기반 저장 방식 이해 및 설계
- Supabase, IndexedDB 기반 실시간 UX 구현 연습

---

## 📐 Features

- Block 단위 편집 구조
- Supabase + RPC + IndexedDB 기반 저장
- 실시간 Operation 구조 반영
- TypeScript + Next.js
- Clean-Architecture 구현

---

## 🗂️ Folder Structure

packages/
├── adapter/           // Supabase RPC, Auth + IndexedDB Repository
├── domain/          // Operation, User Entity + UseCase
├── client/            // Next.js Client + Di 

---

## 🔗 Technologies

| 기술 | 설명 |
| --- | --- |
| IndexedDB | 오프라인 시 데이터 유지 |
| Supabase | PostgreSQL + RLS + RPC 기반 |
| Next.js | 서버, 클라이언트 환경 분리 |

---

## 🔧 운영 흐름

### 💾 저장 로직

- 변경 → `needUpdateBlockList` → Supabase RPC 호출
- `expectedVersion`, `set`, `update` operation 분리 처리

### 📦 데이터 구조

```json
{
  "operations": [
    {
      "pointer": { "table": "block", "id": "..." },
      "command": "set",
      "path": ["properties", "title"],
      "args": [["new text"]]
    },
    {
      "command": "update",
      "args": { "last_edited_time": ..., ... }
    }
  ]
}
```
