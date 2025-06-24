"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const navData_json_1 = __importDefault(require("./navData.json"));
// 제네릭을 활용한 함수
function printNavItems(items) {
    console.log("📌 네비게이션 목록:");
    items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.label} -> ${item.path}`);
    });
}
// JSON 데이터를 타입에 맞게 사용
const typedNavData = navData_json_1.default;
printNavItems(typedNavData);
