// let message: string = "Hello, TypeScript!";
// console.log(message);
mySchedule1("리액트 공부", "쿠우쿠우");
function mySchedule1(today, tomorrow) {
    console.log("\uC624\uB298\uC740 ".concat(today, "\uC744/\uB97C \uD569\uB2C8\uB2E4. + \uB0B4\uC77C\uC740 ").concat(tomorrow, "\uC744/\uB97C \uAC11\uB2C8\uB2E4."));
}
var mySchedule2 = function (today, tomorrow) {
    console.log("\uC624\uB298\uC740 ".concat(today, "\uC744/\uB97C \uD569\uB2C8\uB2E4. + \uB0B4\uC77C\uC740 ").concat(tomorrow, "\uC744/\uB97C \uAC11\uB2C8\uB2E4."));
};
mySchedule2("리액트 공부", "쿠우쿠우");
var result = function (_a) {
    var x = _a.x, y = _a.y, _b = _a.count, count = _b === void 0 ? 0 : _b;
    var ifCase = count !== undefined ? count + "개" : null;
    console.log("".concat(x, "\uC740 ").concat(y, "\uB97C ").concat(ifCase, " \uC0AC\uAC00\uC57C \uD569\uB2C8\uB2E4."));
};
function gugudan(start, end) {
    for (var i = start; i < end; i++) {
        for (var j = 2; j < 10; j++) {
            console.log("".concat(i, " * ").concat(j, "= ").concat(i * j, "\t"));
        }
        console.log('-----------------');
    }
}
gugudan(2, 5);
