브라우저에서 [https://next14-unsplash-git-main-sungjaechois-projects.vercel.app/](https://next14-unsplash-git-main-sungjaechois-projects.vercel.app/)을 열어 결과를 확인하세요.

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
  - 참고: 이미지가 로드되면 콘솔에 "Image loaded"를 로그로 남깁니다 (startLine: 200, endLine: 310)
