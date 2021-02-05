## callback
```
콜백함수는 다른 코드의 인자로 넘겨주는 함수
```

>콜백함수는 제어권과 관련이 깊다.

>어떤 함수 x 에게 x를 호출하면서 특정 조건일 때 y를 실행해달라고 하면 요청을 받은 x는 조건이 갖춰졌는지 스스로 판단하고 y를 직접 호출한다.

![image](https://user-images.githubusercontent.com/46587806/106426342-c5c16000-64a8-11eb-8640-7570daa54078.png)

> setInterval의 첫 인자는 익명함수 , 두번째는 300이라는 숫자
setInterval를 변수에 담은 이유는 종료(clearInterval)하기 위해