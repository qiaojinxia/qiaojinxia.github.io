Object.assign(window.search, {"doc_urls":["index.html#欢迎来到草帽boy的leetcode","index.html#微信号eismc_2-----","chapter_1.html#leetcode-第9题---回文数easy","chapter_1.html#编码实现思路","chapter_1.html#实现思路","chapter_1.html#反转一个整数","chapter_1.html#回文数字完整代码","chapter_1.html#提交结果"],"index":{"documentStore":{"docInfo":{"0":{"body":1,"breadcrumbs":1,"title":1},"1":{"body":1,"breadcrumbs":1,"title":1},"2":{"body":12,"breadcrumbs":3,"title":3},"3":{"body":8,"breadcrumbs":0,"title":0},"4":{"body":57,"breadcrumbs":0,"title":0},"5":{"body":41,"breadcrumbs":0,"title":0},"6":{"body":80,"breadcrumbs":0,"title":0},"7":{"body":2,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"本站记录一些本人使用Rust的刷题心得,大爷如果您觉得对您有用 ↓ 可以打赏哦! 微信打赏 :","breadcrumbs":"欢迎来到草帽Boy的Leetcode","id":"0","title":"欢迎来到草帽Boy的Leetcode"},"1":{"body":"ps : 代码可以在线运行调试哦!","breadcrumbs":"微信号:eismc_2 👌","id":"1","title":"微信号:eismc_2 👌"},"2":{"body":"题目:判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。 示例 1: 输入: 121\n输出: true 示例 2: 输入: -121\n输出: false\n解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。 示例 3: 输入: 10\n输出: false\n解释: 从右向左读, 为 01 。因此它不是一个回文数。","breadcrumbs":"Leetcode 第9题 - 回文数(easy)","id":"2","title":"Leetcode 第9题 - 回文数(easy)"},"3":{"body":"Leetocde模板代码: impl Solution { pub fn is_palindrome(x: i32) -> bool { }\n}","breadcrumbs":"编码实现思路","id":"3","title":"编码实现思路"},"4":{"body":"这里我们先要熟悉,一个基本操作 一个数数 取个位只需要取余( % 10) 101 % 10 = 1 如果要把每一位 取出来 就需要 循环 /10 %10 pub fn takenum(x: i32) { let mut tmp = x; while tmp >1 { print!(\"{} \",tmp%10); tmp = tmp /10; } println!(); } fn main() { takenum(543);\n} leetcode给定的是 一个 i32数字,我们的思路是这样的 把 一个数字 比如 123 -> 反转 成 321 如果判断反转后的数字,和原数字相等 那么 就是回文数字。 example : 121 -> tmp1 = 取个位1 * 10 = 10 tmp1 += 取十位2 * 10 = (tmp1 + 2) * 10 = (10 +2) * 10 =120 tmp1 += 取百位1 * 10 =(tmp1 + 1) * 10 = (120 +2) * 10 =1210 最后 tmp1 /10 = 121","breadcrumbs":"实现思路","id":"4","title":"实现思路"},"5":{"body":"example : 123 -> 321 121->121 pub fn reverse(x: i32) -> i32{ let mut tmp = x; let mut tmp1 = 0; while (tmp >= 1) { // 123 第一次 temp1 30 tmp 12 -> 第二次 320 1 -> 第三次 3210 0.1 小于1 跳出循环 这样就完成了颠倒数字 tmp1 = (tmp1 + tmp % 10 )* 10; tmp = tmp / 10; } tmp1 /10 } fn main() { println!(\"{}\",reverse(123));\n}","breadcrumbs":"反转一个整数","id":"5","title":"反转一个整数"},"6":{"body":"有了上面的反转,只需要判断下 反转后的代码是否与原文一致即可,但是下面代码 还对 某些特殊的数字 比如负数、能被10整除的数、0~10的数字 直接做出判断、做了一些特殊条件的处理。 [output.html.playpen]\neditable = true\npub fn is_palindrome(x: i32) -> bool { // [0,10)之间的数 都为 true if(x < 10 && x >=0){return true;} //如果 -开头的 和 100、1000 这样的直接排除 if(x < 0 || x % 10 ==0 ){ return false } let mut tmp = x; let mut tmp1 = 0; while (tmp >= 1) { //将数字颠倒 123 先取出 3* 10 在把tmp更新成 12 //这里加 if 是因为 如果是10位数 最后一次个位数再乘以10 -> 11位数 就超出 i32 的最大值了 就会报错! if tmp < 10 { tmp1 = (tmp1 + tmp % 10 )} else{ // 123 第一次 temp1 30 tmp 12 -> 第二次 320 1 -> 第三次 3210 0.1 小于1 跳出循环 这样就完成了颠倒数字 tmp1 = (tmp1 + tmp % 10 )* 10; } tmp = tmp / 10; } //123 -> 321 不相等 121 -> 121 相等 if tmp1 == x { return true; } return false;\n} //测试代码\nfn main() { println!(\"{}\",is_palindrome(123)); println!(\"{}\",is_palindrome(121)); println!(\"{}\",is_palindrome(1000000001)); }","breadcrumbs":"回文数字完整代码","id":"6","title":"回文数字完整代码"},"7":{"body":"image-20200623143110412","breadcrumbs":"提交结果：","id":"7","title":"提交结果："}},"length":8,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{")":{"df":0,"docs":{},"{":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}}},",":{"1":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},".":{"1":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"1":{"df":1,"docs":{"2":{"tf":1.0}}},"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.7320508075688772}}},"1":{"0":{"0":{"df":0,"docs":{},"、":{"1":{"0":{"0":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"1":{"df":1,"docs":{"4":{"tf":1.0}}},"df":4,"docs":{"2":{"tf":1.0},"4":{"tf":3.872983346207417},"5":{"tf":2.0},"6":{"tf":3.1622776601683795}},"整":{"df":0,"docs":{},"除":{"df":0,"docs":{},"的":{"df":0,"docs":{},"数":{"df":0,"docs":{},"、":{"0":{"df":0,"docs":{},"~":{"1":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"1":{"df":1,"docs":{"6":{"tf":1.0}}},"2":{"0":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"1":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":4,"docs":{"2":{"tf":2.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}},"3":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.7320508075688772}}},"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}},"df":4,"docs":{"2":{"tf":1.0},"4":{"tf":2.23606797749979},"5":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772}}},"2":{"0":{"2":{"0":{"0":{"6":{"2":{"3":{"1":{"4":{"3":{"1":{"1":{"0":{"4":{"1":{"2":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":2.0}}},"3":{"0":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"2":{"0":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"1":{"0":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.0}}},"9":{"df":1,"docs":{"2":{"tf":1.0}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.0}}}},"y":{"df":0,"docs":{},"的":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"c":{"_":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"n":{"df":4,"docs":{"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}},"i":{"3":{"2":{"df":4,"docs":{"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"(":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"_":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"x":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"c":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"df":0,"docs":{},"{":{"df":0,"docs":{},"}":{"\"":{",":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"(":{"1":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"3":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"(":{"1":{"2":{"3":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"s":{"df":1,"docs":{"1":{"tf":1.0}}},"u":{"b":{"df":4,"docs":{"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"x":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"(":{"5":{"4":{"3":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"x":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"1":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"p":{"%":{"1":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{"df":3,"docs":{"4":{"tf":2.449489742783178},"5":{"tf":2.0},"6":{"tf":2.449489742783178}}},"df":3,"docs":{"4":{"tf":2.0},"5":{"tf":2.449489742783178},"6":{"tf":3.0}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":2.0}}}}}},"x":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":2.0}}}}},"breadcrumbs":{"root":{"0":{")":{"df":0,"docs":{},"{":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}}},",":{"1":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},".":{"1":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"1":{"df":1,"docs":{"2":{"tf":1.0}}},"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.7320508075688772}}},"1":{"0":{"0":{"df":0,"docs":{},"、":{"1":{"0":{"0":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"1":{"df":1,"docs":{"4":{"tf":1.0}}},"df":4,"docs":{"2":{"tf":1.0},"4":{"tf":3.872983346207417},"5":{"tf":2.0},"6":{"tf":3.1622776601683795}},"整":{"df":0,"docs":{},"除":{"df":0,"docs":{},"的":{"df":0,"docs":{},"数":{"df":0,"docs":{},"、":{"0":{"df":0,"docs":{},"~":{"1":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"1":{"df":1,"docs":{"6":{"tf":1.0}}},"2":{"0":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"1":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":4,"docs":{"2":{"tf":2.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}},"3":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.7320508075688772}}},"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}},"df":4,"docs":{"2":{"tf":1.0},"4":{"tf":2.23606797749979},"5":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772}}},"2":{"0":{"2":{"0":{"0":{"6":{"2":{"3":{"1":{"4":{"3":{"1":{"1":{"0":{"4":{"1":{"2":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":2.0}}},"3":{"0":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"2":{"0":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"1":{"0":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.0}}},"9":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.0}}}},"y":{"df":0,"docs":{},"的":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"c":{"_":{"2":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"n":{"df":4,"docs":{"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}},"i":{"3":{"2":{"df":4,"docs":{"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"(":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"_":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"x":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"c":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"df":0,"docs":{},"{":{"df":0,"docs":{},"}":{"\"":{",":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"(":{"1":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"3":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"(":{"1":{"2":{"3":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"s":{"df":1,"docs":{"1":{"tf":1.0}}},"u":{"b":{"df":4,"docs":{"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"x":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"(":{"5":{"4":{"3":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"x":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"1":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"p":{"%":{"1":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{"df":3,"docs":{"4":{"tf":2.449489742783178},"5":{"tf":2.0},"6":{"tf":2.449489742783178}}},"df":3,"docs":{"4":{"tf":2.0},"5":{"tf":2.449489742783178},"6":{"tf":3.0}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":2.0}}}}}},"x":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":2.0}}}}},"title":{"root":{"9":{"df":1,"docs":{"2":{"tf":1.0}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":0,"docs":{},"的":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"c":{"_":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});