# chmod +x ./scripts/update-coverage-badge.sh

#!/bin/bash

# 커밋 ID 가져오기
COMMIT_ID=$(./scripts/get-commit-id.sh)

# SVG 파일 읽어오기
SVG_CONTENT=`cat ./coverage/badge-branches.svg`

# 시작 부분에 마지막 커밋 ID가 있는 주석 추가
SVG_CONTENT="<!-- Last commit id: $COMMIT_ID -->"$'\n'"$SVG_CONTENT"

# SVG_CONTENT를 SVG 파일에 다시 저장합니다
echo "$SVG_CONTENT" > ./coverage/badge-branches.svg

# SVG 파일을 assets 폴더에 복사합니다
cp ./coverage/badge-branches.svg ./assets/badge-branches.svg