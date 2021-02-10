### :factory: 웹팩

- 문법 수준에서 모듈을 지원하기 시작한 것은 2015부터이다. (import , export)

- 이 이전 상황이 웹팩 등장 배경을 설명할 수 있다.

- 하나의 html 파일에 두 자바스크립트 파일을 로딩하면, 다른곳에 위치한 함수를 이름공간에서 찾아서 실행한다.

### ![image](https://user-images.githubusercontent.com/46587806/107478309-9901fc80-6bbc-11eb-8912-8330c42b5b98.png) index.html

---

### ![image](https://user-images.githubusercontent.com/46587806/107478415-c6e74100-6bbc-11eb-8d11-f4697089f599.png) main.js

---

### ![image](https://user-images.githubusercontent.com/46587806/107478561-044bce80-6bbd-11eb-8325-f0a7b67feda9.png) app.js

---

### ![image](https://user-images.githubusercontent.com/46587806/107478872-8c31d880-6bbd-11eb-886b-4c5ecd0ecb34.png) local-console

---

- 이런 실행의 문제점은 sum이라는 함수가 전역 공간에 노출되고 충돌문제가 발생하게 된다.

- IIFE 방식의 스코프를 이용한 묘듈 방식이 있지만 commonjs의 exports 와 require을 이용해서 모듈을 만들고 또 그것을 불러서 사용한다.

- 여러 모듈이 사용되다가 ES2015에서 표준 모듈 시스템을 내놓았고, 지금은 바벨과 웹팩을 이용해 모듈 시스템을 사용한다.

- 모듈을 사용할 때 script type="module" src="app.js" 하면 app.js는 모듈을 사용할 수 있다.

- 문제는 이 모듈을 모든 브라우저에서 지원하지 않고, 우리는 브라우져에 무관하게 모듈을 사용하고 싶은 니즈에서 웹팩이 등장했다.
