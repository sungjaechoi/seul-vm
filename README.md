브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

`app/page.tsx` 파일을 수정하여 페이지를 편집할 수 있습니다. 파일을 수정하면 페이지가 자동으로 업데이트됩니다.

## 프로젝트 구조

### 주요 컴포넌트

- **LikesProvider**: 좋아요 이미지를 관리하고 다른 컴포넌트에 컨텍스트를 제공합니다.

  - 파일: `src/app/_component/LikesProvider.tsx`
  - 함수:
    - `addLike`: 이미지를 좋아요 목록에 추가합니다.
    - `removeLike`: 이미지를 좋아요 목록에서 제거합니다.
    - `removeLikeOnly`: 이미지를 제거하지 않고 좋아요 상태를 해제합니다.
    - `addLikeOnly`: 이미지를 다시 추가하지 않고 좋아요 상태로 설정합니다.

- **MainPage**: 페이지의 주요 콘텐츠를 표시하며, 이미지 목록을 포함합니다.

  - 파일: `src/app/_component/MainPage.tsx`
  - Props:
    - `v`: 제목과 설명을 포함하는 객체.
    - `src`: 주요 이미지의 소스 URL.
    - `images`: 이미지 객체 배열.
    - `color`: 배경 색상.

- **TopUserInfo**: 사용자 프로필 정보를 표시합니다.
  - 파일: `src/app/userPage/[userName]/_component/TopUserInfo.tsx`

### 유틸리티 함수

- **getRandomImages**: Pixabay API에서 랜덤 이미지를 가져옵니다.

  - 파일: `src/app/_lib/getRandomImages.ts`
  - 사용법: `const images = await getRandomImages();`

- **getImages**: 특정 주제에 따라 Pixabay API에서 이미지를 가져옵니다.

  - 파일: `src/app/_lib/getImages.ts`
  - 사용법: `const images = await getImages(page, topic);`

- **getSearchResult**: Pixabay API에서 검색 결과를 가져옵니다.
  - 파일: `src/app/_lib/getSearchResult.ts`
  - 사용법: `const searchResult = await getSearchResult(page, searchKeyword);`
  - 참고: 검색 결과는 `searchData.results`를 통해 접근합니다 (startLine: 200, endLine: 310).

### 추가 컴포넌트

- **SkeletonImage**: 실제 이미지가 로드되는 동안 스켈레톤 이미지를 표시합니다.
  - 파일: `src/app/_component/SkeletonImage.tsx`
  - 참고: 이미지가 로드되면 콘솔에 "Image loaded"를 로그로 남깁니다 (startLine: 200, endLine: 310).

## 더 알아보기

Next.js에 대해 더 알아보려면 다음 리소스를 참고하세요:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js 기능과 API에 대해 알아보세요.
- [Learn Next.js](https://nextjs.org/learn) - 인터랙티브한 Next.js 튜토리얼입니다.

[Next.js GitHub repository](https://github.com/vercel/next.js/)도 확인해보세요 - 여러분의 피드백과 기여를 환영합니다!

## Vercel에 배포하기

Next.js 앱을 배포하는 가장 쉬운 방법은 Next.js의 제작자인 Vercel 플랫폼을 사용하는 것입니다. [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 통해 배포할 수 있습니다.

더 자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/deployment)를 참고하세요.
