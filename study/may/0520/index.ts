import navData from './navData.json';

// 제네릭 타입 선언
type NavItem<T = string> = {
  label: T;
  path: T;
};

// 제네릭을 활용한 함수
function printNavItems<T>(items: NavItem<T>[]): void {
    // printNavItems return 값이 없다 = void가 있으니까
    // printNavItems는 매개인자로 items를 갖고 있으며 타입은 []이므로 array, 배열이다.
    // 그 배열 안에는 object(NavItem)가 들어가고 label과 path라는 key를 갖고 있는 변수로 string(=T)임
  console.log("📌 네비게이션 목록:");
  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item.label} -> ${item.path}`);
  });
}

// JSON 데이터를 타입에 맞게 사용
const typedNavData: NavItem[] = navData;

printNavItems(typedNavData);
