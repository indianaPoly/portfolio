/**
 * **IProjectData** 인터페이스는 5가지 속성을 가짐.
 *  1. title : 프로젝트의 이름
 *  2. intro : 프로젝트의 설명
 *  3. skill : 프로젝트에 들어간 기술
 *  4. image : 프로젝트의 이미지
 *  5. codeLink : 프로젝트 코드 링크
 */
export interface IProjectData {
  title: string;
  intro: string;
  skill: string[];
  image: string;
  codeLink: string;
}

export type TextProp = {
  textValue: string;
};
