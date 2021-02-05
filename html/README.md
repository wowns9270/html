## HTML (Hypertext Markup Language)

```
 프로그래밍 언어는 아니고, 우리의 웹페이지가 어떻게 구조화되어 있는지 브라우저로 하여금 알 수 있다록 하는 마크업 언어.
```

#### Semantic Tag
```
시맨틱(Semantic)은 '의미의, 의미론적인' 이라는 뜻 의미를 가지는 태그이다.
```
> div,span 과 같은 non-semantic 요소들과 달리 HTML5에서는 코드의 가독성을 높이고 의미를 명확하게 해주는 장점이 있다. (자신의 컨텐츠를 명확하게 정의)

![image](https://user-images.githubusercontent.com/46587806/106999755-15b26680-67ca-11eb-9fe2-c23d93599e33.png)

#### Meta Tag
```
메타태그는 웹 페이지의 보이지 않는 정보를 제공하는데 쓰인다. 페이지에 대한 여러 정보를 제공할 수 있다.
```
> <meta charset='utf-8'> 은 인코딩 지정 방법이다. 이와 같이 viewport , keywords , desciption , author

> 많은 <meta> 기능들이 더이상 사용되지 않는다. 그 이유는 keywords 같이 관련성 부여를 위해 수백 개의 키워드를 채워버리는 악용사례가 생겨 버렸기 때문에 검색 엔진들이 아에 무시하게 되었다.

#### DOCTYPE
```
문서의 유형을 정의하기 위해 사용하는 선언문 

```
> 이전 버전의 html은 긴 문자열을 작성해야 했지만(SGML을 기반으로 DTD라는 것을 참조해 정확히 표현하도록 규칙을 명시), 
HTML5은 SGML 기반이 아니라 간단히 html라고 명시한다.

> 웹 브라우저가 HTML 페이지를 렌더링할 때 quirks mode(호환모드) , standards mode (표준모드) 가 있는데, 이 결정할 때 기술된 DOCTYPE을 참조한다. DOCTYPE을 기술하지 않으면 호환모드로 렌더링한다.

#### TAG [ BOX  VS  ITEM ] ver.1

> BOX TAG
header , section , footer , article , nav , div , aside , span , main , form

> ITEM TAG 
a , video , button , audio , input , map , label , canvas , img , table

#### TAG [ BLOCK  VS  INLINE ] ver.2

> BLOCK
div,

> INLINE 
span , input ,

