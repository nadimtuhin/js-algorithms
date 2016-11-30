#!/usr/bin/env bash

STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep ".jsx\{0,1\}$")

if [[ "$STAGED_FILES" = "" ]]; then
  exit 0
fi

PASS=true

echo "Running ESLint validation:"
echo ""

for FILE in ${STAGED_FILES}
do
  `yarn bin`/eslint "$FILE"

  if [[ "$?" == 0 ]]; then
    echo "ESLint validation passed!: $FILE"
    echo ""
  else
    echo "Validation failed --> $FILE"
    echo ""
    PASS=false
  fi
done

echo "Check completed!"
echo ""

if ! ${PASS}; then
  echo "COMMIT FAILED: YOU SHALL NOT PASS!!"
  echo ""
  echo "Please fix ESLint error[s] and retry!"
  echo ""
  exit 1
else
  echo "COMMIT SUCCEEDED"
  echo ""
fi

exit $?
