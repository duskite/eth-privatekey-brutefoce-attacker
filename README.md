# eth-privatekey-brutefoce-attacker
Generate a random private key, convert it to an address, and verify that there is a balance at that address


1. 랜덤 프라이빗키 생성
2. 프라이빗키 -> 공개키 -> eth 지갑 주소로 변환
3. eth 지갑 주소에 잔고 확인
4. 기본적으로 모든 탐색에 대해 history.txt 남김. 잔고가 0이 아닌 것들은 success.txt에 남김


https://www.infura.io/ 에서 eth api키 발급 받고, checkBalance.js에 api키 입력.
실행은 node index.js
